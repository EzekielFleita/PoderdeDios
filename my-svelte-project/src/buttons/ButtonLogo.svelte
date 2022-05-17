<script>
    export let link = "";
</script>

<main>
    <a href={link}><p>LOGO</p></a>
</main>

<style>
    main {
        display: flex;
        align-self: center;
        justify-self: flex-start;
        margin-left: 45px;
    }
    a {
        width: 50px;
        height: 50px;
        border-radius: 30px;
        display: grid;
        align-self: center;
        justify-self: center;
        margin: 0;
        background-color: green;
    }
</style>