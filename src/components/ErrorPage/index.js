import Link from "next/link";
import React from "react";
import style from "src/components/style";

const ErrorPage = () => (
  <div className="errorContainer">
    <div className="errorMessage">
      <p>Oups, la page que vous recherchez semble introuvable !</p>
      <Link href="/">
        <a>Retourner à l'accueil</a>
      </Link>
    </div>
    <style jsx>{`
      .errorContainer {
        margin-top: ${style.large};
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .errorMessage {
        text-align: center;
        display: column;
      }

      .errorMessage p {
        margin-bottom: ${style.medium};
      }
      .errorMessage a {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default ErrorPage;
