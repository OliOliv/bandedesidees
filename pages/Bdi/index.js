import React, { Component, Fragment } from "./node_modules/react";
import FullHeaderFullFooterLayout from "./node_modules/src/components/FullHeaderFullFooterLayout";
import BdiPage from "./node_modules/src/pages/BdiPage/index.js.js";
class Bdi extends Component {
  static getInitialProps({ query: { name } }) {
    return { eventName: name };
  }
  render() {
    return (
      <FullHeaderFullFooterLayout>
        <BdiPage eventName={this.props.eventName}></BdiPage>
      </FullHeaderFullFooterLayout>
    );
  }
}

export default Bdi;
