import { List } from "../base/List";
import { Composed16711Container01 } from "./Composed16711Container01";
import { Composed16711Container04 } from "./Composed16711Container04";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711List01({ data = {} }: GeneratedPageProps) {
  return (
    <List className="flex flex-col gap-[12px] h-[148px] items-start justify-start max-w-full p-[20px] rounded-[8px] w-[474px]">
      <Composed16711Container04 data={data} />
      <Composed16711Container01 data={data} />
    </List>
  );
}
