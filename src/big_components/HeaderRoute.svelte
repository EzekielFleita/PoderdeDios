<script>
    import { Router, Link, Route } from "svelte-routing";   
    import ButtonHeader from "../buttons/ButtonHeader.svelte";
    import ButtonLogo from "../buttons/ButtonLogo.svelte";
    import Home from "../Routes/Home.svelte";
    import Live from "../Routes/Live.svelte";
    import Seminary from "../Routes/Seminary.svelte";
    import Horarios from "../Routes/Horarios.svelte";
    import Contacto from "../Routes/Contacto.svelte";
</script>

<Router>
    <main>
        <Link to="/">
            <ButtonLogo link={""}/>
        </Link>
        <Link to="/">
            <ButtonHeader text={"Inicio"}/>
        </Link>
        <Link to="/en-vivo">
            <ButtonHeader text={"Prédicas en vivo"}/>
        </Link>
        <Link to="/horarios">
            <ButtonHeader text={"Reuniones"}/>
        </Link>
        <Link to="/seminario">
            <ButtonHeader text={"Seminario"}/>
        </Link>
        <Link to="/contacto">
            <ButtonHeader text={"Contacto"}/>
        </Link>
    </main>
    <Route path="/">
        <Home />
    </Route>
    <Route path="/en-vivo">
        <Live />
    </Route>
    <Route path="/horarios">
        <Horarios />
    </Route>
    <Route path="/seminario">
        <Seminary />
    </Route>
    <Route path="/contacto">
        <Contacto />
    </Route>
</Router>

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