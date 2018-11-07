
import React from 'react';
import { A, Item, Box, Image, Span } from 'react-html-email';
import ReactDOMServer from 'react-dom/server';
import {
  SpaceTable,
  ItemCol,
  Address,
  Row,
  SocialLink,
  Copyright,
  CenterContainer,
  CopyrightNoSubscribe,
} from '../../library';

export default function Footer(props) {
  const {
    color,
    devMode,
  } = props;

  const linkStyle = {
    color: '#6c6c6c',
    textAlign: 'center',
    fontSize: '12px',
    textDecoration: 'none',
  };

  const defaultStyle = {
    color: '#6c6c6c',
    textAlign: 'center',
    fontSize: '12px',
    textDecoration: 'none',
  };

  const link1 = 'https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/562160ca-b12c-4dd3-85e3-2b4554b55f74.png';

  return (
      <Row>
        <ItemCol bgcolor="#313131" style={{ backgroundColor: '#313131', height: '100%'}}>
        <SpaceTable
          height={30}
        />

        <CenterContainer>
          <Image
            alt="Clinic Logo"
            width="auto"
            src={link1}
            height={20}
          />
        </CenterContainer>

        <SpaceTable
          height={30}
        />

        <Address>
          <A
            href="#"
            style={defaultStyle}
            className="bottomDefaultText"
          >
          8th Floor - 543 Granville St
          </A>
        </Address>


        <Address>
          <A
            href="#"
            style={defaultStyle}
            className="bottomDefaultText"
          >
          Vancouver, BC
          </A>
        </Address>

        <SpaceTable
          height={20}
        />

        <Address>
          <A
            href="#"
            style={defaultStyle}
            className="bottomDefaultText"
          >
            1 888 870 0077
          </A>
        </Address>


        <Address>
          <A
            href="mailto:support@carecru.com"
            style={linkStyle}
            className="bottomDefaultText"
          >
            support@carecru.com
          </A>
        </Address>

        <SpaceTable
          height={40}
        />

        <CopyrightNoSubscribe careCru />

        <SpaceTable
          height={20}
        />
        </ItemCol>
      </Row>
  );
}
