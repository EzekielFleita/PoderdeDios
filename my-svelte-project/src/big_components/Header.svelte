<script>
import ButtonHeader from "../buttons/ButtonHeader.svelte";
import ButtonLogo from "../buttons/ButtonLogo.svelte";


</script>


<main>
    <ButtonLogo link={""}/>
    <ButtonHeader text={"Inicio"}/>
    <ButtonHeader text={"Prédicas en vivo"}/>
    <ButtonHeader text={"Reuniones"}/>
    <ButtonHeader text={"Seminario"}/>
    <ButtonHeader text={"Contacto"}/>
</main>


<style>
    main {
        display: grid;
        grid-template-columns: 1fr repeat(5, 130px);
        position: absolute;
        width: 100%;
        height: 70px;
        background-color: aqua;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
    }
</style>    