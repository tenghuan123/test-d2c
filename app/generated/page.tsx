import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Container } from "./components/Container";
import { Image } from "./components/Image";
import { List } from "./components/List";

const roleComponentMap: Record<string, any> = {
  Button,
  Card,
  Container,
  Image,
  List,
};

const modules = [
  {
    "key": "1671-1",
    "role": "Container",
    "title": "容器 1671"
  }
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {modules.map((item) => {
        const Comp = roleComponentMap[item.role] || Container;
        return (
          <Comp key={item.key} className="mb-4 p-2">
            {item.title}
          </Comp>
        );
      })}
    </main>
  );
}
