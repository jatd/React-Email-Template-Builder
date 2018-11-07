
import React from 'react';
import { Item, A } from 'react-html-email';
import {
  ActionHeader,
  AppointmentDetails,
  Sincerely,
  ActionContainer,
  SubHeader,
  SubHeaderContainer,
  SpaceTable,
  Bold,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';
import { rescheduleAppt, upcomingAppt } from '../components/defaultComponents';

export default function PatientReminder21DaysBeforeConfirmed(props) {
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
            Appointment reminder for *|APPOINTMENT_DATE|*.
          </ActionHeader>
        </ActionContainer>

        {upcomingAppt}

        <AppointmentDetails />

        {rescheduleAppt}

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
