import React, { useState } from "react";

function LightBulb() {

  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>lab 4.1</h1>

      <h2>Light Bulb</h2>

      <img
        src={
          isOn
            ? "https://images.twinkl.co.uk/tr/raw/upload/u/ux/lightbulb-1875247-1920_ver_1.jpg"
            : "https://thumbs.dreamstime.com/b/vector-d-realistic-off-light-bulb-icon-closeup-isolated-white-background-design-template-clipart-glowing-vector-d-realistic-off-160677713.jpg"
        }
        alt="bulb"
        width="200"
      />

      <p>Status: {isOn ? "ON" : "OFF"}</p>

      <button onClick={toggleBulb}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>

    </div>
  );
}

export default LightBulb;