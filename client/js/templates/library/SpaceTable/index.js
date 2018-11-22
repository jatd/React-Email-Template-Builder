import React from "react";
import PropTypes from "prop-types";
import { Box } from "react-html-email";
import ItemCol from "../ItemCol/index";
import Row from "../Row/index";

export default function SpaceTable({ height }) {
  return (
    <Box width="100%" height={`${height}px`} cellSpacing={0} cellPadding={0}>
      <Row>
        <ItemCol height={height} style={{ lineHeight: `${height}px` }}>
          &nbsp;&nbsp;
        </ItemCol>
      </Row>
    </Box>
  );
}

SpaceTable.propTypes = { height: PropTypes.number.isRequired };
