import { createAction, handleActions } from "redux-actions";

export const SET_DEV_MODE = "SET_DEV_MODE";
export const SET_DISPLAY_TEMPLATE = "SET_DISPLAY_TEMPLATE";
export const SELECT_DIRECTORY = "SELECT_DIRECTORY";
export const SELECT_TEMPLATE = "SELECT_TEMPLATE";
export const SELECT_DEFAULT_TEMPLATE = "SELECT_DEFAULT_TEMPLATE";

export const setDevMode = createAction(SET_DEV_MODE);
export const selectDirectory = createAction(SELECT_DIRECTORY);
export const selectTemplate = createAction(SELECT_TEMPLATE);
export const selectDefaultTemplate = createAction(SELECT_DEFAULT_TEMPLATE);

const initialState = {
  devMode: true,
  selectedDirectories: [],
  renderTemplate: null,
  selectedTemplate: "",
  defaultTemplate: []
};

const mergeState = (state, newState) => Object.assign({}, state, newState);

export default handleActions(
  {
    [SET_DEV_MODE](state) {
      const { devMode } = state;
      return mergeState(state, { devMode: !devMode });
    },

    [SELECT_DIRECTORY](state, { payload }) {
      const { selectedDirectory } = payload;
      const { selectedDirectories } = state;

      if (selectedDirectories.indexOf(selectedDirectory) > -1) {
        const filteredDirectories = selectedDirectories.filter(
          dir => selectedDirectory !== dir
        );
        return mergeState(state, {
          selectedDirectories: filteredDirectories
        });
      }
      return mergeState(state, {
        selectedDirectories: selectedDirectories.concat([selectedDirectory])
      });
    },

    [SELECT_TEMPLATE](state, { payload }) {
      return mergeState(state, payload);
    },

    [SELECT_DEFAULT_TEMPLATE](state, { payload }) {
      return mergeState(state, payload);
    }
  },
  initialState
);
