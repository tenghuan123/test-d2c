import { Container } from "../base/Container";
import { Text } from "../base/Text";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Container03({ data = {} }: GeneratedPageProps) {
  return (
    <Container className="flex flex-col gap-[0px] h-[16px] items-start justify-start max-w-full p-[2px_0px_0px_0px] w-[14px]">
      <Text
        className="font-[system-ui] leading-[1] text-[#0d0d0d] text-[14px] tracking-[0px] whitespace-nowrap"
        value={String(data?.["nodeText"] ?? "元")}
      />
    </Container>
  );
}
