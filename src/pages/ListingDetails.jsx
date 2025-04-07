import React from 'react';
import { useParams } from 'react-router-dom';

const ListingDetails = () => {
  const { id } = useParams(); // Get the listing ID from the URL params

  // Dummy data (replace with your actual data fetching logic later)
  const dummyListings = [
    {
      id: 1,
      title: 'Cozy Apartment Near NUL',
      description: 'A comfortable apartment with great amenities.',
      price: 3500,
      location: 'Roma, Lesotho',
      amenities: ['Wi-Fi', 'Furnished', 'Parking'],
      imageUrl: '/src/assets/feature_rental.jpg',
    },
    {
      id: 2,
      title: 'Spacious House in Maseru',
      description: 'A large house with a garden and plenty of space.',
      price: 6000,
      location: 'Maseru, Lesotho',
      amenities: ['Wi-Fi', 'Parking', 'Laundry'],
      imageUrl: '/src/assets/feature_rental.jpg',
    },
    // Add more dummy listings as needed
  ];

  // Find the listing with the matching ID
  const listing = dummyListings.find((item) => item.id === parseInt(id));

  // If the listing is not found, display an error message
  if (!listing) {
    return <div>Listing not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-[1500px] mx-auto">
      <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
      <img
        src={listing.imageUrl}
        alt={listing.title}
        className="w-[1500px] h-80 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 mb-2">{listing.description}</p>
      <p className="text-gray-700 mb-2">Price: ${listing.price}</p>
      <p className="text-gray-700 mb-2">Location: {listing.location}</p>
      <p className="text-gray-700 mb-4">
        Amenities: {listing.amenities.join(', ')}
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ListingDetails;