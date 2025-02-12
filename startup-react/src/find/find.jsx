import React from 'react';
import './find.css';

export function Find() {
  return (
    <main>
      <p>Currently loggeed in as
        <span className="username">Example User</span>
      </p>  
      <p>Find laundromats near you:</p>
      
      <form>
        <div className="form-group">
          <label for="address">Address:</label>
          <input type="text" className="form-control" id="address" placeholder="8 Heritage Halls, Provo UT, 84602" />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <br />
      <p>Results:</p>
      <table>
        <tr>
          <th className="col1">Address</th>
          <th className="col2">Name</th>
          <th className="col3">Distance</th>
          <th className="col4">Hours</th>
          <th className="col5">Price</th>
        </tr>
        <tr>
          <td>1624 900 E, Provo, UT 84602</td>
          <td>BYU Laundry</td>
          <td>REALLY Close</td>
          <td>7:30-5:30 Mon-Fri<br />10-1 Sat</td>
          <td>Varies</td>
        </tr>
        <tr>
          <td>440 900 E, Provo, UT 84606</td>
          <td>Laundry On Ninth</td>
          <td>Kinda close</td>
          <td>24/7</td>
          <td>$1.50 per Wash<br />$0.50 per Dry</td>
        </tr>
      </table>
    </main>
  );
}