import React from 'react';

const SignUp = () => {
  return (
    <form className="ui form">
      <div className="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div className="field">
        <label>Username</label>
        <input type="text" name="usernamename" placeholder="Username" />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="text" name="password" placeholder="password" />
      </div>
      <div className="field">
        <label>Confirm Password</label>
        <input type="text" name="password" placeholder="password" />
      </div>
      <button class="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
