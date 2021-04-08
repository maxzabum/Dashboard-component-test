import React, { Component } from "react";
import "./twoStyle.css";
import ProgressOnce from "../../../dashComponents/ProgressBar/ProgressOnce";
import ProgressDash from "../../../dashComponents/ProgressBar/progressDash";
export default class TwoRight extends Component {
  render() {
    const dataProgressWaterConsume = {
      allPopulate: 2000,
      datasets: [{ id: 1, textDesc: "จำนวนครัวเรือน", amount: 1460 }],
      header: "จำนวนครัวเรือนที่มีน้ำใช้อุปโภค",
      img: "bath",
    };
    const dataProgresConsump = {
      allPopulate: 2000,
      datasets: [{ id: 1, textDesc: "จำนวนครัวเรือน", amount: 854 }],
      header: "จำนวนครัวเรือนที่มีน้ำใช้บริโภค",
      img: "bath",
    };
    return (
      <div className="main-g2-right-container">
        <div className="child-g2-col-top">
          <ProgressOnce
            header="ตรวจสุขภาพประจำปี"
            img="doctor"
            amount="1000"
            numPos="850"
          />
        </div>
        <div className="child-g2-col">
          <ProgressOnce
            header="ตรวจสุขภาพประจำปี"
            img="doctor"
            amount="1000"
            numPos="850"
          />
        </div>
        <div className="child-g2-col">
          <ProgressOnce
            header="ตรวจสุขภาพประจำปี"
            img="doctor"
            amount="1000"
            numPos="850"
          />
        </div>
        <div className="child-g2-col">
          <ProgressDash
            datasets={dataProgresConsump.datasets}
            header={dataProgresConsump.header}
            img={dataProgresConsump.img}
            allPopulate={dataProgresConsump.allPopulate}
            showIcon={false}
          />
        </div>
        <div className="child-g2-col">
          <ProgressDash
            datasets={dataProgressWaterConsume.datasets}
            header={dataProgressWaterConsume.header}
            img={dataProgressWaterConsume.img}
            allPopulate={dataProgressWaterConsume.allPopulate}
            showIcon={false}
          />
        </div>
      </div>
    );
  }
}
