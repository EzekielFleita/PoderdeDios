<script>
import ButtonImage from "../buttons/ButtonImage.svelte";

let button_style1 = "";
let button_style2 = "";
let button_style3 = "";
let button_style4 = "";

</script>
    
    
<main>
    <ButtonImage img={"2"} custom_style={button_style1} text={"Ver prédica en vivo"} />
    <ButtonImage img={"3"} custom_style={button_style2} text={"Reuniones presenciales"} />
    <ButtonImage img={"4"} custom_style={button_style3} text={"Seminario"} />
    <ButtonImage img={"1"} custom_style={button_style4} text={"Contacto"} />
</main>
    
<style>
    main {
        display: grid;
        grid-template: 1fr / 1fr 1fr  1fr 1fr;
        width: 100%;
        height: 300px;
    }
</style>