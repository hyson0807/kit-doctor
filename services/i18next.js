import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import ko from '../locales/ko.json';
import ch from '../locales/ch.json';
import vt from '../locales/vt.json';


export const languageResources = {
    en: {translation: en},
    ko: {translation: ko},
    ch: {translation: ch},
    vt: {translation: vt},

};


i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResources,
});

export default i18next;
