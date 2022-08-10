import { registerPlugin } from '@capacitor/core';

import type { TesterPlugin } from './definitions';

let TesterImpl;

if ((window as any).cordova !== undefined && (window as any).cordova.platformVersion !== '1.0.0') {
  console.log('Loading Cordova based TesterPlugin.');
  TesterImpl = new Proxy({}, {
    get(_target, property) {
      return (window as any).Tester[property];
    }
  });
} else {
  console.log('Loading Capacitor based TesterPlugin.');
  TesterImpl = registerPlugin<TesterPlugin>('Tester', {
    web: () => import('./web').then(m => new m.TesterWeb()),
  });
}

const Tester = TesterImpl as TesterPlugin;

export * from './definitions';
export { Tester };
