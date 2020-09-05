import React, { Component, Fragment } from "react";

import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";
import HomePage from "src/pages/HomePage/index.js";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <FullHeaderFullFooterLayout>
          <HomePage />
        </FullHeaderFullFooterLayout>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Home;
