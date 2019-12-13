import React, { Fragment } from "react";
import "./styles.scss"
import Thumbnail from "src/pages/HomePage/components/Thumbnail/index.js"

class BdiContent extends React.Component {

  render() {
    let getspeakers;
    if (this.props.speakers.length) {
      getspeakers = (
        <div className="speakersList" >
          {this.props.speakers.map(speaker => (
                <p key={speaker.idIntervenant}>{speaker.prenom}</p>
          ))}
        </div>
      );
    }

    return (
      <Fragment>
        <div className="bdiContent">
          <div className="eventContainer">
          <Thumbnail event={this.props.event}></Thumbnail>
          <div className="description">
            <p>
            {this.props.event.description}
            </p>
            <div className='speakerContainer'>
              <p>Avec</p> {getspeakers}
              
            </div>
           
            <div className='speakerContainer'>
              <p>Les éditions</p>
              
            </div>
            <div className='speakerContainer'>
              <p>Les livres</p>
            </div>
            
            <div className="buyLinks">
            <p>Retrouvez ces livres en librairie</p>
          <a
            href="https://www.parislibrairies.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="logo Paris Librairie"
              src="https://static.epagine.fr/mediaweb3/5435/logo_parislibrairie.jpg"
            />
          </a>
          <a
            href="https://www.placedeslibraires.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="logo place des libraires"
              src="https://static.epagine.fr/mediaweb3/7/logo_pdl.png"
              rel="noopener noreferrer"
            />
          </a>

            </div>
          </div>
          </div>
          </div>
      </Fragment>
    );
  }
}

export default BdiContent;
