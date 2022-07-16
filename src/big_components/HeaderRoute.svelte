<script>
  import { Router, Link, Route } from "svelte-routing";
  import ButtonHeader from "../buttons/ButtonHeader.svelte";
  import ButtonLogo from "../buttons/ButtonLogo.svelte";
  import Home from "../Routes/Home.svelte";
  import Live from "../Routes/Live.svelte";
  import Seminary from "../Routes/Seminary.svelte";
  import Horarios from "../Routes/Horarios.svelte";
  import Contacto from "../Routes/Contacto.svelte";
  import { afterUpdate } from "svelte";
  import Private from "../Routes/Private.svelte";

  let scrolly = 0;
  let activeColor = false;

  afterUpdate(() => {
    window.addEventListener("scroll", () => {
      scrolly = window.scrollY;
      if (scrollY > 400) {
        activeColor = true;
      } else {
        activeColor = false;
      }
    });
  });
</script>

<Router>
  <main
    style={activeColor
      ? "background-color: #fff;"
      : "background-color: transparent;"}
  >
    <Link to="/">
      <ButtonLogo link={""} />
    </Link>
    <Link to="/">
      <ButtonHeader text={"Inicio"} />
    </Link>
    <Link to="/en-vivo">
      <ButtonHeader text={"Prédicas en vivo"} />
    </Link>
    <Link to="/horarios">
      <ButtonHeader text={"Reuniones"} />
    </Link>
    <Link to="/seminario">
      <ButtonHeader text={"Seminario"} />
    </Link>
    <Link to="/contacto">
      <ButtonHeader text={"Contacto"} />
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
  <Route path="/private">
    <Private />
  </Route>
</Router>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr repeat(5, 130px);
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: aqua;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 100;
    transition: all 1500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
</style>
