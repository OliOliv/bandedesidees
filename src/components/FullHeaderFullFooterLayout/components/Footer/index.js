import React from "react";
import Link from "next/link";
import "./styles.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">       
      <div className="network">
      <p >Retrouvez-nous sur</p>
      <a
        href="https://www.facebook.com/La-bande-des-id%C3%A9es-861729817203398/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="logo facebook" src='/facebook.png' />
      </a>
      <a
        href="https://www.instagram.com/labandedesidees/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/instagram.png" alt="logo instagram" />
      </a>
      <a
        href="https://twitter.com/bande_des_idees?lang=fr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/twitter.png" alt="logo twitter" />
      </a>
    </div>
    <section className="administration">
      {/* <Link
        to={{
          pathname: `/log`
        }}
      >
        <p>Administration</p>
      </Link> */}
      <Link
        to={{
          pathname: `/mentions`
        }}
      >
        <p>Mentions légales</p>
      </Link>
    </section></footer>
    );
  }
}

export default Footer;
