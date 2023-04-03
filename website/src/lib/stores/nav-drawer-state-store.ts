import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

type AppStates = {
  listStates: {
    theming: boolean;
    components: boolean;
  };
  currentRoute: string;
};

export let appStatesStore: Writable<AppStates>;

if (browser) {
  console.log('getting appStates');
  let states: AppStates = { listStates: { theming: true, components: true }, currentRoute: '' };

  if (localStorage.getItem('appStates')) {
    states = JSON.parse(localStorage.getItem('appStates') || JSON.stringify(states));
  } else {
    localStorage.setItem('appStates', JSON.stringify(states));
  }
  appStatesStore = writable<AppStates>(states);
}

export function updateAppStates(states: AppStates) {
  localStorage.setItem('appStates', JSON.stringify({ ...states }));
  return { ...states };
}
