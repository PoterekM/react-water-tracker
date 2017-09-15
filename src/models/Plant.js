import Moment from "moment";

class Plant {
  constructor(name, plantType, soilType, timeWatered) {
    this.name = name;
    this.plantType = plantType;
    this.soilType = soilType;
    this.timeWatered = timeWatered;
    this.timeOfWater = new Moment()
    this.timeSinceWatered = this.setTimeSinceWatered();
  }

  setTimeSinceWatered() {
    this.timeSinceWatered = this.timeOfWater.fromNow(true);
  }



}
export default Plant;
