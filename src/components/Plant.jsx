import React from "react";
import PropTypes from  "prop-types";
import CreatePlant from "./CreatePlant";
import PlantList from "./PlantList"

class Plant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPlant: [],
    }
    this.addNewPlantToList = this.addNewPlantToList.bind(this);
    this.updatePlantWater = this.updatePlantWater.bind(this);
  }

  addNewPlantToList(newPlant) {
    let newMasterPlant = this.state.masterPlant.slice();
    newMasterPlant.push(newPlant);
    this.setState({masterPlant: newMasterPlant});
    console.log(this.state.masterPlant);
  }

  componentDidMount() {
    this.timeSinceWatered = setInterval(() =>
    this.updatePlantWater(),
    5000
  );
  }

  updatePlantWater() {
    let newMasterPlant = this.state.masterPlant.slice();
    newMasterPlant.forEach((plant) =>
      plant.setTimeSinceWatered()
  );
    this.setState({masterPlant: newMasterPlant});
  }


  render() {
    return (
      <div>
        <CreatePlant addNewPlantToList= {this.addNewPlantToList}/>
        <PlantList plants={this.state.masterPlant}/>
      </div>
    )
  }
}

Plant.propTypes = {
  addNewPlantToList: PropTypes.func,
}

export default Plant
