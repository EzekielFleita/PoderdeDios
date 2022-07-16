<script>
import TextHide from "./TextHide.svelte";
export let text_icon = "";
export let text= "";
export let title = "";
export let value = false;
    
    function changeValue() {
        value = !value;
    }
</script>

<section>
    <main style={value ? "background-color: white;" : "background-color: rgb(43, 43, 43);"} on:click={changeValue} >
        <span style={value ? "color: red;" : "color: white;"} class="material-icons">
            {text_icon}
            </span>
    </main>
    <TextHide text={text} value={value} title={title}/>
</section>



<style>
    section {
        margin: 0;
        display: grid;
        align-content: center;
        justify-content: center;
    }
    main {
        cursor: pointer;
        width: 150px;
        height: 150px;
        border-radius: 100px;
        margin: 0!important;
        display: flex;
        align-self: center;
        justify-self: center;
        align-items: center;
        justify-content: center;
        transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
        border: 5px;
        border-width: 8px;
        border-style: solid;
        border-color: rgb(14, 14, 14);
    }
    span {
        user-select: none;
        font-size: 50px;
        transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
</style>        