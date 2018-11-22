import React from "react";
import PropTypes from "prop-types";

export default function Bold(props) {
  const { children, classStyle = {} } = props;

  const style = {
    textDecoration: "none",
    color: "#000000",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500
  };

  return <span style={Object.assign({}, style, classStyle)}>{children}</span>;
}

Bold.propTypes = { children: PropTypes.node.isRequired };
