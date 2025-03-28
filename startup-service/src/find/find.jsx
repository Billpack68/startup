import React from 'react';
import './find.css';

export function Find({user}) {
  const [city, setCity] = React.useState('');
  const [results, setResults] = React.useState(null);
  const isFormValid = city.trim() !== "";
  
  function cityChange(e) {
    setCity(e.target.value);
  }

  async function getLaundromats(e) {
    e.preventDefault();
    console.log("City:", city);
    const response = await fetch(
      "https://overpass-api.de/api/interpreter?data=%2F*%0AThis%20has%20been%20generated%20by%20the%20overpass-turbo%20wizard.%0AThe%20original%20search%20was%3A%0A%E2%80%9Cshop%3Dlaundry%20in%20Provo%E2%80%9D%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F%20fetch%20area%20%E2%80%9C" + city + "%E2%80%9D%20to%20search%20in%0Aarea%28id%3A3600198903%29-%3E.searchArea%3B%0A%2F%2F%20gather%20results%0Anwr%5B%22shop%22%3D%22laundry%22%5D%28area.searchArea%29%3B%0A%2F%2F%20print%20results%0Aout%20geom%3B"
    );

    const result = await response.json();
    setResults(result);
  }
  

  return (
    <main>
      <p>Currently logged in as {user}</p>
      <p>Find laundromats near you:</p>
      
      <form>
        <div className="form-group">
          <label htmlFor="city">Enter the name of a city:</label>
          <input type="text" onChange={cityChange} className="form-control" id="city" placeholder="Provo" />
        </div>
        <button type="submit" disabled={!isFormValid} onClick={getLaundromats} className="btn btn-primary">Search</button>
      </form>
      <br />
      <p>Results:</p>
      <table>
        <thead>
          <tr>
            <th className="col1">Address</th>
            <th className="col2">Name</th>
            <th className="col3">Distance</th>
            <th className="col4">Hours</th>
            <th className="col5">Price</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>"Dummy data" (real places)</td>
            <td>This will use an API</td>
            <td>to find</td>
            <td>REAL LAUNDROMATS (NOT CLICKBAIT)</td>
            <td>near<br />YOU</td>
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
        </tbody>
      </table>
    </main>
  );
}