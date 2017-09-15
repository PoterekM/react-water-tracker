import React from "react";

function Header() {
  var headerStyles = {
    backgroundColor: "#4F9D67",
    textAlign: "center",
    fontFamily: "Arial",
    padding: "10px"
  }
  return (
    <div>
      <div style={headerStyles}>
        <h1>I wet my plants!!</h1>
        <h3>Watering tracker</h3>
      </div>
    </div>
  );
}

export default Header;
