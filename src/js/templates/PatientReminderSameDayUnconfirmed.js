
import React from 'react';
import { Item } from 'react-html-email';
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
import {
  rescheduleAppt, ConfirmButton, reviewApptConfirm,
  rescheduleApptDisclaimer,
} from '../components/defaultComponents';

export default function PatientReminder2DaysBeforeUnConfirmed(props) {
  const {
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*, please confirm your appointment.
          </ActionHeader>
        </ActionContainer>

        <AppointmentDetails />

        <ConfirmButton
          color={color}
        />

        {rescheduleApptDisclaimer}

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}