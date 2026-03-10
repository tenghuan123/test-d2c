import { Button } from "./components/base/Button";
import { Container } from "./components/base/Container";
import { Icon } from "./components/base/Icon";
import { Image } from "./components/base/Image";
import { List } from "./components/base/List";
import { Section } from "./components/base/Section";
import { Text } from "./components/base/Text";
import { Composed16711Card01 } from "./components/composed/Composed16711Card01";
import { Composed16711Input01 } from "./components/composed/Composed16711Input01";
import { Composed16711List01 } from "./components/composed/Composed16711List01";

export type GeneratedPageProps = { data?: Record<string, unknown> };

export default function Page({ data = {} }: GeneratedPageProps) {
  return (
    <main className="min-h-screen">
      <Container>
        <Container>
          <Container className="flex flex-row gap-[24px] h-[72px] items-center justify-start max-w-full p-[36px_40px_0px_40px] w-[514px]">
            <Text
              className="font-[system-ui] leading-[36px] text-[#0d0d0d] text-[24px] tracking-[0px] whitespace-nowrap"
              value={String(data?.["nodeText"] ?? "购物车")}
            />
            <Icon>
              <Container className="bg-[#fefefe]" />
              <Icon className="bg-[#0d0d0d]">
                <Container>
                  <Text value={String(data?.["nodeText"] ?? "路径")} />
                </Container>
                <Container>
                  <Text value={String(data?.["nodeText"] ?? "路径")} />
                </Container>
              </Icon>
            </Icon>
          </Container>
          <Container className="flex flex-col gap-[20px] h-[951px] items-center justify-start max-w-full p-[0px_20px_0px_20px] w-[514px]">
            <Container className="flex flex-col gap-[0px] h-[43px] items-start justify-start max-w-full p-[0px_20px_0px_20px] w-[474px]">
              <Section className="flex flex-col gap-[0px] h-[43px] items-start justify-center max-w-full p-[0px] w-[434px]">
                <List className="flex flex-row gap-[40px] h-[43px] items-start justify-start max-w-full p-[0px] w-[242px]">
                  <Composed16711Card01 data={data} />
                  <Composed16711Card01 data={data} />
                  <Composed16711Card01 data={data} />
                </List>
                <Container className="bg-[#ededed] rounded-[0.5px]" />
              </Section>
            </Container>
            <Container className="flex flex-col gap-[0px] h-[888px] items-start justify-start max-w-full p-[0px] w-[474px]">
              <Composed16711List01 data={data} />
              <Composed16711List01 data={data} />
              <Composed16711List01 data={data} />
              <Composed16711List01 data={data} />
              <Composed16711List01 data={data} />
              <Composed16711List01 data={data} />
            </Container>
          </Container>
        </Container>
        <Container>
          <Container className="bg-[#f0f0f0] rounded-[0.5px]" />
          <Button className="bg-[#fefefe] flex flex-col gap-[16px] h-[170px] items-start justify-start max-w-full p-[28px_40px_28px_40px] w-[514px]">
            <Container className="flex flex-row gap-[40px] h-[42px] items-center justify-start max-w-full p-[0px] w-[434px]">
              <Container className="flex flex-row gap-[12px] h-[22px] items-start justify-start max-w-full p-[0px] w-[56px]">
                <Container className="flex flex-row gap-[8px] h-[22px] items-center justify-start max-w-full p-[0px] w-[56px]">
                  <Composed16711Input01 data={data} />
                  <Text
                    className="font-[system-ui] leading-[22px] text-[#0d0d0d] text-[14px] tracking-[0px] whitespace-nowrap"
                    value={String(data?.["nodeText"] ?? "全选")}
                  />
                </Container>
              </Container>
              <Container className="flex flex-row gap-[12px] h-[42px] items-center justify-start max-w-full p-[0px] w-[338px]">
                <Text
                  className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
                  value={String(data?.["5Text"] ?? "已选 5 件")}
                />
                <Container className="flex flex-row gap-[4px] h-[42px] items-center justify-start max-w-full p-[0px] w-[113px]">
                  <Text
                    className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
                    value={String(data?.["nodeText"] ?? "总计：")}
                  />
                  <Container>
                    <Container className="flex flex-col gap-[0px] h-[42px] items-start justify-center max-w-full p-[0px] w-[67px]">
                      <Container className="flex flex-col gap-[4px] h-[42px] items-start justify-start max-w-full p-[0px] w-[67px]">
                        <Container>
                          <Container className="flex flex-row gap-[4px] h-[42px] items-center justify-start max-w-full p-[0px] w-[67px]">
                            <Text
                              className="font-[system-ui] leading-[42px] text-[#ee4a4a] text-[28px] tracking-[0px] whitespace-nowrap"
                              value={String(data?.["738Text"] ?? "738")}
                            />
                            <Container className="flex flex-col gap-[0px] h-[22px] items-start justify-start max-w-full p-[8px_0px_0px_0px] w-[14px]">
                              <Text
                                className="font-[system-ui] leading-[1] text-[#ee4a4a] text-[14px] tracking-[0px] whitespace-nowrap"
                                value={String(data?.["nodeText"] ?? "元")}
                              />
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Button className="bg-[#0d0d0d] flex flex-col gap-[0px] h-[56px] items-center justify-center max-w-full p-[16px_40px_16px_40px] rounded-[55px] w-[434px]">
              <Text
                className="font-[system-ui] leading-[24px] text-[#fefefe] text-[16px] tracking-[0px] whitespace-nowrap"
                value={String(data?.["nodeText"] ?? "立即购买")}
              />
            </Button>
          </Button>
        </Container>
      </Container>
    </main>
  );
}
