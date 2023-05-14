<script>
	import Feather from 'sveltekit-feather-icons/feather.svelte';
	export let title = '';
	export let link = title;
	export let description = '';
	export let color = 'red';
	export let iconName = 'feather';
	export let backgroundColor = 'auto';
</script>

<div class="subject" style:background-color={backgroundColor}>
	<div class="text-and-icon">
		<div class="subject-text">
			<p class="subject-title" style:color>{@html title}</p>
			<p class="subject-description">
				{@html description}
			</p>
		</div>
		<div class="icon" style:background-color={color}>
			<Feather icon={iconName} size="70" />
		</div>
	</div>
	<a href={link} class="more" style:color>Ver Mas</a>
</div>

<style>
	@media (max-width: 34em) {
		.text-and-icon {
			flex-direction: column-reverse;
		}
		.subject-text {
			width: auto !important;
		}
		.subject-title {
			text-align: center;
		}
		.icon {
			margin-right: 0px !important;
		}
	}
	.subject {
		display: flex;
		flex-direction: column;
	}
	.text-and-icon {
		padding: 3rem;
		display: flex;
		width: 100vw;
		font-size: 30px;
		justify-content: space-between;
		align-items: center;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20rem;
		height: 20rem;
		border-radius: 50%;
		color: #fff;
		margin-right: 3rem;
	}

	.subject-text {
		width: 50%;
		display: flex;
		flex-direction: column;
	}
	.subject-title {
		font-size: 7.74rem;
		font-weight: 600;
		margin-bottom: 1.2rem;
	}
	.subject-description {
		font-size: 16.2px;
		line-height: 1.8;
	}
	.more {
		text-align: center;
	}
	a:link,
	a:visited {
		color: inherit;
		font-size: 1.6rem;
		display: inline-block;
		text-decoration: none;
		border-bottom: 1px solid currentColor;
		padding-bottom: 2px;
		transition: all 0.3s;
		align-self: center;
		margin-bottom: 1rem;
	}
	a:hover,
	a:active {
		border-bottom: 1px solid transparent;
	}
</style>
