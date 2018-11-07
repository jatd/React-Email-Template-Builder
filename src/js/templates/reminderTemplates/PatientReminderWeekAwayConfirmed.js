import React from "react";
import { Item } from "react-html-email";
import {
  ActionHeader,
  AppointmentDetails,
  Sincerely,
  ActionContainer
} from "../../components/library/index";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper/";
import { rescheduleAppt, reviewAppt } from "../../components/defaultComponents";

export default function PatientReminder7DaysBeforeConfirmed(props) {
  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*, this is a friendly reminder about your
            upcoming appointment.
          </ActionHeader>
        </ActionContainer>

        {reviewAppt}

        <AppointmentDetails />

        {rescheduleAppt}

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
