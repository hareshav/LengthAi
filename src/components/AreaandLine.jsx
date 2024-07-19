import React from "react";
import ReactApexChart from "react-apexcharts";

class AreaandLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: props.series || [
        {
          name: 'TEAM A',
          type: 'area',
          data: []
        },
        {
          name: 'TEAM B',
          type: 'line',
          data: []
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'solid',
          opacity: [0.35, 1],
        },
        labels: props.labels || [],
        markers: {
          size: 0
        },
        yaxis: [
          {
            title: {
              text: props.yAxisTitle1 || 'Series A',
            },
          },
          {
            opposite: true,
            title: {
              text: props.yAxisTitle2 || 'Series B',
            },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        },
        title: {
          text: props.title || 'Default Title',
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
    // Update state if props change
    if (prevProps.series !== this.props.series || prevProps.labels !== this.props.labels || 
        prevProps.title !== this.props.title || prevProps.yAxisTitle1 !== this.props.yAxisTitle1 || 
        prevProps.yAxisTitle2 !== this.props.yAxisTitle2) {
      this.setState({
        series: this.props.series,
        options: {
          ...this.state.options,
          labels: this.props.labels,
          title: {
            ...this.state.options.title,
            text: this.props.title
          },
          yaxis: [
            {
              title: {
                text: this.props.yAxisTitle1 || 'Series A',
              },
            },
            {
              opposite: true,
              title: {
                text: this.props.yAxisTitle2 || 'Series B',
              },
            },
          ]
        }
      });
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default AreaandLine;
