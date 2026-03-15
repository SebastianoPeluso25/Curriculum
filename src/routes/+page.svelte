<script>
  import Download from "../lib/components/search_competence/download.svelte";
  import Modal2 from "../lib/components/search_competence/modalDownload.svelte";
  import URL_cv from "$lib/Curriculum_Vitae_Sebastiano_Peluso.pdf";
  import "../lib/style/home/home-style.css";

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
  <div class="box">
    <div class="icon">
      <span class="material-symbols-outlined">location_on</span>
      <span class="material-symbols-outlined">call</span>
      <span class="material-symbols-outlined">mail</span>
    </div>
    <div class="testo">
      <span>Torino, Italia</span>
      <span>+39 </span>
      <span><a href="mailto:sebastianopeluso27@gmail.com"></a></span>
    </div>
  </div>
  <div class="box">
    <div class="icon">
      <span class="fa fa-linkedin-square"></span>
      <span class="fa fa-birthday-cake"></span>
      <span class="material-symbols-outlined"></span>
    </div>
    <div class="testo">
      <span
        ><a target="_blank" href="https://www.linkedin.com/in/sebastiano-peluso"
          >Linkedin Profile</a
        ></span
      >
      <span><!-- 25 / 02 / 2005 --></span>
      <span></span>
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

<style>
  
</style>
