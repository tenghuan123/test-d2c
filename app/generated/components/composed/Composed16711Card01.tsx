import { Card } from "../base/Card";
import { Container } from "../base/Container";
import { Image } from "../base/Image";
import { Text } from "../base/Text";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Card01({ data = {} }: GeneratedPageProps) {
  return (
    <Card className="flex flex-col gap-[16px] h-[43px] items-start justify-start max-w-full p-[0px] w-[54px]">
      <Container className="flex flex-row gap-[4px] h-[24px] items-start justify-start max-w-full p-[0px_4px_0px_4px] w-[54px]">
        <Text
          className="font-[system-ui] leading-[24px] text-[#0d0d0d] text-[16px] tracking-[0px] whitespace-nowrap"
          value={String(data?.["nodeText"] ?? "视频")}
        />
        <Text
          className="font-[system-ui] leading-[24px] text-[#0d0d0d] text-[16px] tracking-[0px] whitespace-nowrap"
          value={String(data?.["2Text"] ?? "6")}
        />
      </Container>
      <Container className="bg-[#0d0d0d] rounded-[4px]" />
    </Card>
  );
}
