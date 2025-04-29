import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { WifiIcon, CircleParking, WashingMachine, Bed } from 'lucide-react';

const ListingDetails = () => {
  const { id } = useParams();

  // Dummy data (replace with your actual data fetching logic later)
  const dummyListings = [
    {
      id: 1,
      title: 'Cozy Apartment Near NUL',
      description: 'A comfortable apartment with great amenities. Enjoy the convenience of being close to the National University of Lesotho and the vibrant life of Roma.',
      price: 3500,
      location: 'Roma, Lesotho',
      amenities: ['Wi-Fi', 'Furnished', 'Parking'],
      imageUrl: '/src/assets/feature_rental.jpg',
      details: {
        bedrooms: 1,
        bathrooms: 1,
        size: '50 sq meters',
      },
    },
    {
      id: 2,
      title: 'Spacious House in Maseru',
      description: 'A large house with a beautiful garden and plenty of space for a family. Located in a quiet residential area of Maseru.',
      price: 6000,
      location: 'Maseru, Lesotho',
      amenities: ['Wi-Fi', 'Parking', 'Laundry'],
      imageUrl: '/src/assets/feature_rental.jpg',
      details: {
        bedrooms: 3,
        bathrooms: 2,
        size: '150 sq meters',
      },
    },
    // Add more dummy listings as needed
  ];

  const listing = dummyListings.find((item) => item.id === parseInt(id));

  if (!listing) {
    return <div className="container mx-auto p-4">Listing not found.</div>;
  }

  const amenityIcons = {
    'Wi-Fi': <WifiIcon className="mr-2 h-4 w-4"/>,
    'Furnished': <Bed className="mr-2 h-4 w-4"/>,
    'Parking': <CircleParking className="mr-2 h-4 w-4"/>,
    'Laundry': <WashingMachine className="mr-2 h-4 w-4"/>,
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <Card className="shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold">{listing.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
             {listing.location}
          </p>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="relative w-full aspect-video rounded-md overflow-hidden mb-6">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{listing.description}</p>
          </div>
          <Separator className="my-4" />
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {listing.details?.bedrooms && (
                <p className="text-gray-700">Bedrooms: {listing.details.bedrooms}</p>
              )}
              {listing.details?.bathrooms && (
                <p className="text-gray-700">Bathrooms: {listing.details.bathrooms}</p>
              )}
              {listing.details?.size && (
                <p className="text-gray-700">Size: {listing.details.size}</p>
              )}
            </div>
          </div>
          <Separator className="my-4" />
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {listing.amenities.map((amenity) => (
                <Badge key={amenity}>
                  {amenityIcons[amenity]} {amenity}
                </Badge>
              ))}
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">
                 M {listing.price}
              </h3>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
            <div className="space-x-2">
              <Button variant="outline">Contact</Button>
              <Button variant="outline">Book Now</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListingDetails;