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
  upcomingApptUnConfirmed,
  ConfirmButton
} from "../../components/defaultComponents";

export default function PatientReminder21DaysBeforeUnConfirmed(props) {
  const { color } = props;

  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>Confirm your appointment on</ActionHeader>
          <ActionHeader>*|APPOINTMENT_DATE|*.</ActionHeader>
        </ActionContainer>

        {upcomingApptUnConfirmed}

        <AppointmentDetails />

        <ConfirmButton color={color} />

        {rescheduleAppt}

        <Sincerely />
      </Item>
    </ClinicEmailWrapper>
  );
}
