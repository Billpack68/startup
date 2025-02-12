import React from 'react';
import './review.css';

export function Review() {
  return (
    <main>
      <p>Currently loggeed in as
        <span className="username">Example User</span>
      </p>
      
      <p>Submit a review:</p>
      <form>
        <div className="form-group">
          <label for="apartmentComplex">Apartment complex</label>
          <input type="text" className="form-control" id="apartmentComplex" placeholder="Heritage Halls" />
        </div>
        <div className="form-group">
          <label for="buildingNumber">Building Number</label>
          <input type="number" className="form-control" id="buildingNumber" placeholder="8" />
        </div>
        <div className="form-group">
          <label for="unitNumber">Washer/Dryer Number</label>
          <input type="number" className="form-control" id="unitNumber" placeholder="11" />
        </div>
        <div className="form-group">
          <label for="date">Date</label>
          <input type="date" className="form-control" id="date" placeholder="mm/dd/yyyy" />
        </div>
        <div className="form-group">
          <label for="rating">Rating (1-5)</label>
          <input type="number" className="form-control" id="rating" placeholder="4" />
        </div>
        <div className="form-group">
          <label for="review">Review</label>
          <input type="text" className="form-control" id="review" placeholder="Best dryer ever!" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}