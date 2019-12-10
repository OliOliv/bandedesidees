import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "src/pages/HomePage/index.js"

import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <FullHeaderFullFooterLayout>
          <HomePage/>
        </FullHeaderFullFooterLayout>
      </Fragment>
    );
  }
}

export default Home;
