<script>
  import { scale } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  import "framework7-icons";
  export let title;
  export let icon;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Geo:ital@0;1&display=swap" rel="stylesheet">

  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</svelte:head>

<section class="book" transition:scale={{ duration: 1000, easing: expoInOut }}>
  <div class="item">
    <span class="material-symbols-outlined">
      {icon}
    </span>
    <p>{title}</p>
  </div>
</section>

<style>
  .book {
    width: 85%;
    contain: content;
	border: 2px solid #014f86;
	box-shadow:  6px 8px 0px 1px #014f86;
    border-radius: 8px;
    margin: auto;
    background-color: #fbfcfd;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  font-family: "Geo", sans-serif;
    font-size: 4vh;
	color: #014f86;
  }

  .item > .material-symbols-outlined {
    font-size: 100px;
    color: #bbe7b2;
	
  }
</style>
