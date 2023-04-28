<script>
    	import MateriaTemplate from '../MateriaTemplate.svelte';
         import SpecificProject from '../SpecificProject.svelte'

</script>
<MateriaTemplate title="TLRIID" imgSrc="/TLRIID/books.jpg">
    <div class="specific-projects">
        {#each Array(6) as n}
        <SpecificProject/>
          {/each}
    </div>
</MateriaTemplate>

<style>
   .specific-projects{
       display:grid;
       grid-template-columns: repeat(auto-fit, minmax(min(100%/3, max(64px, 100%/3)), 1fr));
       justify-items: center;
       row-gap: 5rem;
   }
    @media (max-width: 34em){
    .specific-projects {
    grid-template-columns: 1fr;
   /* gap: 5rem;*/
}
}
</style>