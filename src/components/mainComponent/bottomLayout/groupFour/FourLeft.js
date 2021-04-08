import React, { Component } from "react";
import SignBoard from "../../../SignBoard";
import PieDash from "../../../dashComponents/Pies/PieDash";
import "./fourStyle.css";
export default class FourLeft extends Component {
  render() {
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
    const dataSaving = {
      labels: [
        "เงินสด",
        "เงินฝากธนาคาร",
        "เงินฝากสหกรณ์",
        "เงินฝากกลุ่มออมทรัพย์",
        "ทำประกันชีวิต",
        "ซื้อพันธบัตร",
        "ซื้อทองคำ",
        "ซื้อบ้านหรือที่ดิน",
        "อื่นๆ",
        "ไม่มีการออมเงิน",
      ],

      datasets: [
        {
          data: [120, 289, 220, 24, 54, 65, 123, 87, 21, 400],
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
    const dataInvest = {
      labels: [
        "กลุ่มออมทรัพย์เพื่อการผลิต",
        "สหกรณ์",
        "ธนาคารเพื่อการเกษตรและสหกรณ์",
        "ธนาคารอมมสิน / ธนาคารกรุงไทย / ธนาคารอิสลาม / ธนาคาร SME",
        "ธนาคารพาณิชย์อื่นๆ",
        "สถาบันการเงินที่ให้การสนับสนุนสินเชื่อภาคอุตสาหกรรม",
        "หุ้น",
        "อื่นๆ",
      ],

      datasets: [
        {
          data: [120, 289, 220, 24, 54, 65, 21, 400],
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
    return (
      <div className="main-g4-left-container">
        <div className="child-g4-col">
          <div className="child1">
            <SignBoard
              sex="รายได้"
              amount="50000"
              unit="บาท"
              img="money"
              color="#87B3DC"
            />
          </div>
          <div className="child2">
            <SignBoard
              sex="รายจ่าย"
              amount="35000"
              unit="บาท"
              img="shop"
              color="#87B3DC"
            />
          </div>
        </div>
        <div className="child-g4-col">
          <div className="child1">
            <SignBoard
              sex="รายได้หลังหักรายจ่าย"
              amount="1200"
              unit="บาท"
              img="money"
              color="#87B3DC"
            />
          </div>
          <div className="child2">
            <SignBoard
              sex="ค่าเฉลี่ยนเงินออม"
              amount="3000"
              unit="บาท"
              img="money bill alternate outline"
              color="#87B3DC"
            />
          </div>
        </div>
        <div className="child-g4-row">
          <PieDash
            data={dataInvest}
            options={options}
            img="pie chart"
            header="จำนวนครัวเรือนที่เข้าถึงแหล่งเงินทุน"
          />
          <PieDash
            data={dataSaving}
            options={options}
            img="pie chart"
            header="จำนวนครัวเรือนต่อประเภทการออมเงิน"
          />
        </div>
      </div>
    );
  }
}
