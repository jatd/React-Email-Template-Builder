import React, { Component } from 'react';
import { Box, Item } from 'react-html-email';

export default class SpaceTable extends Component {
  render() {
    const {
      height,
      color,
    } = this.props;

    return (
      <Box width="100%" height={height}>
        <Item style={{ backgroundColor: `${color}` }}>
          &nbsp;
        </Item>
      </Box>
    );
  }
}
