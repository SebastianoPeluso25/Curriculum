<script>
  import Download from "../lib/components/search_competence/download.svelte";
  import Modal2 from "../lib/components/search_competence/modalDownload.svelte";
  import URL_cv from "$lib/Curriculum_Vitae_Sebastiano_Peluso.pdf";
  import SocialIcons from "@rodneylab/svelte-social-icons";
  import { MapPin, Mail, Phone, Cake } from "lucide-svelte";

  //let URL_cv = "./static/Curriculum_Vitae_Sebastiano_Peluso.pdf";
  let Cv = "Curriculum_Vitae_Sebastiano_Peluso.pdf";

  export let showModal;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  />
</svelte:head>

<div class="data">
  <div class="container">
    <div class="item">
      <div class="icon">
        <MapPin size={18} />
      </div>
      <div class="text">
        <span>Torino, Italia</span>
      </div>
    </div>

    <div class="item">
      <div class="icon">
        <Phone size={18} />
      </div>
      <div class="text">
        <span>+39 </span>
      </div>
    </div>

    <div class="item">
      <div class="icon">
        <Mail size={18} />
      </div>
      <div class="text">
        <span></span>
      </div>
    </div>

    <div class="item">
      <div class="icon">
        <a target="_blank" href="https://www.linkedin.com/in/sebastiano-peluso">
          <SocialIcons network="linkedin" />
        </a>
      </div>
      <div class="text"></div>
    </div>

    <!-- <div class="item">
      <div class="icon">
        <Cake size={18} />
      </div>
      <div class="text"></div>
    </div> -->
  </div>

  <div class="map">
    <iframe
      src="https://www.google.com/maps?q=Torino&output=embed"
      allowfullscreen="true"
      title="Mappa Torino"
    >
    </iframe>
  </div>
</div>

