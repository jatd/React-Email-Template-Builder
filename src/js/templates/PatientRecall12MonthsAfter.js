
import React from 'react';
import { Item } from 'react-html-email';
import {
  Button,
  ActionHeader,
  SubHeader,
  Sincerely,
  Bold,
  ActionContainer,
  ButtonContainer,
  SubHeaderContainer,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';
import { monthsDue, scheduleAppt, BookButton } from '../components/defaultComponents';

export default function PatientRecall12MonthsAfter(props) {
  const {
    maxWidth,
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*, it's been
            awhile since your last visit.
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
