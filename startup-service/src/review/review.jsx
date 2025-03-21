import React from 'react';
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

  function createReview() {
    const review = new Review(apartment, building, number, date, user, rating, reviewText);
    if (localStorage.getItem('reviews')) {
      let reviews = JSON.parse(localStorage.getItem('reviews'));
      reviews.push(review);
      localStorage.setItem('reviews', JSON.stringify(reviews));
    } else {
      localStorage.setItem('reviews', JSON.stringify([review]));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    createReview();
  }
  
  
  return (
    <main>
      <p>Currently logged in as {user}</p>
      
      <p>Submit a review:</p>
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
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" onChange={dateChange} className="form-control" id="date" placeholder="mm/dd/yyyy" />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating (1-5)</label>
          <input type="number" onChange={ratingChange} className="form-control" id="rating" placeholder="4" />
        </div>
        <div className="form-group">
          <label htmlFor="reviewText">Review</label>
          <input type="text" onChange={reviewTextChange} className="form-control" id="review" placeholder="Best dryer ever!" />
        </div>
        <button type="submit" disabled={!isFormValid} onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}