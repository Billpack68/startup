import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className="body bg-dark text-light">
    <header className="container-fluid">
      <h1>Rate My Dryer (And Washer)</h1>
      <nav className="navbar">
        <menu className="navbar-nav">
          <img src="RateMyDryerLogo.png" width="50px" height="50px" />
          <li className="nav-item">
            <a className="nav-link active" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="browse.html">Browse</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="review.html">Submit a review</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="find.html">Laundromats near me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <main>App data will go here</main>
    
    <footer>
      <span>Author: Bill Killpack</span>
      <br />
      <a href="https://github.com/Billpack68/startup">GitHub</a>
    </footer>
  </div>;
}