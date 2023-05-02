<script>
	export let title;
	export let imgSrc;
</script>

<div class="fixed-div">
	<div class="header" style:background-image={`url('${imgSrc}')`}>
		<div class="header__text-box">
			<h1 class="heading-primary">
				<span class="heading-primary--main">{title}</span>
			</h1>
		</div>
	</div>
</div>
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
