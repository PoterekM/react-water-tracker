import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

class UpdateTime extends React.Component {
  constructor(props) {
    super(props);
    this.updatePlantWater = this.updatePlantWater.bind(this);
    this.state = {
      time: 'Not Available',
    }
  }

  componentDidMount() {
    this.timeSinceWatered = setInterval(() =>
    this.updatePlantWater(),
    5000
  );
  }

  updatePlantWater() {
    let newTime = this.state.masterPlant.slice();
    newTime.forEach((plant) =>
      plant.setTimeSinceWatered()
  );
    this.setState({masterPlant: newTime});
  }

  render() {
    return (
      <div>
        <p>Time since last water: {this.state.time}</p>
      </div>
    )
  }
}

export default UpdateTime;
