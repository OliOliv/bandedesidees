import React, { Component, Fragment } from "react";
import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";
import BackOffice from "../../src/pages/BackOffice";
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
