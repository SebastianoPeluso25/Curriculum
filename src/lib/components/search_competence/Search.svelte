<script>
  export let searchTerm;
</script>

<div id="search-input-cont">
  <span class="material-symbols-outlined"> search </span>
  <input
    type="text"
    id="search-field"
    placeholder="Cerca una competenza"
    autocomplete="off"
    bind:value={searchTerm}
    on:input
  />
</div>

<style>
  @media (min-width: 480px) {
    #search-input-cont {
      display: flex;
      flex-direction: row;
      padding: 5px;
      background-color: #014f86;
      border-radius: 6px;
      width: 40%;
      display: flex;
      align-items: center;
      margin: 0 0 0 10px;
    }

	.material-symbols-outlined{
		color: #ffffff;
		font-size: 30px;
	}

    #search-field {
      width: 100%;
      font-size: 1.3rem;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 8px;
      margin: 0 10px 0;
    }
  }

  @media (max-width: 480px) {
    #search-input-cont {
	  display: flex;
      flex-direction: row;
      padding: 5px;
      background-color: #014f86;
      border-radius: 6px;
      width: 80%;
      display: flex;
      align-items: center;
      margin: 0 0 0 10px;
    }

	.material-symbols-outlined{
		color: #ffffff;
		font-size: 30px;
	}

    #search-field {
      width: 100%;
      font-size: 1.3rem;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 8px;
      margin: 0 10px 0;
    }
  }
</style>
