<script>
	import { onMount } from 'svelte';
	
	import { bookData } from '../../lib/competenceData';
			
	import Search from '../../lib/components/search_competence/Search.svelte';
	import Item from '../../lib/components/search_competence/item.svelte';
	import NoResults from '../../lib/components/search_competence/noresult.svelte';
	
	
	let languages = []; // menu built from bookData
	let selectedLang = ""; //  menu selection	

	
	
	const getLanguages = () => {
		for (let bookObj of bookData) {
			if (!languages.includes(bookObj.icon)) {
				languages = [...languages, bookObj.icon]
			}
		}
		languages = languages.sort();
	}	
	onMount(() => getLanguages());
	
	
	// Query results
	let filteredBooks = [];
	
	// For Select Menu
	$: if (selectedLang) getBooksByLang();
	$: console.log(filteredBooks, selectedLang);
	
	const getBooksByLang = () => {
		// resets search input if menu is being used
		searchTerm = ""; 
		
		if (selectedLang === "all") {
			return filteredBooks = [];
		} 
		return filteredBooks = bookData.filter(book => book.language === selectedLang);

	}	
	
	// For Search Input
	let searchTerm = "";
	// resets language menu if search input is used
	$: if (searchTerm) selectedLang = "";
	
	const searchBooks = () => {	
		return filteredBooks = bookData.filter(book => {
			let bookTitle = book.title.toLowerCase();
			return bookTitle.includes(searchTerm.toLowerCase())
		});
	}
</script>





<div class="container">
	<div class="searchbar">
		<Search bind:searchTerm on:input={searchBooks} />
	</div>

	<div class="card">
		{#if searchTerm && filteredBooks.length === 0}
		<NoResults />		
	{:else if filteredBooks.length > 0}
		{#each filteredBooks as {title, icon}}
			<Item {title} {icon}/>
		{/each}	
	{:else}
		{#each bookData as {title, icon}}
			<Item {title} {icon} />
		{/each}	
	{/if}
	</div>


</div>




<style>

	@media(min-width: 480px){
		.container > .searchbar {
		width: 100%;
		display: flex;
		justify-content: center;
		
		
	}
	
	
	.container {
		width: 90%;
		display: grid;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		padding: 30px;
		
		row-gap: 20px;
		
		
		
	}

	.container > .card{
		width: 90%;
		margin: 10px;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		row-gap: 20px;
	}
	}



	/**MOBILE*/

	@media(max-width:480px){
		.container > .searchbar {
		width: 100%;
		display: flex;
		justify-content: center;
		
		
	}
	
	
	.container {
		width: 90%;
		display: grid;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		padding: 10px;
		
		row-gap: 20px;
		
		
		
	}

	.container > .card{
		width: 90%;
		margin: 10px;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		row-gap: 20px;
	}
	}
	
	


</style>