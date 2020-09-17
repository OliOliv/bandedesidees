import React, { Fragment } from "react";
import Link from "next/link";
import Moment from "moment";
import "moment/locale/fr";
import style from "src/components/style";

class Thumbnail extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="thumbnail">
          <div className="thumbnailContent">
            <img className="thumbnailImage" src={this.props.event.image} />
            <div className="eventDetails">
              <h2 className="event">
                bande des idées
                <span className="eventName">#{this.props.event.nom}</span>
              </h2>
              <div className="convenient">
                <p>{Moment(this.props.event.date_soiree).format(" dddd LL")}</p>
                <p className="eventPlace">
                  {this.props.event.heure} - {this.props.event.lieu}
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .thumbnail {
            margin-top: 2rem;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .thumbnailContent {
            width: 60rem;
            margin-bottom: ${style.medium};
          }

          .thumbnailImage {
            width: 60rem;
          }

          .eventDetails {
            background-color: black;
            display: flex;
            height: auto;
            font-family: roboto;
            align-items: center;
            width: 100%;
          }

          .event {
            color: white;
            text-transform: uppercase;
            margin-left: 2rem;
            margin-bottom: 0;
          }

          .eventName {
            font-size: 1.3rem;
            color: #36cdc0;
            margin-left: 0.2rem;
          }

          .convenient {
            margin-left: auto;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            text-align: end;
            color: white;
          }

          .convenient p {
            margin: 0;
          }

          .eventPlace {
            color: #36cdc0;
          }

          @media screen and (max-width: 992px) {
            .thumbnailContent {
              width: 50rem;
            }
            .thumbnailImage {
              width: 50rem;
            }
          }

          @media screen and (max-width: 832px) {
            .thumbnailContent {
              width: 30rem;
            }
            .thumbnailImage {
              width: 30rem;
            }
          }

          @media screen and (max-width: 574px) {
            .thumbnailContent {
              display: none;
            }

            .thumbnailImage {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Thumbnail;
