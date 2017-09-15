import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import UpdateTime from "./UpdateTime";

class PlantWater extends React.Component {
  constructor(props) {
    super(props);
    this.plantWater = this.plantWater.bind(this);
    this.state = {
      water: 'No water times logged yet!',
    }
  }

  plantWater() {
    var addWater = new Date().toLocaleTimeString();
    this.setState({water: addWater});

  }

  render() {
    return(
      <div>
        <p>Last Time watered: {this.state.water}</p>
        <UpdateTime/>
        <button onClick={this.plantWater}>Track Water!</button>
      </div>
    )
  }


}



export default PlantWater;
