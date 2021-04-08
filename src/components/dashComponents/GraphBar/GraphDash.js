import React, { Component } from "react";
import { Icon, Grid, Image } from "semantic-ui-react";
import { Line } from "react-chartjs-2";

import "./graphStyle.css";

export default class GraphDash extends Component {
  render() {
    const data = {
      labels: ["2560", "2561", "2562", "2563"],
      datasets: [
        {
          label: "จำนวนประชากรในแต่ละปี",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(114,192,192,0.4)",
          borderColor: "rgb(255, 255, 255)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(255, 255, 255)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,

          data: [13000, 12000, 11000, 10000],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: true,
        labels: {
          fontColor: "rgb(255, 255, 255)",
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "white",
              padding: 10,
            },
            // type: "linear",
            position: "right",
          },
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "white",
              padding: 5,
            },
          },
        ],
      },
      //   devicePixelRatio: 0, // Don't maintain w/h ratio
    };
    return (
      <div className="graph-container">
        <div className="left-graph">
          <div className="all-propulate">
            <div className="propulate-head">
              <Icon className="color-icon" name="users" size="big" />
              <p>15,300</p>
            </div>
            <p>จำนวนประชากรทั้งหมด(คน)</p>
          </div>
          <div className="year-propulate">
            <div className="left-year">
              <p>ปี 2563</p>
              <p>ปี 2562</p>
              <p>ปี 2561</p>
              <p>ปี 2560</p>
            </div>
            <div className="right-year">
              <p>10,000</p>
              <p>12,000</p>
              <p>13,000</p>
              <p>13,000</p>
            </div>
          </div>
        </div>
        <div className="right-graph">
          <Line id="lineChart" data={data} options={options} />
        </div>
      </div>
    );
  }
}
