import React, { Component, Fragment } from "react";

import EventForm from "../BackOffice/components/Form/components/EventForm";
import Login from "src/components/Login/index.js";
import Router from "next/router";
import { param } from "express-validator";
import path2 from "src/pathToback.js";

class AdminPage extends Component {
  state = {
    error: false,
  };

  submitForm = async (values) => {
    const res = await fetch(path2 + "users/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (res.status === 201) {
      this.setState({ error: false, isAuthenticated: true });
      const data = await res.json();
      const params = `?token=${data.token}&isauthenticated=true`;
      Router.push(`/backoffice${params}`);
    }
    if (res.status === 401) {
      this.setState({ error: true });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <Fragment>
        <Login submitForm={this.submitForm} error={error} />
      </Fragment>
    );
  }
}

export default AdminPage;
