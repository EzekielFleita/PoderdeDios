<script>
    export let value = true;
    export let text="";
    export let title = "";
    
</script>

<main style={value ? "opacity:1" : "opacity:0"}>
    <h4 style={value ? "opacity:1" : "opacity:0"}>
        {title}
    </h4>
    <p style={value ? "opacity:1" : "opacity:0"}>
        {text}
    </p>
</main>

<style>
    main {
        width: 200px;
    }
    h4 {
        transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1); 
    }
    p {
        transition: all 6s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
</style>        