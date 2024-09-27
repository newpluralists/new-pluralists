import React from 'react';
import Layout from './src/ui/layout/layout';

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
