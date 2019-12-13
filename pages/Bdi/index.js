import React, { Component, Fragment } from "react";
import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";
import BdiPage from "src/pages/BdiPage/index.js"
class Bdi extends Component {
  static getInitialProps({ query: { name } }) {
    return { eventName: name }
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
