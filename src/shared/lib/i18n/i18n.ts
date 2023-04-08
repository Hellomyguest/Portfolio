import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          navigation: {
            resume: "Resume",
            portfolio: "Portfolio",
            growth: "Growth",
            contacts: "Contacts",
          },
        },
      },
      "ru-RU": {
        translation: {
          navigation: {
            resume: "Резюме",
            portfolio: "Портфолио",
            growth: "Развитие",
            contacts: "Контакты",
          },
        },
      },
    },
  });

export default i18n;
