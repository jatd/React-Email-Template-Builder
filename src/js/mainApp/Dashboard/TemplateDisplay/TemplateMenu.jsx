import React, { Component } from "react";
import Input from "../../library/Input";
import Button from "../../library/Button";
import styles from "./styles.scss";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateText(text) {
  return text.length > 0;
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
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    const hasMandrillKey = process.env.MANDRILL_API_KEY;

    return (
      <div className={styles.templateMenu}>
        <div className={styles.templateMenuTitle}>
          <i className="far fa-envelope" />
          Send Email Template
        </div>
        <form onSubmit={this.handleSubmit} className={styles.templateMenuForm}>
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
      </div>
    );
  }
}

export default TemplateMenu;
