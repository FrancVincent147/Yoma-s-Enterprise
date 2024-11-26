import React, { useState } from 'react';
import { MapPin, X } from 'lucide-react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-wine-700 text-white">
      <div className="max-w-7xl mx-auto py-3 px-4 relative">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="h-5 w-5 text-brand-orange" />
          <p className="text-center font-medium">
            We've moved! Visit us at our new location: 123 Main Street, Dublin 1
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 hover:bg-wine-600 rounded-full transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}