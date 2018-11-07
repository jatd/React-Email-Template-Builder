
import React from 'react';
import { Item, A } from 'react-html-email';
import {
  ActionHeader,
  AppointmentDetails,
  SincerelyCareCru,
  ActionContainer,
  SubHeaderContainer,
  SubHeader,
  SpaceTable,
  Bold,
} from '../components/library/index';
import CareCruWrapper from '../components/CareCruWrapper/index';

export default function UserAppointmentRequested(props) {
  const linkStyle = {
    textDecoration: 'none',
    color: '#FF715A',
    cursor: 'pointer',
  };

  return (
    <CareCruWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            Appointment Requested
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            *|PATIENT_FIRSTNAME|* *|PATIENT_LASTNAME|* has requested an appointment at *|ACCOUNT_CLINICNAME|*.
            Please take a minute to review the details.
          </SubHeader>
          <SpaceTable height={20} />
        </SubHeaderContainer>

        <AppointmentDetails />

        <SubHeaderContainer>
          <SubHeader>
            Did you know you can confirm or reject the appointment from our dashboard?
            Click <A href="*|ACCOUNT_WEBSITE|*" style={linkStyle} className="linkStyleCareCru" >here</A> to confirm/reject this appointment.
          </SubHeader>
        </SubHeaderContainer>

        <SpaceTable height={20} />

        <SincerelyCareCru careCru />
      </Item>
    </CareCruWrapper>
  );
}