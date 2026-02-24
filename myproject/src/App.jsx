// import { useState } from "react";

// import Password_toggler from "./component/password_toggler";

// function ShowHideInput() {
//   const [hidden, setHidden] = useState(false);

//   return (
//     <div>
//       <input
//         type={hidden ? "password" : "text"}
//         placeholder="Type something..."
//       />

//       <button onClick={() => setHidden(!hidden)}>
//         {hidden ? "Show" : "Hide"}
//       </button>
//     </div>
//   );
// }

// export default ShowHideInput;


// function App(){
//   const [count, setCount] = useState(0);
//   return(
//     <Password_toggler />
//   )
// }

// export default  App;

import { useState } from "react";

function ShowHideInput() {
  const [hidden, setHidden] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <div>
        <h1>Password Toggler</h1>

        <input
          type={hidden ? "password" : "text"}
          placeholder="Type something..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => setHidden(!hidden)}>
          {hidden ? "Show" : "Hide"}
        </button>
      </div>

      
      {!hidden && password && (
        <div>
          <h3>Password entered is:</h3>
          <h1>{password}</h1>
        </div>
      )}
    </>
  );
}
export default ShowHideInput;