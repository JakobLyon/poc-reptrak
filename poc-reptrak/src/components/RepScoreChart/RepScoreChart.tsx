import React from "react";
import "./repScoreChart.scss";

export const RepScoreChart = ({props}) => {
  
  return (
    <div className="repScoreChart">
      <div className="repScoreChart__content">
       
      <svg style={{fontFamily:'Montserrat', backgroundColor:'#F5F5F5'}} 
      width="342" height="303" id="radial-plugin5e3b14d18a98681b602028d15551821">
        <rect x="0" y="0" height="303" width="342" 
        style={{stroke: 'rgb(171, 183, 194)', strokeWidth: '1', fill: 'rgb(245, 245, 245)'}}
        ></rect>
        <text transform="translate(171,32.09906249999999)" text-anchor="middle" dominant-baseline="middle" 
        style={{fill: 'rgb(20, 20, 20)', fontWeight: 'normal', fontSize: '20.9259px'}}
        >{props.heading}</text>
        <g transform="translate(171,166.65)">
          <path d="M0,98.47500000000001A98.47500000000001,98.47500000000001 0 1,1 0,-98.47500000000001A98.47500000000001,98.47500000000001 0 1,1 0,98.47500000000001M0,83.70375A83.70375,83.70375 0 1,0 0,-83.70375A83.70375,83.70375 0 1,0 0,83.70375Z" 
          style={{fill: 'rgb(171, 183, 194)'}}></path>
          <path d="M6.029854677301781e-15,-98.47500000000001A98.47500000000001,98.47500000000001 0 1,1 -94.3904331734861,28.067271871730895L-80.23186819746319,23.85718109097126A83.70375,83.70375 0 1,0 5.1253764757065136e-15,-83.70375Z" 
          style={{fill: props.barColor}}></path>
          <text text-anchor="middle" dominant-baseline="middle" 
          style={{fill: props.barColor, fontWeight: 'bold', fontSize: '63px'}}
          >{props.score}</text>
          <text y="68.9325" text-anchor="middle" dominant-baseline="middle">
            <tspan font-family="FontAwesome" style={{fill: props.barColor, fontSize: '14.2296px'}}
            > </tspan>
            <tspan style={{fill: props.barColor, fontWeight: 'bold', fontSize: '14.2296px'}}
            >{props.monthlyDifference}</tspan>
          </text>
          <text y="39.39000000000001" text-anchor="middle" dominant-baseline="middle" 
          style={{fill: 'rgb(20, 20, 20)', fontSize: '14.2296px'}}
          >Mar 2020</text>
        </g>
      </svg>
    </div>
    </div>
  );
};
