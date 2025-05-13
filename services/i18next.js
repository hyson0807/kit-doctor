import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import ko from '../locales/ko.json';


export const languageResources = {
  en: {translation: en},
  ko: {translation: ko},
};


i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'ko',
    fallbackLng: 'ko',
    resources: languageResources,
});

export default i18next;
