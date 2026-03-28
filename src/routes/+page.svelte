<script>
  import Download from "../lib/components/search_competence/download.svelte";
  import Modal2 from "../lib/components/search_competence/modalDownload.svelte";
  import URL_cv from "$lib/Curriculum_Vitae_Sebastiano_Peluso.pdf";
  import "../lib/style/home/home-style.css";
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
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Protest+Riot&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="data">
  <div class="container">

    <div class="item">
      <div class="icon">
        <MapPin />
      </div>
      <div class="text">
        <span>Torino, Italia</span>
      </div>
    </div>

    <div class="item">
      <div class="icon">
        <Phone />
      </div>
      <div class="text">
        <span>+39 </span>
      </div>
    </div>

    <div class="item">
      <div class="icon">
        <Mail />
      </div>
      <div class="text">
        <span></span>
      </div>
    </div>

  </div>

  <div class="container">
    <div class="item">
      <div class="icon">
        <a target="_blank" href="https://www.linkedin.com/in/sebastiano-peluso">
          <SocialIcons network="linkedin" />
        </a>
      </div>
      <div class="text"></div>
    </div>
    <div class="item">
      <div class="icon">
        <Cake />
      </div>
      <div class="text"></div>
    </div>
  </div>
</div>
<hr />
<div class="CV">
  <h2>Scarica qui il CV</h2>
  <Download file={Cv} fileurl={URL_cv} />
</div>

<hr />

<hr />
<div class="Project">
  <a href="/project"><div class="my-project">I miei progetti</div></a>
</div>

<hr />

<div class="presentazione">
  <h2>PRESENTAZIONE</h2>

  <p>
    Studente presso ITS ICT Mobile App Developer &#128241; | Informatica |
    Editor Video &#127916;| Dji mini 2 | Appassionato di televisione &#128250;
    &#128253; | VIDEO EDITOR | Web Developer 👨‍💻 | Front-end | siti web |
    <br /><br />
    Diplomato con articolazione Informatica e telecomunicazione. Mi piace il mondo
    della programmazione web con html, css e javascript nella creazione di siti web.
    Sono un ragazzo solare, molto creativo e mi impegno sempre per portare a termine
    i miei progetti. Mi piace il mondo del web-developer / web-designer &#128396;
    e ho il desiderio di imparare e di ampliare le mie esperienze.
    <br /><br />
    E' sono appassionato al mondo del video Editor e alle riprese con droni &#127909;.
  </p>
</div>

<hr />

<div class="formazione">
  <h2>TITOLI DI STUDIO</h2>

  <div class="item">
    <h3>
      Diploma di perito informatico ( 2019 – 2024 ) <span
        class="material-symbols-outlined">school</span
      >
    </h3>
    <p>Presso l’Istituto Internazionale Edoardo Agnelli di Torino</p>
  </div>
</div>

<hr />