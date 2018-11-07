import React, { Component } from "react";
import { Box, Item, A } from "react-html-email";

class Copyright extends Component {
  render() {
    const { styleObj, accountName, unSubLink, textColor } = this.props;

    const clinicName = accountName || "*|ACCOUNT_CLINICNAME|*";

    return (
      <Box width="100%" height="40px">
        <Item
          style={Object.assign(
            {
              textAlign: "center",
              color: textColor || "#6c6c6c",
              fontSize: 12,
              textDecoration: "none"
            },
            styleObj
          )}
          className="bottomDefaultText"
          data-mc-edit="copyright"
        >
          Copyright @ 2018 {clinicName} |&nbsp;
          <A
            href={unSubLink || "*|UNSUB|*"}
            style={{ textDecoration: "none", color: textColor || "#6c6c6c" }}
          >
            Unsubscribe
          </A>
        </Item>
      </Box>
    );
  }
}

class CopyrightNoSubscribe extends Component {
  render() {
    const { styleObj, careCru, accountName } = this.props;

    return (
      <Box width="100%">
        <Item
          style={Object.assign(
            {
              textAlign: "center",
              color: "#6c6c6c",
              fontSize: 12,
              textDecoration: "none"
            },
            styleObj
          )}
          className="bottomDefaultText"
          data-mc-edit="copyright"
        >
          {`Copyright @ 2018 ${
            careCru ? "CareCru" : "*|ACCOUNT_CLINICNAME|*"
          } Inc. All Rights Reserved`}
        </Item>
      </Box>
    );
  }
}

export { Copyright, CopyrightNoSubscribe };
