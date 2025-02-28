import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { About } from './about/about';
import { Browse } from './browse/browse';
import { Find } from './find/find';
import { Review } from './review/review';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <header className="container-fluid">
          <h1>Rate My Dryer (And Washer)</h1>
          <nav className="navbar">
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='browse'>Browse</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='review'>Review</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='find'>Laundromats near me</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='about'>About</NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/find' element={<Find />} />
          <Route path='/review' element={<Review />} />
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