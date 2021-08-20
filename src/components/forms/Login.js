import React from 'react';

const Login = () => {
  return (
    <form className="ui form">
      <div className="field">
        <label>Username:</label>
        <input type="text" name="username" placeholder="username" />
      </div>
      <div className="field">
        <label>Password:</label>
        <input type="text" name="password" placeholder="Password" />
      </div>
      <button class="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Login;
