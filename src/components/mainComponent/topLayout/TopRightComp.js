import React, { Component } from "react";
import SignBoard from "../../SignBoard";
import PieDash from "../../dashComponents/Pies/PieDash";
import ProgressDash from "../../dashComponents/ProgressBar/progressDash";
export default class TopRightComp extends Component {
  render() {
    const dataProgressBar = {
      allPopulate: 100,
      datasets: [
        { id: 1, textDesc: "เด็ก(อายุระหว่าง 0-14 ปี)", amount: 75 },
        { id: 2, textDesc: "วัยแรงงาน(อายุระหว่าง 15-59 ปี)", amount: 20 },
        { id: 3, textDesc: "ผู้สูงอายุ(อายุ 60 ปีขึ้นไป)", amount: 32 },
      ],
      header: "ช่วงอายุประชากร",
      img: "chart bar",
    };
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
      <div className="test-left">
        <div className="child">
          <div className="child-col1">
            <SignBoard
              sex="เพศชาย"
              amount="10000"
              unit="คน"
              img="male"
              color="#72A7D8"
            />
          </div>
          <div className="child-col2">
            <SignBoard
              sex="เพศชาย"
              amount="10000"
              unit="คน"
              img="male"
              color="#72A7D8"
            />
          </div>
        </div>
        <div className="child-prog">
          <ProgressDash
            datasets={dataProgressBar.datasets}
            header={dataProgressBar.header}
            img={dataProgressBar.img}
            allPopulate={dataProgressBar.allPopulate}
            showIcon={false}
          />
        </div>
        <div className="child">
          <div className="child-col1">
            <SignBoard
              sex="เพศชาย"
              amount="10000"
              unit="คน"
              img="male"
              color="#72A7D8"
            />
          </div>
          <div className="child-col2">
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
          <PieDash
            data={data}
            options={options}
            img="home"
            header="ที่ตั้งที่พักอาศัย"
          />
        </div>
      </div>
    );
  }
}
