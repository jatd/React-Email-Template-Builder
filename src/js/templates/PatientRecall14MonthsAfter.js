
import React from 'react';
import { Item } from 'react-html-email';
import {
  Button,
  ActionHeader,
  SubHeader,
  Sincerely,
  Bold,
  ActionContainer,
  SubHeaderContainer,
  ButtonContainer,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';
import { nameMonthsDue, scheduleAppt, BookButton } from '../components/defaultComponents';

export default function PatientRecall14MonthsAfter(props) {
  const {
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            It only takes an hour to
          </ActionHeader>
          <ActionHeader>
            maintain a healthy smile.
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
