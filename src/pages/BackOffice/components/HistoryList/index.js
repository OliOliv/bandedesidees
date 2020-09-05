import Head from "next/head";
import React from "react";

const HistoryList = () => {
  return (
    <>
      <Head>
        <meta content="noindex, nofollow" />
      </Head>
      <nav>
        <ul className="navigation">
          <li>Soirées</li>
          <li>Intervenant.e.s</li>
          <li>Interventions</li>
          <li>Livres</li>
          <li>Auteurs.ices</li>
          <li>Dessinateurs.ices</li>
          <li>Editeurs</li>
          <li>Photos</li>
          <li>Croquis </li>
        </ul>
      </nav>

      <style jsx>{`
        .navigation {
          margin-top: 4rem;
          display: flex;
          justify-content: center;
          text-transform: uppercase;
          list-style: none;
        }
        .navigation li {
          margin-right: 2rem;
        }
      `}</style>
    </>
  );
};

export default HistoryList;
