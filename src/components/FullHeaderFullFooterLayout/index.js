import React, { Fragment } from "react";
import Navigation from "../Navigation";
import PropTypes from "prop-types";

class FullHeaderFullFooterLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    return (
      <Fragment>
        <Navigation></Navigation>
        {this.props.children}
      </Fragment>
    );
  }
}

export default FullHeaderFullFooterLayout;
