import React, { Component, Fragment } from "react";
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
