(() => {
  const term = document.getElementById("terminal-body");
  if (!term) return;

  let session;
  try {
    session = JSON.parse(term.dataset.session);
  } catch (_) {
    return;
  }
  if (!Array.isArray(session) || !session.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const buildPrompt = () => {
    const p = document.createElement("span");
    p.className = "prompt-prefix";
    p.innerHTML =
      '<span class="prompt-user">david@dev</span>' +
      ':<span class="prompt-path">~</span>$ ';
    return p;
  };

  const addLine = (className = "") => {
    const line = document.createElement("div");
    line.className = "term-line " + className;
    term.appendChild(line);
    return line;
  };

  const renderStatic = () => {
    term.innerHTML = "";
    for (const { cmd, out } of session) {
      const cmdLine = addLine("term-cmd");
      cmdLine.appendChild(buildPrompt());
      const t = document.createElement("span");
      t.className = "typed done";
      t.textContent = cmd;
      cmdLine.appendChild(t);
      if (out) {
        const outLine = addLine("term-out");
        outLine.textContent = out;
      }
    }
    const final = addLine("term-final");
    final.appendChild(buildPrompt());
    const c = document.createElement("span");
    c.className = "cursor";
    final.appendChild(c);
  };

  if (reduced) {
    renderStatic();
    return;
  }

  const run = async () => {
    term.innerHTML = "";

    for (const { cmd, out } of session) {
      // Command line with live caret
      const cmdLine = addLine("term-cmd");
      cmdLine.appendChild(buildPrompt());
      const typed = document.createElement("span");
      typed.className = "typed";
      cmdLine.appendChild(typed);

      // Type the command character by character
      for (let i = 0; i <= cmd.length; i++) {
        typed.textContent = cmd.slice(0, i);
        await sleep(30 + Math.random() * 55);
      }
      typed.classList.add("done");

      // Tiny pause like the shell "thinking"
      await sleep(180 + Math.random() * 160);

      // Output (may be multi-line)
      if (out) {
        const outLine = addLine("term-out");
        outLine.textContent = out;
      }

      await sleep(280);
    }

    // Final prompt with blinking cursor
    const final = addLine("term-final");
    final.appendChild(buildPrompt());
    const c = document.createElement("span");
    c.className = "cursor";
    final.appendChild(c);
  };

  const start = () => {
    if (document.visibilityState === "visible") run();
    else document.addEventListener("visibilitychange", run, { once: true });
  };

  start();
})();
