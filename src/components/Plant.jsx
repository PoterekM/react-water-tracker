import React from "react";
import PropTypes from  "prop-types";
import CreatePlant from "./CreatePlant.jsx";
import PlantList from "./PlantList.jsx"

class Plant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPlant: [],
    }
    this.addNewPlantToList = this.addNewPlantToList.bind(this);
  }

  addNewPlantToList(newPlant) {
  let newMasterPlant = this.state.masterPlant.slice();
  newMasterPlant.push(newPlant);
  this.setState({masterPlant: newMasterPlant});
  console.log(this.state.masterPlant);
}

  render() {
    return (
      <div>
        <CreatePlant addNewPlantToList= {this.addNewPlantToList}/>
        <PlantList/>
      </div>
    )
  }
}

Plant.propTypes = {
  onNewCreatePlant: PropTypes.func,
}

export default Plant;
