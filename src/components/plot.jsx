// src/PlotChart.jsx
import React from "react";
import ReactApexChart from "react-apexcharts";

class PlotChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Traffic Sources'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: props.labels,
        yaxis: [{
          title: {
            text: 'Website Blog',
          },
        }, {
          opposite: true,
          title: {
            text: 'Social Media'
          }
        }]
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.props.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default PlotChart;
