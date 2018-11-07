import React from "react";
import Button from "../library/Button";
import styles from "./styles.scss";

function selectText(containerid) {
  if (document.selection) {
    // IE
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
}

export default function TopHeader({ devMode, setDevMode }) {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeader_buttons}>
        <Button
          onClick={() => {
            window.getSelection().removeAllRanges();
            return setDevMode();
          }}
          className={styles.button}
        >
          {devMode ? "Show HTML" : "Show Template"}
        </Button>
        {!devMode && (
          <Button
            onClick={() => selectText("templateDisplay")}
            className={styles.button}
          >
            Copy to Clipboard
          </Button>
        )}
      </div>
    </div>
  );
}
