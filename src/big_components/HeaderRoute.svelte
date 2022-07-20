<script>
  import { Router, Link, Route } from "svelte-routing";
  import ButtonHeader from "../buttons/ButtonHeader.svelte";
  import ButtonLogo from "../buttons/ButtonLogo.svelte";
  import Home from "../Routes/Home.svelte";
  import Live from "../Routes/Live.svelte";
  import Seminary from "../Routes/Seminary.svelte";
  import Horarios from "../Routes/Horarios.svelte";
  import Contacto from "../Routes/Contacto.svelte";
  import { afterUpdate, onMount } from "svelte";
  import Private from "../Routes/Private.svelte";

  let scrolly = 0;
  let activeColor = false;
  let menu = true;

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
  onMount(()=> {
    if(document.documentElement.scrollWidth < 910){
      menu = false;
    }
  })
  function openMenu() {
    menu = !menu
  }
</script>

<Router>
  <main
    style={activeColor
      ? "background-color: #fff;".concat(menu ? "height:310px;" :"height: 70px")
      : "background-color: transparent;".concat(menu ? "height:310px;" :"height: 70px")}
  >
    <Link to="/">
      <ButtonLogo link={""} />
    </Link>
    <Link to="/">
      <ButtonHeader customStyle={menu ? "" : "display:none!important"} text={"Inicio"} />
    </Link>
    <Link to="/en-vivo">
      <ButtonHeader customStyle={menu ? "" : "display:none!important"} text={"Prédicas en vivo"} />
    </Link>
    <Link to="/horarios">
      <ButtonHeader customStyle={menu ? "" : "display:none!important"} text={"Reuniones"} />
    </Link>
    <Link to="/seminario">
      <ButtonHeader customStyle={menu ? "" : "display:none!important"} text={"Seminario"} />
    </Link>
    <Link to="/contacto">
      <ButtonHeader customStyle={menu ? "" : "display:none!important"} text={"Contacto"} />
    </Link>
    <div on:click={openMenu}>
      <span class="material-icons">
        menu
        </span>
      </div>
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
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 100;
    transition: all 1500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 0 45px;
    width: -webkit-fill-available;
  }
  div {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10px;
    right: 45px;
    display: none;
    cursor: pointer;
  }
  span {
    font-size: xxx-large;
  }
  @media only screen and (min-width: 910px) {
    main {
      height: 70px!important;
    }
  }
  @media only screen and (max-width: 1250px) {
    main {
      background-color: white!important;
    }
  }
  
  @media only screen and (max-width: 910px) {
    main {
      background-color: white!important;
      grid-template:70px repeat(4, 50px) / 1fr;
      height: max-content;
    }
    div {
      display: block;
    }
  }
</style>
