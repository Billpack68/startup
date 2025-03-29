import React, { useEffect } from 'react';
import './find.css';

export function Find({user}) {
  const [city, setCity] = React.useState('');
  const [results, setResults] = React.useState([]);
  const isFormValid = city.trim() !== "";
  
  function cityChange(e) {
    setCity(e.target.value);
  }

  useEffect(() => {
    console.log(results);
  }, [results]);

  async function getLaundromats(e) {
    e.preventDefault();
    const response = await fetch(`/api/getLaundromats?city=${city}`, {
      method: 'GET',
    });
    const data = await response.json();
    setResults(data);
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