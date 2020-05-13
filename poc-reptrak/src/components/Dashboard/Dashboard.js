import React from "react";
import { Grid } from "../Grid/Grid";
import { Cell, justifySelfOptions, stretchOptions } from "../Grid/Cell.tsx";
import { FilterSidebar } from "../FilterSidebar/FilterSidebar.tsx";
import "./dashboard.scss";
import { RepScoreChart } from "../RepScoreChart/RepScoreChart.tsx";
import { LineChart} from "../LineChart/LineChart.tsx";

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
          <div className="repCharts__lineChart">
      <LineChart/>      
      </div>
        </Cell>
        <Cell colStart={5} colEnd={stretchOptions.end} rowStart={2}>
        <div className="repCharts__repScoreChart">
          <RepScoreChart 
            props={{heading:'Reputation Score', score:repScore, monthlyDifference:1.2, barColor: setChartAttributes(repScore)}}
          />
        </div>        
      </Cell>
      </Grid>
    </div>
    <div className="dashboard__sidebar">
      <FilterSidebar/>
    </div>
  </div>
);

export const repScore=40;

export function setChartAttributes(temp){
   switch(true){
    case (temp.toFixed(1) < 40): return '#9E1B21';
    case (temp.toFixed(1) <= 59.9): return '#F0592E';
    case (temp.toFixed(1) <= 69.9): return '#F0A935';
    case (temp.toFixed(1) <= 79.9): return '#6EBF5F';
    default: return '#386336';
  }
}