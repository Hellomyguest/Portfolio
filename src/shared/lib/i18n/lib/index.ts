import { contactsPageTranslations } from "./translations/contactsPage";
import { homePageTranslations } from "./translations/homePage";
import {
  navigationTranslations,
  profileCardTranslations,
} from "./translations/layout";
import { portfolioPageTranslations } from "./translations/portfolioPage";
import { resumePageTranslations } from "./translations/resumePage";

export const translations = {
  en: {
    translation: {
      profileCard: profileCardTranslations.en,
      navigation: navigationTranslations.en,
      homePage: homePageTranslations.en,
      contactsPage: contactsPageTranslations.en,
      resumePage: resumePageTranslations.en,
      portfolioPage: portfolioPageTranslations.en,
    },
  },
  "ru-RU": {
    translation: {
      profileCard: profileCardTranslations.ru,
      navigation: navigationTranslations.ru,
      homePage: homePageTranslations.ru,
      contactsPage: contactsPageTranslations.ru,
      resumePage: resumePageTranslations.ru,
      portfolioPage: portfolioPageTranslations.ru,
    },
  },
};
