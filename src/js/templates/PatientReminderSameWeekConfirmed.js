
import React from 'react';
import { Item } from 'react-html-email';
import {
  Sincerely,
  SubHeaderContainer,
  SubHeader,
  Bold,
  ActionHeader,
  ActionContainer,
  AppointmentDetails,
  SpaceTable,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';

export default function PatientReminder2HoursBeforeUnConfirmed(props) {
  const {
    color,
  } = props;

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
            <Bold>*|PATIENT_FIRSTNAME|*</Bold>, we look forward
          </SubHeader>
          <SubHeader>
            to seeing you soon.
          </SubHeader>
          <SpaceTable height={20} />
        </SubHeaderContainer>

        <AppointmentDetails />

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}