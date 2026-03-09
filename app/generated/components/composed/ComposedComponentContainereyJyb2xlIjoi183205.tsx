import { Container } from "../base/Container";
import { Image } from "../base/Image";
import { Text } from "../base/Text";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function ComposedComponentContainereyJyb2xlIjoi183205({
  data = {},
}: GeneratedPageProps) {
  return (
    <Container>
      <Container className="bg-[#fefefe]" />
      <Container className="bg-[#fefefe] rounded-[4px]">
        <Text value={String(data?.["baseText"] ?? "Base备份")} />
      </Container>
    </Container>
  );
}
