import { Container } from "../base/Container";
import { Composed16711Container05 } from "./Composed16711Container05";
import { Composed16711Input01 } from "./Composed16711Input01";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Container04({ data = {} }: GeneratedPageProps) {
  return (
    <Container className="flex flex-row gap-[16px] h-[66px] items-center justify-start max-w-full p-[0px] w-[434px]">
      <Composed16711Input01 data={data} />
      <Composed16711Container05 data={data} />
    </Container>
  );
}
