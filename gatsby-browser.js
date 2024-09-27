import { initConfig } from './src/config';

import './src/styles/navbar.scss';
import './src/styles/main.scss';

export const onClientEntry = () => {
  initConfig();
};
