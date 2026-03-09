import { Container } from "../base/Container";
import { Image } from "../base/Image";
import { Input } from "../base/Input";
import { Text } from "../base/Text";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Input01({ data = {} }: GeneratedPageProps) {
  return (
    <Input>
      <Container className="bg-[#fefefe]" />
      <Container className="bg-[#fefefe] rounded-[4px]">
        <Text value={String(data?.["baseText"] ?? "Base备份")} />
      </Container>
    </Input>
  );
}
