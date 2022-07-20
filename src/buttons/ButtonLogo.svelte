<script>
    export let link = "";
    export let customStyle = "";
</script>

<main style={customStyle}>
    <a href={link}>
    <div class="logo"></div></a>
</main>

<style>
    main {
        display: flex;
        align-self: center;
        justify-self: flex-start;
    }
    a {
        width: 50px;
        height: 50px;
        border-radius: 30px;
        display: grid;
        align-self: center;
        justify-self: center;
        margin: 0;
        cursor: pointer;
    }
</style>