import React, { Component } from "react";
import HorizonBarDash from "../../dashComponents/HorizonBars/BarDash";
export default class MidRightComp extends Component {
  render() {
    const dataBar = {
      labels: [
        "ศูนย์แพทย์โนนชัย",
        "ศูนย์แพทย์มิตรภาพ",
        "ศูนย์แพทย์ประชาสโมสร",
        "ศูนย์แพทย์หนองใหญ่",
        "ศูนย์แพทย์ชาตะผดุง",
        "ศูนย์แพทย์เทศบาล 1",
        "ศูนย์แพทย์หนองแวง",
        "ศูนย์แพทย์สามเหลี่ยม",
        "ศูนย์แพทย์ปฐมภูมินักศึกษา มข.",
        "หน่วยบริการปฐมภูมิ",
      ],
      datasets: [
        {
          backgroundColor: "rgba(255,99,132,1)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 46, 12, 76, 23],

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
          data={dataBar}
          options={optionsBar}
          img="chart bar"
          header="จำนวนครัวเรือนของประชากร"
        />
      </div>
    );
  }
}
