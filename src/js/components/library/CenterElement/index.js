import React from "react";
import PropTypes from "prop-types";
import { Box } from "react-html-email";
import ItemCol from "../ItemCol";
import Row from "../Row";

export default function CenterElement(props) {
  const { maxWidth, colWidth, children, centerStyle } = props;

  const mWidth = maxWidth || 600;
  const outerColWidth = (mWidth - colWidth) / 2;

  return (
    <Box width="100%" style={centerStyle || {}}>
      <Row>
        <ItemCol width={outerColWidth}>&nbsp;</ItemCol>
        <ItemCol width={colWidth}>{children}</ItemCol>
        <ItemCol width={outerColWidth}>&nbsp;</ItemCol>
      </Row>
    </Box>
  );
}

CenterElement.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  colWidth: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number,
  className: PropTypes.string
};

CenterElement.defaultProps = {
  height: undefined,
  className: ""
};

CenterElement.defaultProps = { maxWidth: 600 };
