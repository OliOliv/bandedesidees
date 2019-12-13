import React, { Fragment } from "react";
import Link from 'next/link'
import Thumbnail from "src/pages/HomePage/components/Thumbnail/index.js"
import "./styles.scss"
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
        <Thumbnail lastEvent={this.state.lastEvent}></Thumbnail>
        <Link  href={{ pathname: '/bdi', query: { name: this.state.lastEvent.nom } }}>
        <button className="homepageButton">Plus d'informations</button>
        </Link>
      </Fragment>
    );
  }
}

export default HomePage;
