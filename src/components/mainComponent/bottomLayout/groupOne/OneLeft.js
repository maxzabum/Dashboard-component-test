import React, { Component } from "react";
import ProgressDash from "../../../dashComponents/ProgressBar/progressDash";
import "./oneStyle.css";
export default class OneLeft extends Component {
  render() {
    const dataProgressDisease = {
      allPopulate: 20000,
      datasets: [
        { id: 1, textDesc: "มะเร็งปากมดลูก", amount: 500 },
        { id: 2, textDesc: "มะเร็งเต้านม", amount: 1000 },
        { id: 3, textDesc: "โรคประจำตัวอื่นๆ", amount: 5500 },
        { id: 4, textDesc: "ไม่มีโรคประจำตัว", amount: 14000 },
      ],
      header: "โรคประจำตัว",
      img: "wheelchair",
    };
    const dataProgressExcercise = {
      allPopulate: 10000,
      datasets: [
        { id: 1, textDesc: "ได้ออกกำลังกาย", amount: 4400 },
        { id: 2, textDesc: "ได้ออกแรง/ออกกำลัง", amount: 2600 },
        {
          id: 3,
          textDesc: "ไม่ได้ออกกำลังกายหรือออกแรง/ไม่ได้ออกกำลัง",
          amount: 3000,
        },
      ],
      header: "การออกกำลังกาย",
      img: "blind",
    };
    return (
      <div className="main-g1-left-container">
        <div className="child-g1-row">
          <ProgressDash
            datasets={dataProgressDisease.datasets}
            header={dataProgressDisease.header}
            img={dataProgressDisease.img}
            allPopulate={dataProgressDisease.allPopulate}
            showIcon={false}
          />
        </div>
        <div className="child-g1-row">
          <ProgressDash
            datasets={dataProgressExcercise.datasets}
            header={dataProgressExcercise.header}
            img={dataProgressExcercise.img}
            allPopulate={dataProgressExcercise.allPopulate}
            showIcon={false}
          />
        </div>
      </div>
    );
  }
}
