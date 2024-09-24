import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ResourceCard from '../../components/resource-card/resource-card';
import { ButtonList, isArrayAndNotEmpty } from 'tectonica-ui';

import './styles.scss';

const BlockResources = ({ block }) => {
  const { headline, ctas = [], highlightResources = [] } = block || {};

  const { resources } = useStaticQuery(graphql`
    query {
      resources: allDatoCmsResource(limit: 3) {
        edges {
          node {
            ...ResourceCard
          }
        }
      }
    }
  `);

  const items = isArrayAndNotEmpty(highlightResources) ? highlightResources : resources.edges.map((r) => r.node);

  return (
    <section className="block-resources">
      <div className="container">
        {headline && <h3>{headline}</h3>}

        <div className="row">
          {items.map((resource) => (
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
