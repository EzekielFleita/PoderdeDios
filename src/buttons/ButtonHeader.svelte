<script>
    export let text = "";
    export let customStyle = "";
</script>
    
    
<main style={customStyle}>
     <button type="button">{text}</button>
</main>
    
    
<style>
    button {
        background-color: transparent;
        border: none;
        color: #444;
        border-radius: 30px;
        padding: 10px 12px;
        width: max-content;
        transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
        font-size: small;
        min-width: 50px;
        cursor: pointer;
    }
    button:hover {
        background-color: rgb(110, 110, 110);
        color: #fff;
    }
</style>