import { registerPlugin } from '@capacitor/core';

import type { TesterPlugin } from './definitions';

let TesterImpl;

if ((window as any).Cordova !== undefined && (window as any).Capacitor === undefined) {
  TesterImpl = (window as any).Tester;
} else {
  TesterImpl = registerPlugin<TesterPlugin>('Tester', {
    web: () => import('./web').then(m => new m.TesterWeb()),
  });
}

const Tester = TesterImpl;

export * from './definitions';
export { Tester };
