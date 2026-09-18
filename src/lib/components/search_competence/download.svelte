<script>
	import ModalDownload from "./modalDownload.svelte";
    import { db } from "../../firebase.js";
    import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
    import { onMount } from "svelte";

    export let fileurl;
    export let file;

    let bool = 0;
    let now = new Date()

   export let showModal = false;
    
    function Download() {
        const downloadLink = document.createElement("a");
      downloadLink.href = fileurl;
      downloadLink.download = file;
      downloadLink.click();
      bool = 1;
    }

  let name = '';
  let email = '';
  export let users = [];
  let type = '';
  let nomeAzienda = '';
  let successMessage = '';
 
  async function submitForm() {

  try {
    const response = await fetch("http://192.168.1.199/xampp-api/inserisci.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        type,
        nomeAzienda
      })
    });

    if (!response.ok) {
      throw new Error("Errore dal server");
    }

    const result = await response.json();
    successMessage = 'Grazie! CV scaricato con successo !';
    Download();

    name = '';
    email = '';
    type = '';
    nomeAzienda = '';
  } catch (e) {
    console.error("Errore durante l'invio: ", e);
  }
}

    </script>

    {#if bool == 0}
        <button class="download-trigger" on:click={()=>showModal = true}>
            <span class="material-symbols-outlined">download</span>
            <span>Scarica CV</span>
        </button>
    {:else if bool == 1 }
        <div class="thanks-box">
            <span class="material-symbols-outlined">check_circle</span>
            <p>Grazie per il download!</p>
        </div>
    {/if}

    <ModalDownload bind:showModal={showModal}>
        <div class="form-wrapper">
            <form on:submit|preventDefault={submitForm} class="cv-form">
                <div class="field">
                    <label for="name">
                        <span class="material-symbols-outlined">person</span>
                        Nome e Cognome
                    </label>
                    <input id="name" bind:value={name} type="text" placeholder="Inserisci il tuo nome" required />
                </div>

                <div class="field">
                    <label for="email">
                        <span class="material-symbols-outlined">mail</span>
                        Indirizzo Email
                    </label>
                    <input id="email" bind:value={email} type="email" placeholder="tuo@email.com" required />
                </div>

                <div class="field">
                    <label for="type-select">
                        <span class="material-symbols-outlined">apartment</span>
                        Sei un privato o un'azienda?
                    </label>
                    <div class="select-wrapper">
                        <select id="type-select" bind:value={type} required>
                            <option value="" disabled selected>Seleziona un'opzione</option>
                            <option value="privato">Privato</option>
                            <option value="azienda">Azienda</option>
                        </select>
                        <span class="material-symbols-outlined select-arrow">expand_more</span>
                    </div>
                </div>

                {#if type == 'azienda'}
                <div class="field azienda-field">
                    <label for="nomeazienda">
                        <span class="material-symbols-outlined">business</span>
                        Nome dell'Azienda
                    </label>
                    <input id="nomeazienda" type="text" placeholder="Nome della tua azienda" bind:value={nomeAzienda} required />
                </div>
                {/if}

                <button type="submit" class="submit-btn">
                    <span class="material-symbols-outlined">download</span>
                    Scarica il CV
                </button>
            </form>

            {#if successMessage}
                <div class="success-msg">
                    <span class="material-symbols-outlined">check_circle</span>
                    <p>{successMessage}</p>
                </div>
            {/if}
        </div>
    </ModalDownload>

    <svelte:head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
    </svelte:head>

    <style>
        .download-trigger {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 14px 28px;
            border: none;
            border-radius: 16px;
            background: linear-gradient(120deg, #01477a, #468faf);
            color: white;
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 6px 20px rgba(1, 71, 122, 0.3);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .download-trigger .material-symbols-outlined {
            font-size: 22px;
        }

        .download-trigger:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(1, 71, 122, 0.4);
        }

        .download-trigger:active {
            transform: translateY(0);
        }

        .thanks-box {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 14px 22px;
            background: #eaf5fa;
            border: 1.5px solid #b9d9e8;
            border-radius: 16px;
            color: #013a63;
        }

        .thanks-box .material-symbols-outlined {
            color: #0ea570;
            font-size: 24px;
        }

        .thanks-box p {
            margin: 0;
            font-family: "Poppins", sans-serif;
            font-size: 14px;
            font-weight: 600;
        }

        .form-wrapper {
            padding: 24px 26px 26px 26px;
        }

        .cv-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .field label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-family: "Poppins", sans-serif;
            font-size: 13px;
            font-weight: 600;
            color: #013a63;
            letter-spacing: 0.01em;
        }

        .field label .material-symbols-outlined {
            font-size: 18px;
            color: #468faf;
        }

        .field input,
        .select-wrapper select {
            width: 100%;
            padding: 13px 14px;
            font-family: "Poppins", sans-serif;
            font-size: 14px;
            color: #2c3e50;
            background: #f5fafd;
            border: 1.5px solid #d4eaf5;
            border-radius: 12px;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }

        .field input::placeholder {
            color: #8faabe;
        }

        .field input:focus,
        .select-wrapper select:focus {
            border-color: #468faf;
            background: #ffffff;
            box-shadow: 0 0 0 3px rgba(70, 143, 175, 0.14);
        }

        .select-wrapper {
            position: relative;
        }

        .select-wrapper select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            cursor: pointer;
            padding-right: 44px;
        }

        .select-wrapper .select-arrow {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #468faf;
            font-size: 20px;
            pointer-events: none;
            transition: transform 0.2s ease;
        }

        .select-wrapper select:focus ~ .select-arrow {
            transform: translateY(-50%) rotate(180deg);
        }

        .select-wrapper select option {
            color: #2c3e50;
        }

        .azienda-field {
            animation: slideDown 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-8px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .submit-btn {
            margin-top: 6px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 15px 22px;
            border: none;
            border-radius: 14px;
            background: linear-gradient(120deg, #01477a 0%, #013a63 50%, #014f86 100%);
            color: white;
            font-family: "Poppins", sans-serif;
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 0.02em;
            cursor: pointer;
            box-shadow:
                0 6px 22px rgba(1, 58, 99, 0.35),
                inset 0 1px 0 rgba(255, 255, 255, 0.12);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            position: relative;
            overflow: hidden;
        }

        .submit-btn::before {
            content: "";
            position: absolute;
            inset: -50%;
            background: radial-gradient(
                circle,
                rgba(127, 255, 212, 0.25) 0%,
                transparent 60%
            );
            opacity: 0;
            transition: opacity 0.35s;
        }

        .submit-btn:hover::before {
            opacity: 1;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow:
                0 10px 30px rgba(1, 58, 99, 0.42),
                inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .submit-btn:active {
            transform: translateY(0);
        }

        .submit-btn .material-symbols-outlined {
            font-size: 22px;
            position: relative;
            z-index: 1;
        }

        .success-msg {
            margin-top: 18px;
            padding: 14px 16px;
            background: #e6f7ef;
            border: 1.5px solid #9ddfc0;
            border-radius: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideDown 0.3s ease;
        }

        .success-msg .material-symbols-outlined {
            font-size: 24px;
            color: #0ea570;
            flex-shrink: 0;
        }

        .success-msg p {
            margin: 0;
            font-family: "Poppins", sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #065f46;
        }

        @media (max-width: 480px) {
            .form-wrapper {
                padding: 20px 18px 22px 18px;
            }

            .download-trigger {
                padding: 12px 22px;
                font-size: 15px;
            }

            .submit-btn {
                padding: 14px 20px;
                font-size: 14.5px;
            }
        }
    </style>
