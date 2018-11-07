
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
import { BookButton, nameMonthsDue, scheduleAppt } from '../components/defaultComponents';

export default function PatientRecall16MonthsAfter(props) {
  const {
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            Your teeth will thank you.
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          {nameMonthsDue}
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
