import React, { useContext } from "react";
import styled from "styled-components";
import { GridContext } from "./Grid";

export const justifySelfOptions = {
  start: "start",
  end: "end",
  center: "center",
  stretch: "stretch"
}

export const stretchOptions = {
  end: "end"
}

type CellProps = {
  colStart: string | number;
  colEnd?: string | number | "end";
  rowStart: string | number;
  rowEnd?: string | number | "end";
  justifySelf: "start" | "end" | "center" | "stretch";
  children: Node;
};

export const Cell = ({
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  justifySelf,
  children
}: CellProps) => {
  const { gridColumns, gridRows } = useContext(GridContext);

  let gridColumn = `col${colStart}-start`;
  if (colEnd === stretchOptions.end) {
    gridColumn = `${gridColumn} / col${gridColumns}-end`;
  } else if (colEnd) {
    gridColumn = `${gridColumn} ${colEnd ? `/ col${colEnd}-start` : ''}`;
  }

  let gridRow = `row${rowStart}-start`;
  if (rowEnd === stretchOptions.end) {
    gridRow = `${gridRow} / row${gridRows}-end`;
  } else if (rowEnd) {
    gridRow = `${rowEnd ? ` / row${rowEnd}-start` : ""}`;
  }

  const Wrapper = styled.div`
    grid-column: ${gridColumn};
    grid-row: ${gridRow};
    ${justifySelf ? `justify-self: ${justifySelf}` : ""}
  `;

  return <Wrapper>{children}</Wrapper>;
};
