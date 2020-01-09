import React, { Fragment } from "react";
import Link from 'next/link'
import Thumbnail from "src/components/Thumbnail"
import path2 from "src/pathToback.js"

class HomePage extends React.Component {

  state={
    lastEvent : [],
}
     getLastEvent = async function() {
         const res = await fetch(path2 + "events/getlastevent");
         if (res.status === 201) {
         const data = await res.json()
         const lastEvent = data.lastEvent[0]; 
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

    return (
      <Fragment>
        <Thumbnail event={this.state.lastEvent}></Thumbnail>
        <Link  href={{ pathname: '/bdi', query: { name: this.state.lastEvent.nom } }}>
        <button className="homepageButton">Plus d'informations</button>
        </Link>






        <style jsx>{`
        .homepageButton {
          display: -ms-flexbox;
          display: flex;
          background: transparent;
          -ms-flex-pack: center;
          width: auto;
          padding: 15px;
          border: solid 2px black;
          margin: 3rem auto 0 auto;
          font-family: roboto;
          font-weight: bold;
          text-transform: uppercase;
          color: black;
          text-align: center;
          letter-spacing: 0.2rem;
          border-radius: 3px;
          cursor: pointer;
          box-shadow: 0px 4px 4px 0 #dcdcdc;
        }
        
        .homepageButton:hover {
          color: white;
          border: solid 2px black;
          background-color: black;
          transition: 0.3s;
        }
      `}</style>
      
      </Fragment>
    );
  }
}

export default HomePage;
