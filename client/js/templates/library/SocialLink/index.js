
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Item } from 'react-html-email';
import ItemCol from '../ItemCol';
import Row from '../Row';
import CenterContainer from '../CenterContainer';

export default function SocialLink(props) {
  const { color, children } = props;

  return (
    <Box
      width="35px"
      height="35px"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        width: '35px',
        height: '35px',
      }}
      align="center"
    >
      <Row>
        <ItemCol
          align="center"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            width: '35px',
            height: '35px',
            align: 'center',
          }}
        >
          <CenterContainer>
            <Box align="center">
              <Item
                style={{
                  backgroundColor: color,
                  borderRadius: '20px',
                  width: '33px',
                  height: '33px',
                }}
                className="socialLink"
              >
                <CenterContainer>
                  <Box align="center">
                    <Item>{children}</Item>
                  </Box>
                </CenterContainer>
              </Item>
            </Box>
          </CenterContainer>
        </ItemCol>
      </Row>
    </Box>
  );
}

SocialLink.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
