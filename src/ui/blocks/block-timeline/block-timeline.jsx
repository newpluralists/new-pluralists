import React, { useState, useEffect } from 'react';
import { Button } from 'tectonica-ui';

import './styles.scss';

export default function BlockTimeline({ block }) {
  const { milestones = [] } = block;

  const [sortOrder, setSortOrder] = useState('desc');
  const [sortedMilestones, setSortedMilestones] = useState([]);
  const [activeYear, setActiveYear] = useState(null);

  const years = [...new Set(milestones.map((milestone) => milestone.year))].sort((a, b) =>
    sortOrder === 'desc' ? b - a : a - b
  );

  useEffect(() => {
    const sorted = [...milestones].sort((a, b) => (sortOrder === 'desc' ? b.year - a.year : a.year - b.year));
    setSortedMilestones(sorted);

    console.log({ year: sorted[0].year }, activeYear);

    // Set active year to the first year in the sorted list
    if (sorted.length > 0 && !activeYear) {
      setActiveYear(sorted[0].year);
    }
  }, [milestones, sortOrder, activeYear]);

  useEffect(() => {
    const handleScroll = () => {
      const yearElements = document.querySelectorAll('[data-year]');

      if (yearElements.length > 0 && window.scrollY < 100) {
        const firstYear = Number(yearElements[0].dataset.year);
        setActiveYear(firstYear);
        return;
      }

      for (let i = 0; i < yearElements.length; i++) {
        const element = yearElements[i];
        const rect = element.getBoundingClientRect();

        if (rect.top <= 150) {
          const year = Number(element.dataset.year);
          setActiveYear(year);

          // If we're at the last element and it's well into view, keep it active
          if (i === yearElements.length - 1 && rect.top < -50) {
            break;
          }

          // If there's a next element that's also in view, check which one is closer
          if (i < yearElements.length - 1) {
            const nextElement = yearElements[i + 1];
            const nextRect = nextElement.getBoundingClientRect();

            if (nextRect.top <= 150) {
              continue; // Check the next element in the next iteration
            }
          }

          break; // We found our active year
        }
      }
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ui-block-timeline">
      <div className="timeline-content">
        <div className="timeline-sort">
          <span className="sort-label">Sort Milestones</span>
          <div className="select-container">
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="sort-select">
              <option value="desc">Most recent first</option>
              <option value="asc">Oldest first</option>
            </select>
          </div>
        </div>

        <div className="timeline">
          {sortedMilestones.map((milestone, index) => {
            // Check if this milestone is the first of its year
            const isFirstOfYear = index === 0 || sortedMilestones[index - 1].year !== milestone.year;

            return (
              <div key={milestone.id} className="milestone-container">
                {isFirstOfYear && (
                  <div className="year-marker" data-year={milestone.year}>
                    <div className="year-dot"></div>
                  </div>
                )}
                {isFirstOfYear && <h2 className="year-heading">{milestone.year}</h2>}
                <div className="milestone">
                  <div className="milestone-title">{milestone.title}</div>
                  <div className="milestone-dot"></div>
                  <div className="milestone-content">
                    {milestone.image && (
                      <div className="milestone-image-container">
                        <img
                          src={milestone.image.url}
                          alt={milestone.image.alt ?? milestone.headline}
                          className="milestone-image"
                        />
                      </div>
                    )}
                    <h3 className="milestone-headline">{milestone.headline}</h3>
                    <p className="milestone-description" dangerouslySetInnerHTML={{ __html: milestone.description }} />
                    {milestone.cta && <Button block={milestone.cta} classNames="minimal" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="year-navigation">
          <div className="year-navigation-sticky">
            {years.map((year) => (
              <div
                key={year}
                className={`year-navigation-item ${activeYear === year ? 'active' : ''}`}
                onClick={() => {
                  const element = document.querySelector(`[data-year="${year}"]`);
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                <div className="year-navigation-dot"></div>
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
