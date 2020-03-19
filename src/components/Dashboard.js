import { Grid } from "./Grid/Grid";
import { Cell, justifySelfOptions } from "./Grid/Cell";
import React from "react";

const { end } = justifySelfOptions;

export const Dashboard = () => (
  <Grid cols={6} rows={2}>
    <Cell colStart={5} rowStart={1}>
      <div>lastUpdated</div>
    </Cell>
    <Cell colStart={6} rowStart={1} justifySelf={end}>
      <div>countryFilter</div>
    </Cell>
    <Cell colStart={1} colEnd={5} rowStart={2}>
      <div>lineChart</div>
    </Cell>
    <Cell colStart={5} rowStart={2}>
      <div>reputationScore</div>
    </Cell>
  </Grid>
);
