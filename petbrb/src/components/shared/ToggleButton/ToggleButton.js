import React from "react";
import './ToggleButton.css'

const ToggleButton = () => {
  return (
    <div className="toggle">
      <input type="checkbox" id="btn" />
      <label for="btn">
        <span className="track">
          <span className="txt"></span>
        </span>
        <span className="thumb">|||</span>
      </label>
    </div>
  );
};

export default ToggleButton;
