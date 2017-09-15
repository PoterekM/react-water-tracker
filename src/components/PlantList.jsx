import React from "react";
import PropTypes from "prop-types";
import PlantDetail from "./PlantDetail"

function PlantList(props) {
  return (
    <div>
      <h3>{props.plants.map((plant, index) =>
      <PlantDetail
       name= {plant.name}
       plantType={plant.plantType}
       soilType={plant.soilType}
       timeWatered={plant.timeWatered}
       timeSinceWatered={plant.timeSinceWatered}
       key={index}/>
      )}
    </h3>
  </div>
  );
}

PlantList.propTpes = {
  plants: PropTypes.array,
}

export default PlantList;
