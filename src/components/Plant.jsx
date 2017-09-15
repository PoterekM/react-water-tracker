import React from "react";
import PropTypes from  "prop-types";
import CreatePlant from "./CreatePlant";

class Plant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CreatePlant/>
      </div>
    )
  }
}

export default Plant;
