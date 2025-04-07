import React from 'react';

const FeaturedListings = () => {
  const listings = [
    { id: 1, title: 'Student Apartment', image: '/src/assets/feature_rental.jpg', link: '/rentals/1' },
    { id: 2, title: 'Event Venue', image: '/src/assets/event_ven.jpg', link: '/venues/2' },
    { id: 3, title: 'Software Developer Job', image: '/src/assets/software_dev.jpg', link: '/jobs/3' },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
              <a href={listing.link} className="text-blue-600 hover:underline">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;