import React, { Fragment } from "react";
import "./styles.scss"
class BdiContent extends React.Component {

  render() {
    
    return (
      <Fragment>
        <div className="eventContainer">{this.props.oneEvent.nom}</div>
      </Fragment>
    );
  }
}

export default BdiContent;
