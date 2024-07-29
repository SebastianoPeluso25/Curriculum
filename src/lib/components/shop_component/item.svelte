<script>


	export let title;
	export let prezzo;

</script>



<div class="item">
    <p>{title}</p>
    <div class="prezzo">
        <p>{prezzo}</p>
    </div>
    
    
</div>


<style>

    @media(min-width:480px){
        .item{
            border-radius: 4%;
            margin: 12px;
            text-align: center;
            box-shadow: 2px 2px 4px 0px blue;
            contain: content;

        }

        .item > .prezzo{
            width: 100%;
            background-color: red;
            margin: auto;
            
            
        }
    }

</style>