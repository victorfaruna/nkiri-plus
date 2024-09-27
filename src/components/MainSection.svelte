<script lang="ts">
	import SectionItem from '$components/SectionItem.svelte';

	let { sectionData, sectionType }: any = $props();
</script>

<div class="section-item-container mb-[10%]">
	<p class="text-[1.3rem] font-semibold mb-5">New {sectionType} Uploads</p>
	<div class="inner grid gap-4" style="">
		{#each sectionData as item}
			<SectionItem poster={item.poster_path} title={item.title} />
		{/each}
	</div>
</div>

<style>
	.inner {
		grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
	}

	@media (max-width: 500px) {
		.inner {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
