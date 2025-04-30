
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapComponent from '@/components/MapComponent';

const MapView = () => {
  // Add OpenStreetMap scripts
  React.useEffect(() => {
    // Add Leaflet CSS
    const leafletCss = document.createElement('link');
    leafletCss.rel = 'stylesheet';
    leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    leafletCss.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    leafletCss.crossOrigin = '';
    document.head.appendChild(leafletCss);
    
    // Add Leaflet JS
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    leafletScript.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    leafletScript.crossOrigin = '';
    document.head.appendChild(leafletScript);
    
    // Clean up on component unmount
    return () => {
      if (document.head.contains(leafletCss)) {
        document.head.removeChild(leafletCss);
      }
      if (document.head.contains(leafletScript)) {
        document.head.removeChild(leafletScript);
      }
    };
  }, []);

  // Initialize animations for this page
  useEffect(() => {
    const initPageAnimations = () => {
      // Apply animations to page content with a slight delay
      document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, 100 + (index * 100));
      });
    };
    
    // Initialize animations after a short delay to ensure content is rendered
    setTimeout(initPageAnimations, 200);
  }, []);

  return (
    <div className="min-h-screen flex flex-col page-enter page-enter-active">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <header className="mb-8 text-center animate-on-scroll">
            <h1 className="text-3xl md:text-4xl font-bold text-urban-white mb-4">
              Urban Issues Map
            </h1>
            <p className="text-urban-white/80 max-w-2xl mx-auto">
              Explore reported issues across the city. Filter by category, severity, or status to see what's happening in your neighborhood.
            </p>
          </header>
          
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <MapComponent />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MapView;
