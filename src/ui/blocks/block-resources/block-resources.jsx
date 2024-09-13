import React from 'react';
import ResourceCard from '../../components/resource-card/resource-card';
import { ButtonList } from 'tectonica-ui';

import './styles.scss';

const BlockResources = ({ block }) => {
  const { headline, ctas = [], highlightResources = [] } = block;

  return (
    <section className="block-resources">
      <div className="container">
        {headline && <h3>{headline}</h3>}

        <div className="row">
          {highlightResources.map((resource) => (
            <div className="col-md-4" key={resource.id}>
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>

        {ctas && <ButtonList buttons={ctas} />}
      </div>
    </section>
  );
};

export default BlockResources;
