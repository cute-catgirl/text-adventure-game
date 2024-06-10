import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function localStorageWritable(key, initialValue) {
    // Check if browser environment is available and get stored value or initial value
    const storedValue = browser ? JSON.parse(localStorage.getItem(key)) : null;
    const value = storedValue !== null ? storedValue : initialValue;

    const store = writable(value);

    store.subscribe((val) => {
        if (browser) {
            localStorage.setItem(key, JSON.stringify(val));
        }
    });

    return store;
}

const newgame = localStorageWritable('newgame', true);
const theme = localStorageWritable('theme', 'rosepine');
const resources = localStorageWritable('resources', []);
const messages = localStorageWritable('messages', []);

export { newgame, theme, resources, messages };
