import React from "react";
import { Item } from "react-html-email";
import {
  ActionHeader,
  Sincerely,
  ActionContainer,
  SubHeader,
  SpaceTable,
  Button,
  CenterElement,
  Bold
} from "../../components/library/index";
import accountInfo from "../../accounts/cosmeticDentistryDenver";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper/";

export default function CosmeticDentistryYearEndNewsletter(props) {
  const { color, headerProps, footerProps, website } = accountInfo();
  const contactLinkStyle = {
    textAlign: "center",
    color: "#000000",
    lineHeight: 1.5,
    fontSize: 14,
    fontFamily: "Roboto, sans-serif, Arial"
  };

  const contactSubHeader = (
    <SubHeader disableTextAlign>
      <Bold>
        Beat the end of year rush and get in early! Give us a call at{" "}
        <a style={contactLinkStyle} href={"tel:+13032981414"}>
          (303) 298-1414
        </a>{" "}
        to schedule your appointment or book online by clicking on the button
        below.
      </Bold>
    </SubHeader>
  );

  return (
    <ClinicEmailWrapper
      {...props}
      color={color}
      headerProps={headerProps}
      footerProps={footerProps}
    >
      <Item>
        <ActionContainer>
          <ActionHeader>
            Time's Running Out, Utilize All Your Insurance Benefits!{" "}
          </ActionHeader>
        </ActionContainer>

        <CenterElement colWidth={460}>
          <SubHeader disableTextAlign>
            It's that time of year again, when you are busy with school
            schedules, getting ready for cooler weather, and making upcoming
            holiday plans. During this hectic time, you may not be thinking
            about your available or unused dental insurance benefits.
          </SubHeader>
          <SpaceTable height={15} />
          <SubHeader disableTextAlign>
            Whether you have insurance benefits remaining or if you have funds
            set aside in a flexible spending account (FSA) or healthcare saving
            account (HSA), now is the time to schedule treatment so your
            co-payment amounts can be applied to this year's deductions.
          </SubHeader>
          <SpaceTable height={15} />
          <SubHeader disableTextAlign>
            {" "}
            Almost all plans do not allow you to rollover unused dollars to the
            next benefit year, so it's "Use 'Em or Lose 'Em!"{" "}
          </SubHeader>
          <SpaceTable height={15} />
          {contactSubHeader}
          <SpaceTable height={40} />
        </CenterElement>

        <CenterElement colWidth={460}>
          <Button
            link={`${website}?cc=book`}
            text="Book Online Today"
            color={color}
          />
        </CenterElement>

        <Sincerely accountName="Dr. Radz and the team at Cosmetic Dentistry of Colorado" />
      </Item>
    </ClinicEmailWrapper>
  );
}
