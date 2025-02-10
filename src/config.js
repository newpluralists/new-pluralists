import { setPathToModel, setTriggerId, setDatoCmsClient } from 'tectonica-ui';

export const getPathFromModel = ({ slug, model }) => {
  if (model === 'funder') {
    return `/funders/${slug}`;
  } else if (model === 'builder') {
    return `/builders/${slug}`;
  } else if (model === 'post') {
    return `/blogs/${slug}`;
  } else if (model === 'resource') {
    return `/resources/${slug}`;
  } else if (model === 'stories_impact') {
    return `/stories/${slug}`;
  } else {
    return `/${slug}`;
  }
};

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
    } else if (apiKey === 'resource') {
      return `/resources/${slug}`;
    } else if (apiKey === 'stories_impact') {
      return `/stories/${slug}`;
    } else {
      return `/${slug}`;
    }
  });

  setDatoCmsClient('71094af4b2a2474b559e968af56a25');
  setTriggerId('34070');
};
