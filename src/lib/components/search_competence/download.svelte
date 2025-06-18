<script>
	import ModalDownload from "./modalDownload.svelte";
    import { db } from "../../firebase.js";
    import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
    import { onMount } from "svelte";

    export let fileurl;
    export let file;

    let bool = 0;
    let now = new Date()

/*     let error = true;


    if (form?.form_error) {
        error = true;
        nomeazienda = form.form_vals.nomeazienda;
    } */

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

    // Reset campi form
    name = '';
    email = '';
    type = '';
    nomeAzienda = '';
  } catch (e) {
    console.error("Errore durante l'invio: ", e);
  }
}

  /*
  // Funzione per inviare i dati al database
  async function submitForm() {
    try {
      await addDoc(collection(db, "utenti2"), {
        name,
        email,
        type,
        nomeAzienda,
      });
      successMessage = 'Grazie Curriculum scaricato con successo !';
      Download();
      // Pulisci i campi del form
      name = '';
      email = '';
      type = '';
      nomeAzienda = '';
    } catch (e) {
      console.error("Errore durante l'inserimento: ", e);
    }
  }*/

  
    
    </script>

    {#if bool == 0}
        <button   on:click={()=>showModal = true} >Download</button>
    {:else if bool == 1 }
        <p>Grazie per il download {now}</p>
    {/if}

    <ModalDownload bind:showModal={showModal} >
        <form on:submit|preventDefault={submitForm}>
            <div>
              <label for="name">Nome:</label>
              <input id="name" bind:value={name} type="text" required />
            </div>
          
            <div>
              <label for="email">Email:</label>
              <input id="email" bind:value={email} type="email" required />
            </div>
          
            <div>
              <label for="option">select an option</label>
              <select name="" id="" bind:value={type} required>
                <option value="privato" >privato</option>
                <option value="azienda">azienda</option>
              </select>
            </div>
          
            {#if type == 'azienda'}
            <div>
              <label for="nomeazienda">Nome dell'azienda</label>
              <input id="nomeazienda" type="text" bind:value={nomeAzienda} required >
            </div>
            {/if}
          
          
            <button type="submit">Download</button>
          </form>
          
          {#if successMessage}
            <p>{successMessage}</p>
          {/if}
    </ModalDownload>



    <style>

        @media(min-width:480px){
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 10px;
            }

            .hidden{
                display: none;
            }

            form > .row > input{
            padding: 8px;
            font-size: 20px;
            }

            form > .row > label{
                
                font-size: 20px;
            }

            form > .row > p{
                color: red;
                font: bold;
            }

            form > button{
                padding: 10px;
                font-size: 24px;
            }
            form > .row{
                width: 100%;
                column-gap: 10px;
            }

            form > .row > select{
                width: 30%;
                padding: 8px;
                font-size: 20px;
            }


            button{
            text-align: center;
            padding: 8px;
            border: none;
            border-radius: 4px;
            width: 30%;
            background-color: #014f86;
            color: white;
            background-size: contain;
            margin: auto;
            

        }

        button:hover{
            cursor: pointer;
        }
        }

        @media(max-width:480px){
            button{
            text-align: center;
            padding: 8px;
            border: none;
            border-radius: 4px;
            width: 40%;
            background-color: #014f86;
            color: white;
            background-size: contain;
            margin: auto;
            

        }


        form > button{
            width: 60%;
            padding: 10px;
            font-size: 20px;
        }

        form > .row > input{
            padding: 8px;
            font-size: 20px;
        }

        form > .row > label{
            
            font-size: 20px;
        }

            .hidden{
                display: none;
            }

            form > .row > p{
                color: red;
                font: bold;
            }

            form > .row{
                width: 100%;
                column-gap: 10px;
            }

            form > .row{
                padding: 10px;
            }

            form > .row > select{
                width: 50%;
                padding: 8px;
                text-align: center;
                font-size: 20px;
            }

        form{
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 10px;
                margin: auto;
            }



            form > select{
                width: 50%;
                text-align: center;
                padding: 8px;
                font-size: 20px;
            }

        
        button:hover{
            cursor: pointer;
        }
        }


    </style>

    
    
    
    