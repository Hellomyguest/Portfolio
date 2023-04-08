import { Switch } from "antd";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const handleChange = (value: boolean) =>
    value ? i18n.changeLanguage("en") : i18n.changeLanguage("ru-RU");

  return (
    <Switch
      checked={i18n.language === "en"}
      onChange={handleChange}
      checkedChildren="En"
      unCheckedChildren="Ру"
    />
  );
};
