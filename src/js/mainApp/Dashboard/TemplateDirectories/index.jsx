import React from "react";
import { directories } from "../../../templates/index";
import TemplateList from "./TemplateList";
import styles from "./styles.scss";

export default function TemplateDirectories({
  selectTemplate,
  selectedTemplate,
  selectedDirectories,
  selectDirectory,
  setDefaultTemplate
}) {
  const directoryNames = Object.keys(directories);

  return (
    <div className={styles.templateListContainer}>
      {directoryNames.map(dir => {
        const templateNames = Object.keys(directories[dir]);
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
