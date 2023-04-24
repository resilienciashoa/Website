<div class="header" />

<style>
	.header {
		height: 95vh;
		background-image: linear-gradient(
				to right bottom,
				rgba(197, 197, 197, 0.3),
				rgba(250, 208, 196, 0.3)
			),
			url(/tree.jfif);
		background-size: cover;
		background-position: center;
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
		clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
	}
	@media (max-width: 768px) {
		.header {
			height: 100vh;
		}
	}
</style>
