import React from "react";
import "./repCharts.scss";
import { LineChart } from "../LineChart/LineChart.tsx";
import { RepScoreChart } from "../RepScoreChart/RepScoreChart.tsx";

export const RepCharts = () => {

  return (
    <div className="repur">
      <h2>Reputation Charts</h2>
      <div className="repCharts">

      <div className="repCharts__lineChart">
      <LineChart/>      
      </div>
      <div className="repCharts__repScoreChart">
        <RepScoreChart/>
      </div>
    </div>
    </div>
  );
};
