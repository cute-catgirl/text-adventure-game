<script>
	import { theme } from '$lib/stores';
	import Palette from '~icons/lucide/palette';
</script>

<div>
	<label for="themeswitcher"><span class="icon"><Palette /></span> Theme</label>
	<select id="themeswitcher" bind:value={$theme}>
		<option value="rosepine">Rosé Pine</option>
		<option value="rosepinemoon">Rosé Pine Moon</option>
		<option value="rosepinedawn">Rosé Pine Dawn</option>
		<option value="norddark">Nord Dark</option>
		<option value="nordlight">Nord Light</option>
		<option value="catppuccinfrappe">Catppuccin Frappé</option>
		<option value="catppuccinmacchiato">Catppuccin Macchiato</option>
		<option value="catppuccinmocha">Catppuccin Mocha</option>
		<option value="everforestdark">Everforest Dark</option>
		<option value="everforestlight">Everforest Light</option>
	</select>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: auto max-content;
		grid-template-areas: 'label select';
		align-items: end;
		gap: 1rem;
	}
	label {
		color: var(--c-foreground);
		position: relative;
		overflow: hidden;
		vertical-align: middle;
	}
	label::after {
		position: absolute;
		content: ' . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
			'. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
			'. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ';
		color: var(--color-foreground-muted);
		text-align: right;
	}
	select {
		font-family: inherit;
		outline: none;
		background-color: var(--color-background-2);
		color: var(--c-foreground);
		border: 1px solid var(--color-foreground-muted);
		padding-left: 0.25rem;
	}
	select:focus {
		outline: 1px solid var(--color-foreground-muted);
	}
	.icon {
		vertical-align: middle;
	}
</style>
