import React, { Fragment } from "react";
import Link from 'next/link'
import Thumbnail from "src/pages/HomePage/components/Thumbnail/index.js"
import "./styles.scss"
class HomePage extends React.Component {
  render() {
    return (
      <Fragment>
        <Thumbnail></Thumbnail>
        <button className="homepageButton">Plus d'informations</button>
      </Fragment>
    );
  }
}

export default HomePage;
