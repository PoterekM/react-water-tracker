import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

class PlantWater extends React.Component {
  constructor(props) {
    super(props);
    this.plantWater = this.plantWater.bind(this);
    this.state = {
      water: 'Unknown',
    }
  }


  plantWater() {
    var addWater = new Date().toLocaleTimeString();
    this.setState({water: addWater});
  }

  render() {
    return(
      <div>
        <p>Time Since Water: {this.state.water}</p>
        <button onClick={this.plantWater}>Track Water!</button>
      </div>
    )
  }


}



export default PlantWater;
