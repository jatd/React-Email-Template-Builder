import React from "react";
import PropTypes from "prop-types";
import { Box, Item } from "react-html-email";
import CenterContainer from "../CenterContainer";

export default function Address({ children }) {
  const style = {
    color: "#6c6c6c",
    textAlign: "center",
    fontSize: "12px",
    textDecoration: "none"
  };

  return (
    <CenterContainer>
      <Box width="100%" align="center" style={style}>
        <Item
          style={style}
          className="bottomDefaultText"
          data-mc-edit={`address_${Math.random()}`}
        >
          {children}
        </Item>
      </Box>
    </CenterContainer>
  );
}

Address.propTypes = { children: PropTypes.node.isRequired };
