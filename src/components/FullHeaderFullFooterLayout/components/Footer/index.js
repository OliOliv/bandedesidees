import React from "react";
import Link from "next/link";

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
        href="./"
      >
        <p>Mentions légales</p>
      </Link>
    </section>
    
    <style jsx>
      {`.footer {
	align-items: center;
	height: 3rem;
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	font-family: roboto;
	color: lightgray;
	font-size: 1rem;
	letter-spacing: 0.2rem;
	background-color: #3f1c4d;
}

footer p {
	margin-bottom: 0;
}

footer img {
	height: 2rem;
	margin: 0 0 0 1rem;
}

.network {
	margin-left: 2rem;
	align-items: center;
	display: flex;
}

.administration {
	margin-left: auto;
	padding-right: 2rem;
}

.administration p {
	cursor: pointer;
}

.administration p:hover {
	color: #36cdc0;
}
`}
    </style>
    </footer>
    );
  }
}

export default Footer;
