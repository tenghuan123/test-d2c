import { Container } from "../base/Container";
import { Image } from "../base/Image";
import { ComposedComponentContainereyJyb2xlIjoi183296 } from "./ComposedComponentContainereyJyb2xlIjoi183296";

type GeneratedPageProps = { data?: Record<string, unknown> };

export function ComposedComponentContainereyJyb2xlIjoi183295({
  data = {},
}: GeneratedPageProps) {
  return (
    <Container
      className="flex flex-row gap-3 h-[66px] items-center justify-start w-[398px]"
      style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
    >
      <Image
        className="rounded-[4px]"
        src={String(data?.["406Src"] ?? "/assets/image/image_4.png")}
        alt="矩形 406"
      />
      <ComposedComponentContainereyJyb2xlIjoi183296 data={data} />
    </Container>
  );
}
