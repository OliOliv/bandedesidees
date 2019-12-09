import React, { Fragment } from "react";
import Link from "next/link";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <p>Home</p>
        <Link href="/about">
          <button>About</button>
        </Link>
      </Fragment>
    );
  }
}

export default Home;
