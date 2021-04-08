import React, { Component } from "react";
import "./selectCompStyle.css";
export default class SelectComp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="select-container">
        <div
          className={"menu-select " + `${this.props.setActive[0]}`}
          value="1"
          onClick={(e) => this.props.onSelectTab(1)}
        >
          <p className="text-group">หมวดที่</p>
          <p className="text-group">1</p>
        </div>
        <div className="link-select">
          <div>
            <p></p>
          </div>
        </div>
        <div
          className={"menu-select " + `${this.props.setActive[1]}`}
          value="2"
          onClick={() => this.props.onSelectTab(2)}
        >
          <p className="text-group">หมวดที่</p>
          <p className="text-group">2</p>
        </div>
        <div className="link-select">
          <div>
            <p></p>
          </div>
        </div>
        <div
          className={"menu-select " + `${this.props.setActive[2]}`}
          value="3"
          onClick={() => this.props.onSelectTab(3)}
        >
          <p className="text-group">หมวดที่</p>
          <p className="text-group">3</p>
        </div>
        <div className="link-select">
          <div>
            <p></p>
          </div>
        </div>
        <div
          className={"menu-select " + `${this.props.setActive[3]}`}
          value="4"
          onClick={() => this.props.onSelectTab(4)}
        >
          <p className="text-group">หมวดที่</p>
          <p className="text-group">4</p>
        </div>
        <div className="link-select">
          <div>
            <p></p>
          </div>
        </div>
        <div
          className={"menu-select " + `${this.props.setActive[4]}`}
          value="5"
          onClick={() => this.props.onSelectTab(5)}
        >
          <p className="text-group">หมวดที่</p>
          <p className="text-group">5</p>
        </div>
      </div>
    );
  }
}
