<script>
    export let text = "";
    export let custom_style = "";
    </script>
    
    
<main>
     <button style={custom_style}>{text}</button>
</main>
    
    
<style>
    main{
        width: auto;
        height: auto;
    }
    button{
        margin: 0;
    }
</style>