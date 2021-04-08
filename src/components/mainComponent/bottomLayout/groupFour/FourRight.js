import React, { Component } from "react";
import HorizonBarDash from "../../../dashComponents/HorizonBars/BarDash";

export default class FourRight extends Component {
  render() {
    const dataOccupa = {
      labels: [
        "รับจ้างทั่วไป",
        "เกษตร-ปศุสัตว์",
        "เกษตร-ทำนา",
        "กำลังศึกษา",
        "เกษตร-ประมง",
        "เกษตร-ทำไร",
        "เกษตร-ทำสวน",
        "ค้าขาย",
        "พนักงาน-รับราชการ",
        "ไม่มีอาชีพ",
        "อาชีพอื่นๆ",
        "พนักงานบริษัท",
        "ธุรกิจส่วนตัว",
      ],
      datasets: [
        {
          backgroundColor: "rgba(255,99,132,1)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 46, 12, 76, 23, 23, 65, 65],

          // barThickness: 10,
          maxBarThickness: 50,
          minBarLength: 10,
        },
      ],
    };
    const optionsBar = {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              padding: 10,
            },
          },
        ],
      },
    };
    return (
      <div>
        <HorizonBarDash
          data={dataOccupa}
          options={optionsBar}
          img="chart bar"
          header="จำนวนประชากรในแต่ละอาชีพ"
        />
      </div>
    );
  }
}
