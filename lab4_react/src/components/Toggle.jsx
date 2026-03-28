import React, { useState } from "react";

function PasswordToggle() {

  const [show, setShow] = useState(false);

  return (
    <div>
        <h1>lab4.2</h1>

      <h3>Password Toggle</h3>

      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />

      <br /><br />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

    </div>
  );
}

export default PasswordToggle;