<script>
	import { theme } from '$lib/stores';
</script>

<svelte:head>
	<link rel="stylesheet" href="/src/lib/global.css" />
	<meta name="color-scheme" content={$theme} />
	<link rel="stylesheet" href={`/src/lib/themes/${$theme}.css`} />
</svelte:head>
<slot />
