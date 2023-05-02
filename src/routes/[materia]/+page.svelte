<script>
	export let data;
	let { specificProjects, title, imgSrc, hoverColor } = data;
	import MateriaTemplate from '../MateriaTemplate.svelte';
	import SpecificProject from '../SpecificProject.svelte';
</script>

<MateriaTemplate {title} {imgSrc}>
	<div class="content">
		{#each specificProjects as specificProject}
			<SpecificProject {...specificProject} {hoverColor} />
		{/each}
	</div>
</MateriaTemplate>

<style>
	.content {
		padding-top: 5vh;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%/3, max(64px, 100%/3)), 1fr));
		justify-items: center;
		row-gap: 5rem;
	}
	@media (max-width: 34em) {
		.content {
			grid-template-columns: 1fr;
			/* gap: 5rem;*/
		}
	}
</style>
