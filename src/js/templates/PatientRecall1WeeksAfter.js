
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

export const templateId = 303349;

export default function PatientRecall1WeeksAfter(props) {
  const {
    maxWidth,
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            Time to schedule your next hygiene visit.
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            Hi *|PATIENT_FIRSTNAME|*, your last cleaning appointment was <Bold>*|MONTHS_LASTAPPT|* months</Bold> ago.
          </SubHeader>
        </SubHeaderContainer>

        <SubHeaderContainer>
          <SubHeader>
            Regular cleaning visits are essential to a lifetime of healthy teeth.
            Please schedule your appointment anytime after
          </SubHeader>
          <SubHeader>
            <Bold>*|RECALL_DUEDATE|*</Bold> and mark it in your calendar!
          </SubHeader>
        </SubHeaderContainer>

        <BookButton color={color} />

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
