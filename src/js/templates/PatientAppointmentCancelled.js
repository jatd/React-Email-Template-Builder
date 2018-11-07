import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Item } from 'react-html-email';
import {
  ActionHeader,
  AppointmentDetails,
  Sincerely,
  ActionContainer,
  SubHeaderContainer,
  SubHeader,
  Bold,
  CenterElement,
  Button,
  SpaceTable,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';

const RequestForSelf = () => (
  <SubHeaderContainer>
    <SubHeader>
      Hi *|PATIENT_FIRSTNAME|*, our apologies but we could not book your appointment for{' '}
      <Bold>*|APPOINTMENT_DATE|*</Bold> at <Bold>*|APPOINTMENT_TIME|*</Bold>.
    </SubHeader>
    <SpaceTable height={20} />
    <SubHeader>You can reschedule your appointment below at your convenience.</SubHeader>
  </SubHeaderContainer>
);

const RequestForSomeone = () => (
  <SubHeaderContainer>
    <SubHeader>
      Hi *|PATIENT_FIRSTNAME|*, our apologies but we could not book the appointment for
      *|PATIENT_REQUEST_FOR|* on <Bold>*|APPOINTMENT_DATE|*</Bold> at{' '}
      <Bold>*|APPOINTMENT_TIME|*</Bold>.
    </SubHeader>
    <SpaceTable height={20} />
    <SubHeader>You can reschedule the appointment below at your convenience.</SubHeader>
  </SubHeaderContainer>
);

export default function PatientAppointmentCancelled(props) {
  const { color, devMode } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>Appointment Request Cancelled</ActionHeader>
        </ActionContainer>

        {!devMode ? (
          `*|IF:PATIENT_REQUEST_FOR|* ${ReactDOMServer.renderToStaticMarkup(
            <RequestForSomeone />
          )}*|ELSE:|* ${ReactDOMServer.renderToStaticMarkup(<RequestForSelf />)}
          *|END:IF|*`
        ) : (
          <RequestForSomeone />
        )}

        <CenterElement colWidth={300}>
          <SpaceTable height={40} />
          <Button link="*|ACCOUNT_WEBSITE|*" text="Reschedule" color={color} />
          <SpaceTable height={30} />
        </CenterElement>

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
