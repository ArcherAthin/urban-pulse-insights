
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapComponent from '@/components/MapComponent';

const MapView = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-urban-white mb-4">
              Urban Issues Map
            </h1>
            <p className="text-urban-white/80 max-w-2xl mx-auto">
              Explore reported issues across the city. Filter by category, severity, or status to see what's happening in your neighborhood.
            </p>
          </header>
          
          <MapComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MapView;
