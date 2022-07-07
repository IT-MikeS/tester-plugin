import { WebPlugin } from '@capacitor/core';

import type { TesterPlugin } from './definitions';

export class TesterWeb extends WebPlugin implements TesterPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
