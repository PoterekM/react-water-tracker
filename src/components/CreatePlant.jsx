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
    const {_waterSchedule} = this.refs;
    var newPlant = new Plant(_name.value, _plantType.value, _soilType.value, _waterSchedule.value);
    this.props.addNewPlantToList(newPlant);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.preparePlantCreation}>
          <input
            required
            ref="_name"
            type="text"
            id="name"
            placeholder="Plant Name"
          />
          <input
            required
            ref="_plantType"
            type="text"
            id="plantType"
            placeholder="Plant Type"
          />
          <input
            required
            ref="_soilType"
            type="text"
            id="soilType"
            placeholder="Soil Type"
          />
          <input
            required
            ref="_waterSchedule"
            type="text"
            id="waterSchedule"
            placeholder="Water Schedule"
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
