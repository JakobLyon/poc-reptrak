import './dashboard.scss';
import { Cell, justifySelfOptions, stretchOptions } from '../Grid/Cell.tsx';
import { FilterSidebar } from '../FilterSidebar/FilterSidebar.tsx';
import { Grid } from '../Grid/Grid';
import React from 'react';

export const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard__content">
      <Grid cols={6} rows={2}>
        <Cell colStart={5} rowStart={1}>
          <div>lastUpdated</div>
        </Cell>
        <Cell colStart={6} justifySelf={justifySelfOptions.end} rowStart={1}>
          <div>countryFilter</div>
        </Cell>
        <Cell colEnd={5} colStart={1} rowStart={2}>
          <div>lineChart</div>
        </Cell>
        <Cell colEnd={stretchOptions.end} colStart={5} rowStart={2}>
          <div>reputationScore</div>
        </Cell>
      </Grid>
    </div>
    <div className="dashboard__sidebar">
      <FilterSidebar />
    </div>
  </div>
);
