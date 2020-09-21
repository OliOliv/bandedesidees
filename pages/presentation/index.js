import React, { Component, Fragment } from "react";

import AboutPage from "src/pages/AboutPage/index.js";
import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";

class About extends Component {
  render() {
    return (
      <FullHeaderFullFooterLayout>
        <AboutPage></AboutPage>
      </FullHeaderFullFooterLayout>
    );
  }
}

export default About;
