// src/ApexChart.jsx
import React from "react";
import ReactApexChart from "react-apexcharts";

class ColumnChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        xaxis: {
          categories: props.categories,
          position: "top",
          axisBorder: { show: false },
          axisTicks: { show: false },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: { enabled: true },
        },
        yaxis: {
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
        
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.props.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default ColumnChart;
