import React, { Component } from "react";
import "./twoStyle.css";

import DonutDash from "../../../dashComponents/Pies/DonutDash";
import SignBoard from "../../../SignBoard";
import ProgressOnce from "../../../dashComponents/ProgressBar/ProgressOnce";
export default class TwoLeft extends Component {
  render() {
    const dataHealthCheck = [
      {
        id: 0,
        label: "แหล่งอุตสาหกรรม",
        data: 3000,
        backgroundColor: "#FF6384",
        hoverBackgroundColor: "#FF6384",
      },
      {
        id: 1,
        label: "แหล่งเกษตรกรรม",
        data: 1500,
        backgroundColor: "#36A2EB",
        hoverBackgroundColor: "#36A2EB",
      },
      {
        id: 2,
        label: "อื่นๆ",
        data: 3500,
        backgroundColor: "#FFCE56",
        hoverBackgroundColor: "#FFCE56",
      },
    ];
    return (
      <div className="main-g2-left-container">
        <div className="child-g2">
          <SignBoard
            sex="จำนวนครัวเรือนทั้งหมด"
            amount="31010"
            unit="หลัง"
            img="home"
            color="#EB5757"
          />
        </div>
        <div className="child-g2">
          <DonutDash
            data={dataHealthCheck}
            header="จำนวนครัวเรือนที่ได้รับผลกระทบจากมลพิษ"
            img="industry"
          />
        </div>
        <div className="child-g2-bot">
          <ProgressOnce
            header="ตรวจสุขภาพประจำปี"
            img="doctor"
            amount="1000"
            numPos="850"
          />
        </div>
      </div>
    );
  }
}
