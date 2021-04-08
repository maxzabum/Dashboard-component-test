import React, { Component } from "react";
import ProgressDash from "../../../dashComponents/ProgressBar/progressDash";
export default class ThreeLeft extends Component {
  render() {
    const dataProgressEducate = {
      allPopulate: 10000,
      datasets: [
        { id: 1, textDesc: "อายุระหว่าง 3-5 ปี", amount: 850 },
        { id: 2, textDesc: "อายุระหว่าง 6-14 ปี", amount: 6950 },
        { id: 3, textDesc: "ได้รับการศึกษาต่อ", amount: 2200 },
      ],
      header: "จำนวนประชากรที่รับการศึกษา",
      img: "book",
    };
    return (
      <div>
        <ProgressDash
          datasets={dataProgressEducate.datasets}
          header={dataProgressEducate.header}
          img={dataProgressEducate.img}
          allPopulate={dataProgressEducate.allPopulate}
          showIcon={false}
        />
      </div>
    );
  }
}
