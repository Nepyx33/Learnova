/**
 * Lightweight i18n: texts are marked in HTML with data attributes.
 *   data-i18n="key"             → element text
 *   data-i18n-placeholder="key" → placeholder attribute
 *   data-i18n-aria-label="key"  → aria-label attribute
 * The UI is English only for now; adding a language means adding one more
 * dictionary file next to en.js.
 */
import en from "../../i18n/en.js";

const dictionaries = { en };

const lookup = (dict, key) =>
  key.split(".").reduce((node, part) => (node == null ? undefined : node[part]), dict);

export function t(key, lang = document.documentElement.lang || "en") {
  const value = lookup(dictionaries[lang] || dictionaries.en, key);
  return typeof value === "string" ? value : undefined;
}

export function applyTranslations(root = document, lang = document.documentElement.lang || "en") {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = t(el.dataset.i18n, lang);
    if (text) {
      el.textContent = text;
    }
  });

  const attributes = [
    ["placeholder", "i18n-placeholder", "i18nPlaceholder"],
    ["aria-label", "i18n-aria-label", "i18nAriaLabel"]
  ];
  attributes.forEach(([attr, dataAttr, dataKey]) => {
    root.querySelectorAll(`[data-${dataAttr}]`).forEach((el) => {
      const text = t(el.dataset[dataKey], lang);
      if (text) {
        el.setAttribute(attr, text);
      }
    });
  });
}
