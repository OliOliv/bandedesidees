import React, { Component, Fragment } from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

import FullHeaderFullFooterLayout from "../src/components/FullHeaderFullFooterLayout";
class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FullHeaderFullFooterLayout>
          <Home {...this.props} />
        </FullHeaderFullFooterLayout>
      </Fragment>
    );
  }
}

export default HomePage;
