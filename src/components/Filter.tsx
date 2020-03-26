import React, { useState } from "react";
import "./filter.scss";

export const Filter = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <button type="button" className="filterButton" onClick={() => setFilterOpen(!filterOpen)}>
        <i className="fa fa-caret-left fa-3x filterButton__icon" />
      </button>
      {filterOpen && <div className="filterContent">tons of content</div>}
    </>
  );
};
