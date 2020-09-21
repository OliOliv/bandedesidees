import React, { Component, Fragment } from "react";

import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";
import LegalNoticePage from "src/pages/LegalNoticePage/index.js";

class LegalNotice extends Component {
  render() {
    return (
      <FullHeaderFullFooterLayout>
        <LegalNoticePage></LegalNoticePage>
      </FullHeaderFullFooterLayout>
    );
  }
}

export default LegalNotice;
