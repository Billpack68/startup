import React from 'react';
import { ReviewEvent, EventNotifier } from '../eventNotifier';
import './review.css';

export function Review({ user }) {
  const [apartment, setApartment] = React.useState('');
  const [building, setBuilding] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [date, setDate] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [reviewText, setReviewText] = React.useState('');
  const isFormValid = apartment.trim() !== "" && building.trim() !== "" && number.trim() !== "" && date.trim() !== "" && rating.trim() !== "" && reviewText.trim() !== "";
  
  function apartmentChange(e) {
    setApartment(e.target.value);
  }
  
  function buildingChange(e) {
    setBuilding(e.target.value);
  }
  
  function numberChange(e) {
    setNumber(e.target.value);
  }

  function dateChange(e) {
    setDate(e.target.value);
  }
  
  function ratingChange(e) {
    setRating(e.target.value);
  }
  
  function reviewTextChange(e) {
    setReviewText(e.target.value);
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

  async function createReview(e) {
    const formattedDate = new Date(date);
    const review = await fetch('/api/addreview', {
      method: 'POST',
      body: JSON.stringify({ apartment: apartment, building: building, number: number, date: formattedDate, user: user, rating: rating, reviewText: reviewText}),
      headers: {'Content-Type': 'application/json',},
    });

    if (review.ok) {
      console.log('Success!');
    } else {
      console.error('Failed to add review:', await review.text());
    }
    
  }
  
  
  return (
    <main>
      <p>Currently logged in as: {user}</p>
      
      <p>Submit a review by answering the following questions and then hitting submit:</p>
      <form>
        <div className="form-group">
          <label htmlFor="apartmentComplex">Apartment complex</label>
          <input type="text" onChange={apartmentChange} className="form-control" id="apartmentComplex" placeholder="Heritage Halls" />
        </div>
        <div className="form-group">
          <label htmlFor="buildingNumber">Building Number</label>
          <input type="number" onChange={buildingChange} className="form-control" id="buildingNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="unitNumber">Washer/Dryer Number</label>
          <input type="number" onChange={numberChange} className="form-control" id="unitNumber"/>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" onChange={dateChange} className="form-control" id="date" placeholder="mm/dd/yyyy" />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating (1-5)</label>
          <input type="number" onChange={ratingChange} className="form-control" id="rating" />
        </div>
        <div className="form-group">
          <label htmlFor="reviewText">Review</label>
          <input type="text" onChange={reviewTextChange} className="form-control" id="review" placeholder="Best dryer ever!" />
        </div>
        <button type="submit" disabled={!isFormValid} onClick={createReview} className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}