import { Flex, Tag, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";
import styles from "./page.module.scss";
import { ProfileCard } from "../../features/PageLayout/ui";
import { useResize } from "../../shared/utils/useResize";

const { Paragraph } = Typography;

type ProgressType = {
  title: string;
  progress?: number;
  color?: string;
};

const languages: ProgressType[] = [
  { title: "HTML5", progress: 80, color: "blue" },
  { title: "CSS3", progress: 80, color: "blue" },
  { title: "SCSS", progress: 50, color: "blue" },
  { title: "JavaScript", progress: 70, color: "blue" },
  { title: "TypeScript", progress: 50, color: "blue" },
];

const libraries: ProgressType[] = [
  { title: "React", progress: 70, color: "magenta" },
  { title: "Redux-toolkit", progress: 60, color: "magenta" },
  { title: "Effector", progress: 60, color: "magenta" },
  { title: "React-router", progress: 80, color: "magenta" },
  { title: "Atomic-router", progress: 80, color: "magenta" },
];

const otherSkills: ProgressType[] = [
  { title: "Jira", color: "green" },
  { title: "Ant design", color: "green" },
  { title: "Material UI", color: "green" },
];

/* const frameworks: ProgressType[] = [
  { title: "Node.js", progress: 0 },
  { title: "Next.js", progress: 0 },
]; */

export const HomePage = () => {
  const { t } = useTranslation();
  const { isScreenLg, isScreenSm } = useResize();

  const softSkills: ProgressType[] = [
    { title: "Code Review", color: "orange" },
    { title: t("homePage.skills.english"), color: "orange" },
  ];

  return (
    <>
      {!isScreenLg && (
        <ProfileCard isScreenLg={isScreenLg} isScreenSm={isScreenSm} />
      )}
      <ParagraphTitle>{t("homePage.about.title")}</ParagraphTitle>
      <Paragraph className={styles.paragraph}>
        {t("homePage.about.text")}
      </Paragraph>
      <ParagraphTitle>{t("homePage.skills.title")}</ParagraphTitle>
      <Flex gap="8px 0" wrap="wrap">
        {[...languages, ...libraries, ...otherSkills, ...softSkills].map(
          (item) => (
            <Tag color={item.color} style={{ fontSize: 14 }} key={item.title}>
              {item.title}
            </Tag>
          )
        )}
      </Flex>
      {/* <Row gutter={16}>
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
      </Row> */}
    </>
  );
};
