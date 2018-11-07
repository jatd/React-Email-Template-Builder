import React, { Component } from "react";
import { Box, Item } from "react-html-email";

export default class CenterContainer extends Component {
  render() {
    const { children, setFullHeight } = this.props;

    const style = {
      height: "100%"
    };

    return <center style={setFullHeight ? style : {}}>{children}</center>;
  }
}
