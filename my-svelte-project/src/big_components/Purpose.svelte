<script>
import BigIcon from "./BigIcon.svelte";

</script>

<main>
    <BigIcon />
    <BigIcon />
    <BigIcon />
</main>

<style>
    main {
        width: 100%;
        height: 500px;
        background-color: coral;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>