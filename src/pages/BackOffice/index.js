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
  }, []);

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
        <div className="backOfficeContent">
          {displayHistoryList && (
            <HistoryList isAuthorized={isAuthorized}></HistoryList>
          )}
          {displayForm && <Form isAuthorized={isAuthorized}></Form>}
        </div>
        <style jsx>{`
          .backOfficeContainer {
            font-family: Roboto;
          }

          .backOfficeContent {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .backOfficeMenu {
            display: flex;
            padding: 2rem;
            justify-content: center;
          }

          .backOfficeSection {
            text-align: center;
            margin: 0 ${style.medium};
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
