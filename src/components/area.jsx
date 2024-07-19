// src/ApexChart.jsx
import React from "react";
import ReactApexChart from "react-apexcharts";

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    // Default values if props are not provided
    const defaultSeries = [{
      name: "STOCK ABC",
      data: []
    }];
    const defaultLabels = [];

    this.state = {
      series: props.series || defaultSeries,
      options: {
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Fundamental Analysis of Stocks',
          align: 'left'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left'
        },
        labels: props.labels || defaultLabels,
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      },
    };
  }

  componentDidUpdate(prevProps) {
    // Update state if props change
    if (prevProps.series !== this.props.series || prevProps.labels !== this.props.labels) {
      this.setState({
        series: this.props.series,
        options: {
          ...this.state.options,
          labels: this.props.labels
        }
      });
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default AreaChart;
