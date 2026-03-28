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
  }

  @media (min-width: 480px) {
    .navbar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: auto;
      position: fixed;
      overflow: auto;
      row-gap: 8px;
      height: 100vh;
      margin: auto;
    }

    .container2 {
      display: none;
    }

    .menu > .item > a {
      text-decoration: none;
      color: white;
    }

    .menu {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
    }

    .navbar > footer {
      display: flex;
      justify-content: flex-start;
    }

    footer > .chip {
      padding: 4px;
      width: max-content;
      height: max-content;
      background-color: aquamarine;
      border-radius: 10px;
      font-weight: bold;
      color: #014f86;
      font-size: 16px;
      margin: 10px;
    }

    .menu > .item {
      display: grid;
      grid-template-columns: 30px 1fr;
      margin-left: 10px;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      font-size: 16px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: #ffffff;
      border-radius: 6px 0 0 6px;
      cursor: pointer;
      transition:
        background-color 0.2s ease,
        border 0.2s ease;
    }

    /* Hover normale */
    .menu > .item:hover {
      background-color: #2a6f97;
    }

    /* Item attivo */
    .menu > .item.active {
      background-color: #468faf;
      border-right: 6px solid #ffffff;
    }

    /* Hover su item attivo */
    .menu > .item.active:hover {
      background-color: #2a6f97;
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
      background-color: #014f86;
    }

    .Logo > img {
      width: 100%;
      border-radius: 10px;
    }

    .container > .left > .navbar > .Logo {
      color: white;
      text-align: center;
      margin: auto;
      width: 80%;
      padding: 10px;
    }

    .container > .right > .containerRight {
      width: 95%;
      border: 1px solid black;
      box-shadow: 1px 1px 6px 2px #014f86;
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
      background-color: #014f86;
      row-gap: 8px;
      border-radius: 20px;
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
    }

    .container2 > button {
      width: 100%;
      margin: auto;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      border: none;
      background-color: #014f86;
      border-radius: 8px;
      color: white;
    }

    footer > .chip {
      padding: 4px;
      width: max-content;
      height: max-content;
      background-color: aquamarine;
      border-radius: 10px;
      font-weight: bold;
      color: #014f86;
      font-size: 16px;
      margin: 10px;
    }

    .container2 > button > .material-symbols-outlined {
      font-size: 60px;
      border: none;
      background-color: #014f86;
      border-radius: 8px;
      color: white;
    }

    .container2 > .right > .containerRight {
      width: 95%;
      border: 1px solid black;
      box-shadow: 1px 1px 6px 2px #014f86;
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
      color: white;
    }

    .menu > footer {
      text-align: center;
      color: white;
    }

    .menu > .item {
      display: grid;
      justify-items: center;
      grid-template-columns: 10px 2fr;
      margin-left: 10px;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      font-size: 16px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: white;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
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
      background-color: #014f86;
    }

    .container > .right {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: start;
    }
  }
</style>
