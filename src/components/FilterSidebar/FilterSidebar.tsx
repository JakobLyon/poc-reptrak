import React, { useState } from "react";
import "./filterSidebar.scss";

export const FilterSidebar = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="filterSidebar">
      <div className="filterSidebar__buttonWrapper">
        <button
          type="button"
          className="filterSidebar__button"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <i className="fa fa-caret-left fa-3x filterSidebar__icon" />
        </button>
      </div>
      {filterOpen && <div className="filterSidebar__content">tons of content</div>}
    </div>
  );
};
