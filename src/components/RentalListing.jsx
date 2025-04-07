import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RentalListing = ({ listing }) => {
  const {
    id,
    title,
    description,
    price,
    location,
    amenities,
    imageUrl,
  } = listing;

  return (
    <div>
      <img src={imageUrl} alt={title} className="listing-image" />
      <h2>{title}</h2>
      <p className="location">{location}</p>
      <p className="price">R{price}/month</p>
      <p className="description">{description}</p>
      <div className="amenities">
        <h3>Amenities:</h3>
        <ul>
          {amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
      </div>
      <Link to={`/listing/${id}`} className="view-details">
        View Details
      </Link>

    </div>
  );
};

export default RentalListing;