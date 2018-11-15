import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setDevMode,
  selectDirectory,
  selectTemplate
} from "../reducers/dashboard";
import {
  setDefaultTemplate,
  sendTemplate,
  getDefaultTemplate
} from "../thunks/dashboard";
import TemplateDirectories from "./TemplateDirectories";
import TemplateDisplay from "./TemplateDisplay";
import styles from "./styles.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendingEmail: false
    };

    this.sendTemplate = this.sendTemplate.bind(this);
  }

  componentDidMount() {
    this.props.getDefaultTemplate();
  }

  sendTemplate(values, html) {
    this.setState({
      sendingEmail: true
    });

    const params = { html, ...values };
    this.props
      .sendTemplate(params)
      .then(() => this.setState({ sendingEmail: false }));
  }

  render() {
    if (!this.props.renderTemplate) {
      return null;
    }

    return (
      <div className={styles.mainContainer}>
        <div className={styles.dashboard}>
          <TemplateDirectories
            selectedTemplate={this.props.selectedTemplate}
            selectTemplate={this.props.selectTemplate}
            selectDirectory={this.props.selectDirectory}
            selectedDirectories={this.props.selectedDirectories}
            setDefaultTemplate={this.props.setDefaultTemplate}
          />
          <TemplateDisplay
            devMode={this.props.devMode}
            renderTemplate={this.props.renderTemplate}
            sendTemplate={this.sendTemplate}
            sendingEmail={this.state.sendingEmail}
            setDevMode={this.props.setDevMode}
            devMode={this.props.devMode}
          />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  devMode: PropTypes.bool.isRequired,
  selectedDirectories: PropTypes.arrayOf(PropTypes.string),
  renderTemplate: PropTypes.func,
  selectedTemplate: PropTypes.string,
  setDevMode: PropTypes.func.isRequired,
  selectDirectory: PropTypes.func.isRequired,
  selectTemplate: PropTypes.func.isRequired,
  setDefaultTemplate: PropTypes.func.isRequired,
  getDefaultTemplate: PropTypes.func.isRequired,
  sendTemplate: PropTypes.func.isRequired
};

function mapStateToProps({ dashboard }) {
  const {
    devMode,
    selectedDirectories,
    renderTemplate,
    selectedTemplate
  } = dashboard;

  return {
    devMode,
    selectedDirectories,
    renderTemplate,
    selectedTemplate
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setDevMode,
      selectDirectory,
      selectTemplate,
      setDefaultTemplate,
      getDefaultTemplate,
      sendTemplate
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
