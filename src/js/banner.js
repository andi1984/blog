export const showBanner = (msg, link = null) => {
  let bannerElement;
  if (link) {
    bannerElement = document.createElement("a");
    bannerElement.setAttribute("href", link);
  } else {
    bannerElement = document.createElement("section");
  }

  const bannerText = document.createTextNode(msg);
  bannerElement.appendChild(bannerText);

  bannerElement.classList.add("banner", "banner--fixed", "banner--slide-in");
  document.querySelector('header').appendChild(bannerElement);

  window.setTimeout(() => {
    bannerElement.classList.add("banner--slide");
  }, 0);
  
  return bannerElement;
};
