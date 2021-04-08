import React, { Component } from "react";
import { Menu, Icon, Grid, Segment } from "semantic-ui-react";
import "./barStyle.css";
import { Bar } from "react-chartjs-2";
export default class Bars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      options: {},
      header: "",
      img: "",
      activeItem: "อาชีพ",
    };
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    // console.log(e.target);
  };
  render() {
    const options = {
      legend: {
        display: false,
      },
    };
    const tapOccu = (
      <div>
        <Bar
          className="test-bar"
          data={this.props.data.occupation}
          options={this.props.options}
          height={280}
        />
      </div>
    );
    const tapEduca = (
      <div>
        <Bar
          className="test-bar"
          data={this.props.data.education}
          options={this.props.options}
          height={280}
        />
      </div>
    );
    const tapReli = (
      <div>
        <Bar
          className="test-bar"
          data={this.props.data.religion}
          options={this.props.options}
          height={280}
        />
      </div>
    );
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
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
    const activeItem = this.state.activeItem;
    let tapActive;
    if (activeItem === "อาชีพ") {
      tapActive = tapOccu;
    } else if (activeItem === "การศึกษา") {
      tapActive = tapEduca;
    } else {
      tapActive = tapReli;
    }
    return (
      <div className="bar-container">
        <Menu id="sssd" icon="labeled" attached="top">
          <Menu.Item
            name="อาชีพ"
            active={this.state.activeItem === "อาชีพ"}
            onClick={this.handleItemClick}
            color={this.state.menuColor}
          />
          <Menu.Item
            name="การศึกษา"
            active={this.state.activeItem === "การศึกษา"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="ศาสนา"
            active={this.state.activeItem === "ศาสนา"}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment
          className="tesst-bar2 "
          style={{
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
          attached="bottom"
        >
          {tapActive}
        </Segment>

        {/* <div className="head-ver-bar">
          <Icon name={this.props.img} size="big" />
          <p>{this.props.header}</p>
        </div>
        <Bar data={data} options={options} /> */}
      </div>
    );
  }
}
