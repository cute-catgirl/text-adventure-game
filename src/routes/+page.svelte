<script>
	import { onMount } from 'svelte';
	import Log from '../lib/components/log.svelte';
	import Resourcelist from '../lib/components/resourcelist.svelte';
	import Themeswitcher from '../lib/components/themeswitcher.svelte';
	import { resources, messages } from '$lib/stores';
	import { callEvent } from '$lib/index';

	onMount(() => {
		callEvent('story_start');
	});
</script>

<main>
	<div id="sidebar">
		<div id="resourcebox" class="box">
			<Resourcelist resources={$resources} --c-leader="var(--color-foreground-muted)"
			></Resourcelist>
		</div>
		<div id="options" class="box">
			<Themeswitcher></Themeswitcher>
		</div>
	</div>
	<div id="main">
		<div id="logbox">
			<Log messages={$messages}></Log>
		</div>
	</div>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		background-color: var(--color-background-0);
		display: grid;
		grid-template-columns: 2fr 5fr;
		grid-template-areas: 'sidebar main';
		gap: 1em;
		padding: 1em;
		color: var(--color-foreground);
	}

	#sidebar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--color-background-0);
		grid-area: 'sidebar';
		gap: 1em;
	}

	#main {
		grid-area: 'main';
	}

	#resourcebox {
		flex-grow: 1;
	}

	.box {
		padding: 1rem;
		background-color: var(--color-background-2);
		color: var(--color-foreground);
		border: 1px solid var(--color-foreground);
	}
</style>
