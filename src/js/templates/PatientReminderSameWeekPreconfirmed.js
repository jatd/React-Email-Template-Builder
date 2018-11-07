
import React from 'react';
import { Item, A } from 'react-html-email';
import {
  ActionHeader,
  AppointmentDetails,
  Sincerely,
  ActionContainer,
  SubHeader,
  SubHeaderContainer,
  Bold,
  SpaceTable,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';
import { rescheduleAppt, ConfirmButton } from '../components/defaultComponents';

export default function PatientReminder2HoursBeforePreConfirmed(props) {
  const {
    color,
  } = props;

  const linkStyle = {
    textDecoration: 'none',
    color: '#000000',
    cursor: 'default',
  };

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            We'll see you soon!
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            <Bold>*|PATIENT_FIRSTNAME|*</Bold>, please pre-confirm
          </SubHeader>
          <SubHeader>
            your appointment below.
          </SubHeader>
          <SpaceTable height={20} />
        </SubHeaderContainer>

        <AppointmentDetails />

        <SubHeaderContainer>
          <SubHeader>
            Please click the button below to pre-confirm your appointment or call <A href="#" style={linkStyle} className="linkTextBold" ><Bold>*|ACCOUNT_PHONENUMBER|*</Bold></A> to reschedule. Please note,
            there may be a fee for cancellations or reschedules within 2 business days of an appointment.
          </SubHeader>
        </SubHeaderContainer>

        <SpaceTable height={20} />

        <ConfirmButton
          color={color}
          text="Pre-confirm Appointment"
        />

        <SubHeaderContainer>
          <SubHeader>
            We look forward to seeing you.
          </SubHeader>
        </SubHeaderContainer>

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}