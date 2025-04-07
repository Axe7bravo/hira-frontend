import React, { useState } from 'react';
import RentalSearch from '../components/RentalSearch';
import RentalList from '../components/RentalList';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const dummyListings = [
    {
      id: 1,
      title: 'Cozy Apartment Near NUL',
      description: 'A comfortable apartment with great amenities.',
      price: 3500,
      location: 'Roma, Lesotho',
      amenities: ['Wi-Fi', 'Furnished', 'Parking'],
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Spacious House in Maseru',
      description: 'A large house with a garden and plenty of space.',
      price: 6000,
      location: 'Maseru, Lesotho',
      amenities: ['Wi-Fi', 'Parking', 'Laundry'],
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Modern Flat in Town',
      description: 'A modern flat with a great view.',
      price: 4500,
      location: 'Maseru Central',
      amenities: ['Wi-Fi', 'Furnished'],
      imageUrl: 'https://via.placeholder.com/300',
    },
    // Add more dummy listings as needed
  ];

  const handleSearch = (filters) => {
    // Implement your search logic here (e.g., fetch data from backend or filter dummy data)
    // For now, let's filter the dummy data based on the filters:
    const filteredResults = dummyListings.filter((listing) => {
      const locationMatch = filters.location
        ? listing.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;
      const priceMatch =
        filters.minPrice && filters.maxPrice
          ? listing.price >= filters.minPrice && listing.price <= filters.maxPrice
          : true;
      const amenitiesMatch = filters.amenities.every((amenity) =>
        listing.amenities.includes(amenity)
      );

      return locationMatch && priceMatch && amenitiesMatch;
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Search Rentals</h1>
      <RentalSearch onSearch={handleSearch} />
      <RentalList listings={searchResults} />
    </div>
  );
};

export default Search;