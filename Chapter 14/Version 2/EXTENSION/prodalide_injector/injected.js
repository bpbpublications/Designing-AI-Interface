(async () => {
  if (window.__prodalide_running__) return;
  window.__prodalide_running__ = true;

  const SERVER = "http://localhost/prodalide-php/public/";

  const injectCSS = (css) => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  };

  injectCSS(`
    .prodalide-panel { position: sticky; top:0; z-index: 2147483647; background:#fff; border:1px solid #222; padding:10px 12px; border-radius:8px; margin:8px 0; font: 13px/1.4 system-ui, sans-serif; }
    .prodalide-row { display:flex; gap:12px; align-items:center; }
    .prodalide-badge { border:1px solid #222; padding:2px 6px; border-radius:6px; font-size:12px; }
    .prodalide-actions { margin-left:auto; display:flex; gap:8px; }
    .prodalide-btn { font-size:12px; border:1px solid #222; background:#f7f7f7; padding:2px 8px; border-radius:6px; cursor:pointer; }
    .prodalide-ghost { opacity:.4; transition:opacity .2s; }
  `);

  const findContainer = () =>
    document.querySelector("#summary, .main, .content, main, body") || document.body;

  const state = { enabled: true, panelId: "prodalide-panel", history: [] };

  const render = async () => {
    const container = findContainer();
    let panel = document.getElementById(state.panelId);
    if (!panel) {
      panel = document.createElement("section");
      panel.id = state.panelId;
      panel.className = "prodalide-panel";
      container.prepend(panel);
    }

    panel.innerHTML = `
      <div class="prodalide-row">
        <strong>AI Insight (ProDaLiDE)</strong>
        <span class="prodalide-badge" id="prodalide-confidence">…</span>
        <span id="prodalide-text">Loading summary…</span>
        <div class="prodalide-actions">
          <button class="prodalide-btn" id="prodalide-refresh">Refresh</button>
          <button class="prodalide-btn" id="prodalide-toggle">Hide</button>
        </div>
      </div>
    `;

    const metrics = await fetch(`${SERVER}/metrics.php`, { cache: "no-store" }).then(r => r.json());
    const ai = await fetch(`${SERVER}/ai_openai.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metrics)
    }).then(r => r.json());

    document.getElementById("prodalide-text").textContent = ai.summary || "No summary generated.";
    document.getElementById("prodalide-confidence").textContent = "conf " + Math.round((ai.confidence || 0.9) * 100) + "%";

    const hero = document.querySelector(".hero, header, .masthead");
    if (hero && !hero.classList.contains("prodalide-ghost")) hero.classList.add("prodalide-ghost");

    document.getElementById("prodalide-refresh").onclick = render;
    document.getElementById("prodalide-toggle").onclick = () => {
      state.enabled = !state.enabled;
      panel.style.display = state.enabled ? "" : "none";
    };
  };

  render();
})();