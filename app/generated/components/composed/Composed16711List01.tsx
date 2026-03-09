import { List } from "../base/List";
import { Composed16711Container01 } from "./Composed16711Container01";
import { Composed16711Container04 } from "./Composed16711Container04";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711List01({ data = {} }: GeneratedPageProps) {
  return (
    <List
      className="flex flex-col gap-3 h-[148px] items-start justify-start rounded-[8px] w-[474px]"
      style={{ maxWidth: "100%", padding: "20px 20px 20px 20px" }}
    >
      <Composed16711Container04 data={data} />
      <Composed16711Container01 data={data} />
    </List>
  );
}
