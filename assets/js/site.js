
(() => {
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const button = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-mobile-menu]");
  const closeMenu = () => {
    if (!button || !menu) return;
    menu.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  };
  button?.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
  });
  menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach(el => el.classList.add("visible"));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      });
    }, {threshold:.08});
    reveals.forEach(el => io.observe(el));
  }

  // Preserve campaign attribution on outbound Google Play clicks.
  const params = new URLSearchParams(location.search);
  const keep = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content","gclid","gbraid","wbraid"];
  const retained = new URLSearchParams();
  keep.forEach(k => { const v = params.get(k); if (v) retained.set(k,v); });
  if ([...retained].length) {
    document.querySelectorAll("a[data-play-link]").forEach(a => {
      const url = new URL(a.href);
      retained.forEach((v,k) => url.searchParams.set(k,v));
      a.href = url.toString();
    });
  }

  document.querySelectorAll("a[data-play-link]").forEach(a => {
    a.addEventListener("click", () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event:"google_play_outbound_click",
        app:"ai-grammar-checker-rewriter",
        package:"com.syntaxly.grammarchecker.ai.dictionary.spellchecker",
        destination:a.href
      });
    });
  });
})();
