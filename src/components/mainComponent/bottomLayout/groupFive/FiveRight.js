import React, { Component } from "react";
import ProgressDash from "../../../dashComponents/ProgressBar/progressDash";
import ProgressOnce from "../../../dashComponents/ProgressBar/ProgressOnce";
import "./fiveStyle.css";
export default class FiveRight extends Component {
  render() {
    const dataProgressReligion = {
      allPopulate: 3000,
      datasets: [{ id: 1, textDesc: "จำนวนผู้ปฎิบัติ", amount: 1203 }],
      header: "จำนวนประชากรที่ทำกิจกรรมศาสนา",
      img: "home",
    };
    return (
      <div className="main-g5-right-container">
        <div className="child">
          <ProgressDash
            datasets={dataProgressReligion.datasets}
            header={dataProgressReligion.header}
            img={dataProgressReligion.img}
            allPopulate={dataProgressReligion.allPopulate}
            showIcon={false}
          />
        </div>
        <div className="child">
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
