import React from "react";
import Link from "next/link";
import "./styles.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link href="/about">
          <h1>la bande des idées</h1>
        </Link>
        <p>Le rendez-vous mensuel des bédéphiles</p>
      </header>
    );
  }
}

export default Header;
