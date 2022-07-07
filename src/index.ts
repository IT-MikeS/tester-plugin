import { registerPlugin } from '@capacitor/core';

import type { TesterPlugin } from './definitions';

const Tester = registerPlugin<TesterPlugin>('Tester', {
  web: () => import('./web').then(m => new m.TesterWeb()),
});

export * from './definitions';
export { Tester };
