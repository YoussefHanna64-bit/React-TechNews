import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerEN from "./localization/en/header.json";
import headerAR from "./localization/ar/header.json";
import postCardEN from "./localization/en/postCard.json";
import postCardAR from "./localization/ar/postCard.json";
import addPostEN from "./localization/en/addPost.json";
import addPostAR from "./localization/ar/addPost.json";
import loginEN from "./localization/en/login.json";
import loginAR from "./localization/ar/login.json";
import signupEN from "./localization/en/signup.json";
import signupAR from "./localization/ar/signup.json";
import extraEN from "./localization/en/extra.json";
import extraAR from "./localization/ar/extra.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        header: headerEN,
        postCard: postCardEN,
        addPost: addPostEN,
        login: loginEN,
        signup: signupEN,
        extra: extraEN,
      },
      ar: {
        header: headerAR,
        postCard: postCardAR,
        addPost: addPostAR,
        login: loginAR,
        signup: signupAR,
        extra: extraAR,
      },
    },
    lng: localStorage.getItem("language") || "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
