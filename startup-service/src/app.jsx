import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './login/login';
import { About } from './about/about';
import { Browse } from './browse/browse';
import { Find } from './find/find';
import { Review } from './review/review';

export default function App() {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('/api/auth/status', {
          method: 'GET',
          credentials: 'include',
        });
        if (response.ok) {
          const userData = await response.json();
          setUser(userData.email);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = (username) => {
    console.log("User logged in:", username);
    setUser(username);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'DELETE',
        credentials: 'include',
      });
      if (response.ok) {
        setUser(null);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <BrowserRouter>
      <div className="body">
        <header className="container-fluid">
          <h1>Rate My Dryer (And Washer)</h1>
          <nav className="navbar">
            <menu className="navbar-nav">
              <li className="nav-item">
                {!user && <NavLink className="nav-link" to="">Login</NavLink>}
                {user && <NavLink onClick={handleLogout} className="nav-link" to="">Logout</NavLink>}
              </li>
              <li className="nav-item">
                {user && <NavLink className="nav-link" to='browse'>Browse</NavLink> }
              </li>
              <li className="nav-item">
                {user && <NavLink className="nav-link" to='review'>Review</NavLink> }
              </li>
              <li className="nav-item">
                {user && <NavLink className="nav-link" to='find'>Laundromats near me</NavLink> }
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='about'>About</NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login onLogin={handleLogin} />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/browse' element={<Browse user={user}/>} />
          <Route path='/find' element={<Find user={user}/>} />
          <Route path='/review' element={<Review user={user}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
                
        <footer>
          <span>Author: Bill Killpack</span>
          <br />
          <a href="https://github.com/Billpack68/startup">GitHub</a>
          <br />
          <img src="RateMyDryerLogo.png" width="50px" height="50px" />
        </footer>
      </div>;
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}