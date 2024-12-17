import * as React from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

import './styles.scss';

const FilterableList = ({
  data,
  applyLabel = 'Apply Filters',
  resetLabel = 'Reset Filters',
  filters = [],
  renderItem,
  scrollToId,
}) => {
  const location = useLocation();
  const [filteredData, setFilteredData] = React.useState(data);
  const [visibleItems, setVisibleItems] = React.useState(10);
  const [activeFilters, setActiveFilters] = React.useState({});
  const [isFilterApply, setIsFilterApply] = React.useState(false);
  const [shouldScrollToTop, setShouldScrollToTop] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page'), 10) || 1;
    setCurrentPage(page);
    const queryFilters = {};

    filters.forEach(({ key }) => {
      const value = params.get(key);
      if (value) queryFilters[key] = value;
    });

    setActiveFilters(queryFilters);
    filterData(queryFilters, page);

    const hasFilters = Object.keys(queryFilters).length > 0;
    if (hasFilters && shouldScrollToTop) {
      const wrapper = document.querySelector('#item-list');
      if (wrapper) wrapper.scrollIntoView({ behavior: 'auto' });
    }

    setShouldScrollToTop(false);
  }, [location.search]);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('page')) {
      const initialCard = document.getElementById(`page-${currentPage}`);
      if (initialCard) {
        initialCard.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [filteredData, currentPage]);

  const filterData = (filtersToApply, page = 1) => {
    let filtered = data;

    filters.forEach(({ key, filterFunction }) => {
      const activeValue = filtersToApply[key];
      if (activeValue) {
        filtered = filtered.filter((item) => filterFunction(item, activeValue));
      }
    });

    setFilteredData(filtered);
    setIsFilterApply(true);
    setVisibleItems(page * 10);
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    params.append('page', 1);

    Object.keys(activeFilters).forEach((key) => {
      if (activeFilters[key]) {
        params.append(key, activeFilters[key]);
      }
    });

    setShouldScrollToTop(true);
    navigate(`?${params.toString()}`);
  };

  const resetFilters = () => {
    setActiveFilters({});
    setFilteredData(data);
    setVisibleItems(10);
    setIsFilterApply(false);
    setShouldScrollToTop(true);
    navigate(location.pathname);
  };

  const loadMoreItems = () => {
    const nextPage = Math.ceil(visibleItems / 10) + 1;
    setVisibleItems((prev) => prev + 10);

    const params = new URLSearchParams(location.search);
    params.set('page', nextPage);

    setShouldScrollToTop(false);
    window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
  };

  return (
    <div id="item-list" className="filterable-list">
      {filters.length > 0 && (
        <div className="filters">
          {filters.map(({ key, label, FilterComponent }) => (
            <div key={key} className="filter">
              <label>{label}</label>
              <FilterComponent
                title={activeFilters[key] || undefined}
                value={activeFilters[key] || ''}
                onChange={(value) => setActiveFilters((prev) => ({ ...prev, [key]: value }))}
              />
            </div>
          ))}
          <button className="button-block primary" onClick={applyFilters}>
            {applyLabel}
          </button>
          {Object.keys(activeFilters).length > 0 && isFilterApply && (
            <button className="button-block secondary" onClick={resetFilters}>
              {resetLabel}
            </button>
          )}
        </div>
      )}

      <div className="row">
        {filteredData.slice(0, visibleItems).map((item, index) =>
          React.cloneElement(renderItem(item, Math.ceil(visibleItems / 10)), {
            key: `${visibleItems}-${item.id || index}`,
            id: index === (currentPage - 1) * 10 ? `page-${currentPage}` : undefined,
          })
        )}
      </div>

      {visibleItems < filteredData.length && (
        <div className="load-more">
          <button onClick={loadMoreItems}>Load More</button>
        </div>
      )}

      {scrollToId && visibleItems > 10 && <ScrollToTop to={scrollToId} />}
    </div>
  );
};

export default FilterableList;
