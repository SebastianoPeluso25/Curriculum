<script>

    import Modal from "../lib/components/search_competence/modal.svelte";

    let showModal = false;

    let VERSION_SOFTWARE = '1.1.2';
    
</script>

<svelte:head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /></svelte:head>

<div class="container2">
    <button on:click={()=>(showModal = true)} >
        {#if showModal == true}
        <span class="material-symbols-outlined">
            Menu_Open
            </span>
        {:else}
        <span class="material-symbols-outlined">
            Menu
            </span>
        {/if}

    </button>

    <Modal bind:showModal>
    
        <div class="navbar">
            <div  class="item">
                <span class="material-symbols-outlined">
                    person
                    </span>
                <a href="/">Chi sono</a>
            </div>
            <div class="item" >
                <a href="/competenze/">Competenze</a>
            </div>
            <div class="item">
                <span class="material-symbols-outlined">
                    work
                    </span>
                <a href="/esperienze/">Esperienze</a>
            </div>

            <footer><p>v {VERSION_SOFTWARE}</p></footer>
            

        </div>
    </Modal>
    
    <div class="right">
        <div class="containerRight">
            <slot/>
        </div>
        
    </div>
</div>




<div class="container">
    <div class="left">
        <div class="navbar">
            <div class="name">
                <h1>Sebastiano Peluso</h1>
            </div>
            <div  class="item active ">
                <span class="material-symbols-outlined">
                    person
                    </span>
                <a href="/">Chi sono</a>
            </div>
            <div class="item active" >
                <span class="material-symbols-outlined">
                    
                    </span>
                <a href="/competenze/">Competenze</a>
            </div>
            <div class="item active">
                <span class="material-symbols-outlined">
                    work
                    </span>
                <a href="esperienze">Esperienze</a>
            </div>

            <footer><p>v {VERSION_SOFTWARE}</p></footer>

        </div>

    </div>
    <div class="right">
        <div class="containerRight">
            <slot/>
        </div>
        
    </div>
</div>

<style>

:global(body){
    padding: 0;
    margin: 0;
    width: 100%;
    
    
}

    @media(min-width: 480px){
        .navbar{
        display: flex;
        flex-direction: column;
        
        width: auto;
        position: fixed;
        overflow: auto;
        row-gap: 8px;
    }

    .container2{
        display: none;
    }

    .navbar > .item > a{
        text-decoration: none;
        color: white;
    }

    .navbar > footer{
        text-align: center;
        color: white;
    }

    .navbar > .item.active:hover{
        border-right: 4px solid green;
    }

    .navbar > .item.active{
        
        border-right: 4px solid white;
        cursor: pointer;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }


    .navbar > .item{
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        column-gap: 10px;
        padding: 18px;
        justify-content: center;
        font-size: 20px;
        
        
        color: white;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }



    .container{
        display: grid;
        grid-template-columns: 1fr 5fr;
        height: 100vmin;
        
    }

    .container > .left{
        display: flex;
        width: 100%;
        flex-direction: column;
        row-gap: 30px;
        align-items: center;
        background-color: #014f86;
        
        
        

        

    }

    .container > .left > .navbar > .name{
        color: white;
        text-align: center;
        margin: auto;
        width: 50%;
        

    }

    .container > .right > .containerRight{
        width: 95%;
        border: 1px solid black;
        box-shadow: 1px 1px 6px 2px #014f86;
        margin: 14px;
    }

    .container > .right{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: start;

    }

    }


    /**MOBILE VERSION*/

    @media(max-width: 480px){

        .navbar{
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #014f86;
        row-gap: 8px;
    }

    .container2{
        display: grid;
        grid-template-rows: 0.5fr 4fr;
        height: 100vmax;
        width: 100%;
        margin: auto;
        
    }

    .container2 > button{
        width: 100%;
        margin: auto;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border: none;
        background-color: #014f86;
        border-radius: 8px;
        color: white;

    }

    .container2 > button >.material-symbols-outlined{
        
        font-size: 60px;
        border: none;
        background-color: #014f86;
        border-radius: 8px;
        color: white;

    }

    .container2 > .right > .containerRight{
        width: 95%;
        border: 1px solid black;
        box-shadow: 1px 1px 6px 2px #014f86;
        margin: 14px;
        height: min-content;
        
  
    }

    .container2 > .right{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: start;
    }

    .navbar > .item > a{
        text-decoration: none;
        color: white;
    }

    .navbar > footer{
        text-align: center;
        color: white;
    }

    .navbar > .item{
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        column-gap: 10px;
        padding: 18px;
        justify-content: center;
        font-size: 20px;
        
        
        color: white;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }



    .container{
        display: none;
        grid-template-columns: 1fr 3fr;
        height: 100vmax;
    }

    .container > .left{
        display: flex;
        width: 100%;
        flex-direction: column;
        row-gap: 30px;
        align-items: center;
        background-color: #014f86;
        
        
       

    }

    .container > .right > .containerRight{
        width: 95%;
        border: 1px solid black;
        box-shadow: 1px 1px 6px 2px #014f86;
        margin-top: 5%;
        height: 10vh;
  
    }

    .container > .right{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: start;
        
        

        

    }




    

    }



    
</style>