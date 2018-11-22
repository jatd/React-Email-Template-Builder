import React from "react";
import PropTypes from "prop-types";

export default function ItemCol(props) {
  return (
    <td {...props} cellPadding={0} cellSpacing={0}>
      {props.children}
    </td>
  );
}

ItemCol.propTypes = { children: PropTypes.node.isRequired };
