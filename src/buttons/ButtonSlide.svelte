<script>

    export let title = "";
    export let text = "";

    export let value = false;

    function openText(){
        value = !value;
    }

</script>

<main>
    <button on:click={openText}>Icon</button>
    <h6>{title}</h6>
    <p style={value ? "display: block," : "display: none;"} >{text}</p>
</main>

<style>
    
</style>