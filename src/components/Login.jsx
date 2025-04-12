import React from 'react';

const Login = ({handleLogin}) => {
    return (
        <div>
            <div>
                <label htmlFor="email">Your Email:</label>
                <input type="text" id='email' placeholder='Enter Your Email' />
            </div>
            <div>
                <label htmlFor="pass">Your Password:</label>
                <input type="password" name="pass" id="pass" placeholder='Password' />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;