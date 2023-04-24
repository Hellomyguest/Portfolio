import { Col, Progress, Row, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";
import styles from "./page.module.scss";

const { Title, Paragraph } = Typography;

type ProgressType = {
  title: string;
  progress: number;
};

const languages: ProgressType[] = [
  { title: "HTML5", progress: 80 },
  { title: "CSS3", progress: 80 },
  { title: "SCSS", progress: 50 },
  { title: "JavaScript", progress: 70 },
  { title: "TypeScript", progress: 50 },
];

const libraries: ProgressType[] = [
  { title: "React", progress: 70 },
  { title: "Redux-toolkit", progress: 60 },
  { title: "Effector", progress: 60 },
  { title: "React-router", progress: 80 },
  { title: "Atomic-router", progress: 80 },
];

const frameworks: ProgressType[] = [
  { title: "Node.js", progress: 0 },
  { title: "Next.js", progress: 0 },
];

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ParagraphTitle>{t("homePage.about.title")}</ParagraphTitle>
      <Paragraph className={styles.paragraph}>
        {t("homePage.about.text")}
      </Paragraph>
      <ParagraphTitle>{t("homePage.skills.title")}</ParagraphTitle>
      <Row gutter={16}>
        <Col span={8}>
          <Space size="small" direction="vertical" className={styles.space}>
            <ParagraphTitle level={4}>
              {t("homePage.skills.code")}
            </ParagraphTitle>
            {languages.map((language) => (
              <div key={language.title}>
                <Title level={5} className={styles.title}>
                  {language.title}
                </Title>
                <Progress
                  percent={language.progress}
                  strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                />
              </div>
            ))}
          </Space>
        </Col>
        <Col span={8}>
          <Space size="small" direction="vertical" className={styles.space}>
            <ParagraphTitle level={4}>
              {t("homePage.skills.libraries")}
            </ParagraphTitle>
            {libraries.map((library) => (
              <div key={library.title}>
                <Title level={5} className={styles.title}>
                  {library.title}
                </Title>
                <Progress
                  percent={library.progress}
                  strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                />
              </div>
            ))}
          </Space>
        </Col>
        <Col span={8}>
          <Space size="small" direction="vertical" className={styles.space}>
            <ParagraphTitle level={4}>
              {t("homePage.skills.frameworks")}
            </ParagraphTitle>
            {frameworks.map((framework) => (
              <div key={framework.title}>
                <Title level={5} className={styles.title}>
                  {framework.title}
                </Title>
                <Progress
                  percent={framework.progress}
                  strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                />
              </div>
            ))}
          </Space>
        </Col>
      </Row>
    </>
  );
};
