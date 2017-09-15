import React from "react";
import PropTypes from "prop-types";

function PlantList(props) {
  console.log(props)
  return (
    <div>
      <h3>Here's where the plant list will live!!</h3>
    {props.name}
    </div>
  );
}

PlantList.propTpes = {
  name: PropTypes.string,
}

export default PlantList;
