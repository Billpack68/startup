import React from 'react';
import './browse.css';

export function Browse({user}) {
  const [apartment, setApartment] = React.useState('');
  const [building, setBuilding] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [matchingReviews, setMatchingReviews] = React.useState([]); // Use state for reviews
  const isFormValid = apartment.trim() !== "" && building.trim() !== "";

  function apartmentChange(e) {
    setApartment(e.target.value);
  }

  function buildingChange(e) {
    setBuilding(e.target.value);
  }

  function numberChange(e) {
    setNumber(e.target.value);
  }

  class Review {
    constructor(apartment, building, number, date, user, rating, reviewText) {
      this.apartment = apartment;
      this.building = building;
      this.number = number;
      this.date = date;
      this.user = user;
      this.rating = rating;
      this.reviewText = reviewText;
    }
  }

  async function findReviews(e) {
    e.preventDefault();
    let matchedReviews = [];
    try {
      const reviewsResponse = await fetch('/api/reviews', {
        method: 'GET',
      });
      if (!reviewsResponse.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const reviewsData = await reviewsResponse.json();
      
      if (number != "") {
        matchedReviews = reviewsData.filter(review => 
          review.apartment === apartment && review.building === building && review.number === number);
      } else {
        matchedReviews = reviewsData.filter(review => 
          review.apartment === apartment && review.building === building
        );
      }
    
    } catch (error) {
      console.error('Error fetching or filtering reviews:', error);
    }

    if (matchedReviews.length === 0) {
      matchedReviews.push(new Review('Heritage Halls', '8', '11', '', '', '?', 'No reviews yet!'));
    }

    setMatchingReviews(matchedReviews);
  }

  return (
    <main>
      <p>Currently logged in as: {user}</p>
      
      <form onSubmit={findReviews}>
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
        <button type="submit" className="btn btn-primary" disabled={!isFormValid}>Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th className="col1">Date</th>
            <th className="col2">User</th>
            <th className="col3">Number</th>
            <th className="col4">Rating</th>
            <th className="col5">Review</th>
          </tr>
        </thead>
        <tbody>
          {matchingReviews.reverse().map((review, index) => (
            <tr key={index}>
              <td>{review.date.slice(5,7)}/{review.date.slice(8,10)}/{review.date.slice(0,4)}</td>
              <td>{review.user}</td>
              <td>{review.number}</td>
              <td>{review.rating}/5</td>
              <td>{review.reviewText}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </main>
  );
}