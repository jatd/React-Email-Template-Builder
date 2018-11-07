
import React from 'react';
import { Box, Item, A, Span } from 'react-html-email';
import ItemCol from '../ItemCol';
import Row from '../Row';
import CenterElement from '../CenterElement';
import SpaceTable from '../SpaceTable';
import CenterContainer from "../CenterContainer/index";

const subHeaderStyle = {
  textAlign: 'center',
  color: '#808081',
  fontSize: 11,
  textDecoration: 'none',
};

const linkStyle = {
  display: 'block',
  border: '0px !important',
  textDecoration: 'none',
  color: '#808081',
  target: '_blank',
};

const imgStyle = {
  display: 'block',
  maxWidth: '44px',
  maxHeight: '42px',
};

const emptyStyle = {
  width: '8px',
  height: '8px',
};

const tdSpacing = {
  padding: '0px 0px 0px 10px',
}

const src = 'https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/f0ccf5ea-bb86-4713-87f6-e8e23d294eaf.png';

export default function StarRating(props) {
  return (
    <CenterElement
      colWidth={350}
    >
      <Box align="center" width="100%" >
        <Row>
          <ItemCol style={tdSpacing}>
            <CenterContainer>
              <Box>
                <Row>
                  <ItemCol className="starTable">
                    <a href="*|STARS_URL_1|*" style={linkStyle}>
                      <img border="0" width="100%" style={imgStyle} src={src} alt="" className="star" />
                    </a>
                  </ItemCol>
                  <ItemCol style={emptyStyle}>&nbsp;</ItemCol>
                </Row>
                <Item style={subHeaderStyle}>
                  Bad
                </Item>
              </Box>
            </CenterContainer>
          </ItemCol>


          <ItemCol style={tdSpacing}>
            <CenterContainer>
              <Box>
                <Row>
                  <ItemCol className="starTable">
                    <a href="*|STARS_URL_2|*" style={linkStyle}>
                      <img border="0" width="100%" style={imgStyle} src={src} alt="" className="star"/>
                    </a>
                  </ItemCol>
                  <ItemCol style={emptyStyle}>&nbsp;</ItemCol>
                </Row>
                <Item style={subHeaderStyle}>
                  &nbsp;
                </Item>
              </Box>
            </CenterContainer>

          </ItemCol>


          <ItemCol style={tdSpacing}>
            <CenterContainer>
              <Box >
                <Row>
                  <ItemCol className="starTable">
                    <a href="*|STARS_URL_3|*" style={linkStyle}>
                      <img border="0" width="100%" style={imgStyle} src={src} alt="" className="star"/>
                    </a>
                  </ItemCol>
                  <ItemCol style={emptyStyle}>&nbsp;</ItemCol>
                </Row>
                <Item style={subHeaderStyle}>
                  Ok
                </Item>
              </Box>
            </CenterContainer>
          </ItemCol>


          <ItemCol style={tdSpacing}>
            <CenterContainer>
              <Box >
                <Row>
                  <ItemCol className="starTable">
                    <a href="*|STARS_URL_4|*" style={linkStyle}>
                      <img border="0" width="100%" style={imgStyle} src={src} alt="" className="star" /></a>
                  </ItemCol>
                  <ItemCol style={emptyStyle}>&nbsp;</ItemCol>
                </Row>
                <Item style={subHeaderStyle}>
                  &nbsp;
                </Item>
              </Box>
            </CenterContainer>
          </ItemCol>


          <ItemCol style={tdSpacing}>
            <CenterContainer>
              <Box >
                <Row>
                  <ItemCol className="starTable">
                    <a href="*|STARS_URL_5|*" style={linkStyle}>
                      <img border="0" width="100%" style={imgStyle} src={src} alt="" className="star" /></a>
                  </ItemCol>
                  <ItemCol style={emptyStyle}>&nbsp;</ItemCol>
                </Row>
                <Item style={subHeaderStyle}>
                  Great!
                </Item>
              </Box>
            </CenterContainer>
          </ItemCol>
        </Row>
      </Box>
    </CenterElement>
  )
}

