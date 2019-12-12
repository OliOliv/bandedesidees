import React, { Fragment } from "react";
import Link from 'next/link'
import "./styles.scss"
import Moment from "moment";
import "moment/locale/fr";

class Thumbnail extends React.Component {

  render() {


    return (
      <Fragment>
        <div className="thumbnail">
          <div className="thumbnailContent"><img src={this.props.lastEvent.image}/>
        <div className="eventDetails">
            <h2 className="event">
              bande des idées
              <span className="eventName">#{this.props.lastEvent.nom}</span>
            </h2>
            <div className="convenient">
              <p >{Moment(this.props.lastEvent.date_soiree).format(" dddd LL")}</p>
              <p className="eventPlace">
                {this.props.lastEvent.heure} - {this.props.lastEvent.lieu}
              </p>
            </div>
            </div>
          </div>
          </div>

      </Fragment> 
    );
  }
}

export default Thumbnail;
