export const asyncGetMentionsForUrl = url =>
  fetch(
    `https://webmention.io/api/mentions.jf2?target=${encodeURIComponent(url)}`
  )
    .then(res => res.json())
    .then(json => json.children)
    .catch(console.error);
