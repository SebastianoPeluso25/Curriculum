<script>

</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap" rel="stylesheet">
</svelte:head>

<div class="project-page">

    <div class="back">
        <a href="/">
        <span class="material-symbols-outlined">
            undo
            </span></a>
    </div>
    <h2>I MIEI PROGETTI </h2>

    <div class="layout">

        <div class="box">
            <div class="image">
                <img src=".\src\routes\project\mockup.png" alt="mockup">
            </div>
            <div class="text">
                <p>In questo progetto sviluppato durante l'ultimo anno dell'istituto tecnico ho creato un <b> sito web / Web App </b> che parla della storia di tutte le storie di mafia che ho potuto studiare negli anni</p>
                <div class="tags">
                    <div class="chip">Sviluppo Siti</div>
                    <div class="chip">Web Developer</div>
                </div>
            </div>

        </div>

        <hr>

        <div class="box reverse ">
            <div class="image">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/g2s-12ZI9dI?si=HwrkPGr7whq8dhAa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="text">
                <p>Ho effettuato riprese video con un drone DJI mini 2 ed ho effettuato il montaggio dei</p>
                <div class="tags">
                    <div class="chip">Video Editor</div>
                    <div class="chip">Riprese con Drone</div>
                    <div class="chip">Dji mini 2</div>
                </div>
            </div>
        </div>
        <div class="box">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Sq0kLvZjgcA?si=aUVHZk9Cu5PNZcxi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

    </div>

    

    


    <div class="video-project">
        
    </div>

</div>




<style>


@media(min-width:480px){
        .project-page{

            width: 90%;
            margin: auto;



        }

        .back{
            display: none;
        }

        hr{
            width: 100%;
            border-radius: 20px;
            padding: 4px;
            background-color: #184e77;
        
        }

        .project-page > h2{
            font-size: 50px;
            text-decoration: underline #52b69a 6px;
            font-weight: 800;
            text-align: center;
            font-family: "Indie Flower", cursive;
        }

        .text > .tags {
            display: grid;
            flex-direction: row;
            row-gap: 10px;
            column-gap: 10px;
            grid-template-columns: 1fr 1fr;
            justify-content: space-around;
        }

        .text > .tags > .chip{
            background-color: #52b69a;
            color: #184e77;
            font-family: "DynaPuff", system-ui;
            font-weight: 700;
            height: max-content;
            padding: 10px;
            border-radius: 5em;
        }



        .box > .text{
            text-align: center;
            font-size: 18px;
            width: 30%;
            
            align-content: center;
        }



        .box{
            display: flex;
            flex-direction: row;
            width: 100%;
            margin: auto;
            column-gap: 5%;
            justify-content: center;

        }

        .reverse{
            display: flex;
            flex-direction: row-reverse;
        }

        .project-page > .layout{
            display: flex;
            flex-direction: column;
        }

        .image > img{
            width: 100%;
            height: 300px;
            border-radius: 20px;
        }

        iframe{
            border-radius: 20px;
        }

        
    }


    /*MOBILE*/


    @media(max-width:480px){


        .project-page{

        width: 90%;
        margin: auto;
        padding: 10px;



        }

        .back > a{
            text-decoration: none;
            color: black;
        }
    
        .back{
            width: max-content;
            position: sticky;
            top: 0;
            padding-top: 10px;
            
            
        }

        .material-symbols-outlined {
            font-size: 40px;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 1px 6px 20px 2px black;
            background-color: #52b69a;
        }


        hr{
        width: 100%;
        border-radius: 20px;
        padding: 4px;
        background-color: #184e77;

        }

        .project-page > h2{
        font-size: 40px;
        text-decoration: underline #52b69a 6px;
        font-weight: 800;
        text-align: center;
        font-family: "Indie Flower", cursive;
        }

        .text > .tags {
        display: grid;
        flex-direction: row;
        row-gap: 10px;
        column-gap: 10px;
        grid-template-columns: 1fr 1fr;
        justify-content: space-around;
        }

        .text > .tags > .chip{
        background-color: #52b69a;
        color: #184e77;
        font-family: "DynaPuff", system-ui;
        font-weight: 700;
        height: max-content;
        padding: 10px;
        border-radius: 5em;
        }



        .box > .text{
        text-align: center;
        font-size: 18px;
        width: 100%;
        align-content: center;
        }



        .box{
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        margin: auto;
        row-gap: 20px;
        justify-content: center;
        align-items: center;

        }

        .reverse{
        display: flex;
        flex-direction: column-reverse;
        }

        .project-page > .layout{
        display: flex;
        flex-direction: column;
        }

        .image > img{
        width: 100%;
        height: 250px;
        border-radius: 20px;
        box-shadow: 1px 1px 20px 2px  #184e77;
        }

        iframe{
            width: max-content;
        border-radius: 20px;
        height: max-content;
        box-shadow: 1px 1px 20px 2px  #184e77;
        }

    }

</style>