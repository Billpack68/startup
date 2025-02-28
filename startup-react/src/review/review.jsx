import React from 'react';
import './review.css';

export function Review({ user }) {
  return (
    <main>
      <p>Currently logged in as {user}</p>
      
      <p>Submit a review:</p>
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
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" className="form-control" id="date" placeholder="mm/dd/yyyy" />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating (1-5)</label>
          <input type="number" className="form-control" id="rating" placeholder="4" />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <input type="text" className="form-control" id="review" placeholder="Best dryer ever!" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}