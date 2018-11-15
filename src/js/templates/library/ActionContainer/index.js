import React from "react";
import PropTypes from "prop-types";
import CenterElement from "../CenterElement";
import SpaceTable from "../SpaceTable";

export default function ActionContainer(props) {
  const { children } = props;

  return (
    <CenterElement colWidth={450}>
      {children}
      <SpaceTable height={30} />
    </CenterElement>
  );
}

ActionContainer.propTypes = { children: PropTypes.node.isRequired };
