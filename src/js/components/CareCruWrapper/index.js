
import React from 'react';
import { Box } from 'react-html-email';
import Footer from './Footer';
import Header from './Header';
import CenterContainer from "../library/CenterContainer/index";
import renderCSS from '../styles';

export default function CareCruWrapper(props) {
  const {
    children,
    maxWidth,
    devMode,
  } = props;

  const color = '#FF715A';
  const defaultColor = '#FF715A';

  const tableStyle = {
    maxWidth,
    backgroundColor: '#FFFFFF'
  };

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

  return (
    <html lang={props.lang} xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,400,500,700,900"
        rel="stylesheet"
      />
      <style type="text/css">
        {renderCSS(defaultColor, maxWidth)}
      </style>
    </head>
    <body
      style={{
        width: '100%',
        height: '100%',
        padding: '0px',
        margin: '0px auto',
        WebkitTextSizeAdjust: '100%',
        MsTextSizeAdjust: '100%',
        backgroundColor: '#EEEEEE',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <CenterContainer setFullHeight>
        {devMode ? null : outlookTextTop}
        <Box height="100%" className="templateColumns" align="center" style={tableStyle}>
          <Header
            color={color}
            maxWidth={maxWidth}
            devMode={devMode}
          />
          {children}
          <Footer
            color={color}
            maxWidth={maxWidth}
            devMode={devMode}
          />
        </Box>
        {devMode ? null : outlookTextBottom}
      </CenterContainer>
      </body>
    </html>
  );
};

