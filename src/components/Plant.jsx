import React from "react";
import PropTypes from  "prop-types";
import CreatePlant from "./CreatePlant.jsx";
import PlantList from "./PlantList.jsx"

class Plant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CreatePlant/>
        <PlantList/>
      </div>
    )
  }
}

Plant.propTypes = {
  onNewCreatePlant: PropTypes.func,
}

export default Plant;
