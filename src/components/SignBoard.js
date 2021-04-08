import React, { Component } from "react";
import { Card, Icon, Container, Grid, Image, Label } from "semantic-ui-react";
import "./style.css";
export default class SignBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { sex: "", amount: "", unit: "", img: "", color: "" };
  }
  render() {
    return (
      <div className="sign-container">
        <Grid celled>
          <Grid.Row>
            <Grid.Column className="sign-sex">
              <p style={{ color: `${this.props.color}` }}>{this.props.sex}</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="bg-sign">
            <Grid.Column className="sign-amount" width={10}>
              <p className="text-amount">{this.props.amount}</p>
              <p className="text-unit">{this.props.unit}</p>
            </Grid.Column>
            <Grid.Column width={6} className="grid-img">
              <Icon
                className="icon-male"
                name={this.props.img}
                size="huge"
                // color={this.props.color}
                style={{ color: `${this.props.color}` }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
