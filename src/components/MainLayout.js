import React, { Component } from "react";
import { Icon, Grid, Image, Segment } from "semantic-ui-react";
import SignBoard from "./SignBoard";
import PieDash from "./dashComponents/Pies/PieDash";
import HorizonBarDash from "./dashComponents/HorizonBars/BarDash";
import BarDash from "./dashComponents/Bars/Bars";
import ProgressDash from "./dashComponents/ProgressBar/progressDash";
import GraphDash from "./dashComponents/GraphBar/GraphDash";
import SelectComp from "./selectComponent/SelectComp";
import DonutDash from "./dashComponents/Pies/DonutDash";
import ProgressOnce from "./dashComponents/ProgressBar/ProgressOnce";
import MainComp from "./mainComponent/MainComp";
import "./style.css";
export default class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout-container">
        <MainComp />
      </div>
    );
  }
}
