import React from 'react';
import './browse.css';

export function Browse({user}) {
  const [apartment, setApartment] = React.useState('');
  const [building, setBuilding] = React.useState('');
  const [number, setNumber] = React.useState('');
  const isFormValid = apartment.trim() !== "" && building.trim() !== "" && number.trim() !== "";

  function apartmentChange(e) {
    setApartment(e.target.value);
  }

  function buildingChange(e) {
    setBuilding(e.target.value);
  }

  function numberChange(e) {
    setNumber(e.target.value);
  }

  function findReviews() {
    console.log(apartment);
    console.log(building);
    console.log(number);
  }

  return (
    <main>
      <p>Currently logged in as {user}</p>
      
      
      <form>
        <div className="form-group">
          <label htmlFor="apartmentComplex">Apartment complex</label>
          <input type="text" onChange={apartmentChange} className="form-control" id="apartmentComplex" placeholder="Heritage Halls" />
        </div>
        <div className="form-group">
          <label htmlFor="buildingNumber">Building Number</label>
          <input type="number" onChange={buildingChange} className="form-control" id="buildingNumber" placeholder="8" />
        </div>
        <div className="form-group">
          <label htmlFor="unitNumber">Washer/Dryer Number</label>
          <input type="number" onChange={numberChange} className="form-control" id="unitNumber" placeholder="11" />
        </div>
        <button type="submit" onClick={findReviews} className="btn btn-primary" disabled={!isFormValid}>Search</button>
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