<script>
	import MainSection from '$components/MainSection.svelte';
	import SearchBar from '$components/SearchBar.svelte';

	let { data } = $props();
	let { dramaData, movieData, seriesData } = data;
</script>

<div id="wrapper" class="w-full px-[5%] mt-[5%] sm:px-[4%]">
	<SearchBar />
	<MainSection sectionData={dramaData} sectionType="Drama" />
	<MainSection sectionData={movieData} sectionType="Movie" />
	<MainSection sectionData={seriesData} sectionType="Series" />
</div>
