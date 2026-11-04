(() => {
  if (window.__prodalide_running__) { console.info("[ProDaLiDE] already running"); return; }
  window.__prodalide_running__ = true;

  const SERVER = "http://localhost/prodalide-php/public/";

  const injectCSS = (css) => {
    const style = document.createElement("style");
    style.setAttribute("data-prodalide", "css");
    style.textContent = css;
    document.head.appendChild(style);
  };

  injectCSS(`
    .prodalide-panel {
      position: sticky; top: 0; z-index: 999999;
      background: #fff; color: #111; border: 1px solid #222;
      box-shadow: 0 2px 12px rgba(0,0,0,.1);
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      margin: 8px 0; padding: 12px 14px; border-radius: 8px;
    }
    .prodalide-panel h4 { margin: 0 0 8px 0; font-size: 14px; }
    .prodalide-row { display:flex; gap:12px; align-items:center; }
    .prodalide-badge { border:1px solid #222; padding:2px 6px; border-radius:6px; font-size:12px; }
    .prodalide-actions { margin-left:auto; display:flex; gap:8px; }
    .prodalide-btn { font-size:12px; border:1px solid #222; background:#f7f7f7; padding:2px 8px; border-radius:6px; cursor:pointer; }
    .prodalide-ghost { opacity:.4; transition: opacity .2s; }
  `);

  const findContainer = () =>
    document.querySelector("#summary, .main, .content, main, body") || document.body;

  const state = { enabled: true, panelId: "prodalide-panel", history: [] };
  const store = new Proxy(state, {
    set(t, k, v) { t.history.push({ ts: Date.now(), key: k, old: t[k], new: v }); t[k] = v; return true; }
  });

  const render = async () => {
    const container = findContainer();
    let panel = document.getElementById(store.panelId);
    if (!panel) {
      panel = document.createElement("section");
      panel.id = store.panelId;
      panel.className = "prodalide-panel";
      container.prepend(panel);
    }
    panel.innerHTML = `
      <h4>AI Insight (ProDaLiDE)</h4>
      <div class="prodalide-row">
        <span class="prodalide-badge" id="prodalide-confidence">…</span>
        <span id="prodalide-text">Loading summary…</span>
        <div class="prodalide-actions">
          <button class="prodalide-btn" id="prodalide-refresh">Refresh</button>
          <button class="prodalide-btn" id="prodalide-rollback">Rollback</button>
          <button class="prodalide-btn" id="prodalide-toggle">Hide</button>
        </div>
      </div>
    `;

    const metrics = await fetch(`${SERVER}/metrics.php`, { cache: "no-store" }).then(r => r.json());
    const ai = await fetch(`${SERVER}/ai_summary.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metrics)
    }).then(r => r.json());

    document.getElementById("prodalide-text").textContent = ai.summary;
    document.getElementById("prodalide-confidence").textContent =
      "conf " + Math.round((ai.confidence || 0) * 100) + "%";

    const hero = document.querySelector(".hero, header, .masthead");
    if (hero && !hero.classList.contains("prodalide-ghost")) {
      hero.classList.add("prodalide-ghost");
      store.history.push({ ts: Date.now(), op: "ghost-hero", node: hero });
    }

    document.getElementById("prodalide-refresh").onclick = render;
    document.getElementById("prodalide-rollback").onclick = rollback;
    document.getElementById("prodalide-toggle").onclick = () => {
      store.enabled = !store.enabled;
      panel.style.display = store.enabled ? "" : "none";
    };
  };

  const rollback = () => {
    const last = store.history.pop();
    if (!last) { alert("Nothing to rollback"); return; }
    if (last.op === "ghost-hero" && last.node) {
      last.node.classList.remove("prodalide-ghost");
      console.info("[ProDaLiDE] rollback: unghosted hero");
      return;
    }
    console.info("[ProDaLiDE] rollback record:", last);
  };

  const observer = new MutationObserver((muts) => {
    muts.forEach(m => {
      if (m.type === "childList") {
        console.debug("[ProDaLiDE] DOM changed at", m.target,
          "added:", m.addedNodes.length, "removed:", m.removedNodes.length);
      }
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  render();
})();