<div class="page-body">
  <div class="CV card">
    <h2>Scarica qui il CV</h2>
    <Download file={Cv} fileurl={URL_cv} />
  </div>

  <div class="Project">
    <a href="/project">
      <div class="my-project">
        <span>I miei progetti</span>
        <span class="material-symbols-outlined arrow">arrow_forward</span>
      </div>
    </a>
  </div>

  <div class="presentazione card">
    <h2>PRESENTAZIONE</h2>

    <p>
      Diplomato presso ITS ICT come Mobile App Developer &#128241; | Informatica 
      | React Developer | Web Developer 👨‍💻 | Front-end | siti web | Editor Video &#127916;|
      <br /><br />
      Diplomato con articolazione Informatica e telecomunicazione. Mi piace il mondo
      della programmazione web con html, css e javascript nella creazione di siti
      web. Sono un ragazzo solare, molto creativo e mi impegno sempre per portare
      a termine i miei progetti. Mi piace il mondo del web-developer / web-designer
      &#128396; e ho il desiderio di imparare e di ampliare le mie esperienze.
      <br /><br />
      E' sono appassionato al mondo del video Editor e alle riprese con droni &#127909;.
    </p>
  </div>

  <div class="formazione card">
    <h2>TITOLI DI STUDIO</h2>

    <div class="timeline">
      <div class="item">
        <div class="timeline-marker">
          <div class="icon">
            <span class="material-symbols-outlined">school</span>
          </div>
        </div>
        <div class="content">
          <div class="date">2024 – 2026</div>
          <h3>
            Tecnico superiore Sviluppatore software - MOBILE APP DEVELOPER – <span class="eqf-badge">V LIVELLO EQF</span>
          </h3>
          <p>Presso ITS Academy ICT Piemonte di Torino</p>
        </div>
      </div>
      <div class="item">
        <div class="timeline-marker">
          <div class="icon">
            <span class="material-symbols-outlined">school</span>
          </div>
        </div>
        <div class="content">
          <div class="date">2019 – 2024</div>
          <h3>Diploma di perito informatico</h3>
          <p>Presso l'Istituto Internazionale Edoardo Agnelli di Torino</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    font-family: "Poppins", Verdana, Geneva, Tahoma, sans-serif;
  }

  hr {
    display: none;
  }

  h2 {
    margin: 0 0 16px 0;
    color: #013a63;
    font-weight: 700;
    letter-spacing: 0.02em;
    font-size: 20px;
  }

  /* ---------- Barra contatti sempre in alto ---------- */
  .data {
    position: sticky;
    top: 14px;
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    background: linear-gradient(120deg, #01477a 0%, #013a63 60%, #012a49 100%);
    border-radius: 18px;
    padding: 16px 20px;
    margin: 14px 14px 24px 14px;
    box-shadow: 0 6px 24px rgba(1, 42, 73, 0.28);
    color: white;
  }

  .data > .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(92px, 1fr));
    gap: 10px;
    flex: 1;
  }

  .data .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 14px 8px;
    border-radius: 14px;
    text-align: center;
    min-height: 76px;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease,
      border-color 0.2s ease;
  }

  .data .item:hover {
    background-color: rgba(255, 255, 255, 0.14);
    border-color: rgba(127, 255, 212, 0.35);
    transform: translateY(-3px);
  }

  .data .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background-color: rgba(127, 255, 212, 0.18);
    color: #7fffd4;
  }

  .data .text {
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.92);
    line-height: 1.3;
  }

  .data .text:empty {
    display: none;
  }

  .data .map {
    flex-shrink: 0;
    width: 220px;
    height: 100px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  }

  .data .map > iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  /* ---------- Corpo pagina ---------- */
  .page-body {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 14px 24px 14px;
  }

  .card {
    background-color: #ffffff;
    border: 1px solid rgba(1, 79, 134, 0.1);
    border-radius: 18px;
    padding: 24px 28px;
    box-shadow: 0 4px 18px rgba(1, 79, 134, 0.1);
  }

  /* CV */
  .CV {
    text-align: center;
  }

  .Project {
    display: flex;
    justify-content: center;
  }

  /* Progetti CTA */
  .Project > a {
    display: inline-block;
    width: fit-content;
    text-decoration: none;
  }

  .my-project {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: linear-gradient(120deg, #01477a, #468faf);
    color: white;
    font-weight: 600;
    font-size: 17px;
    padding: 18px 24px;
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(1, 71, 122, 0.3);
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .my-project:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 26px rgba(1, 71, 122, 0.4);
  }

  .my-project > .arrow {
    transition: transform 0.2s ease;
  }

  .my-project:hover > .arrow {
    transform: translateX(4px);
  }

  /* Presentazione */
  .presentazione p {
    color: #2c3e50;
    line-height: 1.7;
    font-size: 15px;
    margin: 0;
  }

  /* Formazione */
  .formazione .timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 4px 0;
  }
  .formazione .timeline::before {
    content: "";
    position: absolute;
    left: 21px;
    top: 22px;
    bottom: 22px;
    width: 2px;
    background: linear-gradient(to bottom, #468faf, #b9d9e8);
    border-radius: 2px;
  }
  .formazione .item {
    position: relative;
    display: grid;
    grid-template-columns: 44px 1fr;
    gap: 14px;
    align-items: start;
  }
  .formazione .timeline-marker {
    position: relative;
    z-index: 1;
  }
  .formazione .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, #468faf, #014f86);
    color: white;
    box-shadow: 0 3px 10px rgba(1, 79, 134, 0.2);
  }
  .formazione .date {
    display: inline-block;
    margin: 0 0 5px 0;
    padding: 4px 10px;
    border-radius: 999px;
    background: #eaf5fa;
    color: #014f86;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  .formazione h3 {
    margin: 0 0 6px 0;
    color: #013a63;
    font-size: 16px;
    font-weight: 600;
  }
  .formazione p {
    margin: 0;
    color: #52667a;
    font-size: 14px;
  }

  .eqf-badge {
    display: inline-block;
    margin-left: 6px;
    padding: 3px 8px;
    border-radius: 999px;
    background: #eaf5fa;
    color: #014f86;
    font-size: 18px;
    font-weight: 700;
    vertical-align: middle;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    .data {
      position: static;
      flex-direction: column;
      align-items: stretch;
    }

    .data > .container {
      grid-template-columns: repeat(3, 1fr);
    }

    .data .map {
      width: 100%;
      height: 140px;
    }

    .card {
      padding: 18px 18px;
    }

      .eqf-badge {
    display: inline-block;
    margin-left: 6px;
    padding: 3px 8px;
    border-radius: 999px;
    background: #eaf5fa;
    color: #014f86;
    font-size: 16px;
    font-weight: 700;
    vertical-align: middle;
    white-space: nowrap;
  }
  }
</style>
