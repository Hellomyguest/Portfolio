import { useTranslation } from "react-i18next";
import { Card, Space, Typography } from "antd";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";
import { WorkTimeline } from "./ui/WorkTimeline/WorkTimeline";
import { EduTimeline } from "./ui/EduTimeline/EduTimeline";
import styles from "./page.module.scss";
import { CardsCarousel } from "../../shared/ui";

const { Text } = Typography;

type ReviewType = {
  name: string;
  review: string;
};

const reviews: ReviewType[] = [
  { name: "Name", review: "Review" },
  { name: "Name", review: "Review" },
  { name: "Name", review: "Review" },
  { name: "Name", review: "Review" },
];

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
      <CardsCarousel
        cards={reviews.map((review) => (
          <Card title={review.name} className={styles.card}>
            <Text italic>{review.review}</Text>
          </Card>
        ))}
      />
    </>
  );
};
