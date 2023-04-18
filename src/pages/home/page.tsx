import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";

const { Paragraph } = Typography;

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ParagraphTitle>{t("homePage.about.title")}</ParagraphTitle>
      <Paragraph>{t("homePage.about.text")}</Paragraph>
    </>
  );
};
