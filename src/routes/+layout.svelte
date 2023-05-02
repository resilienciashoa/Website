<script>
	import NavBar from './NavBar.svelte';
</script>

<!--<NavBar />-->
<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap');
	:global(html) {
		font-size: 62.5%;
		font-family: 'Lato', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	@media only screen and (max-width: 56.25em) {
		:global(html) {
			font-size: 50%;
		}
	}
	/* @media only screen and (max-width: 75em){
:global(html) {
    font-size: 56.25%;
}
    }*/
</style>
