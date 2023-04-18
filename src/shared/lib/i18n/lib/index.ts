import { contactsPageTranslations } from "./translations/contactsPage";
import { homePageTranslations } from "./translations/homePage";
import {
  navigationTranslations,
  profileCardTranslations,
} from "./translations/layout";
import { resumePageTranslations } from "./translations/resumePage";

export const translations = {
  en: {
    translation: {
      profileCard: profileCardTranslations.en,
      navigation: navigationTranslations.en,
      homePage: homePageTranslations.en,
      contactsPage: contactsPageTranslations.en,
      resumePage: resumePageTranslations.en,
    },
  },
  "ru-RU": {
    translation: {
      profileCard: profileCardTranslations.ru,
      navigation: navigationTranslations.ru,
      homePage: homePageTranslations.ru,
      contactsPage: contactsPageTranslations.ru,
      resumePage: resumePageTranslations.ru,
    },
  },
};
