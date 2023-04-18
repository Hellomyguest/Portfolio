import { Col, Row, Slider, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";

const { Title, Paragraph } = Typography;

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ParagraphTitle>{t("homePage.about.title")}</ParagraphTitle>
      <Paragraph>{t("homePage.about.text")}</Paragraph>
      <Row gutter={16}>
        <Col span={12}>
          <Space size="small" direction="vertical" style={{ width: "100%" }}>
            <ParagraphTitle>{t("homePage.codeSkills.title")}</ParagraphTitle>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                HTML5
              </Title>
              <Slider
                value={80}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                CSS3
              </Title>
              <Slider
                value={80}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                SCSS
              </Title>
              <Slider
                value={50}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                JavaScript
              </Title>
              <Slider
                value={70}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                TypeScript
              </Title>
              <Slider
                value={50}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
          </Space>
        </Col>
        <Col span={12}>
          <Space size="small" direction="vertical" style={{ width: "100%" }}>
            <ParagraphTitle>
              {t("homePage.frameworkSkills.title")}
            </ParagraphTitle>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                React
              </Title>
              <Slider
                value={80}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                Redux-toolkit
              </Title>
              <Slider
                value={60}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                Effector
              </Title>
              <Slider
                value={70}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                React-router
              </Title>
              <Slider
                value={80}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                Atomic-router
              </Title>
              <Slider
                value={80}
                handleStyle={{ display: "none" }}
                style={{ marginInline: 0 }}
                trackStyle={{ backgroundColor: "#1668dc", opacity: 0.8 }}
              />
            </div>
          </Space>
        </Col>
      </Row>
    </>
  );
};
