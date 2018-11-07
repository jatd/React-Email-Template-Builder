import React, { Component } from "react";
import { Item, Box } from "react-html-email";

export default class SubHeader extends Component {
  render() {
    const {
      children,
      disableTextAlign,
      fontSize,
      classStyles = {}
    } = this.props;

    const subHeaderStyle = {
      textAlign: disableTextAlign ? null : "center",
      color: "#808081",
      fontSize: fontSize || 14,
      textDecoration: "none",
      fontFamily: "Roboto, sans-serif",
      lineHeight: 1.5,
      msoLineHeightRule: "exactly"
    };

    return (
      <Box width="100%" height="100%">
        <Item
          style={Object.assign({}, subHeaderStyle, classStyles)}
          className="subHeader"
          data-mc-edit={`subHeaderEdit${Math.random()}`}
        >
          {children}
        </Item>
      </Box>
    );
  }
}
