import { Card } from "../base/Card";
import { Composed16711Container03 } from "./Composed16711Container03";
import { Composed16711Input01 } from "./Composed16711Input01";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Card02({ data = {} }: GeneratedPageProps) {
  return (
    <Card
      className="flex flex-row gap-4 h-[66px] items-center justify-start w-[434px]"
      style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
    >
      <Composed16711Input01 data={data} />
      <Composed16711Container03 data={data} />
    </Card>
  );
}
