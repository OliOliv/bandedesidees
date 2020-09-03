import React, { Component, Fragment } from "react";
import path2 from "src/pathToback.js";
import Login from "src/components/Login/index.js";
import Router from "next/router";
import EventForm from "./components/Form/EventForm";

class AdminPage extends Component {
  state = {
    error: false,
    isAuthenticated: false,
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
      const data = await res.json();
      this.setState({ error: false, isAuthenticated: true });

      Router.push(`/backoffice`);
    }
    if (res.status === 401) {
      //redirection
      this.setState({ error: true });
    }
  };

  render() {
    const { isAuthenticated, error } = this.state;
    return (
      <Fragment>
        {!isAuthenticated && (
          <Login submitForm={this.submitForm} error={this.state.error} />
        )}
      </Fragment>
    );
  }
}

export default AdminPage;
