
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
import { BookButton } from '../components/defaultComponents';


export default function PatientRecall1MonthsBefore(props) {
  const {
    maxWidth,
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            Save the date!
          </ActionHeader>
          <ActionHeader fontSize={20}>
            You're almost due for your next hygiene appointment.
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            You're due for your next hygiene appointment in <Bold>*|WEEKSBEFORE_DUEDATE|* weeks</Bold>.
          </SubHeader>
        </SubHeaderContainer>

        <SubHeaderContainer>
          <SubHeader>
            Please schedule your appointment for anytime after
          </SubHeader>
          <SubHeader>
            <Bold>*|RECALL_DUEDATE|*</Bold> by clicking below.
          </SubHeader>
        </SubHeaderContainer>

        <BookButton color={color} />

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
