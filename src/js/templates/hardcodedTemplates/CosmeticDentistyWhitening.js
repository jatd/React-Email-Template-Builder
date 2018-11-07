import React from "react";
import { Box, Item, Image } from "react-html-email";
import {
  ActionHeader,
  SubHeader,
  SpaceTable,
  CenterElement,
  CenterContainer,
  Bold,
  ItemCol,
  Row
} from "../../components/library";
import accountInfo from "../../accounts/cosmeticDentistryDenver";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper";

const injectCSS = `
  .whiteningImg {
    height: 230px;
    width: auto;
    max-width: 600px;
  }

  @media only screen and (max-width: 480px) { 
    .whiteningImg {
      height: 180px;    
      width: 380px;
    }
  }

  @media only screen and (max-width: 320px) { 
    .whiteningImg {
      height: 180px;    
      width: 320px;   
    }
  }
`;

const centerImageOutlookTop = `<!--[if mso]>
<center>
<table border="0" cellpadding="0" cellspacing="0" width="600px">
<tr><td>
<![endif]-->`;

const centerImageOutlookBot = `<!--[if mso]>
</td></tr>
</table>
</center>
<![endif]-->`;

export default function CosmeticDentistryWhitening(props) {
  const { color, headerProps, footerProps, website } = accountInfo();
  const { phoneNumber, phoneNumberFormatted } = footerProps;

  const gifImage = (
    <CenterContainer>
      <img
        alt="Zoom Image"
        src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/0ff3faac-7974-463f-8c25-b42645806d3a.png"
        className="whiteningImg"
      />
    </CenterContainer>
  );

  const classStyles = { color: "#00446d" };

  const contactLinkStyle = {
    textAlign: "center",
    color: "#000000",
    lineHeight: 1.5,
    fontSize: 14,
    fontFamily: "Roboto, sans-serif"
  };

  return (
    <ClinicEmailWrapper
      {...props}
      color={color}
      headerProps={headerProps}
      footerProps={footerProps}
      injectCSS={injectCSS}
    >
      <Item>
        <CenterElement colWidth={460}>
          <ActionHeader>Fall Zoom Special!</ActionHeader>
          <SpaceTable height={10} />
          <ActionHeader>November 28th and 29th</ActionHeader>
          <SpaceTable height={10} />
          <ActionHeader>
            <Bold>$100 Off!</Bold>
          </ActionHeader>
          <SpaceTable height={15} />
          <SubHeader fontSize={16}>
            The holiday season is right around the corner! Give yourself a
            rewarding, healthy smile that you want to show off. This quick
            in-house service only takes a short amount of time to make a very
            noticeable difference! This month our office is hosting a Zoom
            Whitening special on November 28th and 29th. If you schedule on
            those dates, we will take $100 off any Zoom Whitening service.
          </SubHeader>
          <SpaceTable height={15} />
          <SubHeader fontSize={16}>
            <Bold>LIMITED SPOTS AVAILABLE!</Bold>{" "}
          </SubHeader>

          <SubHeader>
            <Bold>
              Give us a call at{" "}
              <a style={contactLinkStyle} href={`tel:${phoneNumber}`}>
                {phoneNumberFormatted}
              </a>{" "}
              to schedule your appointment.
            </Bold>
          </SubHeader>
          <SpaceTable height={35} />

          {gifImage}

          <SpaceTable height={35} />

          <Box
            width="100%"
            height="100px"
            style={{
              textAlign: "center",
              fontWeight: 700,
              background: "#f6f6f6",
              padding: "5px"
            }}
          >
            <Row>
              <ItemCol>
                <SubHeader classStyles={classStyles}>Quick & Easy</SubHeader>
              </ItemCol>
              <ItemCol>
                <SubHeader classStyles={classStyles}>No Hassle</SubHeader>
              </ItemCol>
              <ItemCol>
                <SubHeader classStyles={classStyles}>Instant Results</SubHeader>
              </ItemCol>
              <ItemCol>
                <SubHeader classStyles={classStyles}>
                  More Effective than Strips!
                </SubHeader>
              </ItemCol>
              <ItemCol>
                <SubHeader classStyles={classStyles}>
                  Completely Safe!
                </SubHeader>
              </ItemCol>
            </Row>
          </Box>

          <SpaceTable height={35} />
        </CenterElement>
      </Item>
    </ClinicEmailWrapper>
  );
}
