<script>
	import Modal, { bind } from 'svelte-simple-modal';
	import { writable } from 'svelte/store';
	import BigImage from './BigImage.svelte';
	import MateriaTemplate from '../../MateriaTemplate.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const modal = writable(null);
	const showModal = () => modal.set(bind(BigImage));
	//const showModal = (obj) => console.log(obj);

	import '@splidejs/splide/css/sea-green';

	export let data;
	let { materia, materiaImgSrc } = data;
	let images = ['/masada.jpg', '/test.jpg'];
	let mainSlide;
	let thumbnailSlide;
	let mainOptions = {
		type: 'fade',
		rewind: true,
		//cover: true,
		width: 500,
		height: '25rem',
		pagination: false,
		arrows: false
	};
	let thumbnailOptions = {
		fixedWidth: 100,
		fixedHeight: 60,
		gap: 10,
		rewind: true,
		pagination: false,
		cover: true,
		isNavigation: true,
		breakpoints: {
			600: {
				fixedWidth: 60,
				fixedHeight: 44
			}
		}
	};
	let mainSplide;
	onMount(() => {
		mainSplide = mainSlide?.splide;
		let thumbnailSplide = thumbnailSlide?.splide;

		console.log(mainSplide.sync(thumbnailSplide));
	});

	function setModalImg() {
		const modal = document.querySelector('.modalWindow');
		const imageSrc = images[mainSplide.index];
		modal.style.backgroundImage = `url('${imageSrc}')`;
		setModalClose();
	}
	function setModalClose() {
		var img = new Image();
		img.onload = function () {
			const div = document.querySelector('.modalWindow');
			if (!div) return;
			const close = div.querySelector('.close');
			const divWidth = div.offsetWidth;
			const divHeight = div.offsetHeight;
			const imgWidth = this.width;
			const imgHeight = this.height;
			const imgRatio = imgWidth / imgHeight;
			const divRatio = divWidth / divHeight;
			let bgWidth, bgHeight;
			if (imgRatio > divRatio) {
				bgWidth = divWidth;
				bgHeight = bgWidth / imgRatio;
			} else {
				bgHeight = divHeight;
				bgWidth = bgHeight * imgRatio;
			}
			const bgPosX = (divWidth - bgWidth) / 2;
			const bgPosY = (divHeight - bgHeight) / 2;
			close.style.marginTop = `${bgPosY}px`;
			close.style.marginRight = `${bgPosX}px`;
		};
		img.src = images[mainSplide.index];
	}
</script>

<svelte:window on:resize={setModalClose} />
<Modal on:open={setModalImg} classWindow="modalWindow" show={$modal} />
<MateriaTemplate title={materia} imgSrc={materiaImgSrc}>
	<div class="content">
		{#if browser}
			<Splide class="mainSlide" bind:this={mainSlide} options={mainOptions}>
				{#each images as image}
					<SplideSlide>
						<img on:click={showModal} src={image} />
					</SplideSlide>
				{/each}
			</Splide>
			<Splide bind:this={thumbnailSlide} options={thumbnailOptions}>
				{#each images as image}
					<SplideSlide>
						<img src={image} />
					</SplideSlide>
				{/each}
			</Splide>
		{/if}
		<h1>{data.title}</h1>
	</div>
</MateriaTemplate>

<style>
	.content {
		padding-top: 2vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.carousel {
		width: 50%;
		align-self: center;
	}
	img {
		max-width: 100%;
		max-height: 100%;
	}
	:global(.splide__slide.is-active) {
		border: none !important;
	}
	:global(.splide__slide) {
		border: none !important;
	}
	:global(.mainSlide img) {
		border: 5px black solid !important;
		border-radius: 10px !important;
	}
	:global(.mainSlide.splide) {
		padding: 0 !important;
	}
	:global(.mainSlide .splide__slide) {
		display: flex;
		justify-content: center;
	}
	:global(.modalWindow) {
		/* background-image: url('/test.jpg') !important; */
		/* background-color: rgb(198, 196, 196) !important; */
		/* Transparent background color */
		background-color: rgba(0, 0, 0, 0) !important;
		width: 90vw !important;
		height: 90vh !important;
		background-size: contain !important;
		background-repeat: no-repeat !important;
		background-position: center !important;
		/* background-size: cover !important; */
		/* width: 100vw !important; */
	}
</style>
