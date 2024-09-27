import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/scraper');
	const data = await res.json();

	return {
		dramaData: data.results.drama,
		movieData: data.results.movie,
		seriesData: data.results.series
	};
}) satisfies PageServerLoad;
