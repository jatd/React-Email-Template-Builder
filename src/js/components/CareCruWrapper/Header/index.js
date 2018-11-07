
import React from 'react';
import { Item, Image } from 'react-html-email';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import {
  SpaceTable,
  CircleImage,
  CenterContainer,
} from '../../library';

export default function Header(props) {
  const {
    maxWidth,
    devMode,
  } = props;

  const link1 = 'https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/b46b23df-6cab-47af-91f5-ee8cb4fc2628.png';
  const link2 = 'https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/c63ff7bd-a918-49e6-9b48-9db9874de822.png';

  return (
    <Item>
      <SpaceTable
        height={40}
      />

      <CenterContainer>
        <Image
          alt="Clinic Logo"
          src="https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/9b64d586-4a78-4762-8ea0-821a8bbd02ed.png"
          width="auto"
          height={28}
        />
      </CenterContainer>

      <SpaceTable
        height={50}
      />
    </Item>
  );
}
