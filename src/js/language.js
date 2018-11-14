import { showBanner } from "./banner";
const AVAILABLE_LANGUAGE_CODES = ["de", "en"];
const MESSAGES = {
  de: "Blog ist ebenso in 🇩🇪 verfügbar!",
  en: "Blog is also available in 🇬🇧!"
};

export default () => {
  if ("language" in navigator) {
    const wantedLanguageCode = AVAILABLE_LANGUAGE_CODES.filter(
      code => navigator.language.indexOf(code) !== -1
    ).join("");

    if (
      wantedLanguageCode.length &&
      wantedLanguageCode !== document.documentElement.lang
    ) {
      // Wanted language is not the currently shown one…
      showBanner(MESSAGES[wantedLanguageCode], `/${wantedLanguageCode}`);
    }
  }
};
