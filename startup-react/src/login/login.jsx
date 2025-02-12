import React from 'react';
import './login.css';

export function Login() {
  return (
    <main id="loginMain">
      <p>Login to your account:</p>
      <form>
        <div className="form-group">
          <label for="usernameInput">Username</label>
          <input type="email" className="form-control" id="usernameInput" aria-describedby="emailHelp" placeholder="your@email" />
        </div>
        <div className="form-group">
          <label for="passwordInput">Password</label>
          <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="submit" className="btn btn-secondary">Create account</button>
      </form>
      <br />
    </main>
  );
}