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
} from "../library";
import accountInfo from "../../accounts/defaultAccount";
import ClinicEmailWrapper from "../../wrappers/ClinicEmailWrapper";

export default function GoersDentalVeteransNewsletter(props) {
  const { color, headerProps, footerProps, website } = accountInfo();
  const { phoneNumber, phoneNumberFormatted, accountName } = footerProps;

  const contactLinkStyle = {
    textAlign: "center",
    color: "#000000",
    lineHeight: 1.5,
    fontFamily: "Roboto, sans-serif, Arial"
  };

  const gifImage = (
    <CenterContainer>
      <Image
        alt="Clinic Website Gif"
        src="https://media.giphy.com/media/3osxYcwi3hCVbzNYqY/giphy-downsized.gif"
        height={180}
      />
    </CenterContainer>
  );

  return (
    <ClinicEmailWrapper
      {...props}
      color={color}
      headerProps={{ ...headerProps, imageHeight: 70 }}
      footerProps={footerProps}
    >
      <Item>
        <ActionContainer>
          <ActionHeader>October 11th is Freedom Day!</ActionHeader>
          <SpaceTable height={15} />
          <ActionHeader>Are You a Veteran?</ActionHeader>
          <ActionHeader>Do You Know A Veteran?</ActionHeader>
        </ActionContainer>

        <CenterElement colWidth={460}>
          <SpaceTable height={15} />
          <SubHeader fontSize={16}>
            Ask us how to get a <Bold>free cleaning and treatment</Bold> by
            calling us at{" "}
          </SubHeader>
          <SubHeader fontSize={16}>
            <Bold>
              <a style={contactLinkStyle} href={`tel:${phoneNumber}`}>
                {phoneNumberFormatted}
              </a>
            </Bold>
            .{" "}
          </SubHeader>
        </CenterElement>
        <SpaceTable height={55} />

        <CenterElement colWidth={460}>
          <Button
            link={`${website}?cc=book`}
            text="Book Online Today"
            color={color}
          />
        </CenterElement>

        <SpaceTable height={55} />
        {gifImage}

        <SpaceTable height={25} />

        <Sincerely accountName={accountName} />
      </Item>
    </ClinicEmailWrapper>
  );
}
