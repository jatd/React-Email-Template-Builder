import React, { Component } from 'react';
import { Box, Item, Span } from 'react-html-email';

export default class TextField extends Component {
  render() {
    const {
      tableStyle,
      fontStyle,
      columnStyle,
      text,
      className
    } = this.props;

    return (
      <Box width="100%" height="100%" style={tableStyle} >
        <Item
          style={Object.assign({
            textAlign: 'center',
            color: '#6c6c6c',
            fontSize: 16,
          },
            columnStyle,
          )}
          className={className}
        >
          {text}
        </Item>
      </Box>
    );
  }
}
