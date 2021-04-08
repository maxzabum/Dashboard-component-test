import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import { Icon, Container, Grid, Image, Label } from "semantic-ui-react";
import "./barStyle.css";
export default class BarDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { labels: [], datasets: [] },
      options: {},
      header: "",
      img: "",
    };
  }
  render() {
    const options = {
      legend: {
        display: false,
      },
    };
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255,99,132,1)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 46],
        },
      ],
    };

    return (
      <div className="horizon-bar-container">
        <div className="head-bar">
          <Icon name={this.props.img} size="big" />
          <p>{this.props.header}</p>
        </div>
        <HorizontalBar
          data={this.props.data}
          options={this.props.options}
          height={320}
        />
      </div>
    );
  }
}
