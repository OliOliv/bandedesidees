import React, { Fragment } from "react";
import Navigation from "../Navigation";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Footer from "./components/Footer";

class FullHeaderFullFooterLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Navigation></Navigation>
        {this.props.children}
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default FullHeaderFullFooterLayout;
