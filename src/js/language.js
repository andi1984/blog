import { showBanner } from "./banner";
import { init as initNotifications, send } from "./notification";
const AVAILABLE_LANGUAGE_CODES = ["de", "en"];
const MESSAGES = {
  de: "Blog ist ebenso in 🇩🇪 verfügbar!",
  en: "Blog is also available in 🇬🇧!"
};

export default () => {
  if ("language" in navigator) {
    initNotifications();
    const wantedLanguageCode = AVAILABLE_LANGUAGE_CODES.filter(
      code => navigator.language.indexOf(code) !== -1
    ).join("");

    if (
      wantedLanguageCode.length &&
      wantedLanguageCode !== document.documentElement.lang
    ) {
      const link = `/${wantedLanguageCode}`;
      // Wanted language is not the currently shown one…
      send(MESSAGES[wantedLanguageCode], "andi1984-language")
        .then(
          notification =>
            (notification.onclick = () => {
              window.location.href = link;
            })
        )
        .catch(() => showBanner(MESSAGES[wantedLanguageCode], link));
    }
  }
};
