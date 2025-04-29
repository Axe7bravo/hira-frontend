import React, { useState } from 'react';
import RentalList from '../components/RentalList';
import RentalSearchFilters from '../components/RentalSearchFilters';
import Notification from '../components/Notification';
import { addRentalSearchToHistory } from '../utils/rentalSearchHistory'; // Import the function


const RentalListings = () => {


  // Dummy data for saved listings (replace with actual data fetching)
  const dummySavedListings = [
    {
      id: 1,
      title: 'Cozy Apartment Near NUL',
      description: 'A comfortable apartment with great amenities.',
      bedroom: 2,
      price: 3500,
      location: 'Roma',
      amenities: ['Wi-Fi', 'Furnished', 'Parking'],
      imageUrl: '/src/assets/feature_rental.jpg',
    },
    {
      id: 2,
      title: 'Spacious House in Maseru',
      description: 'A large house with a garden and plenty of space.',
      bedroom: 4,
      price: 6000,
      location: 'Maseru',
      amenities: ['Wi-Fi', 'Parking', 'Laundry'],
      imageUrl: '/src/assets/feature_rental.jpg',
    },
    {
      id: 3,
      title: 'Modern Flat in Town',
      description: 'A modern flat with a great view.',
      bedroom: 2,
      price: 4500,
      location: 'Maseru Central',
      amenities: ['Wi-Fi', 'Furnished'],
      imageUrl: '/src/assets/feature_rental.jpg',
    },
    {
      id: 4,
      title: 'Modern malaene',
      description: 'A modern flat with a great view.',
      bedroom: 1,
      price: 500,
      location: 'Naleli',
      amenities: ['Wi-Fi', 'Furnished'],
      imageUrl: '/src/assets/feature_rental.jpg',
    },
    {
      id: 5,
      title: 'student accommodation',
      description: 'A modern flat with a great view.',
      bedroom: 2,
      price: 4500,
      location: 'Ha abia',
      amenities: ['Wi-Fi', 'Furnished'],
      imageUrl: '/src/assets/feature_rental.jpg',
    },
    // Add more saved listings as needed
  ];

  const [originalListings] = useState([...dummySavedListings]);
  const [listings, setListings] = useState([...dummySavedListings]);
  const [notification, setNotification] = useState(null);


  const handleSearch = (filters) => {
    let filteredListings = [...originalListings];
    let errors = {}; // Object to store error messages
    let hasActiveFilters = false;

    // Check if any filter has a non-default value
    if (filters.location) hasActiveFilters = true;
    if (filters.priceRange) hasActiveFilters = true;
    if (filters.bedrooms) hasActiveFilters = true;
    if (filters.amenities.length > 0) hasActiveFilters = true;

    // Location filter
    if (filters.location) {
      if (typeof filters.location !== 'string') {
        errors.location = 'Invalid location format.';
      } else {
        filteredListings = filteredListings.filter((listing) =>
          listing.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }
    }

    // Price range filter
    if (filters.priceRange) {
      const priceRangeParts = filters.priceRange.split('-');
      if (priceRangeParts.length !== 2 && !filters.priceRange.endsWith('+')) {
        errors.priceRange = 'Invalid price range format.';
      } else {
        const minPrice = parseInt(priceRangeParts[0]);
        const maxPrice = priceRangeParts[1] ? parseInt(priceRangeParts[1]) : null;

        if (isNaN(minPrice) || (maxPrice !== null && isNaN(maxPrice))) {
          errors.priceRange = 'Invalid price values.';
        } else {
          if (maxPrice !== null) {
            filteredListings = filteredListings.filter(
              (listing) => listing.price >= minPrice && listing.price <= maxPrice
            );
          } else {
            filteredListings = filteredListings.filter(
              (listing) => listing.price >= minPrice
            );
          }
        }
      }
    }

    // Bedrooms filter
    if (filters.bedrooms) {
      const bedroomsValue = parseInt(filters.bedrooms);
      if (isNaN(bedroomsValue) && !filters.bedrooms.includes('+')) {
        errors.bedrooms = 'Invalid bedrooms value.';
      } else {
        if (filters.bedrooms.includes('+')) {
          filteredListings = filteredListings.filter(
            (listing) => listing.bedroom >= bedroomsValue
          );
        } else {
          filteredListings = filteredListings.filter(
            (listing) => listing.bedroom === bedroomsValue
          );
        }
      }
    }

    // Amenities filter
    if (filters.amenities.length > 0) {
      if (!Array.isArray(filters.amenities)) {
        errors.amenities = 'Invalid amenities format.';
      } else {
        filteredListings = filteredListings.filter((listing) =>
          filters.amenities.every((amenity) => listing.amenities.includes(amenity))
        );
      }
    }

    if (Object.keys(errors).length > 0) {
      setNotification({ message: 'Please fix the errors below.', type: 'error' });
      return;
    } else {
      // Only show the success notification if there were active filters
      if (hasActiveFilters) {
        setNotification({ message: 'Search successful!', type: 'success' });
        addRentalSearchToHistory(filters); // Still save the search if filters were applied
      }
    }

    setListings(filteredListings);
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };


  return (


    <div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}


      <h1 className='text-center text-4xl mt-6 mb-6 '>Available Listings</h1>

      <RentalSearchFilters onSearch={handleSearch} />


      
      {listings.length > 0 ? (
        <RentalList listings={listings} />
      ) : (
        <p>No listings found based on your search criteria.</p>
      )}
    </div>


    

  );
};

export default RentalListings;