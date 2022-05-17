<script>
import Button from "../buttons/Button.svelte";
import Title from "./Title.svelte";

let style1 = "background-color: blue";
let style2 = "background-color: red";
</script>

<main>
    <Title text={"Iglesiass"}/>
    <Button custom_style={style2}  text={"VER PREDICA EN VIVO"}/>
    <Button custom_style={style1} text={"VISITANOS"}/>
</main>

<style>
    main{

         width: 100%;
        background-color: grey;
         height: 500px;
         padding: 100px 0 0;
    }
</style>