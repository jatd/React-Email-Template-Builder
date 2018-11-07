import React, { Component } from 'react';
import { Box, Item } from 'react-html-email';
import ItemCol from '../ItemCol';

export default class ColumnGenerator extends Component {
  render() {
    const {
      height,
      columns,
    } = this.props;

    return (
      <Box width="100%" height={height}>
        <tr>
        {columns.map((column) => {
          return column.cell ? (
            <ItemCol width={column.width} className={column.className} >
              {column.cell()}
            </ItemCol>
          ) : (
            <ItemCol width={column.width} >
              &nbsp;
            </ItemCol>
          );
        })}
        </tr>
      </Box>
    );
  }
}
