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
      iconSmile: { nameIcon: "smile", color: "green" },
      iconSad: { nameIcon: "frown", color: "red" },
      progressColor: ["green", "yellow", "pink", "purple", "blue"],
      textColor: ["#21ba45", "#fbbd08", "#e03997", "#a333c8", "#2185d0"],
      showIcon: false,
      // `${this.state.progressColor[0]}`
    };
  }

  render() {
    const allPopu = this.props.allPopulate;
    const datasets = this.props.datasets;
    const progressBarColor = this.props.progressBarColor;
    let iconProg = {};
    const mapProgress = datasets.map((data) => {
      let perc = (data.amount / allPopu) * 100;
      if (perc > 50) {
        iconProg = this.state.iconSmile;
      } else {
        iconProg = this.state.iconSad;
      }
      if (data) {
        return (
          <div>
            <div className="progbar-container" key={data.id}>
              <div className="prog-top-bar">
                <div className="desc-bar">
                  <p>{data.textDesc}</p>
                  <p style={{ color: `${this.state.textColor[data.id - 1]}` }}>
                    {data.amount} คน ({perc}%)
                  </p>
                </div>
                <Progress
                  percent={perc}
                  color={this.state.progressColor[data.id - 1]}
                  size="small"
                />
              </div>
              <div className="cont-progress">
                {this.props.showIcon ? (
                  <Icon
                    className="icon-prog"
                    name={iconProg.nameIcon}
                    size="big"
                    color={iconProg.color}
                  />
                ) : null}
              </div>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="main-prog-container">
        <div className="header">
          <Icon name={this.props.img} size="big" />
          <p>{this.props.header}</p>
        </div>
        {mapProgress}
      </div>
    );
  }
}
