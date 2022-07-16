<script>
import Button from "../buttons/Button.svelte";
import Title from "./Title.svelte";

let style1 = 
"background-color: #212121; border-radius: 30px; color: #ffff; font-size: medium; width: 230px; height: 50px";
;
let style2 = "background-color: rgb(83, 83, 83, 0.8); border-radius: 30px; color: white; font-size: medium; width: 130px; height: 50px";
</script>

<main class="slider">
    <div class="container">
        <section>
            <div class="title">
                <Title font_color={"white"} text={"IGLESIA PODER DE DIOS"}/>
            </div>
            <a href="/en-vivo">
                <Button custom_style={style1}  text={"VER PREDICA EN VIVO"}/>
            </a>
            <a href="https://www.google.com.ar/maps/place/Iglesia+Poder+de+Dios+Argentina/@-34.455499,-58.9105435,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc9d960b14aa79:0xc63588e063b92092!8m2!3d-34.455499!4d-58.9083548">
                <Button custom_style={style2} text={"VISITANOS"}/>
            </a>
        </section>
    </div>
</main>

<style>
    .slider {
        min-height: 800px;
    }
    .container {
        display: flex;
        flex-direction: row;
        align-self: flex-start;
        padding: 18% 10%;
        background: rgb(18,18,18);
        background: linear-gradient(90deg, rgba(18,18,18,0.8575805322128851) 0%, rgba(0,212,255,0) 99%);
        height: 100%;
    }
    section {
        display: grid;
        grid-template:100px 1fr / calc(100% - 150px) 150px;
        grid-template-areas: "title title" "button1 button2";
    }
    .title {
        grid-area: title;
        display: flex;
        flex-direction: row;
        align-self: flex-start;
    }
</style>