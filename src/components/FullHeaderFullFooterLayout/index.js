import React, { Fragment } from "react";

import Footer from "./components/Footer";
import Head from "next/head";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PropTypes from "prop-types";

class FullHeaderFullFooterLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Fragment>
        <Head>
          <title>Bande des Idées</title>
          <link
            href="https://fonts.googleapis.com/css?family=Staatliches&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Header></Header>
        <Navigation></Navigation>
        <>
          {this.props.children}
          <Footer></Footer>
        </>

        <style jsx global>{`
          p {
            margin: 0;
          }

          h1 {
            margin: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default FullHeaderFullFooterLayout;
