import React from "react";
import PropTypes from "prop-types";
import { Box, Item, Span, A } from "react-html-email";
import SpaceTable from "../SpaceTable";
import Bold from "../Bold";
import Row from "../Row";
import ItemCol from "../ItemCol";

export default function AppointmentDetails(props) {
  const { noPadding, moreDetail } = props;

  const headerStyle = {
    textAlign: "center",
    color: "#808081",
    lineHeight: 1.5,
    fontSize: 14,
    textDecoration: "none",
    fontWeight: 600
  };

  const titleStyle = {
    color: "#808081",
    lineHeight: 1.5,
    fontSize: 14,
    textDecoration: "none"
  };

  return (
    <Box width="100%">
      <Item>
        <Box width="100%" style={{ backgroundColor: "#eff0f0" }}>
          <Item>
            <SpaceTable height={20} />
          </Item>
          <Item style={headerStyle} l>
            Appointment Details
          </Item>
          <Item>
            <SpaceTable height={10} />
          </Item>
          <Item style={titleStyle} align="center">
            <Box width="100%" align="center">
              <Row>
                <ItemCol style={{ textAlign: "center" }}>
                  Date: <Bold>*|APPOINTMENT_DATE|*</Bold>
                </ItemCol>
              </Row>
            </Box>
          </Item>
          <Item style={titleStyle}>
            <SpaceTable height={5} />
            <Box align="center">
              <Row>
                <ItemCol style={{ textAlign: "center" }}>
                  Time: <Bold>*|APPOINTMENT_TIME|*</Bold>
                </ItemCol>
              </Row>
            </Box>
          </Item>
          {moreDetail ? (
            <Item style={titleStyle}>
              <SpaceTable height={5} />
              <Box align="center">
                <Row>
                  <ItemCol style={{ textAlign: "center" }}>
                    Address:&nbsp;
                    <Span
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontFamily:
                          "Roboto-regular, Roboto, Gotham-Book, Montserrat, Verdana, Helvetica, Arial, sans-serif"
                      }}
                    >
                      <Bold>*|ACCOUNT_ADDRESS|*</Bold>
                    </Span>
                  </ItemCol>
                </Row>
              </Box>
            </Item>
          ) : null}
          {moreDetail ? (
            <Item style={titleStyle}>
              <SpaceTable height={5} />
              <Box align="center">
                <Row>
                  <ItemCol style={{ textAlign: "center" }}>
                    Phone: <Bold>*|ACCOUNT_PHONENUMBER|*</Bold>
                  </ItemCol>
                </Row>
              </Box>
            </Item>
          ) : null}
          <Item>
            <SpaceTable height={20} />
          </Item>
        </Box>
        {!noPadding ? <SpaceTable height={30} /> : null}
      </Item>
    </Box>
  );
}

AppointmentDetails.propTypes = {
  noPadding: PropTypes.bool,
  moreDetail: PropTypes.bool
};

AppointmentDetails.defaultProps = {
  noPadding: false,
  moreDetail: false
};
