
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
import { BookButton } from '../components/defaultComponents';

export default function PatientRecall1MonthsAfter(props) {
  const {
    maxWidth,
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props} >
      <Item>
        <ActionContainer>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*, you're past due
            for your hygiene visit.
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            It looks like your last cleaning appointment was <Bold>*|MONTHS_LASTAPPT|* months</Bold> ago.
          </SubHeader>
        </SubHeaderContainer>

        <SubHeaderContainer>
          <SubHeader>
            Regular cleaning visits are essential to a lifetime of healthy teeth.
            Please schedule your appointment by clicking the link below.
          </SubHeader>
        </SubHeaderContainer>

        <BookButton color={color} />

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
