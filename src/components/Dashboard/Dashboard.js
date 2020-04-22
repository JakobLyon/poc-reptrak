import React from "react";
import { Grid } from "../Grid/Grid";
import { Cell, justifySelfOptions, stretchOptions } from "../Grid/Cell.tsx";
import { FilterSidebar } from "../FilterSidebar/FilterSidebar.tsx";
import "./dashboard.scss";


export const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard__content">
      <Grid cols={6} rows={2}>
        <Cell colStart={5} rowStart={1}>
          <div>lastUpdated</div>
        </Cell>
        <Cell colStart={6} rowStart={1} justifySelf={justifySelfOptions.end}>
          <div>countryFilter</div>
        </Cell>
        <Cell colStart={1} colEnd={5} rowStart={2}>
          <div>lineChart</div>
        </Cell>
        <Cell colStart={5} colEnd={stretchOptions.end} rowStart={2}>
          <div>reputationScore</div>
        </Cell>
      </Grid>
    </div>
    <div className="dashboard__sidebar">
      <FilterSidebar/>
    </div>
  </div>
);
