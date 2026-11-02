<script>
  import experiences from "$lib/experiences.json";
  import {
    Briefcase,
    GraduationCap,
    Plane,
    Bot,
    Code,
    Shield,
    Palette,
    Baby,
    Film,
    Rocket,
    Building2,
  } from "lucide-svelte";

  // Nel JSON l'icona è salvata come stringa: qui la si associa al componente
  const icons = { Briefcase, GraduationCap, Plane, Bot, Code, Shield, Palette, Baby, Film, Rocket, Building2 };

  // Aggiunge/rimuove la classe "in" quando l'elemento entra/esce dal viewport
  function reveal(node) {
    const observer = new IntersectionObserver(
      ([entry]) => node.classList.toggle("in", entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }

  // Descrizioni lunghe: file .md in src/lib/descriptions, collegati nel JSON con "descFile"
  const descFiles = import.meta.glob("/src/lib/descriptions/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  });

  // Paragrafi separati da una riga vuota; gli a capo singoli diventano spazi
  const parseMarkdown = (text) =>
    text
      .split(/\r?\n\s*\r?\n/)
      .map((par) => par.replace(/\s*\r?\n\s*/g, " ").trim())
      .filter(Boolean);

  // Usa il file .md se presente, altrimenti "desc" (stringa o array di paragrafi)
  function resolveDesc(exp) {
    if (exp.descFile) {
      const text = descFiles[`/src/lib/descriptions/${exp.descFile}`];
      if (text) return parseMarkdown(text);
      console.warn(`Descrizione non trovata: ${exp.descFile}`);
    }
    return exp.desc ?? "";
  }

  // "desc" può essere una stringa o un array di paragrafi
  const paragraphs = (desc) => (Array.isArray(desc) ? desc : [desc]);

  // Oltre questa lunghezza la descrizione viene troncata con "Leggi di più"
  const LONG_DESC = 220;
  const isLong = (desc) => paragraphs(desc).join(" ").length > LONG_DESC;

  let expanded = {};
  const toggle = (i) => (expanded = { ...expanded, [i]: !expanded[i] });

  $: sorted = experiences.map((exp) => ({ ...exp, desc: resolveDesc(exp) })).sort(
    (a, b) =>
      b.dateRange[0] * 12 + b.dateRange[1] - (a.dateRange[0] * 12 + a.dateRange[1])
  );
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" />
</svelte:head>

<section class="esperienze-page">
  <div class="page-head">
    <div class="head-icon">
      <Briefcase size={28} />
    </div>
    <div class="head-text">
      <h1>ESPERIENZA LAVORATIVA</h1>
      <p>Percorso professionale, formativo e progetti — dal più recente al più lontano</p>
    </div>
  </div>

  <div class="timeline-wrap">
    <div class="timeline-line">
      {#each sorted as exp, i}
        <div class="timeline-dot" style="--c: {exp.color}">
          <div class="dot-pulse" />
        </div>
      {/each}
    </div>

    <div class="timeline-list">
      {#each sorted as exp, i (i)}
        <div class={`tl-item ${i % 2 === 0 ? "left" : "right"}`} use:reveal>
          <div class="tl-date-pill" style="--c: {exp.color}">
            {exp.date}
          </div>

          <div class="tl-card">
            <div class="tl-card-top" style="--c: {exp.color}">
              <div class="tl-icon">
                <svelte:component this={icons[exp.icon] ?? Briefcase} size={22} />
              </div>
              <span class="tl-tag">{exp.tag}</span>
            </div>
            <h3>{exp.title}</h3>
            <div class="tl-desc" class:clamped={isLong(exp.desc) && !expanded[i]}>
              {#each paragraphs(exp.desc) as par}
                <p>{par}</p>
              {/each}
            </div>
            {#if isLong(exp.desc)}
              <button
                class="tl-more"
                style="--c: {exp.color}"
                aria-expanded={!!expanded[i]}
                on:click={() => toggle(i)}
              >
                {expanded[i] ? "Mostra meno" : "Leggi di più"}
              </button>
            {/if}
          </div>

          <div class="tl-marker" style="--c: {exp.color}">
            <div class="marker-dot" />
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="end-badge">
    <GraduationCap size={20} />
    <span>Inizio percorso formativo</span>
  </div>
</section>

<style>
  .esperienze-page {
    width: min(1140px, 92vw);
    margin: 0 auto;
    padding: 56px 0 96px 0;
    font-family: "Poppins", sans-serif;
  }

  .page-head {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 18px 26px;
    background: linear-gradient(120deg, #01477a, #013a63);
    color: white;
    border-radius: 22px;
    box-shadow: 0 16px 44px rgba(1, 58, 99, 0.28);
    position: relative;
    overflow: hidden;
    margin-bottom: 56px;
  }

  .page-head::after {
    content: "";
    position: absolute;
    right: -60px;
    top: -60px;
    width: 240px;
    height: 240px;
    background: radial-gradient(
      circle,
      rgba(127, 255, 212, 0.28) 0%,
      transparent 65%
    );
  }

  .head-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: rgba(127, 255, 212, 0.18);
    color: #7fffd4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .head-text h1 {
    margin: 0 0 4px 0;
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .head-text p {
    margin: 0;
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.82);
  }

  .timeline-wrap {
    position: relative;
    padding: 8px 0 40px 0;
  }

  .timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #7fffd4 0%, #468faf 50%, #014f86 100%);
    border-radius: 999px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 0;
    box-sizing: border-box;
  }

  .timeline-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--c);
    transform: translateX(-5.5px);
    position: relative;
    box-shadow: 0 0 0 3px #ffffff, 0 0 0 5px var(--c);
    flex-shrink: 0;
  }

  .dot-pulse {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: var(--c);
    opacity: 0.5;
    animation: dotPulse 2.4s ease-out infinite;
  }

  @keyframes dotPulse {
    0% {
      transform: scale(1);
      opacity: 0.55;
    }
    100% {
      transform: scale(2.6);
      opacity: 0;
    }
  }

  .timeline-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 42px;
  }

  .tl-item {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 40px 1fr;
    align-items: start;
    min-height: 110px;
  }

  .tl-item.left .tl-card {
    grid-column: 1;
    margin-right: 16px;
    text-align: right;
  }

  .tl-item.left .tl-date-pill {
    grid-column: 3;
    justify-self: start;
    margin-left: 16px;
  }

  .tl-item.right .tl-card {
    grid-column: 3;
    margin-left: 16px;
    text-align: left;
  }

  .tl-item.right .tl-date-pill {
    grid-column: 1;
    justify-self: end;
    margin-right: 16px;
  }

  .tl-marker {
    grid-column: 2;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid var(--c);
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: start;
    margin-top: 26px;
    box-shadow: 0 4px 16px rgba(1, 58, 99, 0.22);
    z-index: 2;
  }

  .marker-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--c);
    box-shadow: 0 0 12px var(--c);
  }

  .tl-date-pill {
    display: inline-flex;
    align-items: center;
    padding: 9px 16px;
    border-radius: 999px;
    background: #ffffff;
    border: 2px solid var(--c);
    color: var(--c);
    font-weight: 700;
    font-size: 13px;
    white-space: nowrap;
    align-self: start;
    margin-top: 30px;
    box-shadow: 0 6px 18px rgba(1, 58, 99, 0.12);
    letter-spacing: 0.01em;
  }

  .tl-card {
    background: #ffffff;
    padding: 22px 24px;
    border-radius: 18px;
    box-shadow:
      0 12px 32px rgba(1, 58, 99, 0.14),
      0 0 0 1px rgba(1, 79, 134, 0.06);
    border-top: 4px solid var(--c);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .tl-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 18px 44px rgba(1, 58, 99, 0.2),
      0 0 0 1px rgba(1, 79, 134, 0.08);
  }

  .tl-card-top {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    justify-content: var(--align, flex-start);
  }

  .tl-item.left .tl-card-top {
    justify-content: flex-end;
  }
  .tl-item.right .tl-card-top {
    justify-content: flex-start;
  }

  .tl-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--c) 14%, white);
    color: var(--c);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .tl-tag {
    display: inline-block;
    padding: 4px 10px;
    font-size: 11.5px;
    font-weight: 600;
    border-radius: 8px;
    background: color-mix(in srgb, var(--c) 12%, white);
    color: var(--c);
    letter-spacing: 0.02em;
  }

  .tl-card h3 {
    margin: 0 0 8px 0;
    font-size: 17px;
    font-weight: 700;
    color: #013a63;
    line-height: 1.3;
  }

  .tl-card p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.6;
    color: #425466;
  }

  .tl-card p + p {
    margin-top: 8px;
  }

  /* Descrizione lunga troncata a 4 righe con sfumatura */
  .tl-desc.clamped {
    max-height: calc(13.5px * 1.6 * 4);
    overflow: hidden;
    -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
    mask-image: linear-gradient(180deg, #000 60%, transparent);
  }

  .tl-more {
    margin-top: 10px;
    padding: 0;
    background: none;
    border: none;
    color: var(--c);
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }

  .tl-more:hover {
    text-decoration: underline;
  }

  /* Animazione in/out allo scroll (classe "in" gestita dall'action reveal) */
  .tl-item .tl-card,
  .tl-item .tl-date-pill,
  .tl-item .tl-marker {
    opacity: 0;
    transition:
      opacity 0.6s ease,
      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .tl-item.left .tl-card,
  .tl-item.right .tl-date-pill {
    transform: translateX(-60px);
  }

  .tl-item.right .tl-card,
  .tl-item.left .tl-date-pill {
    transform: translateX(60px);
  }

  .tl-item .tl-marker {
    transform: scale(0.4);
  }

  .tl-item.in .tl-card,
  .tl-item.in .tl-date-pill,
  .tl-item.in .tl-marker {
    opacity: 1;
    transform: none;
  }

  .tl-item.in .tl-date-pill {
    transition-delay: 0.12s;
  }

  .tl-item.in .tl-card:hover {
    transform: translateY(-4px);
  }

  @media (prefers-reduced-motion: reduce) {
    .tl-item .tl-card,
    .tl-item .tl-date-pill,
    .tl-item .tl-marker {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }

  .end-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin: 32px auto 0 auto;
    padding: 10px 20px;
    background: linear-gradient(120deg, #eaf5fa, #d5e9f4);
    border: 1.5px solid #9fc9e2;
    border-radius: 999px;
    color: #01477a;
    font-weight: 600;
    font-size: 13px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .end-badge :global(svg) {
    color: #468faf;
  }

  /* =============== MOBILE =============== */
  @media (max-width: 820px) {
    .timeline-line {
      left: 24px;
      transform: none;
    }

    .timeline-list {
      padding-left: 56px;
    }

    .tl-item {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
    }

    .tl-marker {
      position: absolute;
      left: -56px;
      top: 22px;
      width: 36px;
      height: 36px;
      margin: 0;
    }

    .tl-item.left .tl-card,
    .tl-item.right .tl-card {
      grid-column: auto;
      margin: 0;
      text-align: left;
      width: 100%;
      box-sizing: border-box;
    }

    .tl-item.left .tl-date-pill,
    .tl-item.right .tl-date-pill {
      grid-column: auto;
      justify-self: flex-start;
      margin: 0;
      align-self: flex-start;
      margin-top: 0;
      order: -1;
    }

    .tl-item.left .tl-card-top,
    .tl-item.right .tl-card-top {
      justify-content: flex-start;
    }

    .timeline-dot {
      transform: translateX(-5.5px);
    }

    .tl-item.left .tl-card,
    .tl-item.right .tl-card,
    .tl-item.left .tl-date-pill,
    .tl-item.right .tl-date-pill {
      transform: translateY(32px);
    }

    .tl-item.in .tl-card,
    .tl-item.in .tl-date-pill {
      transform: none;
    }
  }

  @media (max-width: 480px) {
    .esperienze-page {
      padding: 32px 0 72px 0;
    }

    .page-head {
      padding: 16px 18px;
      gap: 12px;
      margin-bottom: 40px;
      border-radius: 18px;
    }

    .head-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
    }
    .head-icon :global(svg) {
      width: 24px;
      height: 24px;
    }

    .head-text h1 {
      font-size: 20px;
    }
    .head-text p {
      font-size: 12.5px;
    }

    .tl-card {
      padding: 18px 18px;
      border-radius: 16px;
    }

    .tl-card h3 {
      font-size: 15.5px;
    }

    .tl-card p {
      font-size: 13px;
    }
  }
</style>
