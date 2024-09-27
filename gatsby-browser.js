import React from 'react';
import { initConfig } from './src/config';

import './src/styles/main.scss';

export const onInitialClientRender = () => {
  initConfig();
};
