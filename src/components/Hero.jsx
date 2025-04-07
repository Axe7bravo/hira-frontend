import React from 'react';
import { Button } from "@/components/ui/button"
import { Link } from 'lucide-react';

export default function Hero () {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-400 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Find Your Perfect Space & Opportunity in Lesotho
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Hira: Connecting You with Rentals, Venues, Jobs, and More.
        </p>
        <div className="flex justify-center space-x-4">
        <a href='/rentals'>
          <Button variant="secondary" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            
            Find Rentals
          </Button>
          </a>
          <a href='/venues'>
          <Button variant="secondary" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Explore Venues
          </Button>
          </a>
          <a href='/jobs'>
          <Button variant="secondary" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
            Find Jobs
          </Button>
          </a>
          <a href='/cars'>
          <Button variant="secondary" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Rent Cars
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

