import { Container } from "../base/Container";
import { Image } from "../base/Image";
import { Composed16711Container06 } from "./Composed16711Container06";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function Composed16711Container05({ data = {} }: GeneratedPageProps) {
  return (
    <Container className="flex flex-row gap-[12px] h-[66px] items-center justify-start max-w-full p-[0px] w-[398px]">
      <Image
        className="rounded-[4px]"
        src={String(data?.["406Src"] ?? "/assets/image/image_4.png")}
        alt="矩形 406"
      />
      <Composed16711Container06 data={data} />
    </Container>
  );
}
