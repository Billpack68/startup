import React, { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";

export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState('');
  const isFormValid = username.trim() !== "" && password.trim() !== "";
  const navigate = useNavigate();

  async function loginOrCreate(endpoint, e) {
    e.preventDefault(); // Prevent form refresh

    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ email: username, password: password }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    
    if (response.status === 200) {
      localStorage.setItem('username', username);
      onLogin(username);
      navigate('/'); // Redirect on successful login
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <main id="loginMain">
      <p>Login to your account:</p>
      <form>
        <div className="form-group">
          <label htmlFor="usernameInput">Username</label>
          <input type="email" onChange={(e) => setUsername(e.target.value)} className="form-control" id="usernameInput" placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="passwordInput" placeholder="Password" />
        </div>
        <button type="button" className="btn btn-primary" disabled={!isFormValid} onClick={(e) => loginOrCreate(`/api/auth/login`, e)}>Login</button>
        <button type="button" className="btn btn-secondary" disabled={!isFormValid} onClick={(e) => loginOrCreate(`/api/auth/create`, e)}>Create</button>
      </form>
      {displayError && <p className="error">{displayError}</p>}
    </main>
  );
}