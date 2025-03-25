<script>

    import Download from "../lib/components/search_competence/download.svelte";
    import Modal2 from "../lib/components/search_competence/modalDownload.svelte";
    import URL_cv from '$lib/Curriculum_Vitae_Sebastiano_Peluso.pdf';
    
    //let URL_cv = "./static/Curriculum_Vitae_Sebastiano_Peluso.pdf";
    let Cv = "Curriculum_Vitae_Sebastiano_Peluso.pdf";

    export let showModal;

</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

</svelte:head>


<div class="data">
    <div class="box">
        <div class="icon">
            <span class="material-symbols-outlined">location_on</span>
            <span class="material-symbols-outlined">call</span>
            <span class="material-symbols-outlined">mail</span>
        </div>
        <div class="testo">
            <span>Torino, Italia</span>
            <span>+39 </span>
            <span ><a href="mailto:sebastianopeluso27@gmail.com"></a></span>
        </div>
    </div>
    <div class="box">
        <div class="icon">
            <span class="fa fa-linkedin-square"></span>
            <span class="fa fa-birthday-cake"></span>
            <span class="material-symbols-outlined"></span>
        </div>
        <div class="testo">
            <span ><a target="_blank" href="https://www.linkedin.com/in/sebastiano-peluso-4101202a8/">Linkedin Profile</a></span>
            <span><!-- 25 / 02 / 2005 --></span>
            <span></span>
        </div>
    </div>
</div>
<hr>
<div class="CV">
    <h2>Scarica qui il CV</h2>
    <Download file={Cv} fileurl={URL_cv} />
</div>

<hr>

<div class="presentazione">

    <h2>PRESENTAZIONE</h2>

    <p>
        Studente presso ITS ICT Mobile App Developer &#128241; | Informatica | Editor Video  &#127916;| Dji mini 2 | Appassionato di televisione &#128250; &#128253; | VIDEO EDITOR | Web Developer 👨‍💻 | Front-end | siti web |
        <br><br>
        Diplomato presso l'Istituto Edoardo Agnelli di Torino con articolazione Informatica e telecomunicazione. 
        Mi piace il mondo della programmazione web con html, css e
        javascript nella creazione di siti web. 
        Sono un ragazzo solare, molto creativo e mi impegno sempre per portare a 
        termine i miei progetti. Mi piace il mondo del web-developer / web-designer &#128396; e ho il desiderio di 
        imparare e di ampliare le mie esperienze.
        <br><br>
        E' sono appassionato al mondo del video Editor e alle riprese con droni &#127909;.
    </p>
</div>

<hr>

<div class="formazione">
    <h2>TITOLI DI STUDIO</h2>

    <div class="item">
        <h3>Diploma di perito informatico ( 2019 – 2024 ) <span class="material-symbols-outlined">school</span></h3>
        <p>Presso l’Istituto Internazionale Edoardo Agnelli di Torino</p>
    </div>



</div>

<hr>









<style>

    @media(min-width: 480px){

        .CV{
            width: 80%;
            margin: auto;
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

        .CV > h2{
            font-size: 20px;
        }


        .data{
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 20px;
        
        
    }

    .data > .box{
        
        display: flex;
        flex-direction: row;
        width: 100%;
        column-gap: 20px;
        justify-content: center;
        align-items: center;
        align-content: center;
        
        
        
    }

    .box > .testo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 10px;
        
    }

    .box > .testo > span > a{
        text-decoration: none;
        
        
    }

    .box > .icon{
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 10px;
    }

    .presentazione{
        
        width: 80%;
        margin: auto;
        padding: 10px;
        
    }

    .formazione{
        width: 80%;
        margin: auto;
        padding: 10px;
    }
    

    

    .presentazione > p{
        text-align: justify;
        font-size: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-size: contain;
        
    }



    hr{
        background-color: #014f86;
        padding: 2px;
        width: 90%;
    }

    .fa{
        font-size: 25px;
    }

    .item > h3{
        font-size: 20px;
    }

    .item > h3 > .material-symbols-outlined{
        color: gold;
        font-weight: bolder;
    }

    .item > p{
        font-size: 20px;

    }

    }


    /**MOBILE*/

    @media(max-width: 480px){

        .CV{
            width: 80%;
            margin: auto;
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            
        }

        .CV > h2{
            font-size: 20px;
        }
    
        .data{
        display: flex;
        flex-direction: column;
        align-content: center;
        padding: 10px;
        row-gap: 10px;
        
        
    }

    hr{
        background-color: #014f86;
        padding: 2px;
        width: 90%;
    }

    .data > .box{
        
        display: flex;
        flex-direction: row;
        width: 80%;
        column-gap: 4px;
        justify-content: center;
        align-content: center;
        margin: auto;
         
    }

    .box > .testo{
        display: flex;
        width: 100%;
        font-size: 18px;
        flex-direction: column;
        justify-content: center;
        row-gap: 10px;
        
        
    }

    .box > .testo > span > a{
        text-decoration: none;
        
        
    }

    .box > .icon{
        display: flex;
        font-size: 40px;
        flex-direction: column;
        justify-content: center;
        row-gap: 14px;
        
    }

    .presentazione{
        width: 90%;
        margin: auto;
        padding: 8px;
        
        
    }

    .presentazione > h2{
        text-align: justify;
    
        
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .presentazione > p{
        text-align: justify;
        font-size: 18px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
       
        
    }

    .fa{
        font-size: 25px;
    }

    .formazione{
        width: 80%;
        margin: auto;
        padding: 10px;
    }

    .item > h3{
        font-size: 22px;
    }

    .item > h3 > .material-symbols-outlined{
        color: gold;
        font-weight: bolder;
    }

    .item > p{
        font-size: 20px;

    }


    


    }
    

</style>