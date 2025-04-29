import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRentalSearchHistory } from '../utils/rentalSearchHistory'; // Adjust path as needed
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react'; // Example remove icon

const RentalSearchHistoryDisplay = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const history = getRentalSearchHistory();
    setSearchHistory(history);
  }, []);

  const formatSearchSummary = (criteria) => {
    const parts = [];
    if (criteria.location) {
      parts.push(`Location: ${criteria.location}`);
    }
    if (criteria.priceRange) {
      parts.push(`Price: ${criteria.priceRange}`);
    }
    if (criteria.bedrooms) {
      parts.push(`Bedrooms: ${criteria.bedrooms}`);
    }
    if (criteria.amenities && criteria.amenities.length > 0) {
      parts.push(`Amenities: ${criteria.amenities.join(', ')}`);
    }
    return parts.join(', ') || 'No filters applied';
  };

  const handleReRunSearch = (criteria) => {
    console.log('Re-running search with:', criteria);
    // Navigate to the rental listings page and pass the criteria as query parameters
    const queryParams = new URLSearchParams(criteria);
    navigate(`/rentals?${queryParams.toString()}`);
    // You'll need to implement logic on the RentalListings page to
    // read these query parameters and apply them to the search.
  };

  const handleRemoveSearch = (indexToRemove) => {
    const updatedHistory = searchHistory.filter((_, index) => index !== indexToRemove);
    localStorage.setItem('rentalSearchHistory', JSON.stringify(updatedHistory));
    setSearchHistory(updatedHistory);
  };

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Recent Rental Searches</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {searchHistory.length > 0 ? (
            <ul className="space-y-3">
              {searchHistory.map((search, index) => (
                <li
                  key={index}
                  className="bg-white rounded-md shadow p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">{formatSearchSummary(search)}</p>
                    {/* You could add a formatted date here if you decide to store it */}
                  </div>
                  <div className="flex items-center p-2 space-x-2">
                    <Button
                      size="sm"
                      className="text-white rounded-md bg-blue-800 hover:bg-blue-100"
                      onClick={() => handleReRunSearch(search)}
                    >
                      Re-run
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-red-500 hover:bg-red-100"
                      onClick={() => handleRemoveSearch(index)}
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No recent rental searches.</p>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RentalSearchHistoryDisplay;