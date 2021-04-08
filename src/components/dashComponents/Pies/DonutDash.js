import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Icon } from "semantic-ui-react";
import "./pieStyle.css";
export default class DonutDash extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    const options = {
      legend: {
        display: false,
      },
    };
    const test = this.props.data;
    const labels = [];

    const dataAmount = [];
    const backgroundColor = [];
    const hoverBackgroundColor = [];
    for (let i = 0; i < test.length; i++) {
      const element = test[i];
      labels.push(element.label);
      dataAmount.push(element.data);
      backgroundColor.push(element.backgroundColor);
      hoverBackgroundColor.push(element.hoverBackgroundColor);
      // console.log(labels, dataAmount, backgroundColor, hoverBackgroundColor);
    }

    const dataRaw = {
      labels: labels,
      datasets: [
        {
          data: dataAmount,
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor,
        },
      ],
    };

    const sumAmount = dataAmount.reduce((x, y) => x + y, 0);
    const mapData = test.map((data) => {
      let perc = Math.round((data.data / sumAmount) * 100);
      return (
        <div className="content-desc" key={data.id}>
          <div className="text-desc">
            <div
              className="point-date"
              style={{ backgroundColor: `${data.backgroundColor}` }}
            />
            <p>{data.label}</p>
          </div>
          <div className="text-num">
            <p>{data.data} คน</p>
            <p style={{ color: `${data.backgroundColor}`, fontWeight: "900" }}>
              {perc}%
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="donut-container">
        <div className="head-pie">
          <Icon name={this.props.img} size="big" />
          <p>{this.props.header}</p>
        </div>
        <Doughnut data={dataRaw} options={options} />
        <div className="data-description">{mapData}</div>
      </div>
    );
  }
}
