import React from "react";
import PropTypes from "prop-types";
import PlantWater from "./PlantWater";

function PlantDetail(props) {
  return(
  <div>
    <h4>Plant name: {props.name}</h4>
    <h4>Plant Type: {props.plantType}</h4>
    <h4>Watering Schedule: {props.waterSchedule}</h4>
    <h4>Soil Type: {props.soilType}</h4>

    <h4>This plant has been around for: {props.timeSinceWatered}</h4>
  <PlantWater timeSinceWatered={this.timeSinceWatered}/>
  </div>
  )
}

PlantDetail.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  soilType: PropTypes.string.isRequired,
  waterSchedule: PropTypes.string.isRequired,
  timeSinceWatered: PropTypes.string,
}

export default PlantDetail;
