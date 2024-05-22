<script>
	export let showModal = false; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>


<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>

	<div on:click|stopPropagation>
		<button autofocus on:click={() => dialog.close()}><span class="material-symbols-outlined">
			close
			</span></button>
		<slot />
	</div>
</dialog>

<style>

	@media(min-width:480px){
		dialog {
		width: 800px;
		height: 300px;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		margin-top: 10%;
	}

	button:hover{
		cursor: pointer;
	}

	button{
		float: right;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.699);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
		margin: auto;
		background-color: red;
		color: white;
		font-size: 20px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		border: none;
		padding: 8px;
		border-radius: 8px;
	}
	}



	@media(max-width:480px){
		dialog {
		width: 800px;
		height: 300px;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		margin-top: 10%;
	}

	button{
		float: right;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.699);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
		margin: auto;
		background-color: red;
		color: white;
		font-size: 20px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		border: none;
		padding: 8px;
		border-radius: 8px;
	}
	}
	
</style>
