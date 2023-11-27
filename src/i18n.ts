import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector" 
import TranslationEN from "./Translation/EN.json";
import TranslationAR from "./Translation/AR.json";


const resources = {
  en: {
    translation: TranslationEN
  },
  ar: {
    translation: TranslationAR
  }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        },
    });

  export default i18n;