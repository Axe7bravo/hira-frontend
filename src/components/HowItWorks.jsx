import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">How Hira Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Search</h3>
            <p className="text-gray-700">Find the perfect rental, venue, or job.</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <p className="text-gray-700">Contact owners or employers directly.</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Book/Apply</h3>
            <p className="text-gray-700">Secure your rental, venue, or job.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;