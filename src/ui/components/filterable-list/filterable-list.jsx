import * as React from 'react';
import './styles.scss';

const FilterableList = ({ data, filters, renderItem }) => {
  const [filteredData, setFilteredData] = React.useState(data);
  const [visibleItems, setVisibleItems] = React.useState(10);
  const [activeFilters, setActiveFilters] = React.useState({});

  const applyFilters = () => {
    let filtered = data;

    filters.forEach(({ key, filterFunction }) => {
      const activeValue = activeFilters[key];
      if (activeValue) {
        filtered = filtered.filter((item) => filterFunction(item, activeValue));
      }
    });

    setFilteredData(filtered);
    setVisibleItems(10);
  };

  const resetFilters = () => {
    setActiveFilters({});
    setFilteredData(data);
    setVisibleItems(10);
  };

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 10);
  };

  return (
    <div className="filterable-list">
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
        <button className="submit" onClick={applyFilters}>
          Apply Filters
        </button>
        <button className="reset" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

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
