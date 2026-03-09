import { Container } from "../base/Container";
import { Image } from "../base/Image";
import { Text } from "../base/Text";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function ComposedComponentContainereyJyb2xlIjoi183294({
  data = {},
}: GeneratedPageProps) {
  return (
    <Container>
      <Container className="bg-[#fefefe]" />
      <Container className="bg-[#338de9] rounded-[4px]">
        <Text value={String(data?.["baseText"] ?? "Base")} />
      </Container>
      <Container>
        <Text value={String(data?.["nodeText"] ?? "路径")} />
      </Container>
    </Container>
  );
}
