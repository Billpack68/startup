import React, { useState } from 'react';
import { ReviewEvent, EventNotifier } from '../review/eventNotifier';
import { MessageDialog } from './messageDialog';
import './browse.css';

export function Browse({user}) {
  const [apartment, setApartment] = React.useState('');
  const [building, setBuilding] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [matchingReviews, setMatchingReviews] = React.useState([]); 
  const isFormValid = apartment.trim() !== "" && building.trim() !== "";

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');


  React.useEffect(() => {
    EventNotifier.addHandler(handleReviewEvent);

    return () => {
      EventNotifier.removeHandler(handleReviewEvent);
    };
  }, []);

  const showReviewMessage = (event) => {
    const reviewMessage = `${event.from} left a review of a washer/dryer in ${event.value.apartment} ${event.value.building}`;
    setMessage(reviewMessage);
    setShowMessage(true);

    // Automatically hide the message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  function handleReviewEvent(event) {
    console.log("event time!");
    if (event.type === ReviewEvent.End) {
      showReviewMessage(event);
    }
  }

  function apartmentChange(e) {
    setApartment(e.target.value);
  }

  function buildingChange(e) {
    setBuilding(e.target.value);
  }

  function numberChange(e) {
    setNumber(e.target.value);
  }

  function ratingChange(e) {
    setRating(e.target.value);
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
        if (rating != "") {
          matchedReviews = reviewsData.filter(review => 
            review.apartment === apartment && review.building === building && review.number === number && review.rating === rating);
        } else {
          matchedReviews = reviewsData.filter(review => 
            review.apartment === apartment && review.building === building && review.number === number);
          }
      } else {
        if (rating != "") {
          matchedReviews = reviewsData.filter(review => 
            review.apartment === apartment && review.building === building && review.rating === rating);
        } else {
          matchedReviews = reviewsData.filter(review => 
            review.apartment === apartment && review.building === building);
        }
      }
    } catch (error) {
      console.error('Error fetching or filtering reviews:', error);
    }

    if (matchedReviews.length === 0) {
      matchedReviews.push(new Review('Heritage Halls', '8', '', '', '', '?', 'No reviews yet!'));
    }

    setMatchingReviews(matchedReviews);
  }

  return (
    <main>
      <MessageDialog message={showMessage ? message : null} onHide={() => setShowMessage(false)} />
      <p>Currently logged in as: {user}</p>

      <p>Enter an apartment complex and building number to find recent reviews left by people on washers/dryers in that building!
        Optionally include a specific washer/dryer number or a specific rating (1-5) to filter results further.
        Or, click on "leave a review" above to leave your own review!
      </p>
      
      <form onSubmit={findReviews}>
        <div className="form-group">
          <label htmlFor="apartmentComplex">Apartment complex</label>
          <input type="text" onChange={apartmentChange} className="form-control" id="apartmentComplex" placeholder="Heritage Halls" />
        </div>
        <div className="form-group">
          <label htmlFor="buildingNumber">Building Number</label>
          <input type="number" onChange={buildingChange} className="form-control" id="buildingNumber"/>
        </div>
        <div className="form-group">
          <label htmlFor="unitNumber">Washer/Dryer Number (optional)</label>
          <input type="number" onChange={numberChange} className="form-control" id="unitNumber"/>
        </div>
        <div className="form-group">
          <label htmlFor="unitNumber">Rating (optional)</label>
          <input type="number" onChange={ratingChange} className="form-control" id="unitNumber"/>
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
          {matchingReviews.map((review, index) => (
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