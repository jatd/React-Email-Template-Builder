import React from "react";
import { connect } from "react-redux";
import styles from "./styles.scss";

function TemplateList(props) {
  const {
    templateNames,
    selectedTemplate,
    selectTemplate,
    setDefaultTemplate,
    directoryName,
    directories,
    defaultTemplate
  } = props;

  return (
    <div className={styles.templateList}>
      {templateNames.map(temp => {
        return (
          <div
            className={
              selectedTemplate === temp
                ? styles.listItemSelected
                : styles.listItem
            }
            onClick={() => {
              selectTemplate({
                renderTemplate: directories[directoryName][temp],
                selectedTemplate: temp
              });
            }}
            onDoubleClick={async () => setDefaultTemplate(temp, directoryName)}
            key={temp}
          >
            {temp}
            {temp === defaultTemplate[0] &&
              directoryName === defaultTemplate[1] && (
                <i className="far fa-check-square" />
              )}
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps({ dashboard: { defaultTemplate } }) {
  return {
    defaultTemplate
  };
}

export default connect(
  mapStateToProps,
  null
)(TemplateList);
