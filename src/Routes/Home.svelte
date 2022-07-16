<script>
	import AboutUs from "../big_components/AboutUs.svelte";
	import BigLinks from "../big_components/BigLinks.svelte";
	import Purpose from "../big_components/Purpose.svelte";
	import Slider from "../big_components/Slider.svelte";
	import Button from "../buttons/Button.svelte";
    import Footer from "../big_components/Footer.svelte";
    import Form from "../big_components/Form.svelte"
	import SlideTestimony from "../big_components/SlideTestimony.svelte";
	import { afterUpdate } from "svelte";
	import { onMount } from "svelte";
import CommingSoon from "../big_components/CommingSoon.svelte";

	let button_constribute = "width:100%; background-color: #ce3c3c; border: none; color: white";


	let chargginON = false;
	onMount(() => {
		setTimeout(() => {
			chargginON = true;
		}, 100);
	})
</script>

<main style={chargginON ? "opacity:1" : "opacity:0"}>
	<Slider />
	<Button text={"CONTRIBUIR"} custom_style={button_constribute}/>
	<BigLinks />
	<Purpose />
	<CommingSoon />
	<AboutUs />
    <!-- <SlideTestimony /> -->
    <Form />
    <Footer />
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0;
		transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
		margin-top: -30px;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>