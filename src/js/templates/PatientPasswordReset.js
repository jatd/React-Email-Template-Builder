
import React from 'react';
import { Item, A } from 'react-html-email';
import {
  ActionHeader,
  Sincerely,
  ActionContainer,
  SubHeaderContainer,
  SubHeader,
  CenterElement,
  Button,
  SpaceTable,
  Bold,
} from '../components/library/index';
import ClinicEmailWrapper from '../components/ClinicEmailWrapper/';

export default function PatientPasswordReset(props) {
  const {
    color,
  } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            Forgot your password?
          </ActionHeader>
          <ActionHeader>
            No problem.
          </ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            We got a request to change the password
            for the user associated with this email.
          </SubHeader>
        </SubHeaderContainer>

        <SubHeaderContainer>
          <SubHeader>
            If you don't want to reset your password, please ignore this email.
            If you didn't request this change, you should contact <Bold>
              <A
                href="mailto:support@carecru.com"
                target="_top"
                style={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: '#808081',
                  fontSize: 14,
                }}
              >
                support@carecru.com
              </A>
            </Bold>.
          </SubHeader>
        </SubHeaderContainer>

        <CenterElement
          colWidth={340}
        >
          <SpaceTable height={40} />
          <Button
            link="*|RESET_URL|*"
            text="Reset Your Password "
            color={color}
          />
          <SpaceTable height={30} />
        </CenterElement>
        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}