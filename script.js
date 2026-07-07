const header = document.querySelector("[data-header]");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const caseBack = document.querySelector("[data-case-back]");

caseBack?.addEventListener("click", () => {
  if (document.referrer) {
    window.history.back();
    return;
  }

  window.location.href = "index.html#ui-work";
});

const contactModal = document.querySelector("[data-contact-modal]");
const contactOpen = document.querySelector("[data-contact-open]");
const contactClose = document.querySelector("[data-contact-close]");

const openContactModal = () => {
  contactModal?.classList.add("is-open");
  contactModal?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  contactClose?.focus();
};

const closeContactModal = () => {
  contactModal?.classList.remove("is-open");
  contactModal?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  contactOpen?.focus();
};

contactOpen?.addEventListener("click", openContactModal);
contactClose?.addEventListener("click", closeContactModal);

contactModal?.addEventListener("click", (event) => {
  if (event.target === contactModal) closeContactModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactModal?.classList.contains("is-open")) {
    closeContactModal();
  }
});
