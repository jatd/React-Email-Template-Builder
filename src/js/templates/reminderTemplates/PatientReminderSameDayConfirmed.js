import React from "react";
import { Item } from "react-html-email";
import {
  ActionHeader,
  AppointmentDetails,
  Sincerely,
  ActionContainer,
  SubHeaderContainer,
  SubHeader,
  SpaceTable
} from "../../components/library/index";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper/";

export default function PatientReminder2DaysBeforeConfirmed(props) {
  const { color } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*, your appointment is coming up on
          </ActionHeader>
          <ActionHeader>*|APPOINTMENT_DATE|*.</ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>
            This is a friendly reminder that you have an upcoming appointment
            this week.
          </SubHeader>
          <SpaceTable height={20} />
        </SubHeaderContainer>

        <AppointmentDetails />

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
