<script>
	import langData from '../../data/lang/en_us.json';
	export let messages;
	function typewriter(node, { speed = 3 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

{#each messages as message}
	<p transition:typewriter|global>{langData[message]}</p>
{/each}

<style>
	p {
		font-size: 1.1em;
	}
</style>
