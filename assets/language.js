(() => {
  "use strict";

  const english = {
    pageTitle: "Han Bowen 韩博文 | AI4SE · AI4Med",
    name: "Han Bowen",
    university: "Universiti Sains Malaysia · 2023–2027",
    major: "Computer Science (Intelligent Computing)",
    appointment: "Shenzhen Loop Area Institute · Research Assistant · Feb 2026–Present",
    aboutHeading: "About Me",
    interests: "My research interests lie in AI for Software Engineering (AI4SE) and AI for Medicine (AI4Med).",
    focus: "I currently focus on cross-modal modeling of cell images and single-cell transcriptomes. I explore methods for predicting gene expression profiles from cellular morphology to better understand the links between cellular phenotypes and molecular states.",
    publicationsHeading: "Publications & Projects",
    biomodTitle: "BioMod: Biological Module Tokenization for Single-Cell Foundation Modeling",
    preprint: "Preprint",
    biomodDescription: "A single-cell foundation model that represents cells with biological modules for cell-type annotation, perturbation-response prediction, and other tasks.",
    biomodImageLink: "Open BioMod Figure 1 in a new tab",
    biomodImageAlt: "BioMod Figure 1: module construction, pretraining, applications, and efficiency.",
    biomodCaption: "Figure 1 · BioMod: biological modules, pretraining, and downstream applications.",
    fullImage: "Full-size image",
    tempoTitle: "TempoBridge: Source-Conditioned Flow Matching with Optimal Transport Couplings for Single-Cell Population Transitions",
    tempoDescription: "Combines source-population conditioning, flow matching, and optimal transport couplings to model temporal, genetic, and chemical transitions in single-cell populations.",
    tempoImageLink: "Open TempoBridge Figure 1 in a new tab",
    tempoImageAlt: "TempoBridge Figure 1: prediction tasks and source-conditioned transport architecture.",
    tempoCaption: "Figure 1 · TempoBridge: prediction tasks and source-conditioned transport.",
    creditPrefix: "Figures reproduced from the papers above under the ",
    creditSuffix: " license.",
    contactHeading: "Contact",
    personalEmail: "Personal Email",
    academicEmail: "University Email",
  };

  // 中文内容直接维护在 HTML 中；只替换文字和无障碍标签，保留链接和事件。
  const bindings = [];
  for (const [marker, attribute] of [
    ["data-i18n", null],
    ["data-i18n-alt", "alt"],
    ["data-i18n-label", "aria-label"],
  ]) {
    for (const element of document.querySelectorAll(`[${marker}]`)) {
      const key = element.getAttribute(marker);
      if (!Object.hasOwn(english, key)) continue;
      bindings.push({
        element,
        attribute,
        chinese: attribute ? element.getAttribute(attribute) : element.textContent,
        english: english[key],
      });
    }
  }

  const toggle = document.getElementById("language-toggle");
  const storageKey = "han-bowen-language";
  let currentLanguage = "zh-CN";

  function setLanguage(language) {
    currentLanguage = language === "en" ? "en" : "zh-CN";
    document.documentElement.lang = currentLanguage;
    for (const binding of bindings) {
      const text = currentLanguage === "en" ? binding.english : binding.chinese;
      if (binding.attribute) binding.element.setAttribute(binding.attribute, text);
      else binding.element.textContent = text;
    }
    toggle.textContent = currentLanguage === "en" ? "中文" : "EN";
    toggle.lang = currentLanguage === "en" ? "zh-CN" : "en";
    toggle.setAttribute("aria-label", currentLanguage === "en" ? "切换为中文" : "Switch to English");
  }

  let savedLanguage;
  try { savedLanguage = localStorage.getItem(storageKey); } catch { /* 存储受限时仍可切换。 */ }
  setLanguage(savedLanguage);
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "zh-CN" : "en");
    try { localStorage.setItem(storageKey, currentLanguage); } catch { /* 无法保存时保留本次选择。 */ }
  });
})();
