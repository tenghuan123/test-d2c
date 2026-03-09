import { ActionButton } from "./components/base/ActionButton";
import { Button } from "./components/base/Button";
import { Card } from "./components/base/Card";
import { Container } from "./components/base/Container";
import { Icon } from "./components/base/Icon";
import { Image } from "./components/base/Image";
import { Text } from "./components/base/Text";
import { Composed16711Container07 } from "./components/composed/Composed16711Container07";
import { Composed16711List01 } from "./components/composed/Composed16711List01";

export type GeneratedPageProps = { data?: Record<string, unknown> };

export default function Page({ data = {} }: GeneratedPageProps) {
  return (
    <main className="min-h-screen">
      <Container>
        <Container>
          <Container
            className="flex flex-row gap-6 h-[72px] items-center justify-start w-[514px]"
            style={{ maxWidth: "100%", padding: "36px 40px 0px 40px" }}
          >
            <Text
              className="font-[system-ui] leading-[36px] text-[#0d0d0d] text-[24px] tracking-[0px] whitespace-nowrap"
              value={String(data?.["nodeText"] ?? "购物车")}
            />
            <Card>
              <Container className="bg-[#fefefe]" />
              <Icon className="bg-[#0d0d0d]">
                <Container>
                  <Text value={String(data?.["nodeText"] ?? "路径")} />
                </Container>
                <Container>
                  <Text value={String(data?.["nodeText"] ?? "路径")} />
                </Container>
              </Icon>
            </Card>
          </Container>
          <Container
            className="flex flex-col gap-5 h-[951px] items-center justify-start w-[514px]"
            style={{ maxWidth: "100%", padding: "0px 20px 0px 20px" }}
          >
            <Container
              className="flex flex-col gap-0 h-[43px] items-start justify-start w-[474px]"
              style={{ maxWidth: "100%", padding: "0px 20px 0px 20px" }}
            >
              <Container
                className="flex flex-col gap-0 h-[43px] items-start justify-center w-[434px]"
                style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
              >
                <Container
                  className="flex flex-row gap-10 h-[43px] items-start justify-start w-[242px]"
                  style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
                >
                  <Composed16711Container07 data={data} />
                  <Composed16711Container07 data={data} />
                  <Composed16711Container07 data={data} />
                </Container>
                <Container className="bg-[#ededed] rounded-[0.5px]" />
              </Container>
            </Container>
            <Container
              className="flex flex-col gap-0 h-[888px] items-start justify-start w-[474px]"
              style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
            >
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
          <Button
            className="bg-[#fefefe] flex flex-col gap-4 h-[170px] items-start justify-start w-[514px]"
            style={{ maxWidth: "100%", padding: "28px 40px 28px 40px" }}
          >
            <Container
              className="flex flex-row gap-10 h-[42px] items-center justify-start w-[434px]"
              style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
            >
              <Container
                className="flex flex-row gap-3 h-[22px] items-start justify-start w-[56px]"
                style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
              >
                <Container
                  className="flex flex-row gap-2 h-[22px] items-center justify-start w-[56px]"
                  style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
                >
                  <Container>
                    <Container className="bg-[#fefefe]" />
                    <Container className="bg-[#fefefe] rounded-[4px]">
                      <Text value={String(data?.["baseText"] ?? "Base备份")} />
                    </Container>
                  </Container>
                  <Text
                    className="font-[system-ui] leading-[22px] text-[#0d0d0d] text-[14px] tracking-[0px] whitespace-nowrap"
                    value={String(data?.["nodeText"] ?? "全选")}
                  />
                </Container>
              </Container>
              <Container
                className="flex flex-row gap-3 h-[42px] items-center justify-start w-[338px]"
                style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
              >
                <Text
                  className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
                  value={String(data?.["5Text"] ?? "已选 5 件")}
                />
                <Container
                  className="flex flex-row gap-1 h-[42px] items-center justify-start w-[113px]"
                  style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
                >
                  <Text
                    className="font-[system-ui] leading-[22px] text-[#404040] text-[14px] tracking-[0px] whitespace-nowrap"
                    value={String(data?.["nodeText"] ?? "总计：")}
                  />
                  <Container>
                    <Container
                      className="flex flex-col gap-0 h-[42px] items-start justify-center w-[67px]"
                      style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
                    >
                      <Container
                        className="flex flex-col gap-1 h-[42px] items-start justify-start w-[67px]"
                        style={{ maxWidth: "100%", padding: "0px 0px 0px 0px" }}
                      >
                        <Container>
                          <Container
                            className="flex flex-row gap-1 h-[42px] items-center justify-start w-[67px]"
                            style={{
                              maxWidth: "100%",
                              padding: "0px 0px 0px 0px",
                            }}
                          >
                            <Text
                              className="font-[system-ui] leading-[42px] text-[#ee4a4a] text-[28px] tracking-[0px] whitespace-nowrap"
                              value={String(data?.["738Text"] ?? "738")}
                            />
                            <Container
                              className="flex flex-col gap-0 h-[22px] items-start justify-start w-[14px]"
                              style={{
                                maxWidth: "100%",
                                padding: "8px 0px 0px 0px",
                              }}
                            >
                              <Text
                                value={String(
                                  data?.["1438Text"] ?? "容器 1438",
                                )}
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
            <ActionButton
              className="bg-[#0d0d0d] flex flex-col gap-0 h-[56px] items-center justify-center rounded-[55px] w-[434px]"
              style={{ maxWidth: "100%", padding: "16px 40px 16px 40px" }}
            >
              <Text
                className="font-[system-ui] leading-[24px] text-[#fefefe] text-[16px] tracking-[0px] whitespace-nowrap"
                value={String(data?.["nodeText"] ?? "立即购买")}
              />
            </ActionButton>
          </Button>
        </Container>
      </Container>
    </main>
  );
}
