import React, { Component } from "react";
import DonutDash from "../../../dashComponents/Pies/DonutDash";
export default class OneRight extends Component {
  render() {
    const dataPolution = [
      {
        id: 0,
        label: "ประกันสุขภาพเอกชน",
        data: 3000,
        backgroundColor: "#FF6384",
        hoverBackgroundColor: "#FF6384",
      },
      {
        id: 1,
        label: "สิทธิข้าราชการ",
        data: 1500,
        backgroundColor: "#36A2EB",
        hoverBackgroundColor: "#36A2EB",
      },
      {
        id: 2,
        label: "สิทธิประกันสังคม",
        data: 3500,
        backgroundColor: "#FFCE56",
        hoverBackgroundColor: "#FFCE56",
      },
      {
        id: 3,
        label: "สิทธิหลักประกันสุขภาพแห่งชาติ",
        data: 500,
        backgroundColor: "#FF3324",
        hoverBackgroundColor: "#FF3324",
      },
      {
        id: 4,
        label: "อื่นๆ",
        data: 1500,
        backgroundColor: "#FF6324",
        hoverBackgroundColor: "#FF6324",
      },
    ];
    return (
      <div className="main-g1-right-container">
        <DonutDash data={dataPolution} header="สิทธิการรักษา" img="doctor" />
      </div>
    );
  }
}
