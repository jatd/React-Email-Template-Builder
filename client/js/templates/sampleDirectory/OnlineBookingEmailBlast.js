import React from "react";
import { Item } from "react-html-email";
import {
  ActionHeader,
  Sincerely,
  SubHeader,
  SpaceTable,
  IconWithDescription,
  Button,
  CenterElement,
  CenterContainer
} from "../library";
import ClinicEmailWrapper from "../../wrappers/ClinicEmailWrapper";
import accountInfo from "../../accounts/defaultAccount";

const injectCSS = `
  .bookingWidgetGif {
    height: 300px;
    width: 600px;
    max-width: 600px;
  }

  @media only screen and (max-width: 480px) { 
    .bookingWidgetGif {
      height: 300px;
      width: 480px;    
    }
  }

  @media only screen and (max-width: 320px) { 
    .bookingWidgetGif {
      height: 300px;
      width: 320px;   
    }
  }
`;

export default function OnlineBookingEmailBlast(props) {
  const { color } = props;
  const {
    headerProps: { logoUrl }
  } = accountInfo();

  const gifImage = (
    <CenterContainer>
      <img
        alt="Booking Widget"
        src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/85a8d445-60b6-436f-b818-2a92e55e3117.gif"
        className="bookingWidgetGif"
      />
    </CenterContainer>
  );

  const headerProps = {
    logoUrl,
    imageHeight: 70
  };

  const twilioLinkStyle = {
    textAlign: "center",
    color: "#808081",
    lineHeight: 1.5,
    fontSize: 14,
    fontFamily: "Roboto, sans-serif,"
  };

  const twilioSubHeader = (
    <SubHeader disableTextAlign>
      Have a question or need some information? Simply text us at{" "}
      <a style={twilioLinkStyle} href={"tel:*|ACCOUNT_TWILIONUMBER|*"}>
        *|ACCOUNT_TWILIONUMBER_FORMATTED|*{" "}
      </a>
      and we'll be sure to message you right back during business hours.
    </SubHeader>
  );

  const actionHeaderStyle = {};

  return (
    <ClinicEmailWrapper
      {...props}
      headerProps={headerProps}
      injectCSS={injectCSS}
    >
      <Item>
        <CenterElement colWidth={460}>
          <CenterContainer>
            <ActionHeader classStyle={actionHeaderStyle}>
              Exciting New Updates
            </ActionHeader>
            <ActionHeader classStyle={actionHeaderStyle}>
              Including Online Booking!
            </ActionHeader>
            <SpaceTable height={35} />

            <IconWithDescription
              alt="calendar"
              iconSrc="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/41c7f961-556a-41e5-9bbf-930d4a71df4f.png"
              headerText="ONLINE SCHEDULING"
              subHeaderText={`You can now schedule online through our website from anywhere at anytime, including weekends,
            holidays, and after office hours.`}
            />
            <SpaceTable height={25} />

            <IconWithDescription
              alt="phone"
              iconSrc="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/a1fcd67d-4492-435e-9147-e794a2453964.png"
              headerText="SCHEDULE FROM ANY DEVICE"
              subHeaderText={`On the road? Not to worry! You can schedule on the go from your mobile device, tablet,
            or desktop computer.`}
            />
            <SpaceTable height={25} />

            <IconWithDescription
              alt="textmessage"
              iconSrc="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/b49f4303-7bd8-4ffc-96cf-ab113e84fd8c.png"
              headerText="TEXT MESSAGE SUPPORT"
              subHeaderText={twilioSubHeader}
            />
            <SpaceTable height={25} />

            <IconWithDescription
              alt="list"
              iconSrc="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/d1c532ed-a319-451e-be9d-b5a80ed64b77.png"
              headerText="JOIN THE ONLINE WAITLIST"
              subHeaderText={`If you don't see an appointment that fits your schedule, simply join our waitlist. When you
            join the waitlist, we will notify you as soon as an appointment becomes available.`}
            />
          </CenterContainer>
        </CenterElement>

        <SpaceTable height={55} />

        <CenterElement colWidth={390}>
          <Button link="*|BOOK_URL|*" text="Book Online Today" color={color} />
        </CenterElement>

        <SpaceTable height={55} />
        {gifImage}

        <SpaceTable height={25} />
        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
