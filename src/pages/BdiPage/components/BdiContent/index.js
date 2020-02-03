import React, { Fragment } from "react";
import Thumbnail from "src/components/Thumbnail"
import style from "src/components/style"

class BdiContent extends React.Component {

  render() {

    let getspeakers;
    if (this.props.speakers.length) {
      getspeakers = (
        <div className="contentList" >
          {this.props.speakers.map(speaker => (
                <p key={speaker.idIntervenant}>{speaker.prenom}</p>
          ))}
        </div>
      );
    }


    let getBooks;
    let getEditions;
    if (this.props.booksOfEvent.length) {
      getBooks = (
        <div className="contentList" >
          {this.props.booksOfEvent.map(book => (
                <p key={book.idLivre}>{book.titre}</p>
          ))}
        </div>
      );
      getEditions = (
        <div className="contentList" >
          {this.props.booksOfEvent.map(edition => (
                <p key={edition.idLivre}>{edition.nom}</p>
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
              <p>Les éditions</p> {getEditions}
              
            </div>
            <div className='speakerContainer'>
              <p>Les livres</p> {getBooks}
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

      <style jsx global>{`

      .bdiContent {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        
      }

      .description {
        font-family: ${style.basic};
        margin-top: ${style.small};
        width: ${style.centered};
        height: auto;
        margin-bottom: 5rem;
      }

      .description p {
        justify-content: left;
        font-family: ${style.basic};
        line-height: ${style.height};
      }

      .speakerContainer {
        margin-top: ${style.xsmall};
        display: flex,
      }

      .contentList {
        display: flex;
      }

      .contentList p {
        margin-left: ${style.xsmall};
        color: ${style.colorBlue};
        cursor: pointer      }

      .contentList p:hover {
        color: ${style.colorPurple}
      }

      .buyLinks {
        margin-top: ${style.xxsmall};
        display: flex;
        align-items: center;
      }

      .buyLinks p {
        margin: 0;
        font-family: ${style.secondary};
        font-size: ${style.xsmall};
      }

      .buyLinks img {
        height: 3rem;
        margin: 0 0 0 ${style.xsmall};
      }
      `}</style>

      </Fragment>
    );
  }
}

export default BdiContent;
