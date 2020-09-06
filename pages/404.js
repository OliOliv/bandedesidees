import React, { Component, Fragment } from "react";

import ErrorPage from "src/components/ErrorPage";
import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";

class Error extends Component {
  render() {
    return (
      <FullHeaderFullFooterLayout>
        <ErrorPage></ErrorPage>
      </FullHeaderFullFooterLayout>
    );
  }
}

export default Error;
