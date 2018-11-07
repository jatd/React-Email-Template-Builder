import React from "react";
import { Item, Image } from "react-html-email";
import {
  ActionHeader,
  Sincerely,
  ActionContainer,
  SubHeader,
  SpaceTable,
  Button,
  CenterElement,
  CenterContainer,
  Bold
} from "../../components/library/index";
import accountInfo from "../../accounts/edlowe";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper/";

export default function GoersDentalYearEndNewsLetter(props) {
  const { color, headerProps, footerProps, website } = accountInfo();
  const { phoneNumber, phoneNumberFormatted, accountName } = footerProps;

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
    >
      <Item>
        <CenterElement colWidth={460}>
          <CenterContainer>
            <ActionHeader>
              Time's Running Out, Utilize Your Insurance Benefits Before the End
              Of The Year!{" "}
            </ActionHeader>
            <SpaceTable height={35} />

            <Image
              alt="Clinic Website Gif"
              src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/a6940a0a-5524-473e-ac7d-4851a8b8c62f.jpg"
              height={180}
              width="auto"
            />

            <SpaceTable height={35} />

            <SubHeader>
              It’s the end of the year and your dental benefits and health
              spending accounts are about to expire! Most plans do not allow you
              to rollover unused assets to the next benefit year.
            </SubHeader>

            <SpaceTable height={15} />
            <SubHeader>
              <Bold>Call us today, spaces are limited!</Bold>
            </SubHeader>
            <SubHeader>
              <Bold>
                Give us a call at{" "}
                <a style={contactLinkStyle} href={`tel:${phoneNumber}`}>
                  {phoneNumberFormatted}
                </a>{" "}
                to schedule your appointment or book online by clicking on the
                button below.
              </Bold>
            </SubHeader>
            <SpaceTable height={40} />
          </CenterContainer>
        </CenterElement>

        <CenterElement colWidth={390}>
          <Button
            link={`${website}?cc=book`}
            text="Book Online Today"
            color={color}
          />
        </CenterElement>

        <Sincerely accountName={accountName} />
      </Item>
    </ClinicEmailWrapper>
  );
}
