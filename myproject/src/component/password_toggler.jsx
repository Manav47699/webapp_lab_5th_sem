import { useState } from 'react';
import './password.css'
import { useState } from 'react';

function Password_toggler(){
    const[showPassword, setShowPassword] = useState(false);
    tooglePassword = () => {
        setShowPassword(!showPassword)
    }
    return(
        <>
        <h1>Password show or hide togler</h1>
        <div>
        <input type={} name="" id="" />
        <button onClick={togglePasswrod}
        {showPassword ? "Hide": "Show"}>show</button>
        <p>password is hidden</p>
        </div>
        </>
    )
}

export default Password_toggler;