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
          <meta
            name="keywords"
            content="Bande des Idées, bande des idées, bandes des idees, bande, idées, association, lecture, culture, culturel, 9e art, bande déssinée, bandes déssinées, bd, comics, manga, indé, édition, éditeurs, animation, animations, animateurs, animateur, animatrices, événement, livres, soirées, bar, convivial, chaleureux, débat, discussion, coup de coeur, séléction, convivial, Lou Pascalou, libraires, libraires, libraire, discuter, public, échange, échanges, défendre, arguments, auteurs, autrices, coloriste, planches, diaporama, présentation, lundi, rendez-vous, bédéphile "
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
