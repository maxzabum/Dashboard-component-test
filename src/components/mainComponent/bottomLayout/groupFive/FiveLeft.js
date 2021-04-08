import React, { Component } from "react";

import SignBoard from "../../../SignBoard";
import PieDash from "../../../dashComponents/Pies/PieDash";
export default class FiveLeft extends Component {
  render() {
    const dataDrink = {
      labels: ["อายุต่ำกว่า 15 ปี", "อายุระหว่าง 15-19 ปี", "อายุ 20 ปีขึ้นไป"],

      datasets: [
        {
          data: [2001, 1289, 5020],
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
    const dataSmoking = {
      labels: ["อายุต่ำกว่า 15 ปี", "อายุระหว่าง 15-19 ปี", "อายุ 20 ปีขึ้นไป"],

      datasets: [
        {
          data: [1901, 1289, 8120],
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
      <div className="main-g5-left-container">
        <div className="child-g5-col">
          <div className="child">
            <SignBoard
              sex="ค่าเหลี่ยผู้ดื่มสุรา"
              amount="30000"
              unit="ครั้ง/สัปดาห์"
              img="beer"
              color="#CAB15A"
            />
          </div>
          <div className="child">
            <SignBoard
              sex="ค่าเหลี่ยผู้สูบบุหรี่"
              amount="35000"
              unit="ครั้ง/สัปดาห์"
              img="smoking"
              color="#CAB15A"
            />
          </div>
        </div>

        <div className="child-g5-row">
          <PieDash
            data={dataDrink}
            options={options}
            img="pie chart"
            header="จำนวนประชากรที่ดื่มสุราต่อช่วงอายุ"
          />
          <PieDash
            data={dataSmoking}
            options={options}
            img="pie chart"
            header="จำนวนประชากรที่สูบบุหรี่ต่อช่วงอายุ"
          />
        </div>
      </div>
    );
  }
}
