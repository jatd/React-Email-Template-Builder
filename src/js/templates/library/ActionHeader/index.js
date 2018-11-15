import React from "react";
import PropTypes from "prop-types";
import { Item, Box } from "react-html-email";

export default function ActionHeader(props) {
  const { children, fontSize, classStyle = {} } = props;

  const largeHeaderStyle = Object.assign(
    {},
    {
      textAlign: "center",
      color: "#313131",
      fontSize: fontSize || 33,
      textDecoration: "none",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 100,
      lineHeight: 1.3,
      msoLineHeightRule: "exactly"
    },
    classStyle
  );

  return (
    <Box width="100%" height="100%">
      <Item
        style={largeHeaderStyle}
        className="largeHeader"
        data-mc-edit={`actionHeader_${Math.random()}`}
      >
        {children}
      </Item>
    </Box>
  );
}

ActionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.number
};

ActionHeader.defaultProps = { fontSize: 33 };
