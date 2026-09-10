<script>
  import Modal from "$lib/components/search_competence/modal.svelte";
  import Logo from "../routes/img/logoBar.png";
  import { VERSION_SOFTWARE } from "$lib/version.js";
  import { page } from "$app/stores";
  import { User, Handbag } from "lucide-svelte";


  let showModal = false;
</script>

<svelte:head
  ><link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  /></svelte:head
>

<div class="container2">
  <button on:click={() => (showModal = true)}>
    {#if showModal == true}
      <span class="material-symbols-outlined"> Menu_Open </span>
    {:else}
      <span class="material-symbols-outlined"> Menu </span>
    {/if}
  </button>
  <!--navbar left mobile version-->
  <Modal bind:showModal>
    <div class="navbar">
      <div class="menu">
        <div class="item">
          <div class="icon">
            <User />
          </div>
          <a href="/">Chi sono</a>
        </div>
        <div class="item">
        <div class="icon">
            <span class="material-symbols-outlined"> </span>
          </div>
          <a href="/competenze/">Competenze</a>
        </div>
        <div class="item">
          <div class="icon">
            <Handbag />
          </div>
          <a href="/esperienze/">Esperienze</a>
        </div>
        <footer>
          <div class="chip">
            <span class="dot"></span>
            v {VERSION_SOFTWARE}
          </div>
        </footer>
      </div>
    </div>
  </Modal>

  <div class="right">
    <div class="containerRight">
      <slot />
    </div>
  </div>
</div>

<div class="container">
  <div class="left">
    <div class="navbar">
      <div class="Logo">
        <img src={Logo} alt="logo" />
      </div>
      <div class="menu">
        <div class="item" class:active={$page.url.pathname === "/"}>
          <div class="icon">
            <User />
          </div>
          <a href="/">Chi sono</a>
        </div>
        <div class="item" class:active={$page.url.pathname === "/competenze"}>
          <div class="icon">
            <span class="material-symbols-outlined"> </span>
          </div>
          <a href="/competenze/">Competenze</a>
        </div>
        <div class="item" class:active={$page.url.pathname === "/esperienze"}>
          <div class="icon">
            <Handbag />
          </div>
          <a href="/esperienze/">Esperienze</a>
        </div>
      </div>

      <footer>
        <div class="chip">
          <span class="dot"></span>
          v {VERSION_SOFTWARE}
        </div>
      </footer>
    </div>
  </div>

  <div class="right">
    <div class="containerRight">
      <slot />
    </div>
  </div>
</div>

<style>
  :global(body) {
    padding: 0;
    margin: 0;
    width: 100%;
    font-family: "Poppins", Verdana, Geneva, Tahoma, sans-serif;
  }

  @media (min-width: 480px) {
    .navbar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: auto;
      position: fixed;
      overflow: auto;
      row-gap: 12px;
      height: 100vh;
      margin: auto;
      background: linear-gradient(165deg, #01477a 0%, #013a63 55%, #012a49 100%);
      box-shadow: 4px 0 24px rgba(1, 42, 73, 0.35);
      padding-top: 10px;
    }

    .container2 {
      display: none;
    }

    .menu > .item > a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.88);
      transition: color 0.2s ease;
    }

    .menu {
      display: flex;
      flex-direction: column;
      gap: 6px;
      flex: 1;
      padding: 6px 10px 6px 0;
    }

    .navbar > footer {
      display: flex;
      justify-content: flex-start;
    }

    footer > .chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      width: max-content;
      height: max-content;
      background: linear-gradient(135deg, #7fffd4, #5be8c2);
      border-radius: 999px;
      font-weight: 600;
      color: #013a63;
      font-size: 13px;
      letter-spacing: 0.02em;
      margin: 14px;
      box-shadow: 0 2px 10px rgba(127, 255, 212, 0.35);
    }

    .chip > .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #013a63;
      display: inline-block;
    }

    .menu > .item {
      display: grid;
      grid-template-columns: 38px 1fr;
      margin-left: 10px;
      align-items: center;
      gap: 14px;
      padding: 12px 18px;
      font-size: 15px;
      font-weight: 500;
      color: #ffffff;
      border-radius: 14px 0 0 14px;
      cursor: pointer;
      position: relative;
      transition:
        background-color 0.25s ease,
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }

    .menu > .item > .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.08);
      transition:
        background-color 0.25s ease,
        transform 0.25s ease;
    }

    /* Hover normale */
    .menu > .item:hover {
      background-color: rgba(255, 255, 255, 0.08);
      transform: translateX(4px);
    }

    .menu > .item:hover > .icon {
      background-color: rgba(255, 255, 255, 0.16);
    }

    .menu > .item:hover > a {
      color: #ffffff;
    }

    /* Item attivo */
    .menu > .item.active {
      background: linear-gradient(90deg, rgba(70, 143, 175, 0.9), rgba(70, 143, 175, 0.55));
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
    }

    .menu > .item.active::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 8px;
      bottom: 8px;
      width: 4px;
      border-radius: 4px;
      background: #7fffd4;
      box-shadow: 0 0 10px rgba(127, 255, 212, 0.7);
    }

    .menu > .item.active > .icon {
      background-color: rgba(255, 255, 255, 0.22);
    }

    /* Hover su item attivo */
    .menu > .item.active:hover {
      background: linear-gradient(90deg, rgba(42, 111, 151, 0.95), rgba(42, 111, 151, 0.6));
      transform: translateX(0);
    }

    .container {
      display: grid;
      grid-template-columns: 1fr 5fr;
      height: 100vmin;
    }

    .container > .left {
      display: flex;
      width: 100%;
      flex-direction: column;
      row-gap: 30px;
      align-items: center;
      background-color: #012a49;
    }

    .Logo > img {
      width: 100%;
      border-radius: 14px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    }

    .container > .left > .navbar > .Logo {
      color: white;
      text-align: center;
      margin: auto;
      width: 78%;
      padding: 18px 10px 6px;
    }

    .container > .right > .containerRight {
      width: 95%;
      border: 1px solid rgba(1, 79, 134, 0.15);
      box-shadow: 0 4px 24px rgba(1, 79, 134, 0.25);
      border-radius: 20px;
      margin: 14px;
    }

    .container > .right {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: start;
    }
  }

  /**MOBILE VERSION*/

  @media (max-width: 480px) {
    .navbar {
      display: flex;
      flex-direction: column;
      width: 100%;
      background: linear-gradient(165deg, #01477a 0%, #013a63 55%, #012a49 100%);
      row-gap: 8px;
      border-radius: 20px;
      box-shadow: 0 4px 24px rgba(1, 42, 73, 0.35);
    }

    .container2 {
      display: grid;
      grid-template-rows: 0.5fr 4fr;
      height: 100vmax;
      width: 100%;
      margin: auto;
    }

    .menu {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
      padding-top: 6px;
    }

    .container2 > button {
      width: 100%;
      margin: auto;
      font-family: "Poppins", Verdana, Geneva, Tahoma, sans-serif;
      border: none;
      background: linear-gradient(135deg, #01477a, #013a63);
      border-radius: 12px;
      color: white;
    }

    footer > .chip {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 6px 12px;
      width: max-content;
      height: max-content;
      background: linear-gradient(135deg, #7fffd4, #5be8c2);
      border-radius: 999px;
      font-weight: 600;
      color: #013a63;
      font-size: 13px;
      margin: 10px auto;
      box-shadow: 0 2px 10px rgba(127, 255, 212, 0.35);
    }

    .chip > .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #013a63;
      display: inline-block;
    }

    .container2 > button > .material-symbols-outlined {
      font-size: 52px;
      border: none;
      background: transparent;
      border-radius: 8px;
      color: white;
    }

    .container2 > .right > .containerRight {
      width: 95%;
      border: 1px solid rgba(1, 79, 134, 0.15);
      box-shadow: 0 4px 24px rgba(1, 79, 134, 0.25);
      margin: 14px;
      border-radius: 20px;
      height: min-content;
    }

    .container2 > .right {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: start;
    }

    .menu > .item > a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.92);
    }

    .menu > footer {
      text-align: center;
      color: white;
    }

    .menu > .item {
      display: grid;
      justify-items: center;
      grid-template-columns: 30px 2fr;
      margin-left: 10px;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
      font-size: 16px;
      font-weight: 500;
      color: white;
      border-radius: 12px;
      transition: background-color 0.25s ease;
    }

    .menu > .item > .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.08);
    }

    .menu > .item:active {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .container {
      display: none;
      grid-template-columns: 1fr 3fr;
      height: 100vmax;
    }

    .container > .left {
      display: flex;
      width: 100%;
      flex-direction: column;
      row-gap: 30px;
      align-items: center;
      background-color: #012a49;
    }

    .container > .right {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: start;
    }
  }
</style>