import React, { Component } from "react";

export default class Bold extends Component {
  render() {
    const { children, classStyle = {} } = this.props;

    const style = {
      textDecoration: "none",
      color: "#000000",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500
    };

    return <span style={Object.assign({}, style, classStyle)}>{children}</span>;
  }
}
