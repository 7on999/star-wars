import React from 'react';


const LoginPage = ({ isLogged, onLogin }) => {

  if (isLogged) {
    return <span> You are authorized. Now you're ready to reveal the secret</span>;
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;