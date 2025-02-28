import React from 'react';
import './browse.css';

export function Browse({user}) {
  return (
    <main>
      <p>Currently logged in as {user}</p>
      
      
      <form>
        <div className="form-group">
          <label htmlFor="apartmentComplex">Apartment complex</label>
          <input type="text" className="form-control" id="apartmentComplex" placeholder="Heritage Halls" />
        </div>
        <div className="form-group">
          <label htmlFor="buildingNumber">Building Number</label>
          <input type="number" className="form-control" id="buildingNumber" placeholder="8" />
        </div>
        <div className="form-group">
          <label htmlFor="unitNumber">Washer/Dryer Number</label>
          <input type="number" className="form-control" id="unitNumber" placeholder="11" />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th className="col1">Date</th>
            <th className="col2">User</th>
            <th className="col3">Rating</th>
            <th className="col4">Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2/3/2025</td>
            <td>ClothesMan3000</td>
            <td>1/5</td>
            <td>Clothes didn't dry at all!</td>
          </tr>
          <tr>
            <td>2/1/2025</td>
            <td>iWearPantsToo</td>
            <td>3/5</td>
            <td>Have to run it for an extra 20 minutes</td>
          </tr>
        </tbody>
      </table>
      <br />
    </main>
  );
}