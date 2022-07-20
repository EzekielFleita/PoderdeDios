<script>

    export let title = "";
    export let text = "";

    export let value = false;

    function openText(){
        value = !value;
    }

</script>

<main style={value ? 
'grid-template: 45px 1fr / 45px 1fr;grid-template-areas:"span title""text1 text1";'
: 
'grid-template: 45px 1px / 45px 1fr ;grid-template-areas:"span title""text1 text1";'}
>
    <span style={value ? "transform: rotate(0.25turn); background-color:rgb(29, 29, 29); color: white" : ""} on:click={openText} class="material-icons">
        chevron_right
        </span>
    <h4>{title}</h4>
    <p style={value ? "opacity: 1;" : "opacity: 0; height: 0;"} >{text}</p>
</main>

<style>
    main {
        display: grid;
        margin-top: 30px;
        text-align: start;
        transition: all 500 ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    span {
        z-index: 80;
        width: 100%;
        height: 100%;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-self: center;
        justify-self: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-justify: center;
        border-radius: 35px;
        transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
    }
    p {
        padding: 5px 30px;
        grid-area: text1;
        transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    h4 {
        align-self: center;
        justify-self: start;
        padding-left: 20px;
    }
</style>