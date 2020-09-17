import React, { Fragment } from "react";
import Router, { useRouter } from "next/router";

import Button from "src/components/Button";
import Thumbnail from "src/components/Thumbnail";
import path2 from "src/pathToback.js";
import style from "src/components/style";

class HomePage extends React.Component {
  state = {
    lastEvent: [],
  };
  getLastEvent = async function () {
    const res = await fetch(path2 + "events/getlastevent");
    if (res.status === 201) {
      const data = await res.json();
      const lastEvent = data.lastEvent[0];
      this.setState({ lastEvent });
    }
    if (res.status === 401) {
      Router.push("/404");
    }
  };

  componentDidMount() {
    this.getLastEvent();
  }

  render() {
    const link = {
      pathname: "/bdi",
      query: { name: this.state.lastEvent.nom },
    };
    return (
      <div className="homeContainer">
        <Thumbnail event={this.state.lastEvent} />
        <div className="homeButtonContainer">
          <Button text="Plus d'information" link={link} />
        </div>
        <div className="reponsiveSection">
          <img src="/blackminilogo.png" alt="minilogo"></img>
          <Button text="Prochaine BDI" link={link} />
        </div>
        <style jsx>{`
          .homeButtonContainer {
            margin-bottom: ${style.large};
          }

          @media screen and (min-width: 574px) {
            .reponsiveSection {
              display: none;
            }
          }
          @media screen and (max-width: 574px) {
            .homeButtonContainer {
              display: none;
            }

            .reponsiveSection {
              display: block;
              margin-bottom: 5rem;
              text-align: center;
              justify-content: center;
              width: 100%;
              padding: 0 2rem;
            }

            .reponsiveSection img {
              margin-bottom: ${style.small};
              width: 100%;
            }

            .reponsiveSection Button {
              width: 100%;
              margin-bottom: ${style.large};
            }

            .homeContainer {
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default HomePage;
