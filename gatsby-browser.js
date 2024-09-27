import { initConfig } from './src/config';

export const onClientEntry = () => {
  initConfig();
};
