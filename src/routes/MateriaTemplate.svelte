<script>
	export let title;
	export let imgSrc;
	export let backUrl = '/';
	import Feather from 'sveltekit-feather-icons/feather.svelte';
</script>

{#if title}
	<div class="fixed-div">
		<div class="header" style:background-image={`url('${imgSrc}')`}>
			<a href={backUrl} class="back">
				<Feather icon="arrow-left" size="50" />
			</a>
			<div class="header__text-box">
				<h1 class="heading-primary">
					<span class="heading-primary--main">{title}</span>
				</h1>
			</div>
		</div>
	</div>
{/if}
<div class="slot">
	<slot />
</div>
<svelte:window />

<style>
	.slot {
		margin-top: 10vh;
	}
	.fixed-div {
		transition: all 3s ease-in-out;
		position: fixed;
		width: 100%;
		z-index: 100;
		top: 0;
	}
	.header {
		height: 10vh;
		box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
		position: relative;
		background-size: cover;
		background-position: center;
	}
	.header__text-box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.back {
		position: absolute;
		top: 50%;
		left: 1%;
		transform: translate(-1%, -50%);
		text-align: center;
		color: #fff;
	}
	.back:hover {
		color: #333;
	}
	.heading-primary {
		color: #fff;
		text-transform: uppercase;
		backface-visibility: hidden;
		/* margin-bottom: 6rem;*/
	}
	.heading-primary--main {
		display: block;
		font-size: 6rem;
		font-weight: 400;
	}
	.heading-primary--sub {
		display: block;
		font-size: 2rem;
		font-weight: 700;
	}
</style>
