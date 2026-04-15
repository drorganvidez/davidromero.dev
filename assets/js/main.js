(() => {
  const nodes = Array.from(document.querySelectorAll(".typed"));
  if (!nodes.length) return;

  const originals = nodes.map((el) => {
    const text = el.dataset.typed ?? el.textContent;
    el.textContent = "";
    return { el, text };
  });

  let i = 0;

  const typeNext = () => {
    if (i >= originals.length) return;
    const { el, text } = originals[i];
    let idx = 0;

    const tick = () => {
      if (idx <= text.length) {
        el.textContent = text.slice(0, idx);
        idx++;
        setTimeout(tick, 28 + Math.random() * 45);
      } else {
        el.classList.add("done");
        i++;
        setTimeout(typeNext, 280);
      }
    };
    tick();
  };

  const startWhenVisible = () => {
    if (document.visibilityState === "visible") typeNext();
    else document.addEventListener("visibilitychange", typeNext, { once: true });
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    originals.forEach(({ el, text }) => {
      el.textContent = text;
      el.classList.add("done");
    });
    return;
  }

  startWhenVisible();
})();
