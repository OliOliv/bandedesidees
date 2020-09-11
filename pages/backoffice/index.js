import React, { Component, Fragment } from "react";

import BackOffice from "../../src/pages/BackOffice";
import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";

class Bdi extends Component {
  static getInitialProps({ query: { name } }) {
    return { eventName: name };
  }
  render() {
    return (
      <>
        <FullHeaderFullFooterLayout>
          <BackOffice />
        </FullHeaderFullFooterLayout>
      </>
    );
  }
}

export default Bdi;
