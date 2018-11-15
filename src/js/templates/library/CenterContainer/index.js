import React from "react";
import PropTypes from "prop-types";

export default function CenterContainer({ children, setFullHeight }) {
  const style = {
    height: "100%"
  };

  return <center style={setFullHeight ? style : {}}>{children}</center>;
}

CenterContainer.propTypes = {
  children: PropTypes.node.isRequired,
  setFullHeight: PropTypes.bool
};

CenterContainer.defaultProps = { setFullHeight: false };
