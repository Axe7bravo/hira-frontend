import React from 'react';
import { HomeIcon, MapPinIcon, TruckIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Discover Diverse Rentals',
    description:
      'Find a wide selection of rental properties, from apartments to houses, in locations across Lesotho. Easily browse listings with detailed information and photos.',
    icon: HomeIcon,
  },
  {
    name: 'Explore Event Venues',
    description:
      'Locate the perfect venue for your next event, whether it\'s a wedding, conference, or party. Discover spaces with various capacities and amenities.',
    icon: MapPinIcon,
  },
  {
    name: 'Find Your Ideal Car',
    description:
      'Browse a range of cars available for rent or purchase. Filter by make, model, price, and location to find the right vehicle for your needs.',
    icon: TruckIcon,
  },
  {
    name: 'Connect with Job Opportunities',
    description:
      'Explore current job openings in various industries and locations. Find your next career opportunity and connect with potential employers.',
    icon: BriefcaseIcon,
  },
]

export default function HowItWorks()  {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-400 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-blue-800">How Hira works</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            For Rentals, Venues, Cars, and Jobs
          </p>

        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-800">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
