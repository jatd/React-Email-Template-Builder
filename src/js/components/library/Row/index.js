import React, { Component } from 'react';

export default class Row extends Component {
  render() {
    return (
      <tr cellPadding={0} cellSpacing={0}>
        {this.props.children}
      </tr>
    );
  }
}
