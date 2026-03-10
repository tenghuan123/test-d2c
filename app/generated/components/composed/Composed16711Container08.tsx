import { Container } from "../base/Container";
import { Image } from "../base/Image";
import { Text } from "../base/Text";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Container08({ data = {} }: GeneratedPageProps) {
  return (
    <Container className="flex flex-row gap-[12px] h-[22px] items-center justify-start max-w-full p-[0px] w-[269px]">
      <Text
        className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
        value={String(data?.["id-098675Text"] ?? "ID：098675")}
      />
      <Container className="bg-[#cccccc]" />
      <Text
        className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
        value={String(data?.["nodeText"] ?? "类型：视频素材")}
      />
    </Container>
  );
}
