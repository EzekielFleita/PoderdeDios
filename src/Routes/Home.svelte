<script>
	import { Router, Link, Route } from "svelte-routing";
	import AboutUs from "../big_components/AboutUs.svelte";
	import BigLinks from "../big_components/BigLinks.svelte";
	import Purpose from "../big_components/Purpose.svelte";
	import Slider from "../big_components/Slider.svelte";
	import Button from "../buttons/Button.svelte";
    import Footer from "../big_components/Footer.svelte"

let button_constribute = "width:100%; background-color:red";
</script>

<main>
	<Slider />
	<Button text={"Constribuir"} custom_style={button_constribute}/>
	<BigLinks />
	<Purpose />
	<AboutUs />
    <Footer />
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>