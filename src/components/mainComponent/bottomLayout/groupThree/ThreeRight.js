import React, { Component } from "react";
import ProgressDash from "../../../dashComponents/ProgressBar/progressDash";
export default class ThreeRight extends Component {
  render() {
    const dataProgressCanRead = {
      allPopulate: 7500,
      datasets: [
        { id: 1, textDesc: "ภาษาไทย", amount: 700 },
        { id: 2, textDesc: "ภาษาอังกฤษ", amount: 6800 },
      ],
      header: "จำนวนประชากรที่อ่านออกเขียนได้",
      img: "language",
    };
    return (
      <div>
        <ProgressDash
          datasets={dataProgressCanRead.datasets}
          header={dataProgressCanRead.header}
          img={dataProgressCanRead.img}
          allPopulate={dataProgressCanRead.allPopulate}
          showIcon={false}
        />
      </div>
    );
  }
}
