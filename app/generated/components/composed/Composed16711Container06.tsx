import { Container } from "../base/Container";
import { Text } from "../base/Text";
import { Composed16711Container07 } from "./Composed16711Container07";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Container06({ data = {} }: GeneratedPageProps) {
  return (
    <Container
      className="flex flex-col gap-3 h-[58px] items-start justify-start w-[269px]"
      style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
    >
      <Text
        className="font-[system-ui] leading-[24px] text-[#0d0d0d] text-[16px] tracking-[0px] whitespace-nowrap"
        value={String(
          data?.["2023-ediusText"] ?? "2023拜年EDIUS系列-模板可编辑修",
        )}
      />
      <Composed16711Container07 data={data} />
    </Container>
  );
}
