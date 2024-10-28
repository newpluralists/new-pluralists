import React from 'react';
import { Card, isArrayAndNotEmpty, Tags } from 'tectonica-ui';
import { Link } from 'gatsby';

import './styles.scss';

const ResourceCard = ({ resource }) => {
  const { title, slug, date, introduction, topics } = resource;

  return (
    <div className="ui-resource-card">
      <Link class="ui-card no-image " to={`/resources/${slug}`}>
        <div class="card-content">
          <div class="card-data">
            {isArrayAndNotEmpty(topics) && (
              <div class="tags-date-wrapper">
                <Tags tags={topics} />
              </div>
            )}

            <h3>{title}</h3>
            <div class="introduction">{introduction}</div>
            {date && <div className="date">{date}</div>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResourceCard;
