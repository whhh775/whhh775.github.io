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
  const fallback = caseBack.dataset.caseBackFallback || "index.html#ui-work";
  const hasPreviousPage = window.history.length > 1 && document.referrer;

  if (hasPreviousPage) {
    const currentUrl = window.location.href;
    window.history.back();
    window.setTimeout(() => {
      if (window.location.href === currentUrl) window.location.href = fallback;
    }, 450);
    return;
  }

  window.location.href = fallback;
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

const vizClock = document.querySelector("[data-clock]");
if (vizClock) {
  const updateVizClock = () => {
    vizClock.textContent = new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    }).format(new Date());
  };
  updateVizClock();
  window.setInterval(updateVizClock, 1000);
}

const vizCounters = document.querySelectorAll("[data-counter]");
if (vizCounters.length) {
  const animateCounter = (element) => {
    const target = Number(element.dataset.counter);
    const startedAt = performance.now();
    const duration = 1600;
    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.45 });
  vizCounters.forEach((counter) => counterObserver.observe(counter));
}
