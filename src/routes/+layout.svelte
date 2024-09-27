<script lang="ts">
	import Header from '$components/Header.svelte';
	import type { LayoutData } from './$types';
	import '../app.css';
	let { children, data }: { children: any; data: LayoutData } = $props();
</script>

<Header />
<main>
	{@render children()}
</main>
