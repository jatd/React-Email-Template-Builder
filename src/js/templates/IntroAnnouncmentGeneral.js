import React from 'react';
import { Item, Image, Span } from 'react-html-email';
import {
  ActionHeader,
  Sincerely,
  ActionContainer,
  SubHeaderContainer,
  SubHeader,
  SpaceTable,
  IconWithDescription,
  Button,
  ButtonContainer,
  CenterContainer,
  CenterElement,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';

export default function IntroAnnouncementGeneral(props) {
  const { color } = props;

  const gifImage = (
    <CenterContainer>
      <Image
        alt="Clinic Website Gif"
        src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/ddea6a80-9f0f-4f71-9910-01775336bb1c.gif"
        height={180}
      />
    </CenterContainer>
  );

  const twilioLinkStyle = {
    textAlign: 'center',
    color: '#808081',
    fontSize: 14,
    fontFamily: 'Roboto, sans-serif, Arial',
  };

  const twilioSubHeader = (
    <SubHeader disableTextAlign>
      Have a question or need some information? Simply text us at{' '}
      <a style={twilioLinkStyle} href={'tel:*|ACCOUNT_TWILIONUMBER|*'}>
        *|ACCOUNT_TWILIONUMBER_FORMATTED|*{' '}
      </a>
      and we'll be sure to message you right back during business hours.
    </SubHeader>
  );

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>Exciting New Updates</ActionHeader>
          <ActionHeader>Including Online Booking!</ActionHeader>
        </ActionContainer>

        <CenterElement colWidth={460}>
          <SubHeader disableTextAlign>Dear *|PATIENT_FIRSTNAME|*,</SubHeader>
          <SpaceTable height={10} />
          <SubHeader disableTextAlign>
            As of today, we are proud to announce that we have partnered with CareCru to deliver a
            faster, more convenient experience for you. A few of the updates we have added include:
          </SubHeader>
          <SpaceTable height={25} />
          <IconWithDescription
            alt="calendar"
            iconSrc="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/41c7f961-556a-41e5-9bbf-930d4a71df4f.png"
            headerText="ONLINE SCHEDULING"
            subHeaderText={`You can now schedule online through our website from anywhere at anytime, including weekends,
            holidays, and after office hours.`}
          />
          <SpaceTable height={25} />

          <IconWithDescription
            iconWidth={20}
            iconHeight={35}
            paddingLeft={4}
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
