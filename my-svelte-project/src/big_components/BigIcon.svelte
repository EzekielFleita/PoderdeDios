<script>
import TextHide from "./TextHide.svelte";

    let value = false;
    
    function changeValue() {
        value = !value;
    }
</script>

<section>
    <main style={value ? "background-color: red;" : "background-color: blueviolet;"} on:click={changeValue} >
        <span>Icon</span>
    </main>
    <TextHide value={value}/>
</section>



<style>
    main {
        width: 150px;
        height: 150px;
        border-radius: 50px;
    }
</style>        