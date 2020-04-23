import './filterSidebar.scss';
import React, { useState } from 'react';

export const FilterSidebar = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="filterSidebar">
      <div className="filterSidebar__buttonWrapper">
        <button
          className="filterSidebar__button"
          onClick={() => setFilterOpen(!filterOpen)}
          type="button"
        >
          <i className="fa fa-caret-left fa-3x filterSidebar__icon" />
        </button>
      </div>
      {filterOpen && <div className="filterSidebar__content">tons of content</div>}
    </div>
  );
};
