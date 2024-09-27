import { writable } from 'svelte/store';
const initialTheme =
	typeof window !== 'undefined' ? (localStorage.getItem('theme') ?? 'light') : 'light';

const theme = writable(initialTheme);

theme.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	}
});

export { theme };
