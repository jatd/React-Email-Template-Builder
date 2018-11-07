
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
import { BookButton, monthsDue, scheduleAppt } from '../components/defaultComponents';

export default function PatientRecall22MonthsAfter(props) {
  const {
    maxWidth,
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            We haven't heard from you.
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
