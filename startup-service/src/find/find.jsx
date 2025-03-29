import React, { useEffect } from 'react';
import './find.css';

export function Find({user}) {
  const [city, setCity] = React.useState('');
  const [results, setResults] = React.useState([]);
  const isFormValid = city.trim() !== "";
  
  function cityChange(e) {
    setCity(e.target.value);
  }

  class Laundromat {
    constructor(name, address, hours) {
      this.name = name;
      this.address = address;
      this.hours = hours;
    }
  }

  async function getLaundromats(e) {
    e.preventDefault();
    const query = `
      [out:json][timeout:25];
      area["name"="${city}"]->.searchArea;
      node["shop"="laundry"](area.searchArea);
      out geom;
    `;

    const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
    const data = await response.json();
    const parsedData = parseData(data.elements);
    console.log("Parsely");
    setResults(parsedData);
  }

  function parseData(data) {
    let parsedData = [];
    for (let i = 0; i < data.length; i++) {
      let name = null;
      let address = null;
      let hours = null;

      if ('name' in data[i].tags) {
        name = data[i].tags.name;
      } else {
        name = "Unnamed Laundry Place";
      }

      if ('addr:housenumber' in data[i].tags === false && 'addr:street' in data[i].tags === false) {
        address = "I couldn't find an address, but here are the coordinates: " + data[i].lat + ", " + data[i].lon;
      } else {
        if ('addr:housenumber' in data[i].tags) {
          address = data[i].tags[`addr:housenumber`] + " ";
        } else {
          address = "(unknown building number on) "
        }
        if ('addr:street' in data[i].tags) {
          address += data[i].tags['addr:street']
        } else {
          address += "(on some unknown street)"
        }
      }

      if ('opening_hours' in data[i].tags) {
        hours = data[i].tags.opening_hours;
      } else {
        hours = "Unknown";
      }

      const laundromat = new Laundromat(name, address, hours);
      parsedData.push(laundromat)
    }
    return parsedData;
  }
  

  return (
    <main>
      <p>Currently logged in as: {user}</p>
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
            <th className="col1">Name</th>
            <th className="col2">Address</th>
            <th className="col3">Hours</th>
          </tr>
        </thead>
        <tbody>
        {results.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>{result.address}</td>
              <td>{result.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}