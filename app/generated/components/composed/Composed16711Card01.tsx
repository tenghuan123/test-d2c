import { Card } from "../base/Card";
import { Text } from "../base/Text";
import { Composed16711Container01 } from "./Composed16711Container01";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Card01({ data = {} }: GeneratedPageProps) {
  return (
    <Card
      className="flex flex-row gap-4 h-[30px] items-center justify-start w-[434px]"
      style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
    >
      <Text
        className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
        value={String(data?.["nodeText"] ?? "企业授权")}
      />
      <Composed16711Container01 data={data} />
    </Card>
  );
}
