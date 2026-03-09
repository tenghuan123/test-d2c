import { List } from "../base/List";
import { Composed16711Card01 } from "./Composed16711Card01";
import { Composed16711Card02 } from "./Composed16711Card02";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711List01({ data = {} }: GeneratedPageProps) {
  return (
    <List
      className="flex flex-col gap-3 h-[148px] items-start justify-start rounded-[8px] w-[474px]"
      style={{ maxWidth: "100%", padding: "20px 20px 20px 20px" }}
    >
      <Composed16711Card02 data={data} />
      <Composed16711Card01 data={data} />
    </List>
  );
}
