import React from "react";
import { Item, A } from "react-html-email";
import {
  ActionHeader,
  AppointmentDetails,
  Sincerely,
  ActionContainer
} from "../../components/library/index";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper/";
import {
  rescheduleAppt,
  upcomingAppt
} from "../../components/defaultComponents";

export default function PatientReminder21DaysBeforeConfirmed(props) {
  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>
            Appointment reminder for *|APPOINTMENT_DATE|*.
          </ActionHeader>
        </ActionContainer>

        {upcomingAppt}

        <AppointmentDetails />

        {rescheduleAppt}

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
