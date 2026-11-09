<script>
  import MockUp from "../project/mockup.png";
  import Mockup_Infinito from "../project/mockup_app_infinito.png";
  import {
    FolderGit2,
    Undo2,
    Smartphone,
    Code,
    Globe,
    Layers,
    Clapperboard,
    Drone,
    Camera,
    Telescope,
    Film,
    Sparkles,
  } from "lucide-svelte";

  // Ogni progetto alterna automaticamente: foto | testo  →  testo | foto
  const projects = [
    {
      title: "App del Planetario di Torino",
      category: "Progetto ITS",
      icon: Telescope,
      color: "#468faf",
      media: { type: "image", src: Mockup_Infinito, alt: "Mockup app Planetario Infinito" },
      desc: "In questo progetto svolto durante il mio percorso di studi in ITS ho partecipato insieme al mio team nello sviluppo di un'applicazione del planetario di Torino.",
      chips: [
        { label: "Android", icon: Smartphone },
        { label: "Kotlin", icon: Code },
        { label: "Mobile Developer", icon: Layers },
      ],
    },
    {
      title: "Web App sulla storia della mafia",
      category: "Istituto tecnico",
      icon: Globe,
      color: "#014f86",
      media: { type: "image", src: MockUp, alt: "Mockup web app" },
      desc: "In questo progetto sviluppato durante l'ultimo anno dell'istituto tecnico ho creato un <b>sito web / Web App</b> che racconta tutte le storie di mafia che ho potuto studiare negli anni.",
      chips: [
        { label: "Sviluppo Siti", icon: Globe },
        { label: "Web Developer", icon: Code },
      ],
    },
    {
      title: "Riprese aeree con drone",
      category: "Video making",
      icon: Clapperboard,
      color: "#52b69a",
      media: {
        type: "video",
        src: "https://www.youtube.com/embed/PrjWJGPTbNY?si=LYbedT6awpL2Tivh",
        alt: "Video riprese con drone",
      },
      desc: "Ho effettuato riprese video con un drone DJI Mini 2 e ho curato il montaggio dei video.",
      chips: [
        { label: "Video Editor", icon: Film },
        { label: "Riprese con Drone", icon: Drone },
        { label: "DJI Mini 2", icon: Camera },
      ],
    },
  ];

  // Aggiunge/rimuove la classe "in" quando l'elemento entra/esce dal viewport
  function reveal(node) {
    const observer = new IntersectionObserver(
      ([entry]) => node.classList.toggle("in", entry.isIntersecting),
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }

  const pad = (n) => String(n).padStart(2, "0");
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
  />
</svelte:head>

<section class="project-page">
  <a class="back" href="/" aria-label="Torna alla home">
    <Undo2 size={24} />
  </a>

  <div class="page-head" use:reveal>
    <div class="head-icon">
      <FolderGit2 size={28} />
    </div>
    <div class="head-text">
      <h1>I MIEI PROGETTI</h1>
      <p>App, siti web e video: una selezione dei lavori a cui ho partecipato</p>
    </div>
    <div class="head-count">
      <span>{pad(projects.length)}</span>
      progetti
    </div>
  </div>

  <div class="list">
    {#each projects as p, i}
      <article
        class="project"
        class:reverse={i % 2 === 1}
        style="--c: {p.color}"
        use:reveal
      >
        <div class="media">
          <div class="media-frame">
            {#if p.media.type === "video"}
              <iframe
                src={p.media.src}
                title={p.media.alt}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              />
            {:else}
              <img src={p.media.src} alt={p.media.alt} loading="lazy" />
            {/if}
          </div>
          <div class="media-blob" />
        </div>

        <div class="content">
          <div class="content-top">
            <span class="index">{pad(i + 1)}</span>
            <span class="category">
              <svelte:component this={p.icon} size={16} />
              {p.category}
            </span>
          </div>

          <h2>{p.title}</h2>
          <p class="desc">{@html p.desc}</p>

          <ul class="chips">
            {#each p.chips as chip, j}
              <li class="chip" style="--d: {0.35 + j * 0.08}s">
                <span class="chip-icon">
                  <svelte:component this={chip.icon} size={15} />
                </span>
                {chip.label}
              </li>
            {/each}
          </ul>
        </div>
      </article>
    {/each}
  </div>

  <div class="end-badge" use:reveal>
    <Sparkles size={18} />
    <span>Altri progetti in arrivo</span>
  </div>
</section>

<style>
  .project-page {
    width: min(1140px, 92vw);
    margin: 0 auto;
    padding: 56px 0 96px 0;
    font-family: "Poppins", sans-serif;
    overflow-x: clip;
  }

  /* ---------- Pulsante indietro (solo mobile) ---------- */
  .back {
    display: none;
  }

  /* ---------- Intestazione ---------- */
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
    margin-bottom: 72px;
    opacity: 0;
    transform: translateY(-30px);
    transition:
      opacity 0.6s ease,
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .page-head:global(.in) {
    opacity: 1;
    transform: none;
  }

  .page-head::after {
    content: "";
    position: absolute;
    right: -60px;
    top: -60px;
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, rgba(127, 255, 212, 0.28) 0%, transparent 65%);
    pointer-events: none;
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

  .head-text {
    flex: 1;
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

  .head-count {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.75);
    padding-left: 22px;
    border-left: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 1;
  }

  .head-count span {
    font-size: 28px;
    font-weight: 800;
    color: #7fffd4;
    line-height: 1.1;
  }

  /* ---------- Lista progetti ---------- */
  .list {
    display: flex;
    flex-direction: column;
    gap: 96px;
  }

  .project {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    align-items: center;
    gap: 56px;
  }

  /* Ordine inverso: testo a sinistra, foto a destra */
  .project.reverse .media {
    order: 2;
  }

  /* ---------- Media ---------- */
  .media {
    position: relative;
  }

  .media-frame {
    position: relative;
    z-index: 1;
    border-radius: 22px;
    overflow: hidden;
    background: #ffffff;
    aspect-ratio: 16 / 10;
    box-shadow:
      0 20px 50px rgba(1, 58, 99, 0.22),
      0 0 0 1px rgba(1, 79, 134, 0.08);
    transition:
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.4s ease;
  }

  .media-frame img,
  .media-frame iframe {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .media:hover .media-frame {
    transform: translateY(-6px);
    box-shadow:
      0 28px 60px rgba(1, 58, 99, 0.28),
      0 0 0 1px rgba(1, 79, 134, 0.1);
  }

  .media:hover .media-frame img {
    transform: scale(1.04);
  }

  /* Forma decorativa dietro l'immagine, nel colore del progetto */
  .media-blob {
    position: absolute;
    inset: 18px -18px -18px 18px;
    border-radius: 26px;
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--c) 55%, white),
      color-mix(in srgb, var(--c) 15%, white)
    );
    z-index: 0;
  }

  .project.reverse .media-blob {
    inset: 18px 18px -18px -18px;
  }

  /* ---------- Contenuto ---------- */
  .content-top {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
  }

  .index {
    font-size: 44px;
    font-weight: 800;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 2px var(--c);
    letter-spacing: 0.02em;
  }

  .category {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 999px;
    background: color-mix(in srgb, var(--c) 12%, white);
    color: var(--c);
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .content h2 {
    margin: 0 0 12px 0;
    font-size: 26px;
    font-weight: 800;
    color: #013a63;
    line-height: 1.25;
    position: relative;
    padding-bottom: 14px;
  }

  .content h2::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 56px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--c), #7fffd4);
  }

  .desc {
    margin: 0 0 22px 0;
    font-size: 15px;
    line-height: 1.7;
    color: #425466;
  }

  .desc :global(b) {
    color: #013a63;
  }

  /* ---------- Chip ---------- */
  .chips {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    user-select: none;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px 6px 6px;
    border-radius: 999px;
    background: #ffffff;
    border: 1.5px solid color-mix(in srgb, var(--c) 35%, white);
    color: #013a63;
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0 6px 16px rgba(1, 58, 99, 0.08);
    cursor: default;
  }

  .chip-icon {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--c) 14%, white);
    color: var(--c);
    transition:
      background 0.25s ease,
      color 0.25s ease;
  }

  .chip:hover {
    transform: translateY(-3px);
    background: var(--c);
    border-color: var(--c);
    color: #ffffff;
    box-shadow: 0 10px 22px color-mix(in srgb, var(--c) 40%, transparent);
  }

  .chip:hover .chip-icon {
    background: rgba(255, 255, 255, 0.22);
    color: #ffffff;
  }

  /* ---------- Animazione ingresso dall'esterno allo scroll ---------- */
  /* --dir: 1 = foto a sinistra, -1 = foto a destra; --shift: distanza di ingresso */
  .project {
    --dir: 1;
    --shift: 120px;
    --tilt: 3deg;
  }
  .project.reverse {
    --dir: -1;
  }

  .media,
  .content > :global(*:not(.chips)) {
    opacity: 0;
    transition:
      opacity 0.7s ease,
      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* Foto a sinistra entra da sinistra, testo da destra (e viceversa) */
  .media {
    transform: translateX(calc(var(--shift) * var(--dir) * -1))
      rotate(calc(var(--tilt) * var(--dir) * -1));
  }
  .content > :global(*:not(.chips)) {
    transform: translateX(calc(var(--shift) * var(--dir)));
  }

  .chip {
    opacity: 0;
    transform: translateY(20px) scale(0.85);
    transition:
      opacity 0.6s ease,
      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.25s ease,
      background 0.25s ease,
      color 0.25s ease,
      border-color 0.25s ease;
  }

  .project:global(.in) .media,
  .project:global(.in) .content > :global(*:not(.chips)),
  .project:global(.in) .chip {
    opacity: 1;
    transform: none;
  }

  /* Ingresso a cascata */
  .project:global(.in) .content > :global(.content-top) {
    transition-delay: 0.08s;
  }
  .project:global(.in) .content > :global(h2) {
    transition-delay: 0.16s;
  }
  .project:global(.in) .content > :global(.desc) {
    transition-delay: 0.24s;
  }
  .project:global(.in) .chip {
    transition-delay: var(--d), var(--d), 0s, 0s, 0s, 0s;
  }
  .project:global(.in) .chip:hover {
    transform: translateY(-3px);
    transition-delay: 0s;
    transition-duration: 0.25s;
  }

  /* ---------- Badge finale ---------- */
  .end-badge {
    display: flex;
    width: max-content;
    align-items: center;
    gap: 10px;
    margin: 88px auto 0 auto;
    padding: 10px 20px;
    background: linear-gradient(120deg, #eaf5fa, #d5e9f4);
    border: 1.5px solid #9fc9e2;
    border-radius: 999px;
    color: #01477a;
    font-weight: 600;
    font-size: 13px;
    opacity: 0;
    transform: translateY(30px);
    transition:
      opacity 0.6s ease,
      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .end-badge:global(.in) {
    opacity: 1;
    transform: none;
  }

  .end-badge :global(svg) {
    color: #468faf;
  }

  @media (prefers-reduced-motion: reduce) {
    .page-head,
    .media,
    .content > :global(*),
    .chip,
    .end-badge {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }

  /* =============== TABLET =============== */
  @media (max-width: 900px) {
    .project {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    /* Su schermi stretti foto sempre sopra il testo */
    .project.reverse .media {
      order: 0;
    }

    .list {
      gap: 80px;
    }
  }

  /* =============== MOBILE =============== */
  @media (max-width: 480px) {
    .project-page {
      padding: 16px 0 72px 0;
    }

    .back {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      position: sticky;
      top: 12px;
      z-index: 10;
      margin-bottom: 16px;
      border-radius: 14px;
      background: #52b69a;
      color: #013a63;
      box-shadow: 0 8px 22px rgba(1, 58, 99, 0.3);
    }

    .page-head {
      padding: 16px 18px;
      gap: 12px;
      margin-bottom: 48px;
      border-radius: 18px;
    }

    .head-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
    }

    .head-text h1 {
      font-size: 20px;
    }

    .head-text p {
      font-size: 12.5px;
    }

    .head-count {
      display: none;
    }

    .list {
      gap: 64px;
    }

    .project {
      gap: 32px;
    }

    .media-blob,
    .project.reverse .media-blob {
      inset: 12px -10px -12px 10px;
    }

    /* Movimento più contenuto su mobile */
    .project {
      --shift: 60px;
      --tilt: 2deg;
    }

    .index {
      font-size: 36px;
    }

    .content h2 {
      font-size: 21px;
    }

    .desc {
      font-size: 14px;
    }
  }
</style>
