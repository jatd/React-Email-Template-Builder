import React, { Component } from 'react';
import { Box, Item } from 'react-html-email';
import ItemCol from '../ItemCol/index';
import Row from '../Row/index';


export default class SpaceTable extends Component {
  render() {
    const {
      height,
    } = this.props;

    return (
      <Box width="100%" height={`${height}px`}  cellSpacing={0} cellPadding={0} >
        <Row>
          <ItemCol height={height} style={{ lineHeight: `${height}px` }}>
            &nbsp;&nbsp;
          </ItemCol>
        </Row>
      </Box>
    );
  }
}
