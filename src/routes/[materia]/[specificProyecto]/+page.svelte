<script>
	import MateriaTemplate from '../../MateriaTemplate.svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	let carousel;
  //import '@splidejs/svelte-splide/css/skyblue';
    import '@splidejs/svelte-splide/css/sea-green';

	export let data;
	let { materia, materiaImgSrc } = data;

    let mainSlide;   
    let thumbnailSlide;
    onMount( () => {
        let mainSplide = mainSlide?.splide;
    let thumbnailSplide = thumbnailSlide?.splide;
        
  console.log( mainSplide.sync(thumbnailSplide) );
} );
</script>

<MateriaTemplate title={materia} imgSrc={materiaImgSrc}>
	<div class="content">
		{#if browser}
        <Splide bind:this={mainSlide} options={ {
    type:"loop",
    width : 500,
  } }>
<SplideSlide>
    <img src="/masada.jpg" alt="Image 1"/>
  </SplideSlide>
              <SplideSlide>
    <img src="/masada.jpg" alt="Image 1"/>
  </SplideSlide>
            
        </Splide>
    <Splide bind:this={thumbnailSlide} options={ {
   fixedWidth: 100,
     fixedHeight: 60,
		gap       : 10,
		rewind    : true,
		pagination: false,
      isNavigation: true,
    focus      : 'center',
  breakpoints: {
    600: {
      fixedWidth : 60,
      fixedHeight: 44,
    },
  },
  } }>
<SplideSlide>
    <img src="/masada.jpg" alt="Image 1"/>
  </SplideSlide>
              <SplideSlide>
    <img src="/masada.jpg" alt="Image 1"/>
  </SplideSlide>
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
        width: 100%;
  height: auto;
          object-fit: cover;

    }
    :global(.flex){
        display: flex;
        justify-content: center;
    }
</style>
