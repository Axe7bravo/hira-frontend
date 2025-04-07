import React, { useState } from 'react';

const RentalSearchFilters = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    bedrooms: '',
    amenities: [],
  });

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const amenity = e.target.value;
    const updatedAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter((a) => a !== amenity)
      : [...filters.amenities, amenity];
    setFilters({ ...filters, amenities: updatedAmenities });
  };

  const handleSearch = () => {
    onSearch(filters); // Pass the filters to the parent component
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      priceRange: '',
      bedrooms: '',
      amenities: [],
    });
    onSearch({
      location: '',
      priceRange: '',
      bedrooms: '',
      amenities: [],
    });
  };


  return (
    <div className="h-[64px] lg:h-[64px]  flex flex-row items-center justify-between border rounded-full mb-6">
      <div className='px-6 '>
        <h2 className="text-xl font-semibold mb-2">Search and Filters</h2>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
            <div className='px-6 flex flex-col ' >
            
            <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleInputChange}
                placeholder='Location'
                className="cursor-pointer w-[250px] h-[50px] px-8 flex flex-col justify-center border rounded-full hover:bg-gray-100"
            />
            </div>
            <div className='px-6 flex flex-col ' >
            <select
                name="priceRange"
                value={filters.priceRange}
                onChange={handleInputChange}
                className="cursor-pointer w-[250px] h-[50px] px-8 flex flex-col justify-center border rounded-full hover:bg-gray-100"
            >
                <option value="">Price Range</option>
                <option value="0-1000">0 - 1000</option>
                <option value="1000-2000">1000 - 2000</option>
                <option value="2000-3000">2000 - 3000</option>
                <option value="3000+">3000+</option>
            </select>
            </div>
            <div className='px-6 flex flex-col '>
            <select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleInputChange}
                className="cursor-pointer w-[250px] h-[50px] px-8 flex flex-col justify-center border rounded-full hover:bg-gray-100"
            >
                <option value="">Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
            </select>
            </div>
            <div className='px-6 flex flex-col '>
            <label className="block text-sm font-medium text-gray-700">Amenities:</label>
            <div className="flex flex-wrap">
                <label className="mr-4">
                <input
                    type="checkbox"
                    value="Wi-Fi"
                    checked={filters.amenities.includes('Wi-Fi')}
                    onChange={handleCheckboxChange}
                />
                <span className="ml-2">Wi-Fi</span>
                </label>
                <label className="mr-4">
                <input
                    type="checkbox"
                    value="Furnished"
                    checked={filters.amenities.includes('Furnished')}
                    onChange={handleCheckboxChange}
                />
                <span className="ml-2">Furnished</span>
                </label>
                <label className="mr-4">
                <input
                    type="checkbox"
                    value="Parking"
                    checked={filters.amenities.includes('Parking')}
                    onChange={handleCheckboxChange}
                />
                <span className="ml-2">Parking</span>
                </label>
                {/* Add more amenities as needed */}
            </div>
            </div>
        </div>
      </div>
      <div className='p-2 px-6 mb-3'>
        <button
            onClick={handleSearch}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>


        </button>
        <button
          onClick={clearFilters}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
        >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        </button>
      </div>
    </div>
  );
};

export default RentalSearchFilters;