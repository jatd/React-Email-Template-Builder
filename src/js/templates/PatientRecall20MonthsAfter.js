
import React from 'react';
import { Item } from 'react-html-email';
import {
  ActionHeader,
  Sincerely,
  ActionContainer,
  ButtonContainer,
  SubHeaderContainer,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';
import { BookButton, monthsDue, scheduleAppt } from '../components/defaultComponents';

export default function PatientRecall20MonthsAfter(props) {
  const {
    maxWidth,
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*, we'd love to see you again.
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          {monthsDue}
        </SubHeaderContainer>

        <SubHeaderContainer>
          {scheduleAppt}
        </SubHeaderContainer>

        <BookButton color={color} />

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
