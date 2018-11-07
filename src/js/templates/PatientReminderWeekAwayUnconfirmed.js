
import React from 'react';
import { Item } from 'react-html-email';
import {
  ActionHeader,
  AppointmentDetails,
  Sincerely,
  ActionContainer,
  ButtonContainer,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';
import {rescheduleAppt, ConfirmButton, reviewApptConfirm } from '../components/defaultComponents';

export default function PatientReminder7DaysBeforeUnConfirmed(props) {
  const {
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*, please confirm
             your upcoming appointment for
          </ActionHeader>
          <ActionHeader>
            *|APPOINTMENT_DATE|*.
          </ActionHeader>
        </ActionContainer>

        {reviewApptConfirm}

        <AppointmentDetails />

        <ConfirmButton
          color={color}
        />

        {rescheduleAppt}

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}