/* ============================================
   EgerLab Portfolio — Script
   Lê os dados de data.js (SITE_DATA) e monta
   a página. Sem dependências externas.
   ============================================ */

(function () {
  "use strict";

  // Nota: SITE_DATA é declarado com `const` em data.js. Declarações
  // top-level com let/const não viram propriedades de `window`, mas
  // continuam acessíveis por nome aqui, já que os dois <script> (não
  // module) compartilham o mesmo escopo léxico global da página.
  const D = typeof SITE_DATA !== "undefined" ? SITE_DATA : undefined;
  if (!D) {
    console.error("SITE_DATA não encontrado — verifique se data.js foi carregado antes de script.js");
    return;
  }

  /* ---------- Helpers ---------- */
  const $ = (id) => document.getElementById(id);
  const svgNS = "http://www.w3.org/2000/svg";

  function el(tag, className, attrs) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (attrs) {
      for (const k in attrs) node.setAttribute(k, attrs[k]);
    }
    return node;
  }

  function svgEl(tag, attrs) {
    const node = document.createElementNS(svgNS, tag);
    if (attrs) {
      for (const k in attrs) node.setAttribute(k, attrs[k]);
    }
    return node;
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    $("heroName").textContent = D.name;
    $("heroRole").textContent = D.role;
    $("heroTagline").textContent = D.tagline;
    $("heroStatus").textContent = D.status;
    $("footerName").textContent = D.name;
    $("footerYear").textContent = new Date().getFullYear();
    document.title = `${D.name} — ${D.role}`;
  }

  /* ---------- Terminal typing effect ---------- */
  function runTerminal(lines, container) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      lines.forEach((line) => {
        const p = el("p", "terminal__line" + (line.cmd ? " terminal__line--cmd" : ""));
        p.textContent = line.text;
        container.appendChild(p);
      });
      const cursor = el("span", "terminal__cursor");
      container.lastElementChild.appendChild(cursor);
      return;
    }

    let idx = 0;

    function typeLine(line, onDone) {
      const p = el("p", "terminal__line" + (line.cmd ? " terminal__line--cmd" : ""));
      container.appendChild(p);
      let i = 0;
      const speed = line.cmd ? 42 : 10;

      (function step() {
        p.textContent = line.text.slice(0, i);
        i++;
        if (i <= line.text.length) {
          setTimeout(step, speed);
        } else {
          onDone();
        }
      })();
    }

    function next() {
      if (idx >= lines.length) {
        const cursor = el("span", "terminal__cursor");
        container.lastElementChild.appendChild(cursor);
        return;
      }
      const line = lines[idx];
      typeLine(line, () => {
        idx++;
        setTimeout(next, line.cmd ? 260 : 420);
      });
    }

    next();
  }

  /* ---------- About ---------- */
  function renderAbout() {
    // CSS usa white-space: pre-line, então as quebras de linha em
    // D.about já viram parágrafos visuais sem precisar de <p> extras.
    $("aboutText").textContent = D.about;
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    const grid = $("skillsGrid");
    D.skills.forEach((group) => {
      const card = el("div", "skill-card");

      const title = el("p", "skill-card__title");
      title.textContent = group.title;
      card.appendChild(title);

      const items = el("div", "skill-card__items");
      group.items.forEach((item) => {
        const chip = el("span", "skill-chip");
        chip.textContent = item;
        items.appendChild(chip);
      });
      card.appendChild(items);

      grid.appendChild(card);
    });
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    const grid = $("projectsGrid");
    D.projects.forEach((project) => {
      const card = el("div", "project-card");

      const title = el("h3", "project-card__title");
      title.textContent = project.title;
      card.appendChild(title);

      const desc = el("p", "project-card__desc");
      desc.textContent = project.desc;
      card.appendChild(desc);

      const tags = el("div", "project-card__tags");
      project.tags.forEach((t) => {
        const tag = el("span", "tag");
        tag.textContent = t;
        tags.appendChild(tag);
      });
      card.appendChild(tags);

      grid.appendChild(card);
    });
  }

  /* ---------- Homelab topology (SVG) ---------- */
  function connectorPath(a, b) {
    const ax = a.x + a.w / 2, ay = a.y + a.h;
    const bx = b.x + b.w / 2, by = b.y;

    if (Math.abs(ax - bx) < 1) {
      return `M ${ax} ${ay} L ${bx} ${by}`;
    }
    const midY = ay + (by - ay) / 2;
    return `M ${ax} ${ay} L ${ax} ${midY} L ${bx} ${midY} L ${bx} ${by}`;
  }

  function renderTopology() {
    const container = $("topology");
    const { viewBox, nodes, edges } = D.topology;
    const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

    const svg = svgEl("svg", { viewBox, xmlns: svgNS });

    // edges first, so nodes render on top
    edges.forEach((edge) => {
      const a = byId[edge.from], b = byId[edge.to];
      if (!a || !b) return;
      const path = svgEl("path", {
        d: connectorPath(a, b),
        class: "topo-line" + (edge.live ? " is-live" : "")
      });
      svg.appendChild(path);
    });

    nodes.forEach((node) => {
      const g = svgEl("g", { class: "topo-node" + (node.edge ? " is-edge" : "") });

      const rect = svgEl("rect", {
        x: node.x, y: node.y, width: node.w, height: node.h,
        rx: 8, ry: 8
      });
      g.appendChild(rect);

      const label = svgEl("text", {
        class: "topo-label",
        x: node.x + node.w / 2,
        y: node.y + node.h / 2 - 4,
        "text-anchor": "middle"
      });
      label.textContent = node.label;
      g.appendChild(label);

      const sub = svgEl("text", {
        class: "topo-sub",
        x: node.x + node.w / 2,
        y: node.y + node.h / 2 + 14,
        "text-anchor": "middle"
      });
      sub.textContent = node.sub;
      g.appendChild(sub);

      svg.appendChild(g);
    });

    container.appendChild(svg);
  }

  /* ---------- Contact links ---------- */
  function renderContact() {
    const wrap = $("contactLinks");
    D.contact.forEach((c) => {
      const a = el("a", "contact-link", { href: c.href });
      if (c.href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      a.textContent = c.label;
      wrap.appendChild(a);
    });
  }

  /* ---------- Nav: shrink/blur handled in CSS; smooth close on click (mobile-safe no-op) ---------- */
  function initNav() {
    document.querySelectorAll('.nav__links a, .nav__cta').forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    runTerminal(D.terminal, $("terminalBody"));
    renderAbout();
    renderSkills();
    renderProjects();
    renderTopology();
    renderContact();
    initNav();
  });
})();