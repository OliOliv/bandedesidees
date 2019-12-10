import React, { Component, Fragment } from "react";
import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";
import AboutPage from "src/pages/AboutPage/index.js"

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
