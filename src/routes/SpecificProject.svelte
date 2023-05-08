<script>
	import Feather from 'sveltekit-feather-icons/feather.svelte';
	export let imgSrc;
	export let title;
	export let description;
	export let imgMargin;
	export let imgWidth;
	export let url = '/';
	export let hoverColor;
	function handleMouseEnter(e) {
		e.target.style.color = hoverColor;
	}
	function handleMouseLeave(e) {
		e.target.style.color = '#fff';
	}
</script>

<div class="specific-project">
	<div class="img-container">
		<img style:margin={imgMargin} style:width={imgWidth} src={imgSrc} class="img" />
	</div>
	<div class="content">
		<div class="padding">
			<p class="title">{title}</p>
			<p class="description">{@html description}</p>
		</div>
		<a on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} href={url}
			><Feather icon="chevron-down" size="25" /></a
		>
	</div>
</div>

<style>
	.specific-project {
		box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
		border-radius: 11px;
		overflow: hidden;
		transition: all 0.4s;
		width: 27rem;
        background-color: #6b6b6b;
	}

	/* .specific-project:hover {
		transform: translateY(-1.2rem);
		box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
	} */
	.padding {
		display: flex;
    padding: 1rem 0rem 1rem 2rem;
    flex-direction: column;
    height: 100%;
	}
	.content {
		/* border: 3px solid #6b6b6b;
		border-top: 0px; */
		background-color: #6b6b6b;
		color: #fff;
        height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	}

	.title {
		font-size: 2.4rem;
		/* color: #333; */
		font-weight: 600;
		margin-bottom: 2rem;
	}

	.description {
		font-size: 1.8rem;
		display: flex;
		align-items: center;
		gap: 1.6rem;
	}

	.img-container {
		width: 100%; /* width of container */
		height: 150px; /* height of container */
		overflow: hidden;
		/* border: 3px solid #6b6b6b; */
		border-radius: 11px 11px 0px 0px;
	}
	/* display a as button */
	a:link,
	a:visited {
		display: block;
		width: 100%;
		height: 3rem;
		/* background-color: #6b6b6b; */
		color: #fff;
		display: flex;
		justify-content: center;
		/* background-color: red; */
	}
</style>
