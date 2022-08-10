import { registerPlugin } from '@capacitor/core';

import type { TesterPlugin } from './definitions';

let TesterImpl;

console.log(`(window as any).Tester !== undefined: ${(window as any).Tester !== undefined}`)

if ((window as any).Tester !== undefined) {
  console.log('Loading Cordova based TesterPlugin.');
  TesterImpl = (window as any).Tester;
} else {
  console.log('Loading Capacitor based TesterPlugin.');
  TesterImpl = registerPlugin<TesterPlugin>('Tester', {
    web: () => import('./web').then(m => new m.TesterWeb()),
  });
}

const Tester = TesterImpl;

export * from './definitions';
export { Tester };
