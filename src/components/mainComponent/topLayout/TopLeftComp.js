import React, { Component } from "react";
import BarDash from "../../dashComponents/Bars/Bars";
import GraphDash from "../../dashComponents/GraphBar/GraphDash";
export default class TopLeftComp extends Component {
  render() {
    const dataVerBar = {
      occupation: {
        labels: [
          "รับจ้างทั่วไป",
          "พนักงาน-รับราชการ",
          "ค้าขาย",
          "ไม่มีอาชีพ",
          "กำลังศึกษา",
          "เกษตร-ทำนา",
          "เกษตร-ทำไร่",
          "เกษตร-ทำสวน",
          "เกษตร-ประมง",
          "เกษตร-ปศุสัตว์",
          "เกษตร-รัฐวิสาหกิจ",
          "พนักงานบริษัท",
          "ธุรกิจส่วนตัว",
          "อาชีพอื่นๆ",
        ],
        datasets: [
          {
            backgroundColor: "rgba(255,199,202,1)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 2, 80, 81, 56, 55, 9, 65, 5, 1, 81, 56, 10, 12],
          },
        ],
      },
      education: {
        labels: [
          "ประถมศึกษา 3",
          "ประถมศึกษา 6",
          "มัธยมศึกษา 3",
          "มัธยมศึกษา 6",
          "ปริญาตรี",
          "ปริญาโท",
          "ปริญาเอก",
          "อื่นๆ",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,232,1)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(205,109,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [12, 59, 80, 81, 56, 55, 40, 5],
          },
        ],
      },
      religion: {
        labels: ["พุทธ", "อิสลาม", "คริสต์", "ฮินดู", "อื่นๆ"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255,199,132,1)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56],
          },
        ],
      },
    };
    const optionsVerBar = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    };
    return (
      <div>
        <div className="test-jaa">
          <div className="test-graph">
            <GraphDash />
          </div>
          <BarDash
            data={dataVerBar}
            options={optionsVerBar}
            img="chart bar outline"
            header="จำนวนครัวเรือนของประชากร"
          />
        </div>
      </div>
    );
  }
}
