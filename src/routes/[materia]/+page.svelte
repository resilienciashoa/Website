<script>
	export let data;
	let { specificProjects, title, imgSrc, hoverColor } = data;
	import MateriaTemplate from '../MateriaTemplate.svelte';
	import SpecificProject from '../SpecificProject.svelte';
</script>

<MateriaTemplate {title} {imgSrc}>
	{#each specificProjects as specificProject}
		<SpecificProject {...specificProject} {hoverColor} />
	{/each}
</MateriaTemplate>
