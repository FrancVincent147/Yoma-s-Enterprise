import React from 'react';
import { Calendar, DollarSign, Fuel, Car as CarIcon } from 'lucide-react';
import { cars } from '../data/cars';

export default function CarShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car) => (
        <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src={car.image} 
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">
              {car.year} {car.make} {car.model}
            </h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CarIcon className="h-5 w-5 mr-2" />
                <span>{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Fuel className="h-5 w-5 mr-2" />
                <span>{car.fuelType}</span>
              </div>
              <div className="flex items-center text-blue-600 font-bold text-xl mt-4">
                <DollarSign className="h-5 w-5 mr-1" />
                <span>{car.price.toLocaleString()}</span>
              </div>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}