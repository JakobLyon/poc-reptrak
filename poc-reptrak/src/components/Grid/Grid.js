import React, { createContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const GridContext = createContext();

export const Grid = ({ children, cols, rows }) => {
  let gridColumns = `[col1-start] 1fr `;
  let gridRows = `[row1-start] auto `;
  for (let i = 2; i <= cols; i++) {
    gridColumns += `[col${i}-start] 1fr `;
  }
  gridColumns += `[col${cols}-end]`;

  for (let j = 2; j <= rows; j++) {
    gridRows += `[row${j}-start] 1fr `;
  }
  gridRows += `[row${rows}-end]`;

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: ${gridColumns};
    grid-template-rows: ${gridRows};
  `;

  return (
    <GridContext.Provider value={{ gridColumns: cols, gridRows: rows }}>
      <GridContainer>{children}</GridContainer>
    </GridContext.Provider>
  );
};

Grid.propTypes = {
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired
};
