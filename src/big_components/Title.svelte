<script>
    export let text = "";
    export let font_size = "xx-large";
    export let font_color = "black";
    export let custom_style = "";
</script>

<main>
    <h1 style="font-size: {font_size}; color:{font_color}; {custom_style}">{text}</h1>
</main>

<style>
    h1 {
        font-size: calc(1em + 1vw);
        line-height: 1em;
    }
    @media only screen and (max-width: 910px) {
        h1 {
            font-size: x-large!important;
            line-height: 1em;
        }
    }   
</style>