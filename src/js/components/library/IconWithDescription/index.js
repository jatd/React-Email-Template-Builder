import React from "react";
import { Item, Box, Image } from "react-html-email";
import { SubHeader, Row, ItemCol } from "../../library";

export default function IconWithDescription(props) {
  const {
    iconSrc,
    headerText,
    subHeaderText,
    iconHeight = 30,
    iconWidth = 30,
    paddingLeft = 0,
    paddingTop = 4,
    centerImage,
    alt
  } = props;

  const iconImage = centerImage ? (
    <center>
      <Image width={iconWidth} height={iconHeight} src={iconSrc} alt={alt} />
    </center>
  ) : (
    <Image width={iconWidth} height={iconHeight} src={iconSrc} alt={alt} />
  );

  const outlookTop = `<!--[if mso]>
            <table cellpadding="0" cellspacing="0" border="0" style="padding:0px;margin:0px;width:100%;">
               <tr><td style="padding-left:25px;">
            <![endif]-->`;

  const outlookBottom = `<!--[if mso]>
            </td></tr>
        </table>
        <![endif]-->`;

  return (
    <Box width="100%">
      <Row>
        <ItemCol style={{ verticalAlign: "top", paddingTop }}>
          <Box width="60px" className="iconDescriptionImage">
            <Row>
              <ItemCol style={{ paddingLeft }}>{iconImage}</ItemCol>
            </Row>
          </Box>
        </ItemCol>
        <ItemCol style={{ verticalAlign: "top" }}>
          {outlookTop}
          <SubHeader disableTextAlign>{headerText}</SubHeader>
          <SubHeader disableTextAlign>{subHeaderText}</SubHeader>
          {outlookBottom}
        </ItemCol>
      </Row>
    </Box>
  );
}
