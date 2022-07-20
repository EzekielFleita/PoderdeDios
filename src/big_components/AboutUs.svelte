<script>
    import ButtonSlide from "../buttons/ButtonSlide.svelte";
    import {aboutUs} from "../../scripts/var/strings";
    import { afterUpdate } from "svelte";
    import Title from "./Title.svelte";
    import Parraf from "./Parraf.svelte";
    
    let value1 = null;
    let value2 = null;
    let value3 = null;
    let value4 = null;
    let value5 = null;
    let text_about = aboutUs[5] + aboutUs[6] + aboutUs[7] + aboutUs[8] + aboutUs[9];
    
    
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
        <section>
            <Title text={"Sobre nosotros"} line={true}/>
            <Parraf text={aboutUs[5]}
            negrita={aboutUs[6]}
            text1={aboutUs[7]}
            negrita1={aboutUs[8]}
            text2={aboutUs[9]}/>
        </section>
        
        <section>
            <ButtonSlide bind:value={value1} title={"¿Cuales son los horarios de reuninón?"} text={aboutUs[0]} />
            <ButtonSlide bind:value={value2} title={"¿Hay actividad para niños?"} text={aboutUs[1]} />
            <ButtonSlide bind:value={value3} title={"¿Hay actividad para mujeres?"} text={aboutUs[2]} />
            <ButtonSlide bind:value={value4} title={"¿Cómo puedo constribuir?"} text={aboutUs[3]} />
            <ButtonSlide bind:value={value5} title={"Nuestra historia"} text={aboutUs[4]} />
        </section>
    
    </main>
    
    <style>
        main{
            display: grid;
            grid-template: 1fr / 1fr 1fr;
            min-height: 500px;
            background-color: rgb(228, 228, 228);
            width: 100%;
            transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        section {
            padding: 35px;
            align-items: center;
            justify-content: center;
        }
        @media only screen and (max-width: 910px) {
            main {
                grid-template: 1fr  1fr/ 1fr;
            }
        }
    </style>