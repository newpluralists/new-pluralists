import * as React from 'react';
import './styles.scss';

const FilterableList = ({ data, filters = [], renderItem }) => {
  const [filteredData, setFilteredData] = React.useState(data);
  const [visibleItems, setVisibleItems] = React.useState(10);
  const [activeFilters, setActiveFilters] = React.useState({});
  const [isFilterApply, setIsFilterApply] = React.useState(false);

  const applyFilters = () => {
    let filtered = data;

    filters.forEach(({ key, filterFunction }) => {
      const activeValue = activeFilters[key];
      if (activeValue) {
        filtered = filtered.filter((item) => filterFunction(item, activeValue));
      }
    });

    setFilteredData(filtered);
    setIsFilterApply(true);
    setVisibleItems(10);
  };

  const resetFilters = () => {
    setActiveFilters({});
    setFilteredData(data);
    setVisibleItems(10);
    setIsFilterApply(false);
  };

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 10);
  };

  return (
    <div className="filterable-list">
      {filters.length > 0 && (
        <div className="filters">
          {filters.map(({ key, label, FilterComponent }) => (
            <div key={key} className="filter">
              <label>{label}</label>
              <FilterComponent
                value={activeFilters[key] || ''}
                onChange={(value) => setActiveFilters((prev) => ({ ...prev, [key]: value }))}
              />
            </div>
          ))}
          <button className="button-block primary" onClick={applyFilters}>
            Apply Filters
          </button>
          {Object.keys(activeFilters).length > 0 && isFilterApply && (
            <button className="button-block secondary" onClick={resetFilters}>
              Reset Filters
            </button>
          )}
        </div>
      )}

      <div className="row">{filteredData.slice(0, visibleItems).map(renderItem)}</div>

      {visibleItems < filteredData.length && (
        <div className="load-more">
          <button onClick={loadMoreItems}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default FilterableList;
