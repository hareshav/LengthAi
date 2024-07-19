// src/App.jsx
import React, { useState } from "react";
import ColumnChart from "./components/column.jsx";
import PlotChart from "./components/plot.jsx";
import AreaChart from "./components/area.jsx";
import AreaandLine from "./components/AreaandLine.jsx";
import PieChart from "./components/pie.jsx";
import ScatterChart from "./components/Scatter.jsx";
function App() {
  const [seriesforColumn, setSeriesforColumn] = useState([
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ]);

  const [categoriesforColumn, setCategoriesforColumn] = useState([
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]);
  const [seriesforPlot, setSeriesforPlot] = useState([
    {
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, 
    {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }
  ]);

  const [labelsforPlot, setLabelsforPlot] = useState([
    '01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001',
    '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001',
    '11 Jan 2001', '12 Jan 2001'
  ]);
  const [seriesforArea, setSeriesforArea] = useState([{
    name: "STOCK ABC",
    data: [
      [1640995200000, 30],
      [1641081600000, 31],
      [1641168000000, 32],
      [1641254400000, 33]
      // Add more data as needed
    ]
  }]);

  const [labelsforArea, setLabelsforArea] = useState([
    '2022-01-01',
    '2022-01-02',
    '2022-01-03',
    '2022-01-04'
    // Add more labels as needed
  ]);
  const [seriesAreaAndLine, setSeriesAreaAndLine] = useState([
    {
      name: 'TEAM A',
      type: 'area',
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
    },
    {
      name: 'TEAM B',
      type: 'line',
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
    }
  ]);

  const [labelsForAreaAndLine, setLabelsForAreaAndLine] = useState([
    'Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09', 'Dec 10', 'Dec 11'
  ]);
  const [titleForAreaAndLine, setTitleForAreaAndLine] = useState('Team Performance Comparison');
  const [yAxisTitle1ForAreaAndLine, setYAxisTitle1ForAreaAndLine] = useState('Series A');
  const [yAxisTitle2ForAreaAndLine, setYAxisTitle2ForAreaAndLine] = useState('Series B');


  const [seriesForPie, setSeriesForPie] = useState([44, 55, 41, 17, 15]);
  const [labelsForPie, setLabelsForPie] = useState(['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5']);
  const [titleForPie, setTitleForPie] = useState('Team Performance Comparison');

  const [seriesForScatter, setSeriesForScatter] = useState([
    {
      name: "SAMPLE A",
      data: [
        [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]
      ]
    },
   
  ]);

  return (
    <div className="App">
      <h1>My React ApexChart</h1>
      <ColumnChart series={seriesforColumn} categories={categoriesforColumn} />
      <PlotChart series={seriesforPlot} labels={labelsforPlot}/>
      <AreaChart series={seriesforArea} labels={labelsforArea}/>
      <AreaandLine series={seriesAreaAndLine} labels={labelsForAreaAndLine} title={titleForAreaAndLine} yAxisTitle1={yAxisTitle1ForAreaAndLine} yAxisTitle2={yAxisTitle2ForAreaAndLine}/>
      <PieChart series={seriesForPie} labels={labelsForPie} title={titleForPie}/>
      <ScatterChart  series={seriesForScatter}/>
    </div>
  );
}

export default App;
