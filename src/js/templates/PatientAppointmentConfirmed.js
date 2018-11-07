
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
  Bold,
  SpaceTable,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';

const RequestForSelf = () => (
  <SubHeaderContainer>
    <SubHeader>
      Hi *|PATIENT_FIRSTNAME|*, this message is to let you know that your appointment has been confirmed.
    </SubHeader>
    <SpaceTable height={20} />
  </SubHeaderContainer>
);

const RequestForSomeone = () => (
  <SubHeaderContainer>
    <SubHeader>
      Hi *|PATIENT_FIRSTNAME|*, this message is to let you know that the appointment for *|PATIENT_REQUEST_FOR|* has been confirmed.
    </SubHeader>
    <SpaceTable height={20} />
  </SubHeaderContainer>
);

const FooterForSelf = () => (
  <SubHeaderContainer>
    <SubHeader>
      We look forward to seeing you.
    </SubHeader>
  </SubHeaderContainer>
);

const FooterForSomeone = () => (
  <SubHeaderContainer>
    <SubHeader>
      We look forward to seeing *|PATIENT_REQUEST_FOR|*.
    </SubHeader>
  </SubHeaderContainer>
);

export default function PatientAppointmentConfirmed(props) {
  const {
    devMode,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            Appointment Confirmed
          </ActionHeader>
        </ActionContainer>

        {!devMode ? `*|IF:PATIENT_REQUEST_FOR|* ${ReactDOMServer.renderToStaticMarkup(
          (<RequestForSomeone />))}*|ELSE:|* ${ReactDOMServer.renderToStaticMarkup(
          (<RequestForSelf />))}
          *|END:IF|*`
        : <RequestForSelf /> }

        <AppointmentDetails />

        {!devMode ? `*|IF:PATIENT_REQUEST_FOR|* ${ReactDOMServer.renderToStaticMarkup(
          (<FooterForSomeone />))}*|ELSE:|* ${ReactDOMServer.renderToStaticMarkup(
          (<FooterForSelf />))}
          *|END:IF|*`
          : <FooterForSelf /> }

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
