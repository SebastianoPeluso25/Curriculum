<script>
  export let showModal;
  let dialog; 

  $: if (dialog && showModal) dialog.showModal();
</script>

<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <div on:click|stopPropagation>
	<span class="material-symbols-outlined cancelButton" autofocus on:click={() => dialog.close()}>
		close
	</span>
    <slot name="header" />
    
    <slot />
  </div>
</dialog>

<style>
  dialog {
    max-width: 32em;
    border: none;
    padding: 0;
    margin-top: 20%;
    background-color: white;
    border-radius: 20px;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
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

  .cancelButton{
	font-size: 40px;
	margin-bottom: 10px;
	color: white;
	background-color: red;
	font-weight: 600;
	border-radius: 50%;
	float: right;
  }
</style>
