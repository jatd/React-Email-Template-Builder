
import React from 'react';
import { Item } from 'react-html-email';
import {
  ActionHeader,
  Sincerely,
  ActionContainer,
  SubHeaderContainer,
  SubHeader,
  CenterElement,
  Button,
  SpaceTable,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';

export default function PatientEmailConfirmation(props) {
  const {
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            You're Almost There,
          </ActionHeader>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            Click on the button below to confirm your email, and we'll email you with appointment reminders to help keep you organized. Let's make your dental appointments easy!
          </SubHeader>
        </SubHeaderContainer>

        <CenterElement
          colWidth={300}
        >
          <SpaceTable height={40} />
          <Button
            link="*|EMAIL_CONFIRMATION_URL|*"
            text="Confirm Your Email"
            color={color}
          />
          <SpaceTable height={30} />
        </CenterElement>
        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}