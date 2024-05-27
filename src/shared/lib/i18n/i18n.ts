import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./lib";

i18n.use(initReactI18next).init({
  lng: "ru-Ru",
  fallbackLng: "ru-Ru",
  resources: translations,
});

export default i18n;
