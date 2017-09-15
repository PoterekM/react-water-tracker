import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";


class PlantWater extends React.Component {
  constructor(props) {
    super(props);
    this.plantWater = this.plantWater.bind(this);
    this.state = {
      water: 'No water times logged yet!',
    }
  }

  plantWater() {
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    var dateTime = (time + " on " + date);
    var addWater = dateTime;
    this.setState({water: addWater});

  }

  render() {
    return(
      <div>
        <p>Last Time watered: {this.state.water}</p>
        <button onClick={this.plantWater}>Track Water!</button>
      </div>
    )
  }


}



export default PlantWater;
