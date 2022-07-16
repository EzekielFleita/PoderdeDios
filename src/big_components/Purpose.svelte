<script>
import { afterUpdate } from "svelte";

import BigIcon from "./BigIcon.svelte";
import Title from "./Title.svelte";

let value_1 = false;
let value_2 = false;
let value_3 = false;

afterUpdate(() => {
    console.log(value_1, value_2, value_3)
})
</script>

<main style={value_1 || value_2 || value_3 ? "height: 630px;": "height: 350px"}>
    <div class="tittle">
        <Title 
        text={"Nuestro Propósito"}
        />
    </div>
    <div class="btn_1"><BigIcon 
        bind:value={value_1}
        text={"Adorar a Dios es reconocer su naturaleza, atributos y demandas; derramando el corazón en alabanza y acción de gracias, proclamando con diversas posturas corporales: ¡Quién es Dios!, ¡Cómo es y sus poderosas obras! Lo expresamos con júbilo, excitación, multimedia y música."}
        text_icon={"local_fire_department"} 
        title={"Adorar a Dios"}
        />
    </div>
    <div class="btn_2">
        <BigIcon 
        bind:value={value_2}
        text={"Una iglesia edificada es mucho más que una congregación, es un lugar donde se apropian de un estilo de vida basado en los valores del Reino de Dios, constituyendo la auténtica fe cristiana; compartiendo, amando y siendo felices. Así, somos perfeccionados para cumplir la misión y visión de la iglesia local."}
        text_icon={"favorite"} 
        title={"Edificar la Iglesia"}
        />
    </div>
    <div class="btn_3">
        <BigIcon 
        bind:value={value_3}
        text={"La iglesia es imperecedera y prevalecerá hasta el regreso de Jesús, debiendo cumplir la gran comisión de Mateo 28:16-20, proclamando la verdad revelada en la Biblia, con valor y poder, sobreviviendo a todos los ataques de persecución."}
        text_icon={"volunteer_activism"} 
        title={"Alcanzar a los perdidos"}
        />
    </div>
</main>

<style>
    main {
        width: 100%;
        background-color: rgb(228, 228, 228);
        display: grid;
        grid-template: 100px 1fr / 1fr 1fr 1fr;
        grid-template-areas: 
        "t t t"
        "a b c";
        transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .tittle {
        grid-area: t;
        display: flex;
        justify-self: center;
        align-self: flex-start;
        align-content: center;
        align-items: center;
        justify-items: center;
        justify-content: center;
    }
    .btn_1 {
        grid-area: a;
        display: flex;
        align-self: flex-start;
        justify-self: center;
        align-items: center;
        justify-items: center;
        justify-content: center;
    }
    .btn_2 {
        grid-area: b;
        display: flex;
        align-self: flex-start;
        align-items: center;
        justify-items: center;
        justify-content: center;
    }
    .btn_3 {
        grid-area: c;
        display: flex;
        align-self: flex-start;
        align-content: center;
        align-items: center;
        justify-items: center;
        justify-content: center;
    }
</style>