<script>
import ButtonImage from "../buttons/ButtonImage.svelte";

let button_style1 = "background-color:red";
let button_style2 = "background-color:blue";
let button_style3 = "background-color:green";
let button_style4 = "background-color:brown";

</script>
    
    
<main>
    <ButtonImage custom_style={button_style1} text={"Ver prédica en vivo"} />
    <ButtonImage custom_style={button_style2} text={"Reuniones presenciales"} />
    <ButtonImage custom_style={button_style3} text={"Seminario"} />
    <ButtonImage custom_style={button_style4} text={"Contacto"} />
</main>
    
    
<style>
    main {
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        width: 100%;
        height: 500px;
    }
</style>