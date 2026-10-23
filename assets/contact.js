(() => {
  "use strict";

  // 仅降低简单采集的便利性，不是加密或访问控制。
  // 邮箱只在用户激活时还原，不写入页面文字、属性或链接。
  const contacts = {
    personal: {
      key: 83,
      bytes: [59, 49, 36, 106, 101, 106, 107, 96, 106, 100, 19, 60, 38, 39, 63, 60, 60, 56, 125, 48, 60, 62],
    },
    academic: {
      key: 107,
      bytes: [3, 10, 5, 9, 4, 28, 14, 5, 43, 24, 31, 30, 15, 14, 5, 31, 69, 30, 24, 6, 69, 6, 18],
    },
  };

  for (const button of document.querySelectorAll("[data-contact]")) {
    const contact = contacts[button.dataset.contact];
    if (!contact) continue;

    button.addEventListener("click", (event) => {
      if (!event.isTrusted) return;
      const address = String.fromCharCode(...contact.bytes.map((byte) => byte ^ contact.key));
      window.location.assign("mailto:" + address);
    });
    button.disabled = false;
  }
})();
