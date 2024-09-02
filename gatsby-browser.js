import React from 'react';
import Layout from './src/ui/layout/layout';

import './src/styles/main.scss';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
