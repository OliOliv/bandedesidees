import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

import Form from "./components/Form/index";
import Head from "next/head";
import HistoryList from "./components/HistoryList";
import edit from "./components/assets/edit.png";
import list from "./components/assets/list.png";
import style from "src/components/style";

const config = require("../../../config/main");

var jwt = require("jsonwebtoken");

const BackOffice = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [displayHistoryList, setDisplayHistoryList] = useState(false);
  const [displayForm, setDisplayForm] = useState(true);

  const {
    query: { token, isauthenticated },
  } = useRouter();

  const checkToken = (decodedToken) => {
    const adminToken =
      decodedToken.user_email === config.main_mail &&
      decodedToken.user_type === 1;

    const validToken = Date.now() <= decodedToken.exp * 1000;

    setIsAuthorized(adminToken && isauthenticated && validToken);
  };

  const renderHistory = () => {
    setDisplayForm(false);
    setDisplayHistoryList(true);
  };

  const renderForm = () => {
    setDisplayHistoryList(false);
    setDisplayForm(true);
  };

  useEffect(() => {
    if (!token) {
      Router.push("/");
    }
    if (token) {
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          Router.push("/");
        } else {
          checkToken(decoded);
        }
      });
    }
  });

  if (!isAuthorized) {
    return null;
  }

  return (
    <>
      <Head>
        <meta content="noindex, nofollow" />
      </Head>
      <div className="backOfficeContainer">
        <div className="backOfficeMenu">
          <div onClick={renderForm} className="backOfficeSection">
            <img src={edit}></img>
            <p>Formulaire</p>
          </div>
          <div onClick={renderHistory} className="backOfficeSection">
            <img src={list}></img>
            <p>Historique</p>
          </div>
        </div>

        {displayHistoryList && (
          <HistoryList isAuthorized={isAuthorized}></HistoryList>
        )}
        {displayForm && <Form isAuthorized={isAuthorized}></Form>}

        <style jsx>{`
          .backOfficeContainer {
            margin-top: ${style.small};
            font-family: Roboto;
            width: 100%;
            display: flex;
          }

          .backOfficeMenu {
            margin-left: ${style.large};
          }

          .backOfficeSection {
            text-align: center;
            margin: ${style.large};
          }

          .backOfficeSection img {
            width: 3rem;
          }

          .backOfficeSection p {
            margin-top: ${style.small};
          }
        `}</style>
      </div>
    </>
  );
};

export default BackOffice;
