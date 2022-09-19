
const link =
  `https://raw.githubusercontent.com/highlightjs/highlight.js/main/src/styles/atom-one-dark.css`;
export const css = await fetch(link).then((file) => file.text())