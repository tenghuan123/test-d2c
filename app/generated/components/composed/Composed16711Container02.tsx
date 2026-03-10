import { Container } from "../base/Container";
import { Text } from "../base/Text";
import { Composed16711Container03 } from "./Composed16711Container03";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Container02({ data = {} }: GeneratedPageProps) {
  return (
    <Container className="flex flex-row gap-[2px] h-[30px] items-center justify-start max-w-full p-[0px] w-[49px]">
      <Text
        className="font-[system-ui] leading-[30px] text-[#0d0d0d] text-[20px] tracking-[0px] whitespace-nowrap"
        value={String(data?.["30Text"] ?? "130")}
      />
      <Composed16711Container03 data={data} />
    </Container>
  );
}
