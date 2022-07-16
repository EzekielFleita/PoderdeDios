<script>
import { afterUpdate } from "svelte";
import Button from '../buttons/Button.svelte';

    import Footer from "../big_components/Footer.svelte";
    let date = new Date()
    let month;
    let year;
    let horarios = [
        {
            day:"Miercoles",
            event: "Oración corporativa",
            hour: "18 hs",
            sede: "Pilar"
        },
        {
            day:"sábado",
            event: "Jóvenes",
            hour: "18 hs",
            sede: "Pilar"
        },
        {
            day:"Domingo",
            event: "Reunión Central",
            hour: "18 hs",
            sede: "Pilar"
        },
    ]
    function getMonthToString(month) {
        let monthString = "";
        switch (month) {
        case 0:monthString = "Enero"
            break;
        case 1:monthString = "Febrero"
            break;
        case 2:monthString = "Marzo"
            break;
        case 3:monthString = "Abril"
            break;
        case 4:monthString = "Mayo"
            break;
        case 5:monthString = "Junio"
            break;
        case 6:monthString = "Julio"
            break;
        case 7:monthString = "Agosto"
            break;
        case 8:monthString = "Septiembre"
            break;
        case 9:monthString = "Octubre"
            break;
        case 10:monthString = "Noviembre"
            break;
        case 11:monthString = "Diciembre"
            break;
        default:
            break;
        }
        return monthString;
    }

    afterUpdate(()=> {
        month = getMonthToString(date.getMonth());
        year = String(date.getFullYear());
    })

</script>

<div><main>
    <h2>Nuestros Horarios de {month + " " + year}</h2>
    <section>
    {#each horarios as horario}
        <p>{horario["day"]}
        </p>
        <p>{horario["event"]}
        </p>
        <p>{horario["hour"]}
        </p>
        <p>{horario["sede"]}
        </p>
    {/each}
</section>
<Button 
text={"Visitanos"}
custom_style={"width:100%; background-color: black; color: white; border-radius: 10px; margin-top: 100px"}
/>
</main>
<Footer />
</div>

<style>
    main {
    width: 100%;
    min-height: 50vw;
    height: auto;
    background-color: #131521;
    background-image: linear-gradient(43deg, #986fff 0%, #7b7bff 46%, #c68cfd 100%);
    display: grid;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: -30px;
    }
    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 1000px;
    }
</style>