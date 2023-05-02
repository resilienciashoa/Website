<script>
	import MateriaTemplate from '../../MateriaTemplate.svelte';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	let carousel;

	export let data;
	let { materia, materiaImgSrc } = data;
</script>

<MateriaTemplate title={materia} imgSrc={materiaImgSrc}>
	<div class="content">
		{#if browser}
			<div class="carousel">
				<Carousel bind:this={carousel}>
					<img src="/masada.jpg" alt="" />
				</Carousel>
			</div>
		{/if}
		<h1>{data.title}</h1>
	</div>
</MateriaTemplate>

<style>
	.content {
		padding-top: 2vh;
		display: flex;
		flex-direction: column;
	}
	.carousel {
		width: 50%;
		align-self: center;
	}
</style>
