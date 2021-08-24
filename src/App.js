import React from 'react';
import Login from './components/forms/Login';
import SignUp from './components/forms/SignUp';

function App() {
  return (
    <div className="ui container">
      <h1>Tipsy Rogue</h1>
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
