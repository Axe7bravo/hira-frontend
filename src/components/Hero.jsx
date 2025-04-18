import React from 'react';
import { Button } from "@/components/ui/button"
import { MapPinHouse, Warehouse, Car, BriefcaseBusiness } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-400">
      <div className="relative isolate px-6 pt-14 lg:px-8">

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Find Your Perfect Space & Opportunity in Lesotho{' '}
              <a href="/signup" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Get Started <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Hira connecting you to opportunities
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Helping You find Rentals, explore Venues, find Jobs, and More.
            </p>
            <div className="flex justify-center space-x-3 md:space-x-4 lg:space-x-6 flex-wrap md:flex-nowrap mt-10">
                      <a href='/rentals' className="mb-2 md:mb-0">
                        <Button variant="secondary" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full text-sm md:text-base">
                          <MapPinHouse className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Rentals
                        </Button>
                      </a>
                      <a href='/venues' className="mb-2 md:mb-0">
                        <Button variant="secondary" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-sm md:text-base">
                          <Warehouse className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Venues
                        </Button>
                      </a>
                      <a href='/jobs' className="mb-2 md:mb-0">
                        <Button variant="secondary" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full text-sm md:text-base">
                          <BriefcaseBusiness className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Jobs
                        </Button>
                      </a>
                      <a href='/cars' className="mb-2 md:mb-0">
                        <Button variant="secondary" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-sm md:text-base">
                          <Car className="mr-2 h-5 w-5 md:h-5 md:w-5" /> Cars
                        </Button>
                      </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}