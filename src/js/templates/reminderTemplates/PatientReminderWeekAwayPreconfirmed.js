import React from "react";
import { Item } from "react-html-email";
import {
  ActionHeader,
  AppointmentDetails,
  Sincerely,
  ActionContainer
} from "../../components/library/index";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper/";
import {
  rescheduleAppt,
  ConfirmButton,
  reviewApptPreConfirm
} from "../../components/defaultComponents";

export default function PatientReminder7DaysBeforePreConfirmed(props) {
  const { color } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            *|PATIENT_FIRSTNAME|*, please pre-confirm your upcoming appointment
            for
          </ActionHeader>
          <ActionHeader>*|APPOINTMENT_DATE|*.</ActionHeader>
        </ActionContainer>

        {reviewApptPreConfirm}

        <AppointmentDetails />

        <ConfirmButton color={color} text="Pre-confirm Appointment" />

        {rescheduleAppt}

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
