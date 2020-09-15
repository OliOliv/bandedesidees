import React, { useEffect, useState } from "react";

import Head from "next/head";
import HistoryForm from "./components/HystoryForm";

const HistoryList = () => {
  const [formType, setFormType] = useState("");

  const displayForm = (type) => {
    setFormType(type);
  };

  return (
    <>
      <Head>
        <meta content="noindex, nofollow" />
      </Head>
      <div>
        {/* <nav>
          <ul className="navigation">
            <li onClick={() => displayForm("event")}>Soirées </li>
            <li onClick={() => displayForm("speaker")}>Intervenant.e.s</li>
            <li onClick={() => displayForm("books")}>Livres</li>
            <li onClick={() => displayForm("authors")}>
              Auteurs.ices/Dessinateurs.ices
            </li>
            <li onClick={() => displayForm("editor")}>Editeurs</li>
            <li onClick={() => displayForm("illustrations")}>Illustrations</li>
          </ul>
        </nav> */}

        <div>
          <HistoryForm formType={formType}></HistoryForm>
        </div>
      </div>
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
