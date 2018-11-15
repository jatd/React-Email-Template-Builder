import React from "react";
import PropTypes from "prop-types";
import omit from "lodash/omit";
import classnames from "classnames";
import styles from "./styles.scss";

export default function Button(props) {
  const { children, className = {}, transparent } = props;
  const newProps = omit(props, ["transparent"]);
  return (
    <button
      {...newProps}
      className={classnames(styles.button, className, {
        [styles.transparent]: transparent
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOf(
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ),
  transparent: PropTypes.bool
};
