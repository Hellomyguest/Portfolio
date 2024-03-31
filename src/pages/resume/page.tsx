import { useTranslation } from "react-i18next";
import { Space } from "antd";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";
import { WorkTimeline } from "./ui/WorkTimeline/WorkTimeline";
import { EduTimeline } from "./ui/EduTimeline/EduTimeline";

export const ResumePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ParagraphTitle>{t("resumePage.title")}</ParagraphTitle>
      <Space align="start">
        <WorkTimeline />
        <EduTimeline />
      </Space>
    </>
  );
};
