import React from 'react';
import { initConfig } from './src/config';
import Layout from './src/ui/layout/layout';

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export const onClientEntry = () => {
  initConfig();
};
