<!-- HTML code for a Navbar -->
<nav class="navbar">
	<ul class="menu">
		<li><a href="#">Acerca de</a></li>
		<li><a href="#">Materias</a></li>
		<li><a href="#">Documentación</a></li>
		<li><a href="#">Galería</a></li>
		<li><a href="#">Recursos</a></li>
		<li><a href="#">Contacto</a></li>
	</ul>
</nav>

<style>
	.navbar {
		height: 5vh;
		/* center vertically */
		display: flex;
		align-items: center;
		background-color: #333;
		justify-content: flex-end;
		padding: 15px 0px;
		padding-right: 20px;
	}
	.menu {
		display: flex;
		gap: 1rem;
	}
	a {
		color: #fff;
		text-decoration: none;
		font-size: 1rem;
		font-weight: 600;
	}
	/* Margin at end */
	/* Center vertically */
	.menu li {
		display: flex;
		align-items: center;
	}
	/* Hide in Mobile */
	@media (max-width: 768px) {
		.navbar {
			display: none;
		}
	}
</style>
