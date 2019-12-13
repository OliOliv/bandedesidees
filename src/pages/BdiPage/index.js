import React, { Component, Fragment } from "react";
import path2 from "src/pathToback.js"
import BdiContent from "./components/BdiContent";

class BdiPage extends Component {
 

  state = {
    oneEvent: [],
  }
       getOneEvent = async function() {
           const res = await fetch(path2 + `events/getoneevent/${this.props.eventName}`)
           if (res.status === 201) {
           const data = await res.json()
           const oneEvent = data.event[0]; 
           this.setState({oneEvent})
           }
  
           if (res.status !== 201){
           }
         }
  
         componentDidMount () {
           this.getOneEvent()
         }

  render() {    
    
    return (
      <Fragment>
         <BdiContent oneEvent={this.state.oneEvent}></BdiContent>
         </Fragment>
       
    );
  }
}

export default BdiPage;
