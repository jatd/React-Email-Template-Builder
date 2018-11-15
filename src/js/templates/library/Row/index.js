import React from "react";
import PropTypes from "prop-types";

export default function Row({ children }) {
  return (
    <tr cellPadding={0} cellSpacing={0}>
      {children}
    </tr>
  );
}

Row.propTypes = { children: PropTypes.node.isRequired };
