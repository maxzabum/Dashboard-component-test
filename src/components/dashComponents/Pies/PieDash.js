import React, { Component } from "react";
import { Card, Icon, Container, Grid, Image, Label } from "semantic-ui-react";
import "./pieStyle.css";
import { Pie } from "react-chartjs-2";

export default class SignBoard extends Component {
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
    const data = {
      labels: [
        "Red",
        "Blue",
        "Blue",
        "Blue",
        "Blue",
        "Blue",
        "Blue",
        "Blue",
        "Yellow",
        "Blue",
        "Blue",
        "Blue",
      ],

      datasets: [
        {
          data: [300, 50, 100, 300, 300, 300, 300, 300, 300, 300, 300, 300],
          backgroundColor: [
            "#FF6384",
            "#FF6394",
            "#FF6324",
            "#FF6184",
            "#36A2EB",
            "#FFCE56",
          ],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
    const options = {
      legend: {
        responsive: true,
        position: "right",
        labels: {
          boxWidth: 10,
          fontSize: 12,
        },
      },
    };
    return (
      <div className="pie-container">
        <div className="head-pie">
          <Icon name={this.props.img} size="big" />
          <p>{this.props.header}</p>
        </div>
        <Pie data={this.props.data} options={this.props.options} height={101} />
      </div>
    );
  }
}
