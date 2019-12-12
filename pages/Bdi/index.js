import React, { Component, Fragment } from "react";
import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";
import BdiPage from "src/pages/BdiPage/index.js"

class Bdi extends Component {
  render() {
    return (
          <FullHeaderFullFooterLayout>
            <BdiPage></BdiPage>
          </FullHeaderFullFooterLayout>
       
    );
  }
}

export default Bdi;
