import React, { Component, Fragment } from "react";
import path2 from "src/pathToback.js"
import BdiContent from "./components/BdiContent";

class BdiPage extends Component {
 

  state = {
    oneEvent: [],
    speakers: []
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

         getSpeakersOfEvent = async function() {
          const res = await fetch(path2 + `speakers/getspeakersofevent/${this.props.eventName}`)
          if (res.status === 201) {
          const data = await res.json()
          const speakers = data.speakers; 
          this.setState({speakers})
          }
 
          if (res.status !== 201){
          }
        }
  
         componentDidMount () {
           this.getOneEvent()
           this.getSpeakersOfEvent()
         }

  render() {    
    
    return (
      <Fragment>
         <BdiContent event={this.state.oneEvent} speakers={this.state.speakers}></BdiContent>
         </Fragment>
       
    );
  }
}

export default BdiPage;
