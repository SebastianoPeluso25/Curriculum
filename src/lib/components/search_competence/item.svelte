<script>
	import { scale } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	
	import 'framework7-icons';
	export let title;
	export let icon;

	

</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>




<section class="book"
		transition:scale={{duration: 1000, easing: expoInOut}}>

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
			
			border-radius: 8px;
			box-shadow: 1px 1px 6px 2px #014f86;
			margin: auto;
			background-color: #b5e4c7;
			font-family: Verdana, Geneva, Tahoma, sans-serif;
			
		}

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			
			font-size: 25px;
			
			
			
		}



		.item > .material-symbols-outlined{
			font-size: 60px;
			
		}

	

	
</style>