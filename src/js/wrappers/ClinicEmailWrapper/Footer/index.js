import React from "react";
import PropTypes from "prop-types";
import { A, Item, Box, Image, Span } from "react-html-email";
import {
  SpaceTable,
  ItemCol,
  Address,
  Row,
  SocialLink,
  Copyright,
  CenterContainer
} from "../../../templates/library";

export default function Footer(props) {
  const {
    color,
    address,
    city,
    province,
    phoneNumber,
    phoneNumberFormatted,
    email,
    accountName,
    googleUrl,
    facebookUrl,
    bgColor,
    textColor
  } = props;

  const linkStyle = {
    color: textColor || "#6c6c6c",
    textAlign: "center",
    fontSize: "12px",
    textDecoration: "none"
  };

  const defaultStyle = {
    color: textColor || "#6c6c6c",
    textAlign: "center",
    fontSize: "12px",
    textDecoration: "none"
  };

  return (
    <Item bgcolor="#313131" style={{ backgroundColor: bgColor || "#313131" }}>
      <SpaceTable height={30} />

      <Address>
        <A href="#" style={defaultStyle} className="bottomDefaultText">
          {address || "*|ACCOUNT_ADDRESS|*"}
        </A>
      </Address>

      <SpaceTable height={2} />

      <Address>
        <A href="#" style={defaultStyle} className="bottomDefaultText">
          {city && province ? `${city}, ${province}` : "*|ACCOUNT_CITY|*"}
        </A>
      </Address>

      <SpaceTable height={20} />

      <Address>
        <A
          href={`tel:${phoneNumber || "*|ACCOUNT_PHONENUMBER|*"}`}
          style={defaultStyle}
          className="bottomDefaultText"
        >
          {phoneNumberFormatted || "*|ACCOUNT_PHONENUMBER|*"}
        </A>
      </Address>

      <SpaceTable height={2} />

      <Address>
        <A
          href={`mailto:${email || "*|ACCOUNT_CONTACTEMAIL|*"}`}
          style={linkStyle}
          className="bottomDefaultText"
        >
          <Span style={linkStyle} className="bottomDefaultText">
            {email || "*|ACCOUNT_CONTACTEMAIL|*"}
          </Span>
        </A>
      </Address>

      <SpaceTable height={20} />
      <CenterContainer>
        <Box align="center">
          <Row>
            <ItemCol>
              <SocialLink color={color}>
                <A href={facebookUrl || "*|FACEBOOK_URL|*"}>
                  <Image
                    alt="Facebook Link"
                    src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/4abac701-e491-40c4-8f35-3ac9b843197f.png"
                    width={9}
                    height={17}
                  />
                </A>
              </SocialLink>
            </ItemCol>
            <ItemCol style={{ paddingLeft: "10px" }}>
              <SocialLink color={color}>
                <A href={googleUrl || "*|GOOGLE_URL|*"}>
                  <Image
                    alt="Google Link"
                    src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/ca94b822-c2d2-4210-aef0-46181d6d8a8f.png"
                    width={15}
                    height={15}
                  />
                </A>
              </SocialLink>
            </ItemCol>
          </Row>
        </Box>
      </CenterContainer>

      <SpaceTable height={40} />

      <Copyright accountName={accountName} textColor={textColor} />

      <SpaceTable height={10} />
    </Item>
  );
}

Footer.propTypes = {
  color: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  province: PropTypes.string,
  phoneNumber: PropTypes.string,
  phoneNumberFormatted: PropTypes.string,
  email: PropTypes.string,
  accountName: PropTypes.string,
  googleUrl: PropTypes.string,
  facebookUrl: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};
