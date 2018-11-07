
import React from 'react';
import { Item } from 'react-html-email';
import ReactDOMServer from 'react-dom/server';
import {
  ActionHeader,
  AppointmentDetails,
  Sincerely,
  ActionContainer,
  SubHeaderContainer,
  SubHeader,
  SpaceTable
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';

const RequestForSelf = () => (
  <ActionHeader>
    your appointment has been requested.
  </ActionHeader>
);

const RequestForSomeone = () => (
  <ActionHeader>
    the appointment for *|PATIENT_REQUEST_FOR|* has been requested.
  </ActionHeader>
);

export default function PatientAppointmentRequested(props) {
  const {
    devMode,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            Hi *|PATIENT_FIRSTNAME|*,
          </ActionHeader>
          {!devMode ? `*|IF:PATIENT_REQUEST_FOR|* ${ReactDOMServer.renderToStaticMarkup(
            (<RequestForSomeone />))}*|ELSE:|* ${ReactDOMServer.renderToStaticMarkup(
            (<RequestForSelf />))}
          *|END:IF|*`
            : <RequestForSelf />}
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            We will be in touch shortly. Please wait for our confirmation.
          </SubHeader>
          <SpaceTable heigth={20} />
        </SubHeaderContainer>

        <AppointmentDetails noPadding moreDetail />

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}