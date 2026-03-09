import { Container } from "../base/Container";
import { Image } from "../base/Image";
import { Text } from "../base/Text";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function ComposedComponentContainereyJyb2xlIjoi183297({
  data = {},
}: GeneratedPageProps) {
  return (
    <Container
      className="flex flex-row gap-3 h-[22px] items-center justify-start w-[269px]"
      style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
    >
      <Text
        className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
        value={String(data?.["id-098675Text"] ?? "ID：098675")}
      />
      <Container className="bg-[#cccccc]" />
      <Text
        className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
        value={String(data?.["nodeText"] ?? "类型：C4D工程")}
      />
    </Container>
  );
}
