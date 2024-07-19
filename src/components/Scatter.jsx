import React from "react";
import ReactApexChart from "react-apexcharts";

class ScatterChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: props.series || [],
      options: {
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function(val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7
        },
        ...props.options
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.series !== this.props.series || prevProps.options !== this.props.options) {
      this.setState({
        series: this.props.series,
        options: {
          ...this.state.options,
          ...this.props.options
        }
      });
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="scatter" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ScatterChart;
