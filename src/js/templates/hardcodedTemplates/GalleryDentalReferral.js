import React from "react";
import { Item, Image, Box } from "react-html-email";
import {
  ActionHeader,
  Sincerely,
  ActionContainer,
  SubHeader,
  SpaceTable,
  Button,
  CenterElement,
  CenterContainer,
  Bold,
  Row,
  ItemCol
} from "../../components/library/index";
import ClinicEmailWrapper from "../../components/ClinicEmailWrapper/";
import accountInfo from "../../accounts/galleryDental";

export default function GalleryDentalReferral(props) {
  const { color, headerProps, footerProps, website } = accountInfo();

  const textStyle = {
    color: "#808081",
    fontSize: "14px",
    textDecoration: "none",
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "Roboto, sans-serif"
  };

  const headerStyle = {
    textAlign: "center",
    color: "#808081",
    fontWeight: 700,
    fontSize: "16px",
    fontFamily: "Roboto, sans-serif"
  };

  const bgIconImage =
    "https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/8e84335c-b4ee-48d6-849c-81892920eea8.png";

  return (
    <ClinicEmailWrapper
      {...props}
      color={color}
      headerProps={headerProps}
      footerProps={footerProps}
    >
      <Item>
        <CenterElement colWidth={460}>
          <ActionHeader>
            Time's Running Out, Utilize All Your Insurance Benefits!{" "}
          </ActionHeader>

          <SpaceTable height={35} />

          <SubHeader disableTextAlign>
            It's hard to believe, but we will soon be approaching the end of
            2018, and so will your dental benefits! If you have dental
            insurance, your insurer has allowed so many dollars per calendar
            year, and <Bold>unused dollars do not carry-over</Bold>. If you
            participate in a Flexible Spending or Health Savings Account, it's
            even worse - you will forfeit any leftover money in these accounts,
            benefits which you have paid for! We are writing to remind you to
            schedule your cleaning, exam and any other dental procedures as soon
            as possible in order to fully utilize your 2018 insurance benefits.
            Remember, January is just around the corner, and it is the busiest
            time of the year for us, so be sure to call us if you haven't
            already!
          </SubHeader>
          <SpaceTable height={15} />
          <SubHeader disableTextAlign>
            Further, just a quick reminder that if you know of anybody who
            needs/wants to get in to see me, that they make sure to mention your
            name when booking to ensure your ballot entry for a chance to win
            one of the following great prizes!
          </SubHeader>
          <SpaceTable height={35} />
        </CenterElement>

        <Box
          width="100%"
          style={{
            backgroundColor: "#fbfbfb",
            fontFamily: "Roboto, sans serif"
          }}
        >
          <Item>
            <Box width="100%">
              <Item>
                <SpaceTable height={20} />
                <CenterElement colWidth={460}>
                  <Box
                    width={120}
                    align="center"
                    style={{ color: "red !important" }}
                  >
                    <Item align="center">
                      <Image
                        src={bgIconImage}
                        height={30}
                        width={30}
                        alt="Gift Icon"
                      />
                    </Item>
                  </Box>
                </CenterElement>
                <SpaceTable height={10} />
                <CenterElement colWidth={460}>
                  <Box
                    width={120}
                    align="center"
                    style={{ color: "red !important" }}
                  >
                    <Item style={headerStyle}>VISA Gift Cards</Item>
                  </Box>
                </CenterElement>
                <SpaceTable height={10} />
                <CenterElement colWidth={460}>
                  <Box
                    height={120}
                    width={100}
                    align="center"
                    style={textStyle}
                  >
                    <Row>
                      <ItemCol>One</ItemCol>
                      <ItemCol>$2000</ItemCol>
                    </Row>
                    <Row>
                      <ItemCol>Two</ItemCol>
                      <ItemCol>$1500</ItemCol>
                    </Row>
                    <Row>
                      <ItemCol>Three</ItemCol>
                      <ItemCol>$1000</ItemCol>
                    </Row>
                    <Row>
                      <ItemCol>Four</ItemCol>
                      <ItemCol>$500</ItemCol>
                    </Row>
                    <Row>
                      <ItemCol>Six</ItemCol>
                      <ItemCol>$250</ItemCol>
                    </Row>
                  </Box>
                </CenterElement>
                <SpaceTable height={20} />
              </Item>
            </Box>
          </Item>
        </Box>

        <CenterElement colWidth={460}>
          <SpaceTable height={55} />

          <Button
            link={`${website}?cc=book`}
            text="Book Online Today"
            color={color}
          />

          <SpaceTable height={55} />

          <SubHeader disableTextAlign>
            <Bold>
              If you have any questions at all regarding your insurance, we urge
              you to contact us so that we can look into your benefits on your
              behalf!
            </Bold>
          </SubHeader>
          <SpaceTable height={15} />
          <SubHeader disableTextAlign>
            As you all know, we are committed to the prevention of dental
            disease, and regular exams and cleanings are essential in that
            effort. As the end of the year approaches, calendars get busy and
            things get put off. We want you to maximize your benefits and have
            the best dental treatment available. Remember, it is always best to
            catch any problems before they get too large! I look forward to
            seeing you soon, and best wishes for continued good health!
          </SubHeader>
        </CenterElement>

        <Sincerely accountName="Dr. Sekhon" />
      </Item>
    </ClinicEmailWrapper>
  );
}
