import React from "react";
import PropTypes from "prop-types";
import { A, Item, Box } from "react-html-email";

export default function Button(props) {
  const { link, tableStyle, text, color } = props;
  const fontFamily = "Roboto, sans-serif";

  return (
    <A
      href={link}
      style={{
        textDecoration: "none",
        fontSize: 18,
        color: "#FFFFFF",
        fontFamily,
        fontWeight: 500
      }}
    >
      <Box
        width="100%"
        height="50px"
        align="center"
        cellPadding={5}
        style={tableStyle}
        className="buttonContainer"
      >
        <Item
          style={Object.assign({
            backgroundColor: color,
            textAlign: "center",
            fontSize: 18,
            color: "#FFFFFF",
            fontFamily,
            fontWeight: 500
          })}
          className="buttonStyle"
          data-mc-edit={`button_${Math.random()}`}
        >
          <A
            href={link}
            style={{
              textDecoration: "none",
              fontSize: 18,
              color: "#FFFFFF",
              fontFamily,
              fontWeight: 500
            }}
          >
            {text}
          </A>
        </Item>
      </Box>
    </A>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  tableStyle: PropTypes.objectOf(PropTypes.string)
};

Button.defaultProps = { tableStyle: {} };
