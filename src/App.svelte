<script>
import AboutUs from "./big_components/AboutUs.svelte";
import BigLinks from "./big_components/BigLinks.svelte";
import Header from "./big_components/Header.svelte";
import Purpose from "./big_components/Purpose.svelte";
import Slider from "./big_components/Slider.svelte";
import Button from "./buttons/Button.svelte";

let button_constribute = "width:100%; background-color:red";
</script>

<main>
	<Header />
	<Slider />
	<Button text={"Constribuir"} custom_style={button_constribute}/>
	<BigLinks />
	<Purpose />
	<AboutUs />

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