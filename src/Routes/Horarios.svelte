<script>
    let horarios = [
        {
            day:"miercoles",
            event: "Oración corporativa",
            hour: "20 hs",
            sede: "Pilar"
        },
        {
            day:"sábado",
            event: "Jóvenes",
            hour: "20 hs",
            sede: "Pilar"
        },
        {
            day:"Domingo",
            event: "Niños",
            hour: "18 hs",
            sede: "CABA"
        },
        {
            day:"Domingo",
            event: "Reunión Central",
            hour: "20 hs",
            sede: "Pilar"
        },
    ]
    let month = "Junio";
    let year = "2022";
</script>

<main>
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

</main>

<style>
    main {
    width: 100%;
    min-height: 100%;
    height: auto;
    background: linear-gradient(rgba(0,200,200,0.9), rgba(0,60,150,0.9));
    padding-top: 80px;
    }
    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
</style>