<script>
	export let searchTerm;
</script>


<div id="search-input-cont">
	<input type="text" id="search-field" placeholder="Cerca una competenza" autocomplete="off" bind:value={searchTerm} on:input />
</div> 


<style>

	@media(min-width: 480px){
		#search-input-cont {
		width: 40%;
		display: flex;
		align-items: center;
		margin: 0 0 0 10px;
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

	@media(max-width: 480px){
		#search-input-cont {
		width: 80%;
		display: flex;
		align-items: center;
		margin: 0 0 0 10px;
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