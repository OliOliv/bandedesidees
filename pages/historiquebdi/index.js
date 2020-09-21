import React, { Component, Fragment } from "react";

import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";
import HistoryBdiPage from "src/pages/HistoryBdiPage/index.js";

class HistoryBdi extends Component {
  render() {
    return (
      <FullHeaderFullFooterLayout>
        <HistoryBdiPage eventName={this.props.eventName}></HistoryBdiPage>
      </FullHeaderFullFooterLayout>
    );
  }
}

export default HistoryBdi;
