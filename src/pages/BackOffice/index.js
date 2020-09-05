import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

import Form from "./components/Form/index";
import Head from "next/head";
import HistoryList from "./components/HistoryList";
import edit from "./components/assets/edit.png";
import list from "./components/assets/list.png";
import style from "src/components/style";

var jwt = require("jsonwebtoken");

const BackOffice = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [displayHistoryList, setDisplayHistoryList] = useState(false);
  const [displayForm, setDisplayForm] = useState(true);

  const {
    query: { token, isauthenticated },
  } = useRouter();

  const decodedToken = jwt.decode(token);
  const adminToken = token
    ? decodedToken.user_email === "labandedesidees@gmail.com" &&
      decodedToken.user_type === 1
    : null;

  const validToken = token ? Date.now() <= decodedToken.exp * 1000 : null;
  const isAuthorized = adminToken && isauthenticated && validToken;

  const renderHistory = () => {
    setDisplayForm(false);
    setDisplayHistoryList(true);
  };

  const renderForm = () => {
    setDisplayHistoryList(false);
    setDisplayForm(true);
  };

  useEffect(() => {
    if (!token || !isAuthorized) {
      Router.push("/");
    }
    setIsLogged(isAuthorized);
  });

  if (!isLogged) {
    return null;
  }
  return (
    <>
      <Head>
        <meta content="noindex, nofollow" />
      </Head>
      <div className="backOfficeContainer">
        <div onClick={renderForm} className="backOfficeSection">
          <img src={edit}></img>
          <p>Formulaire</p>
        </div>
        <div onClick={renderHistory} className="backOfficeSection">
          <img src={list}></img>
          <p>Historique</p>
        </div>
      </div>

      {displayHistoryList && <HistoryList isLogged={isLogged}></HistoryList>}
      {displayForm && <Form isLogged={isLogged}></Form>}

      <style jsx>{`
        .backOfficeContainer {
          margin-top: ${style.small};
          font-family: Roboto;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .backOfficeSection {
          text-align: center;
          margin: 0 2rem 0 2rem;
        }

        .backOfficeSection img {
          width: 3rem;
        }

        .backOfficeSection p {
          margin-top: ${style.small};
        }
      `}</style>
    </>
  );
};

export default BackOffice;
