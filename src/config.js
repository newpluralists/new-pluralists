import { setPathToModel } from 'tectonica-ui';

export const initConfig = () => {
  setPathToModel((model, slug) => {
    if (!model?.apiKey) {
      console.warn('No model provided');
      return `/${slug}`;
    }

    const { apiKey } = model;

    if (apiKey === 'funder') {
      return `/funders/${slug}`;
    } else if (apiKey === 'builder') {
      return `/builders/${slug}`;
    } else if (apiKey === 'post') {
      return `/blogs/${slug}`;
    } else {
      return `/${slug}`;
    }
  });
};
