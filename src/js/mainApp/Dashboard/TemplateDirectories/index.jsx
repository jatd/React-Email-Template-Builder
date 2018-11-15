import React from "react";
import PropTypes from "prop-types";
import { directories } from "../../../templates/index";
import TemplateList from "./TemplateList";
import logoImage from "../../../../assets/images/logo3.png";
import styles from "./styles.scss";

const sortDesc = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (b < a) {
    return 1;
  }
  return 0;
};

export default function TemplateDirectories({
  selectTemplate,
  selectedTemplate,
  selectedDirectories,
  selectDirectory,
  setDefaultTemplate
}) {
  const directoryNames = Object.keys(directories).sort(sortDesc);

  return (
    <div className={styles.templateListContainer}>
      <div className={styles.logo}>
        <img src={logoImage} width={200} height={65} />
      </div>
      {directoryNames.map(dir => {
        const templateNames = Object.keys(directories[dir]).sort(sortDesc);
        return (
          <div className={styles.directoryItem} key={dir}>
            <span
              className={styles.directoryName}
              onClick={() => selectDirectory({ selectedDirectory: dir })}
            >
              {dir}{" "}
              {selectedDirectories.indexOf(dir) > -1 ? (
                <i className="far fa-arrow-alt-circle-down" />
              ) : (
                <i className="fas fa-arrow-circle-right" />
              )}
            </span>
            {selectedDirectories.indexOf(dir) > -1 && (
              <TemplateList
                templateNames={templateNames}
                selectTemplate={selectTemplate}
                selectedTemplate={selectedTemplate}
                directoryName={dir}
                directories={directories}
                setDefaultTemplate={setDefaultTemplate}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

TemplateDirectories.propTypes = {
  selectedDirectories: PropTypes.arrayOf(PropTypes.string),
  selectedTemplate: PropTypes.string,
  selectDirectory: PropTypes.func.isRequired,
  selectTemplate: PropTypes.func.isRequired,
  setDefaultTemplate: PropTypes.func.isRequired
};
