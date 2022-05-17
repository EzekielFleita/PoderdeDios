<script>
import ButtonSlide from "../buttons/ButtonSlide.svelte";
import {aboutUs} from "../../scripts/var/strings";
import { afterUpdate } from "svelte";
let value1 = null;
let value2 = null;
let value3 = null;
let value4 = null;
let value5 = null;


afterUpdate(()=>{
    if (value1 === true) {
        value2 = false;
        value3 = false;
        value4 = false;
        value5 = false;
    } 
    
    if (value2 === true) {
        value1 = false;
        value3 = false;
        value4 = false;
        value5 = false;
    } 
    
    if (value3 === true) {
        value1 = false;
        value2 = false;
        value4 = false;
        value5 = false;
    }

    if (value4 === true) {
        value1 = false;
        value2 = false;
        value3 = false;
        value5 = false;
    }

    if (value5 === true) {
        value1 = false;
        value2 = false;
        value3 = false;
        value4 = false;
    }
})

</script>

<main>
    <ButtonSlide bind:value={value1} title={"¿Cuales son los horarios de reuninón?"} text={aboutUs[0]} />
    <ButtonSlide bind:value={value2} title={"¿Hay actividad para niños?"} text={aboutUs[1]} />
    <ButtonSlide bind:value={value3} title={"¿Hay actividad para mujeres?"} text={aboutUs[2]} />
    <ButtonSlide bind:value={value4} title={"¿Cómo puedo constribuir?"} text={aboutUs[3]} />
    <ButtonSlide bind:value={value5} title={"Nuestra historia"} text={aboutUs[4]} />
</main>

<style>
    
</style>