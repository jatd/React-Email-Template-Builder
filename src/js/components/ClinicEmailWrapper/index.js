import React from "react";
import PropTypes from "prop-types";
import { Box } from "react-html-email";
import { CenterContainer } from "../library";
import Footer from "./Footer";
import Header from "./Header";
import renderCSS from "../styles";

export default function ClinicEmailWrapper(props) {
  const {
    children,
    color,
    maxWidth,
    defaultColor,
    devMode,
    footerProps,
    headerProps,
    injectCSS,
    disableHeader
  } = props;

  // Dealing with Microsoft Outlook clients
  const outlookTextTop = `<!--[if mso]>
            <table cellpadding="0" cellspacing="0" border="0" style="padding:0px;margin:0px;width:100%;">
               <tr><td colspan="3" style="padding:0px;margin:0px;font-size:20px;height:20px;line-height:20px" height="20"></td></tr>
               <tr>
                 <td style="padding:0px;margin:0px;"></td>
                 <td style="padding:0px;margin:0px;" width=${maxWidth}>
            <![endif]-->`;

  const outlookTextBottom = `<!--[if mso]>
        </td>
        <td style="padding:0px;margin:0px;"></td>
         </tr>
            <tr><td colspan="3" style="padding:0px;margin:0px;font-size:20px;height:20px;line-height:20px" height="20"> </td></tr>
        </table>
        <![endif]-->`;

  const tableStyle = {
    borderTop: `10px solid ${color}`,
    backgroundColor: "#FFFFFF"
  };

  const bodyStyle = {
    width: "100%",
    height: "100%",
    padding: "0px",
    margin: "0px auto",
    WebkitTextSizeAdjust: "100%",
    MsTextSizeAdjust: "100%",
    backgroundColor: "#EEEEEE",
    fontFamily: "Roboto, sans-serif"
  };

  const template = (
    <CenterContainer setFullHeight>
      {!devMode && outlookTextTop}
      <Box
        height="100%"
        className="templateColumns"
        align="center"
        style={tableStyle}
      >
        {!disableHeader && (
          <Header
            color={color}
            maxWidth={maxWidth}
            devMode={devMode}
            {...headerProps}
          />
        )}
        {children}
        <Footer
          color={color}
          maxWidth={maxWidth}
          devMode={devMode}
          {...footerProps}
        />
      </Box>
      {!devMode && outlookTextBottom}
    </CenterContainer>
  );

  const htmlComponent = (
    <html lang={props.lang} xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <title>{props.title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,400,500,700,900"
          rel="stylesheet"
        />
        <style type="text/css">
          {renderCSS(defaultColor, maxWidth, injectCSS)}
        </style>
      </head>
      <body>{template}</body>
    </html>
  );

  return htmlComponent;
}

ClinicEmailWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  maxWidth: PropTypes.number.isRequired,
  devMode: PropTypes.bool.isRequired,
  lang: PropTypes.string,
  defaultColor: PropTypes.string.isRequired,
  title: PropTypes.string
};

ClinicEmailWrapper.defaultProps = {
  lang: "en",
  title: ""
};
