import React, { Component } from 'react';

export default class ItemCol extends Component {
  render() {
    return (
      <td {...this.props} cellPadding={0} cellSpacing={0}>
        {this.props.children}
      </td>
    );
  }
}
