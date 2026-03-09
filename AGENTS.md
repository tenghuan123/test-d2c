# AGENTS.md - Developer Guidelines for test-d2c

## Overview

This is a React Router v7 application with DSL (Domain Specific Language) processing pipelines. The project converts design data (from MasterGo and Drawer) into canonical format, validates it, and generates React components.

## Project Structure

```
test-d2c/
├── app/                    # React Router application
│   ├── routes/             # Route components
│   ├── generated/          # Auto-generated components
│   ├── dsl/               # DSL utilities
│   └── root.tsx           # App root
├── scripts/dsl/            # DSL processing scripts (.mjs)
├── tests/                  # Test files (.test.mjs)
├── dsl/                    # Design system definitions
├── dsl-contract/v1/        # JSON schema contracts
└── package.json
```

## Build, Lint, and Test Commands

### Application Commands

```bash
npm run dev          # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run typecheck   # Run TypeScript type checking
```

### DSL Pipeline Commands

```bash
npm run dsl:build       # Build DSL from source
npm run dsl:validate    # Validate DSL against schema
npm run dsl:impact      # Compute impact analysis (--changed=token:color.primary,...)
npm run dsl:diff        # Diff DSL snapshots
npm run dsl:tailwind    # Convert to Tailwind classes
npm run dsl:semantic    # Run semantic inference
npm run dsl:codegen    # Generate React components
npm run dsl:pipeline    # Run full pipeline (build → validate → semantic → codegen)
```

### Testing Commands

```bash
# Run all tests
npm test

# Run a single test file
node --test tests/input-adapter.test.mjs

# Run a single test
node --test tests/input-adapter.test.mjs -g "mastergo 输入保持透传"
```

The test framework uses Node.js built-in `node:test` with `node:assert/strict`.

## Code Style Guidelines

### General Conventions

- **ES Modules**: Use ESM (`.mjs` extension for scripts, `.tsx` for React components)
- **No comments**: Do not add comments unless explicitly requested
- **Strict mode**: TypeScript `strict: true` is enabled

### File Naming

- Scripts: `kebab-case.mjs`
- Tests: `name.test.mjs`
- React components: `PascalCase.tsx`
- Routes: `kebab-case.tsx`

### Imports

```typescript
// Node.js built-ins
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// React
import type { ReactNode } from "react";
import { useState } from "react";

// App imports (using ~/* path alias)
import { SomeModule } from "~/components/some-module";
```

### TypeScript Guidelines

- Enable strict TypeScript: `"strict": true` in tsconfig.json
- Use explicit types for function parameters and return types
- Use `type` for simple type aliases, `interface` for object shapes
- Prefer explicit return types for exported functions

```typescript
// Good
type ButtonProps = { children?: ReactNode; className?: string };

export function Button({ children, className = "" }: ButtonProps) {
  return <button className={className}>{children}</button>;
}

// Good - exported function with explicit return type
export function computeImpact(changed: string[], graph: Graph): ImpactResult {
  // ...
}
```

### Naming Conventions

- **Variables/functions**: `camelCase` (e.g., `normalizeDslInput`, `computeImpact`)
- **Components/Classes**: `PascalCase` (e.g., `Button`, `HomePage`)
- **Constants**: `UPPER_SNAKE_CASE` for true constants, otherwise `camelCase`
- **Files**: `kebab-case` for scripts, `PascalCase` for components

### Error Handling

- Use descriptive error messages with context
- Throw errors with `new Error('context: message')`
- Validate inputs early with explicit checks
- Use error codes for validation (e.g., `E_FILE_MISSING`, `E_TOKEN_REF_NOT_FOUND`)

```javascript
if (!isDrawerInput(input)) {
  throw new Error(`unsupported dsl input format: ${sourcePath}`);
}
```

### DSL Script Patterns

Scripts in `scripts/dsl/` follow a pattern:

```javascript
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.cwd();

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

// Export functions for testing
export function someFunction(input: string): Output {
  // implementation
}

// CLI entry point pattern
function run() {
  // CLI logic here
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) run();
```

### Testing Patterns

Use Node.js built-in test framework:

```javascript
import test from "node:test";
import assert from "node:assert/strict";
import { someFunction } from "../scripts/dsl/some-module.mjs";

test("test description", () => {
  const result = someFunction("input");
  assert.equal(result, expected);
});

test("another test", () => {
  assert.deepEqual(actual, expected);
});
```

### React Component Patterns

Generated components follow a simple pattern:

```typescript
import type { ReactNode } from "react";

type ComponentProps = { children?: ReactNode; className?: string };

export function Component({ children, className = "" }: ComponentProps) {
  return <div className={className}>{children}</div>;
}
```

Route components use React Router conventions:

```typescript
import type { Route } from "./+types/route-name";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Page Title" }];
}

export default function RouteName() {
  return <SomeComponent />;
}
```

### JSON Schema Validation

The project uses AJV for JSON schema validation:

```javascript
import Ajv2020 from "ajv/dist/2020.js";

const ajv = new Ajv2020({ allErrors: true, strict: false });
const validator = ajv.compile(schema);
const ok = validator(data);
if (!ok) {
  console.log(validator.errors);
}
```

## Key Technologies

- **React Router v7**: Full-stack React framework
- **Tailwind CSS v4**: Utility-first CSS (via @tailwindcss/vite)
- **TypeScript**: Strict type checking
- **Node.js built-in test**: Testing framework
- **AJV**: JSON Schema validation
- **DSL pipeline**: Custom design-to-code pipeline

## Development Workflow

1. Make changes to DSL files in `dsl/` or code in `scripts/dsl/`
2. Validate: `npm run dsl:validate`
3. Run tests: `npm test`
4. Typecheck: `npm run typecheck`
5. Full pipeline: `npm run dsl:pipeline`

## Important Paths

- DSL definitions: `dsl/definitions/components/`
- DSL instances: `dsl/instances/pages/`, `dsl/instances/modules/`
- Schema contracts: `dsl-contract/v1/schema.json`
- Generated components: `app/generated/components/`
