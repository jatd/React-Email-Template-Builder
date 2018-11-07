import React, { Component } from "react";
import { Box, Item, A } from "react-html-email";
import CenterElement from "../CenterElement";
import SpaceTable from "../SpaceTable";

class Sincerely extends Component {
  render() {
    const { classStyle = {}, accountName } = this.props;

    const style = Object.assign(
      {},
      {
        color: "#6c6c6c",
        fontSize: 14,
        textAlign: "left",
        lineHeight: 1.5,
        msoLineHeightRule: "exactly"
      },
      classStyle
    );

    return (
      <CenterElement colWidth={460}>
        <SpaceTable height={40} />
        <Box width="100%" height="100%">
          <Item style={style} className="subHeader" data-mc-edit="sincerely">
            Sincerely,
          </Item>
          <Item
            style={style}
            className="subHeader"
            data-mc-edit="sincerely_name"
          >
            {accountName || "*|ACCOUNT_CLINICNAME|*"}
          </Item>
        </Box>
        <SpaceTable height={50} />
      </CenterElement>
    );
  }
}

class SincerelyCareCru extends Component {
  render() {
    const { styleObj } = this.props;

    const style = Object.assign(
      {
        color: "#6c6c6c",
        fontSize: 14,
        textAlign: "left"
      },
      styleObj
    );

    return (
      <CenterElement colWidth={400}>
        <Box width="100%" height="100%">
          <Item style={style} className="subHeader" data-mc-edit="sincerely">
            Sincerely,
          </Item>
          <Item
            style={style}
            className="subHeader"
            data-mc-edit="sincerely_name"
          >
            CareCru
          </Item>
        </Box>
        <SpaceTable height={40} />
      </CenterElement>
    );
  }
}

export { SincerelyCareCru, Sincerely };
