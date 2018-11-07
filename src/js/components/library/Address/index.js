import React, { Component } from 'react';
import { Box, Item } from 'react-html-email';
import ItemCol from '../ItemCol';
import Row from '../Row';
import CenterContainer  from '../CenterContainer';

export default class Address extends Component {
  render() {
    const {
      children
    } = this.props;

    const style = {
      color: '#6c6c6c',
      textAlign: 'center',
      fontSize: '12px',
      textDecoration: 'none',
    };

    return (
      <CenterContainer>
        <Box width="100%" align="center" style={style}>
          <Item
            style={style}
            className="bottomDefaultText"
            data-mc-edit={`address_${Math.random()}`}
          >
            {children}
          </Item>
        </Box>
      </CenterContainer>
    );
  }
}
