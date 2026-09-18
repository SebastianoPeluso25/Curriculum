<script>
	export let showModal = false;

	let dialog;

	$: if (dialog && showModal) dialog.showModal();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
</svelte:head>


<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>

	<div on:click|stopPropagation>
		<div class="modal-header">
			<div class="header-info">
				<div class="header-icon">
					<span class="material-symbols-outlined">description</span>
				</div>
				<div class="header-text">
					<h3>Scarica il CV</h3>
					<p>Compila il form per ottenere il mio Curriculum Vitae</p>
				</div>
			</div>
			<button class="close-btn" aria-label="Chiudi" on:click={() => dialog.close()}>
				<span class="material-symbols-outlined">close</span>
			</button>
		</div>
		<slot />
	</div>
</dialog>

<style>
	dialog {
		border: none;
		padding: 0;
		width: min(560px, 92vw);
		border-radius: 22px;
		background: transparent;
		overflow: visible;
		margin: auto;
	}

	dialog::backdrop {
		background: rgba(1, 42, 73, 0.55);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
	}

	dialog > div {
		background: #ffffff;
		border-radius: 22px;
		box-shadow:
			0 30px 80px rgba(1, 42, 73, 0.35),
			0 0 0 1px rgba(1, 79, 134, 0.08);
		overflow: hidden;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 16px;
		padding: 22px 24px 18px 24px;
		background: linear-gradient(120deg, #01477a 0%, #013a63 60%, #012a49 100%);
		color: white;
		position: relative;
	}

	.modal-header::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, #7fffd4, #468faf, #7fffd4);
		background-size: 200% 100%;
		animation: shimmer 3s ease-in-out infinite;
	}

	@keyframes shimmer {
		0%, 100% { background-position: 0% 0; }
		50% { background-position: 200% 0; }
	}

	.header-info {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.header-icon {
		width: 46px;
		height: 46px;
		border-radius: 14px;
		background: rgba(127, 255, 212, 0.18);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #7fffd4;
		flex-shrink: 0;
	}

	.header-icon .material-symbols-outlined {
		font-size: 26px;
	}

	.header-text h3 {
		margin: 0 0 3px 0;
		font-family: "Poppins", sans-serif;
		font-size: 18px;
		font-weight: 700;
		letter-spacing: 0.01em;
	}

	.header-text p {
		margin: 0;
		font-family: "Poppins", sans-serif;
		font-size: 12.5px;
		color: rgba(255, 255, 255, 0.82);
		line-height: 1.4;
	}

	.close-btn {
		width: 38px;
		height: 38px;
		border-radius: 12px;
		border: none;
		background: rgba(255, 255, 255, 0.12);
		color: white;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: background 0.2s ease, transform 0.2s ease;
	}

	.close-btn:hover {
		background: rgba(255, 255, 255, 0.24);
		transform: rotate(90deg);
	}

	.close-btn .material-symbols-outlined {
		font-size: 20px;
	}

	dialog[open] {
		animation: modalIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes modalIn {
		from {
			opacity: 0;
			transform: translateY(16px) scale(0.96);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	dialog[open]::backdrop {
		animation: backdropIn 0.25s ease-out;
	}

	@keyframes backdropIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
</style>
