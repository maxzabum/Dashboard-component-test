import React, { Component } from "react";
import "./midStyle.css";
import SignBoard from "../../SignBoard";
import PieDash from "../../dashComponents/Pies/PieDash";
export default class MidLeftComp extends Component {
  render() {
    const data = {
      labels: [
        "โฉนดที่ดิน",
        "ภ.บ.ท.5",
        "น.ค.3",
        "ส.ค.1",
        "น.ส.2",
        "ส.ท.ค",
        "น.ส.5",
        "น.ส.3",
        "น.ส.3ข",
        "ส.ป.ก.4-01",
        "หนังสือกรรมสิทธิ์ห้องชุด",
      ],

      datasets: [
        {
          data: [300, 50, 100, 350, 100, 120, 50, 70, 82, 110, 60],
          backgroundColor: [
            "#FF6384",
            "#FF2394",
            "#FF3324",
            "#FF4184",
            "#36A2EB",
            "#FFCE56",
            "#FF7314",
            "#FF8384",
            "#FF6484",
            "#FF2584",
            "#FF0284",
          ],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
    const options = {
      legend: {
        responsive: true,
        position: "right",
        labels: {
          boxWidth: 10,
          fontSize: 12,
        },
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 10,
          bottom: 0,
        },
      },
    };
    return (
      <div className="main-mid-left-container">
        <div className="child-sign">
          <div className="child-sign-col">
            <SignBoard
              sex="เพศชาย"
              amount="10000"
              unit="คน"
              img="male"
              color="#72A7D8"
            />
          </div>
          <div className="child-sign-col">
            <SignBoard
              sex="เพศชาย"
              amount="10000"
              unit="คน"
              img="male"
              color="#72A7D8"
            />
          </div>
        </div>
        <div className="child-pie">
          <div className="child-pie-col">
            <PieDash
              data={data}
              options={options}
              img="home"
              header="ที่ตั้งที่พักอาศัย"
            />
          </div>
          <div className="child-pie-col">
            <PieDash
              data={data}
              options={options}
              img="home"
              header="ที่ตั้งที่พักอาศัย"
            />
          </div>
        </div>
      </div>
    );
  }
}
