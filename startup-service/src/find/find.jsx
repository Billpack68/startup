import React, { useEffect } from 'react';
import './find.css';

export function Find({user}) {
  const [city, setCity] = React.useState('');
  const [results, setResults] = React.useState(null);
  const isFormValid = city.trim() !== "";
  
  function cityChange(e) {
    setCity(e.target.value);
  }

  useEffect(() => {
    console.log(results);
  }, [results]);

  async function getData() {
    return new Promise((resolve) => setTimeout(async () => {
      const query = `
      [out:json][timeout:25];
      area["name"="${city}"]->.searchArea;
      node["shop"="laundry"](area.searchArea);
      out geom;`;

      const response = await fetch(`https://overpass-api.de/api/interpreter?data=`+ encodeURIComponent(query));
      resolve(response);
    }, 1000));
  }

  async function storeData(response) {
    const result = await response.json();
    setResults(result);
  }

  async function getLaundromats(e) {
    e.preventDefault();
    const response = await getData();
    await storeData(response);
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