import { Container } from "../base/Container";
import { Composed16711Container05 } from "./Composed16711Container05";
import { Composed16711Input01 } from "./Composed16711Input01";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Container04({ data = {} }: GeneratedPageProps) {
  return (
    <Container
      className="flex flex-row gap-4 h-[66px] items-center justify-start w-[434px]"
      style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
    >
      <Composed16711Input01 data={data} />
      <Composed16711Container05 data={data} />
    </Container>
  );
}
