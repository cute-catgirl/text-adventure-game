<script>
	export let resources;
	import Asterisk from '~icons/lucide/asterisk';
	import langData from '../../data/lang/en_us.json';
</script>

{#each resources as resource}
	<div>
		<p class="name">* {langData[resource.id]}</p>
		<p class="resource">{resource.amount}</p>
	</div>
{/each}

<style>
	div {
		display: grid;
		grid-template-columns: auto max-content;
		grid-template-areas: 'name amount';
		align-items: end;
		gap: 1rem;
	}
	.name {
		grid-area: 'name';
		position: relative;
		overflow: hidden;
	}
	.name::after {
		position: absolute;
		content: ' . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
			'. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
			'. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ';
		color: var(--c-leader);
		text-align: right;
	}
</style>
