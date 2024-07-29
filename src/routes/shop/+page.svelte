<script>

    import Item from "../../lib/components/shop_component/item.svelte";
    import {Dati} from "../../lib/shopData";


</script>


<div class="container">

    {#each Dati as {title, prezzo}}
        <Item {title} {prezzo} />
    {/each}	

</div>

<style>
    .container{
        border: 1px solid red;
        width: 90%;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        column-gap: 10vh;
        justify-content: center;
        
    }
</style>