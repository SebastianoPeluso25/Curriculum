<script>
	
    export let fileurl;
    export let file;

    let bool = 0;
    let now = new Date()
    
    function Download() {
        const downloadLink = document.createElement("a");
      downloadLink.href = fileurl;
      downloadLink.download = file;
      downloadLink.click();
      bool = 1;
    }
    
    </script>

    {#if bool == 0}
        <button on:click={Download}>Download</button>
    {:else if bool == 1 }
        <p>Grazie per il download {now}</p>
    {/if}
    


    <style>

        @media(min-width:480px){
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

        
        button:hover{
            cursor: pointer;
        }
        }


    </style>

    
    
    
    