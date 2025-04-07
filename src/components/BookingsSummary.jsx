import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

 export function BookingsSummary() {
  // Placeholder bookings data
  const bookings = [
    { id: 1, listing: 'Cozy Apartment', user: 'John Doe', date: '2023-11-20' },
    { id: 2, listing: 'Luxury Villa', user: 'Jane Smith', date: '2023-11-25' },
    { id: 3, listing: 'Mountain Cabin', user: 'Alice Johnson', date: '2023-11-30' },
    // Add more bookings as needed
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Bookings Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="border rounded-md p-4">
                <p>Listing: {booking.listing}</p>
                <p>User: {booking.user}</p>
                <p>Date: {booking.date}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

