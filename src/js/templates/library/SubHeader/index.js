import React from "react";
import PropTypes from "prop-types";
import { Item, Box } from "react-html-email";

export default function SubHeader(props) {
  const { children, disableTextAlign, fontSize, classStyles = {} } = props;

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

SubHeader.propTypes = {
  children: PropTypes.node.isRequired,
  disableTextAlign: PropTypes.bool
};

SubHeader.defaultProps = { disableTextAlign: false };
