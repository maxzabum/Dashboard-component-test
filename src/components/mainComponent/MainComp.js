import React, { Component } from "react";
import { Icon, Grid, Image, Segment, Container } from "semantic-ui-react";
import ProgressDash from "../dashComponents/ProgressBar/progressDash";
import SelectComp from "../selectComponent/SelectComp";
import MidLeftComp from "./midLayout/MidLeftComp";
import MidRightComp from "./midLayout/MidRightComp";
import TopLeftComp from "./topLayout/TopLeftComp";
import TopRightComp from "./topLayout/TopRightComp";
import OneLeft from "../mainComponent/bottomLayout/groupOne/OneLeft";
import OneRight from "../mainComponent/bottomLayout/groupOne/OneRight";
import TwoLeft from "../mainComponent/bottomLayout/groupTwo/TwoLeft";
import TwoRight from "../mainComponent/bottomLayout/groupTwo/TwoRight";
import ThreeLeft from "../mainComponent/bottomLayout/groupThree/ThreeLeft";
import ThreeRight from "../mainComponent/bottomLayout/groupThree/ThreeRight";
import FourLeft from "../mainComponent/bottomLayout/groupFour/FourLeft";
import FourRight from "../mainComponent/bottomLayout/groupFour/FourRight";
import FiveLeft from "../mainComponent/bottomLayout/groupFive/FiveLeft";
import FiveRight from "../mainComponent/bottomLayout/groupFive/FiveRight";
import Slider from "react-slick";
import "../style.css";
import "./mainStyle.css";
export default class MainComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTab: "",
      selectActive: ["active", "false", "false", "false", "false"],
    };
    this.onSelectTab = this.onSelectTab.bind(this);
  }
  onSelectTab(e) {
    this.slider.slickGoTo(e, false);
    const curAct = ["false", "false", "false", "false", "false"];
    for (let i = 0; i < e; i++) {
      if (i === e - 1) {
        curAct[i] = "active";
      }
    }
    // console.log(curAct);
    this.setState({
      selectActive: curAct,
    });

    // this.setState({ curTab: e });
    // console.log("eeeewsi", this.state.curTab);
  }
  render() {
    const dataProgressDiaster = {
      allPopulate: 1000,
      datasets: [{ id: 1, textDesc: "จำนวนผู้ประสบภัย", amount: 854 }],
      header: "จำนวนครัวเรือนที่ประสบภัยธรรมชาติ",
      img: "cloud",
    };

    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    };

    return (
      <div>
        <Grid container doubling columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <TopLeftComp />
            </Grid.Column>
            <Grid.Column>
              <TopRightComp />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column>
              <MidLeftComp />
            </Grid.Column>
            <Grid.Column>
              <MidRightComp />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column width={16}>
              <SelectComp
                onSelectTab={this.onSelectTab}
                setActive={this.state.selectActive}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container className="container-select">
          <Slider {...settings} ref={(c) => (this.slider = c)}>
            <Grid container doubling columns={2} divided>
              <Grid.Row stretched>
                <Grid.Column width={16} style={{ marginBottom: 20 }}>
                  <ProgressDash
                    datasets={dataProgressDiaster.datasets}
                    header={dataProgressDiaster.header}
                    img={dataProgressDiaster.img}
                    allPopulate={dataProgressDiaster.allPopulate}
                    showIcon={false}
                  />
                </Grid.Column>
                <Grid.Column>
                  <OneLeft />
                </Grid.Column>
                <Grid.Column>
                  <OneRight />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid container doubling columns={2} divided>
              <Grid.Row stretched>
                <Grid.Column>
                  <TwoLeft />
                </Grid.Column>
                <Grid.Column>
                  <TwoRight />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid container doubling columns={2} divided>
              <Grid.Row stretched>
                <Grid.Column>
                  <ThreeLeft />
                </Grid.Column>
                <Grid.Column>
                  <ThreeRight />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid container doubling columns={2} divided>
              <Grid.Row stretched>
                <Grid.Column>
                  <FourLeft />
                </Grid.Column>
                <Grid.Column>
                  <FourRight />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid container doubling columns={2} divided>
              <Grid.Row stretched>
                <Grid.Column>
                  <FiveLeft />
                </Grid.Column>
                <Grid.Column>
                  <FiveRight />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Slider>
        </Container>
      </div>
    );
  }
}
