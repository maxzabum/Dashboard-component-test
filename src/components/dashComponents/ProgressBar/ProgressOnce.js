import React, { Component } from "react";
import { Progress, Icon } from "semantic-ui-react";
import "./styleProg.css";
export default class progressDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPopulate: 0,
      datasets: [],
      header: "",
      img: "",
      amount: 1000,
      numPos: 650,
      textCheck: ["มี", "ไม่มี"],
      progressCorrect: "green",
      textCorrect: "green",
      progressFalse: "red",
      textFalse: "red",
      showIcon: false,
    };
  }

  render() {
    const numNeg = this.props.amount - this.props.numPos;
    const percPos = (this.props.numPos / this.props.amount) * 100;
    const percNeg = (numNeg / this.props.amount) * 100;
    return (
      <div className="main-progOnce-container">
        <div className="header">
          <Icon name={this.props.img} size="big" />
          <p>{this.props.header}</p>
        </div>
        <div className="progbar-container">
          <div className="prog-top-bar">
            <div className="desc-bar">
              <p>
                {this.state.textCheck[0]} {this.props.numPos} คน ({percPos}%)
              </p>
              <p>
                {this.state.textCheck[1]} {numNeg} คน ({percNeg}%)
              </p>
            </div>
            <Progress percent={percPos} color="green" size="small" />
          </div>
        </div>
      </div>
    );
  }
}
