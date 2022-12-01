import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { TRANSLATIONS_EN } from "./en/translations"
import { TRANSLATIONS_PL } from "./pl/translations"
import { TRANSLATIONS_RU } from "./ru/translations"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: TRANSLATIONS_EN
            },
            pl: {
                translation: TRANSLATIONS_PL
            },
            ru: {
                translation: TRANSLATIONS_RU
            }
        }
    });

i18n.on('languageChanged', (lng) => {document.documentElement.setAttribute('lang', lng);})
i18n.changeLanguage("en")