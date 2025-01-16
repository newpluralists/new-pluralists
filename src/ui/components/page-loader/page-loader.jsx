import React from 'react';
import { isAlreadyLogged } from '../../../utils/auth.utils';
import ProtectedView from '../protected-view/protected-view';

const PageLoader = ({ favicon, context, children }) => {
  const { config } = context;

  if (config.protected && !isAlreadyLogged()) {
    return <ProtectedView config={config} favicon={favicon} />;
  }

  return <>{children}</>;
};

export default PageLoader;
