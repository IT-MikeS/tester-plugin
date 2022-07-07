export interface TesterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
