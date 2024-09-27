<script lang="ts">
	let { poster, title }: any = $props();
</script>

<div class="w-full h-auto border border-color-1/10">
	<img src={poster} alt="poster" class="w-full object-cover" />
	<div class="label p-4 text-[0.7rem] font-semibold">
		<p>{title}</p>
	</div>
</div>
