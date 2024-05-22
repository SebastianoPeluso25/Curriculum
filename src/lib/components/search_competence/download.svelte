<script>
	import ModalDownload from "./modalDownload.svelte";
    export let fileurl;
    export let file;

    let bool = 0;
    let now = new Date()

/*     let action = 'create';
    let tipouser;
    let nomeazienda;
    export let form;
    export let data;
    

    let error = true;


    if (form?.form_error) {
        error = true;
        nomeazienda = form.form_vals.nomeazienda;
    } */

   export let showModal;
    
    function Download() {
        const downloadLink = document.createElement("a");
      downloadLink.href = fileurl;
      downloadLink.download = file;
      downloadLink.click();
      bool = 1;
    }
    
    </script>

    {#if bool == 0}
        <button on:click={Download}  on:click={()=>showModal = true} >Download</button>
    {:else if bool == 1 }
        <p>Grazie per il download {now}</p>
    {/if}

<!--     <ModalDownload bind:showModal={showModal} >
        <form action="?/{action}" method="post">
            <div class="row">
                <label for="tipouser">Tipo</label>
            <select name="tipouser" id="" bind:value={tipouser} >
                <option value=""></option>
                <option value="azienda">azienda</option>
                <option value="privato">privato</option>
            </select>
            </div>

            {#if tipouser == "azienda"}
            <div class="row">
                <label for="nomeazienda">Inserire il nome dell'azienda:</label>
                <input type="text" name="nomeazienda"  autocomplete="off" id="" bind:value={nomeazienda} >
                <p class={error && nomeazienda?.length == 0 ? '' : 'hidden'}>compila il campo</p>
            </div>
            
            
            {/if}
            <button id="modal" type="submit" on:click={Download}>invia e Download</button>
            
        </form>
    </ModalDownload>
 -->


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

    
    
    
    