import React from "react";
import { Box, Item, Image } from "react-html-email";
import {
  ActionHeader,
  SubHeader,
  SpaceTable,
  Button,
  CenterElement,
  Bold,
  Row,
  ItemCol
} from "../../components/library/index";
import accountInfo from "../../accounts/cosmeticDentistryDenver";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper/";
import { formatPhoneNumber } from "../../mainApp/library/utils/formatPhoneNumber";

export default function CosmeticDentistryFallSpecial(props) {
  const { headerProps, footerProps, website } = accountInfo();

  const mainColor = "#FF9100";

  const brownTextColor = "#653d0c";

  footerProps.bgColor = "#f7c758" || "#fbecd5";
  footerProps.textColor = brownTextColor;

  footerProps.phoneNumber = "+17207910744";
  footerProps.phoneNumberFormatted = formatPhoneNumber("+17207910744");

  const classStyleSubHeader = {
    color: brownTextColor,
    fontWeight: 500,
    fontSize: "16px"
  };

  const classStyleActionHeader = {
    color: mainColor,
    fontWeight: 500
  };

  const textStyle = {
    color: mainColor,
    fontSize: "14px",
    textDecoration: "none",
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "Roboto, sans-serif"
  };

  const contactLinkStyle = {
    ...classStyleSubHeader,
    color: mainColor
  };

  return (
    <ClinicEmailWrapper
      {...props}
      color={mainColor}
      headerProps={headerProps}
      footerProps={footerProps}
    >
      <Item>
        <CenterElement colWidth={460}>
          <ActionHeader classStyle={classStyleActionHeader}>
            Fall is here and
          </ActionHeader>
          <ActionHeader classStyle={classStyleActionHeader}>
            so are the prizes!
          </ActionHeader>
          <SpaceTable height={35} />

          <SubHeader classStyles={classStyleSubHeader}>
            Enter our Fall Drawings for a chance to win a $50 gift certificate
            to Mila- Kevin Taylor's newest restaurant.
          </SubHeader>
          <SpaceTable height={15} />
          <SubHeader classStyles={{ ...classStyleSubHeader, fontSize: "18px" }}>
            To Enter:
          </SubHeader>
        </CenterElement>
        <SpaceTable height={30} />
        <Box width="100%">
          <Row>
            <ItemCol
              style={{
                height: "200px",
                background: "#fbfbfb"
              }}
            >
              <CenterElement colWidth={250}>
                <Box height={120} width="auto">
                  <Row>
                    <ItemCol style={{ paddingRight: "10px", height: "70px" }}>
                      <Image
                        src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/615bc217-0a24-4efc-81ae-c9a31b31d3bf.png"
                        height={50}
                        width="auto"
                      />
                    </ItemCol>
                    <ItemCol style={textStyle}>Like our Facebook page!</ItemCol>
                  </Row>
                  <Row>
                    <ItemCol style={{ paddingRight: "10px", height: "70px" }}>
                      <Image
                        src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/152a776f-67cd-4fa4-bc4a-80e56ac4a1f1.png"
                        height={40}
                        width="auto"
                      />
                    </ItemCol>
                    <ItemCol style={textStyle}>Share the contest post!</ItemCol>
                  </Row>
                  <Row>
                    <ItemCol style={{ paddingRight: "10px", height: "70px" }}>
                      <Image
                        src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/34e7cbc0-3bf1-44c0-a782-bec22cc794bd.png"
                        height={60}
                        width="auto"
                      />
                    </ItemCol>
                    <ItemCol style={textStyle}>Tag 3 friends!</ItemCol>
                  </Row>
                </Box>
              </CenterElement>
            </ItemCol>
          </Row>
        </Box>
        <SpaceTable height={30} />
        <CenterElement colWidth={460}>
          <SubHeader classStyles={classStyleSubHeader}>
            Don't forget to maximize your dental benefits before the new year!
            Schedule today online by clicking on the button below
          </SubHeader>
          <SubHeader classStyles={classStyleSubHeader}>
            or by calling us at{" "}
            <Bold>
              <a style={contactLinkStyle} href={"tel:+17207910744"}>
                (720) 791-0744
              </a>{" "}
            </Bold>
          </SubHeader>
          <SpaceTable height={35} />
        </CenterElement>

        <CenterElement colWidth={460}>
          <Button
            link={`${website}?cc=book`}
            text="Book Online Today"
            color={"#f7c758"}
          />
        </CenterElement>

        <SpaceTable height={35} />

        <ActionHeader
          classStyle={{ ...classStyleActionHeader, fontSize: "18px" }}
        >
          Happy Fall!
        </ActionHeader>
        <ActionHeader
          classStyle={{ ...classStyleActionHeader, fontSize: "18px" }}
        >
          From Dr. Radz & Staff
        </ActionHeader>

        <SpaceTable height={15} />

        <Box>
          <Row>
            <ItemCol width="80%" style={{ paddingLeft: "35px" }} />
            <ItemCol>
              <Image
                src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/12b7eccb-d57c-4eaf-b0ee-94f294fae71a.png"
                height={180}
                width="auto"
              />
            </ItemCol>
          </Row>
        </Box>
      </Item>
    </ClinicEmailWrapper>
  );
}
