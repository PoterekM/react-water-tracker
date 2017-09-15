import React from "react";
import PropTypes from "prop-types";
import Plant from "../models/Plant.js";

class CreatePlant extends React.Component {

  constructor(props) {
    super(props);
    this.preparePlantCreation = this.preparePlantCreation.bind(this);
  }

  preparePlantCreation(event) {
    event.preventDefault()
    const {_name} = this.refs;
    const {_plantType} = this.refs;
    const {_soilType} = this.refs;
    const {_timeWatered} = this.refs;
    const {_timeSinceWatered} = this.refs;
    var newPlant = new Plant(_name.value, _plantType.value, _soilType.value, _timeWatered.value, _timeSinceWatered.value);
    this.props.addNewPlantToList(newPlant);
    console.log(newPlant.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.preparePlantCreation}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Plant Name"
          />
          <input
            ref="_plantType"
            type="text"
            id="plantType"
            placeholder="Plant Type"
          />
          <input
            ref="_soilType"
            type="text"
            id="soilType"
            placeholder="Soil Type"
          />
          <input
            ref="_timeWatered"
            type="text"
            id="timeWatered"
            placeholder="Time Watered"
          />
          <input
            ref="_timeSinceWatered"
            type="text"
            id="timeSinceWatered"
            placeholder="Time Since Watered"
          />
        <button type="submit">Add new Plant!</button>
        </form>
      </div>
    );
  }
}



  CreatePlant.propTypes = {
    addNewPlantToList: PropTypes.func,
  }



export default CreatePlant;
