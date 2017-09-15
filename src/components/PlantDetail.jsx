import React from "react";
import PropTypes from "prop-types";


function PlantDetail(props) {
  return(
  <div>
    <h4>Plant name: {props.name}</h4>
    <h4>Plant Type: {props.plantType}</h4>
    <h4>Soil Type: {props.soilType}</h4>
    <h4>Time Watered: {props.timeWatered}</h4>
    <h4>Time Since Watered: {props.timeSinceWatered}</h4>
  </div>
  )
}

PlantDetail.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  soilType: PropTypes.string,
  timeWatered: PropTypes.number,
  timeSinceWatered: PropTypes.number
}

export default PlantDetail;
