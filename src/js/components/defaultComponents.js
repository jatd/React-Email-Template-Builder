
import React from 'react';
import { A } from 'react-html-email';
import {
  Bold,
  SubHeader,
  Button,
  SubHeaderContainer,
  SpaceTable,
  CenterElement,
  ButtonContainer,
} from './library';

/**
 * Recall Components
 */
export const monthsDue = (<SubHeader> This is a friendly reminder that you're <Bold>*|MONTHS_PASTDUE|* months</Bold> past due for your appointment.
  We've made it really easy to find the perfect time for your visit.</SubHeader>);

export const nameMonthsDue = (
  <SubHeader>
    <Bold>*|PATIENT_FIRSTNAME|*</Bold>, this is a friendly reminder that you're <Bold>*|MONTHS_PASTDUE|* months</Bold> past due for your appointment.
  </SubHeader>
);

export const scheduleAppt = (
  <SubHeader>
    Please schedule your appointment by clicking the link below and we look forward to seeing you soon!
  </SubHeader>
);


/**
 * Reminder Components
 */
const linkStyle = {
  textDecoration: 'none',
  color: '#000000',
};

export const reviewAppt = (
  <SubHeaderContainer>
    <SubHeader>
      Please take a moment to review your appointment below.
    </SubHeader>
    <SpaceTable height={20} />
  </SubHeaderContainer>
);

export const reviewApptConfirm = (
  <SubHeaderContainer>
    <SubHeader>
      Please take a moment to review and confirm your appointment below.
    </SubHeader>
    <SpaceTable height={20} />
  </SubHeaderContainer>
);

export const reviewApptPreConfirm = (
  <SubHeaderContainer>
    <SubHeader>
      Please take a moment to review and pre-confirm your appointment below.
    </SubHeader>
    <SpaceTable height={20} />
  </SubHeaderContainer>
);

export const rescheduleAppt = (
  <SubHeaderContainer>
    <SubHeader>
      If you need to reschedule your appointment, please call <A href="#" style={linkStyle} className="linkTextBold"><Bold>*|ACCOUNT_PHONENUMBER|*</Bold></A>. Please note,
      there may be a fee for cancellations or reschedules within 2 business days of an appointment.
    </SubHeader>
    <SpaceTable height={10} />
    <SubHeader>
      We look forward to seeing you.
    </SubHeader>
  </SubHeaderContainer>
);

export const rescheduleApptDisclaimer = (
  <SubHeaderContainer>
    <SubHeader>
      If you need to reschedule your appointment, please call <Bold>*|ACCOUNT_PHONENUMBER|*</Bold>. Please note,
      there may be a fee for cancellations or reschedules within 2 business days of an appointment.
    </SubHeader>
    <SpaceTable height={10} />
    <SubHeader>
      We look forward to seeing you.
    </SubHeader>
  </SubHeaderContainer>
);

export const upcomingAppt = (
  <SubHeaderContainer>
    <SubHeader>
      <Bold>*|PATIENT_FIRSTNAME|*</Bold>, this is a friendly reminder that you have an upcoming dental appointment with us.
    </SubHeader>
    <SpaceTable height={20} />
  </SubHeaderContainer>
);

export const upcomingApptUnConfirmed = (
  <SubHeaderContainer>
    <SubHeader>
      <Bold>*|PATIENT_FIRSTNAME|*</Bold>, this is a friendly reminder that you have an upcoming dental appointment with us.
    </SubHeader>
    <SpaceTable height={20} />
  </SubHeaderContainer>
);

export const ConfirmButton = ({ color, text }) => {
  return (
    <CenterElement
      colWidth={360}
    >
      <SpaceTable height={20} />
      <Button
        link="*|CONFIRMATION_URL|*"
        text={ text || 'Confirm Appointment' }
        color={color}
      />
      <SpaceTable height={50} />
    </CenterElement>
  );
};

export const BookButton = ({ color }) => {
  return (
    <ButtonContainer width={360}>
      <Button
        link="*|BOOK_URL|*"
        text="Book Appointment"
        color={color}
      />
    </ButtonContainer>
  );
};

