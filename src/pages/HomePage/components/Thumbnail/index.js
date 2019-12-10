import React, { Fragment } from "react";
import Link from 'next/link'
import "./styles.scss"
import Moment from "moment";
import "moment/locale/fr";

class Thumbnail extends React.Component {
   state={
       lastEvent : []
   }
        getLastEvent = async function() {
            const res = await fetch('http://localhost:5000/api/events/getLastEvent');
                        
            if (res.status === 201) {
            const data = await res.json()
            const lastEvent = data.events[0]; 
            this.setState({lastEvent})
            }

            if (res.status === 401){
                //redirection
            }
          }

    componentDidMount() {
        this.getLastEvent()
    }

  render() {
     const {date_soiree, nom, lieu, heure, image} = this.state.lastEvent

    return (
      <Fragment>
        <div className="thumbnail">
          <div className="thumbnailContent"><img src={image}/>
        <div className="eventDetails">
            <h2 className="event">
              bande des idées
              <span className="eventName">#{nom}</span>
            </h2>
            <div className="convenient">
              <p >{Moment(date_soiree).format(" dddd LL")}</p>
              <p className="eventPlace">
                {heure} - {lieu}
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
