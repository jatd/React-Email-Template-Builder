
import React from 'react';
import { Item } from 'react-html-email';
import {
  Button,
  ActionHeader,
  SubHeader,
  Sincerely,
  Bold,
  ButtonContainer,
  ActionContainer,
  SubHeaderContainer,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';
import { BookButton } from '../components/defaultComponents';

export const templateId = 303345;

export default function PatientRecall1WeeksBefore(props) {
  const {
    maxWidth,
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*, you're due for your next hygiene visit.
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            You're due for your next appointment in <Bold>*|WEEKSBEFORE_DUEDATE|* week</Bold>.
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
