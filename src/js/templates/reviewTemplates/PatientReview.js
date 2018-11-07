import React from "react";
import { Item } from "react-html-email";
import {
  ActionHeader,
  ActionContainer,
  SubHeaderContainer,
  SubHeader,
  SpaceTable,
  StarRating
} from "../../components/library/index";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper/";

export default function PatientReview(props) {
  return (
    <ClinicEmailWrapper {...props}>
      <Item>
        <ActionContainer>
          <ActionHeader>We hope you had a</ActionHeader>
          <ActionHeader>lovely visit!</ActionHeader>
        </ActionContainer>

        <SubHeaderContainer>
          <SubHeader>Let us know how it went.</SubHeader>
        </SubHeaderContainer>

        <SpaceTable height={40} />

        <StarRating />

        <SpaceTable height={100} />
      </Item>
    </ClinicEmailWrapper>
  );
}
