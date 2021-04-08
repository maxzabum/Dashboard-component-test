import React, { Component } from "react";
import { Icon, Grid, Image, Segment } from "semantic-ui-react";
export default class MainOne extends Component {
  render() {
    return (
      <div>
        <Grid.Column>
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Grid.Column>
      </div>
    );
  }
}
