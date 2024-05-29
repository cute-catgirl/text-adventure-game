import { writable } from 'svelte/store';

const theme = writable('rosepine');
const resources = writable([]);
const messages = writable([]);

export { theme, resources, messages };