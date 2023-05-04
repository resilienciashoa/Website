<script>
    import Modal, { bind } from 'svelte-simple-modal';
    import { writable } from 'svelte/store';
	import BigImage from './BigImage.svelte';
	import MateriaTemplate from '../../MateriaTemplate.svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { onMount } from 'svelte';
	import { browser } from '$app/environment';

    const modal = writable(null);
	const showModal = (imgSrc) => modal.set(bind(BigImage, {imgSrc}));
	//const showModal = (obj) => console.log(obj);

import '@splidejs/splide/css/sea-green';


    
	export let data;
	let { materia, materiaImgSrc } = data;
    let images = ['/masada.jpg', '/test.jpg']
    let mainSlide;   
    let thumbnailSlide;
     let mainOptions = {
            type: 'fade',
      rewind: true,
      //cover: true,
        width: 500,
      height: '25rem',
      pagination: false,
      arrows: false,
  };
    let thumbnailOptions = {
fixedWidth: 100,
      fixedHeight: 60,
      gap: 10,
      rewind: true,
      pagination: false,
      cover: true,
    isNavigation: true,
         breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  }
    onMount( () => {
        let mainSplide = mainSlide?.splide;
    let thumbnailSplide = thumbnailSlide?.splide;
   
  console.log( mainSplide.sync(thumbnailSplide) );
} );
</script>
<Modal classWindow="modalWindow"  show={$modal} />
<MateriaTemplate title={materia} imgSrc={materiaImgSrc}>
	<div class="content">
		{#if browser}
<Splide class="mainSlide" bind:this={mainSlide} options={mainOptions}>
        {#each images as image}
           <SplideSlide>
    <img on:click={showModal.bind(null, image)} src={image}/>
  </SplideSlide> 
        {/each}
            
        </Splide>
    <Splide bind:this={thumbnailSlide} options={ thumbnailOptions }>
        {#each images as image}
           <SplideSlide>
    <img src={image}/>
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
    img{
        max-width:100%;
max-height:100%;

    }
   :global(.splide__slide.is-active){
        border: none !important;
    }
:global(.splide__slide){
        border: none !important;
    }
   :global(.mainSlide img){
        border: 5px black solid !important;
        border-radius: 10px !important;
    }
    :global(.mainSlide.splide){
      padding: 0 !important;
    }
    :global(.mainSlide .splide__slide){
        display: flex;
        justify-content: center;
    }
     :global(.modalWindow){
        width: 100vw !important;
    }
</style>
