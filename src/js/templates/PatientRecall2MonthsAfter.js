
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


export default function PatientRecall2MonthsAfter(props) {
  const {
    maxWidth,
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            Book a time that works for you.
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            <Bold>*|PATIENT_FIRSTNAME|*</Bold>, it looks like your last cleaning appointment was <Bold>*|MONTHS_LASTAPPT|* months</Bold> ago.
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
