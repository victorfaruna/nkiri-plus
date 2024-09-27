<script>
	import { theme } from '$src/lib/store';
</script>

<header
	id="main-header"
	class="w-full h-[74px] flex justify-between items-center px-[5%] shadow-lg shadow-color-1/[0.03]"
>
	<div id="logo">
		<img src="/logo.svg" alt="logo" class="logo size-[6rem] object-contain" />
	</div>
	<div id="nav" class="lg:hidden">
		<ul class="flex items-center gap-[2rem]">
			<li class="hover:text-color-3"><a href="/">Home</a></li>
			<li class="hover:text-color-3"><a href="/about">Chinese Drama</a></li>
			<li class="hover:text-color-3"><a href="/about">K-Drama</a></li>
			<li class="hover:text-color-3"><a href="/about">TV Series</a></li>
			<li class="hover:text-color-3"><a href="/about">Movies</a></li>
			<li class="hover:text-color-3"><a href="/about">Genres</a></li>
		</ul>
	</div>
	<div id="right-side" class="flex gap-4 items-center">
		<a href="/">How to download</a>
		<button aria-label="Search Button" class="p-1 rounded-md bg-color-1/10"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-4"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
				/>
			</svg>
		</button>
		<button
			aria-label="Theme Toggle Button"
			onclick={() => theme.set($theme == 'light' ? 'dark' : 'light')}
			class="p-1 rounded-md bg-color-1/10"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-4"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
				/>
			</svg>
		</button>
	</div>
</header>
