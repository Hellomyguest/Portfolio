import { useTranslation } from "react-i18next";
import { Card, Carousel, Space } from "antd";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";
import { WorkTimeline } from "./ui/WorkTimeline/WorkTimeline";
import { EduTimeline } from "./ui/EduTimeline/EduTimeline";
import styles from "./page.module.scss";

export const ResumePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ParagraphTitle>{t("resumePage.title")}</ParagraphTitle>
      <Space align="start">
        <WorkTimeline />
        <EduTimeline />
      </Space>
      <ParagraphTitle className={styles.characteristicsTitle}>
        {t("resumePage.characteristics.title")}
      </ParagraphTitle>
      <Carousel dotPosition="bottom" autoplay>
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            <Card
              title="Default size card"
              style={{
                width: "fit-content",
                margin: 0,
                boxShadow: "0px 0px 48px 0px rgba(4, 6, 4, 0.08)",
              }}
            >
              <p>Card content</p>
            </Card>
            <Card
              title="Default size card"
              style={{
                width: "fit-content",
                margin: 0,
                boxShadow: "0px 0px 48px 0px rgba(4, 6, 4, 0.08)",
              }}
            >
              <p>Card content</p>
            </Card>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            <Card
              title="Default size card"
              style={{
                width: "fit-content",
                margin: 0,
                boxShadow: "0px 0px 48px 0px rgba(4, 6, 4, 0.08)",
              }}
            >
              <p>Card content</p>
            </Card>
            <Card
              title="Default size card"
              style={{
                width: "fit-content",
                margin: 0,
                boxShadow: "0px 0px 48px 0px rgba(4, 6, 4, 0.08)",
              }}
            >
              <p>Card content</p>
            </Card>
          </div>
        </div>
      </Carousel>
    </>
  );
};
