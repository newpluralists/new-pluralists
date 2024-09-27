import React from 'react';
// import Layout from './src/ui/layout/layout';
import { initConfig } from './src/config';

import './src/styles/main.scss';

// export const wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>;
// };

export const onClientEntry = () => {
  initConfig();
};
