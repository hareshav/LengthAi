import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: props.series || [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: 'donut',
        },
        labels: props.labels || ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        title: {
          text: props.title || 'Default Pie/Donut Chart Title',
          align: 'center',
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#263238'
          }
        }
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.series !== this.props.series || prevProps.labels !== this.props.labels || prevProps.title !== this.props.title) {
      this.setState({
        series: this.props.series,
        options: {
          ...this.state.options,
          labels: this.props.labels,
          title: {
            ...this.state.options.title,
            text: this.props.title
          }
        }
      });
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default PieChart;
