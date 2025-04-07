import React, { useState } from 'react';

const RentalSearch = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [amenities, setAmenities] = useState([]);
  const allAmenities = ['Wi-Fi', 'Furnished', 'Parking', 'Laundry']; // Example amenities

  const handleAmenityChange = (amenity) => {
    if (amenities.includes(amenity)) {
      setAmenities(amenities.filter((a) => a !== amenity));
    } else {
      setAmenities([...amenities, amenity]);
    }
  };

  const handleSearch = () => {
    onSearch({ location, minPrice, maxPrice, amenities });
  };

  return (
    <div className="rental-search">
      <h2>Find Your Perfect Rental</h2>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      <div className="amenities">
        <h3>Amenities:</h3>
        {allAmenities.map((amenity) => (
          <label key={amenity}>
            <input
              type="checkbox"
              value={amenity}
              checked={amenities.includes(amenity)}
              onChange={() => handleAmenityChange(amenity)}
            />
            {amenity}
          </label>
        ))}
      </div>
      <button onClick={handleSearch}>Search</button>
      <style jsx>{`
        .rental-search {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .rental-search input,
        .rental-search button {
          margin-bottom: 10px;
          padding: 8px;
          width: 100%;
          box-sizing: border-box;
        }

        .amenities {
          margin-bottom: 10px;
        }

        .amenities label {
          display: block;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default RentalSearch;