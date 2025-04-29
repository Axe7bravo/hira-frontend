import React from 'react';
import { Link } from 'react-router-dom';

const RentalList = ({ listings }) => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="border rounded-lg overflow-hidden shadow-md">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
              <p className="text-gray-700 mb-2">{listing.description}</p>
              <p className="text-gray-700 mb-2">Bedrooms: {listing.bedroom}</p>
              <p className="text-gray-700 mb-2">Price: M{listing.price}</p>
              <p className="text-gray-700 mb-2">Location: {listing.location}</p>
              <Link
                to={`/listing/${listing.id}`}
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RentalList;