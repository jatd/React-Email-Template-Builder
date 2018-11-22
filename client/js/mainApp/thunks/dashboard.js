import axios from "axios";
import {
  selectTemplate,
  selectDirectory,
  selectDefaultTemplate
} from "../reducers/dashboard";
import { directories } from "../../templates/index";

export function getDefaultTemplate(selectedTemplate) {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/defaultTemplate", {
        selectedTemplate
      });
      const templateData = data.split("\n");

      dispatch(selectDefaultTemplate({ defaultTemplate: templateData }));

      const template = templateData[0];
      const directoryName = templateData[1];

      dispatch(selectDirectory({ selectedDirectory: templateData[1] }));

      dispatch(
        selectTemplate({
          renderTemplate: directories[directoryName][template],
          selectedTemplate: template
        })
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}

export function setDefaultTemplate(selectedTemplate, directory) {
  return async dispatch => {
    try {
      await axios.post("/api/defaultTemplate", {
        selectedTemplate,
        directory
      });

      dispatch(
        selectDefaultTemplate({
          defaultTemplate: [selectedTemplate, directory]
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
}

export function sendTemplate(params) {
  return async () => {
    try {
      return axios.post("/api/sendTestTemplate", params);
    } catch (err) {
      console.log(err);
    }
  };
}
