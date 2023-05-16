<div class="header">
	<div class="header__text-box">
		<h1 class="heading-primary">
			<span class="heading-primary--main">HOLOCAUSTO:</span>
			<span class="heading-primary--sub">Resiliencia, Supervivencia e Historias de éxito </span>
		</h1>
	</div>
</div>

<style>
	.header {
		height: 60vh;
		background-image: url(/tree.jfif);
		box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
		position: relative;
		background-size: cover;
		background-position: center;
	}
	@media (max-width: 768px) {
		.header {
			height: 100vh;
		}
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
