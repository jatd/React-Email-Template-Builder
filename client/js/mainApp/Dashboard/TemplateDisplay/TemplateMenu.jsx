import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../../library/Input";
import Button from "../../library/Button";
import styles from "./styles.scss";
import { cpus } from "os";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateText(text) {
  return text.length > 0;
}

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

class TemplateMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formControls: {
        email: {
          value: "",
          touched: false,
          valid: false,
          validation: value => validateEmail(value)
        },
        fromName: {
          value: "",
          touched: false,
          valid: false,
          validation: value => validateText(value)
        },
        subject: {
          value: "",
          touched: false,
          valid: false,
          validation: value => validateText(value)
        }
      },
      collapsedMenu: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.collapseMenu = this.collapseMenu.bind(this);
  }

  componentDidMount() {
    const windowWidth = document.getElementById("templateDisplay").offsetWidth;

    if (windowWidth <= 768) {
      this.setState({
        collapsedMenu: true
      });
    }
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = updatedFormElement.validation(value);

    updatedControls[name] = updatedFormElement;

    this.setState({
      formControls: updatedControls
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { formControls } = this.state;

    const formNames = Object.keys(formControls);

    const validInputs = formNames.filter(name => formControls[name].valid);

    if (validInputs.length === formNames.length) {
      const values = {};
      formNames.forEach(name => (values[name] = formControls[name].value));
      this.props.sendTemplate(values);
    }
  }

  collapseMenu() {
    this.setState({
      collapsedMenu: !this.state.collapsedMenu
    });
  }

  render() {
    const { devMode } = this.props;
    const { collapsedMenu } = this.state;

    return (
      <div className={styles.templateMenu}>
        <div
          className={styles.templateMenuTitleClickable}
          onClick={this.collapseMenu}
        >
          <i class="fas fa-align-justify" />
          Menu
        </div>
        {!collapsedMenu && (
          <div className={styles.renderHtml}>
            <Button
              onClick={() => {
                window.getSelection().removeAllRanges();
                return this.props.setDevMode();
              }}
              transparent
              className={styles.renderHtml_button}
            >
              {devMode ? "Render HTML" : "Render Template"}
            </Button>
            {!devMode && (
              <Button
                onClick={() => selectText("templateDisplay")}
                className={styles.renderHtml_selectButton}
                transparent
              >
                Copy to Clipboard
              </Button>
            )}
          </div>
        )}
        {!collapsedMenu && (
          <div className={styles.templateMenuTitle}>Send Email Template</div>
        )}
        {!collapsedMenu && (
          <form
            onSubmit={this.handleSubmit}
            className={styles.templateMenuForm}
          >
            <Input
              name="email"
              type="text"
              value={this.state.formControls.email.value}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Input
              name="fromName"
              type="text"
              placeholder="From"
              value={this.state.formControls.fromName.value}
              onChange={this.handleChange}
            />
            <Input
              name="subject"
              type="text"
              placeholder="Subject"
              value={this.state.formControls.subject.value}
              onChange={this.handleChange}
            />
            <div className={styles.buttonDiv}>
              <Button
                type="submit"
                className={styles.submitButton}
                transparent={true}
              >
                {" "}
                Submit{" "}
              </Button>
              {this.props.sendingEmail && <div className={styles.hourglass} />}
            </div>
          </form>
        )}
      </div>
    );
  }
}

TemplateMenu.propTypes = {
  devMode: PropTypes.bool,
  sendingEmail: PropTypes.bool,
  setDevMode: PropTypes.func.isRequired,
  sendTemplate: PropTypes.func.isRequired
};

export default TemplateMenu;
