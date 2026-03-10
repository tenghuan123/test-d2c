import { Container } from "../base/Container";
import { Text } from "../base/Text";
import { Composed16711Container02 } from "./Composed16711Container02";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Container01({ data = {} }: GeneratedPageProps) {
  return (
    <Container className="flex flex-row gap-[16px] h-[30px] items-center justify-start max-w-full p-[0px] w-[434px]">
      <Text
        className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
        value={String(data?.["nodeText"] ?? "企业授权")}
      />
      <Composed16711Container02 data={data} />
    </Container>
  );
}
