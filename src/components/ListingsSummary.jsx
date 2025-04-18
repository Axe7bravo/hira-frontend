import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const  ListingsSummary = () => {
  // Placeholder listings data
  const listings = [
    { id: 1, title: 'Cozy Apartment', location: 'New York', price: '$1500/month' },
    { id: 2, title: 'Luxury Villa', location: 'Los Angeles', price: '$5000/month' },
    { id: 3, title: 'Mountain Cabin', location: 'Denver', price: '$2000/month' },
    { id: 4, title: 'Beach House', location: 'Miami', price: '$3000/month' },
    { id: 5, title: 'City Loft', location: 'Chicago', price: '$2500/month' },
    { id: 6, title: 'Rural Cottage', location: 'Austin', price: '$1800/month' }, // Add more listings as needed
  ];

  return (
    <div className='container'>
    <Card>
      <CardHeader>
        <CardTitle>Searched Listing Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listings.map((listing) => (
              <div key={listing.id} className="border rounded-md p-4">
                <h3 className="text-lg font-semibold">{listing.title}</h3>
                <p>Location: {listing.location}</p>
                <p>Price: {listing.price}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
    </div>
    
  );
};

export default ListingsSummary;