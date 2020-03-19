import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const justifySelfOptions = {
  end: 'end'
}

export const Cell = ({colStart, colEnd, rowStart, rowEnd, children}) => {
  const Wrapper = styled.div`
    grid-column: col${colStart}-start${colEnd ? ` / col${colEnd}-start` : ''};
    grid-row: row${rowStart}-start${rowEnd ? ` / row${rowEnd}-start` : ''};
  `;
  return <Wrapper>{children}</Wrapper>
}

Cell.propTypes = {
  colStart: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  colEnd: PropTypes.oneOf([PropTypes.string, PropTypes.number, null]),
  rowStart: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  rowEnd: PropTypes.oneOf([PropTypes.string, PropTypes.number, null])
}