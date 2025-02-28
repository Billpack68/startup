import React from 'react';
import './login.css';

export function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  function loginUser() {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  function usernameChange(e) {
    setUsername(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }
  
  return (
    <main id="loginMain">
      <p>Login to your account:</p>
      <form>
        <div className="form-group">
          <label htmlFor="usernameInput">Username</label>
          <input type="text" onChange={usernameChange} className="form-control" id="usernameInput" aria-describedby="emailHelp" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input type="password" onChange={passwordChange} className="form-control" id="passwordInput" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={loginUser}>Login</button>
      </form>
      <br />
    </main>
  );
}