
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-urban-navy via-urban-navy/95 to-black/90"></div>
      
      {/* Animated grid lines - City grid effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`v-${i}`} className="h-full w-px bg-urban-cyan/30"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`h-${i}`} className="w-full h-px bg-urban-cyan/30"></div>
          ))}
        </div>
      </div>
      
      {/* Glowing orbs in background */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-urban-purple/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-urban-cyan/20 blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-to-r from-urban-cyan via-urban-white to-urban-white">
            Smart Cities Begin with <br />
            <span className="text-urban-cyan">Smarter Feedback</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-urban-white/90 mb-8 max-w-3xl mx-auto">
            Connecting citizens and officials to build better urban environments through data-driven insights and collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/submit-issue">
              <Button size="lg" className="bg-urban-cyan hover:bg-urban-cyan/80 text-urban-navy font-medium text-lg px-8 py-6 rounded-xl glow-hover">
                Report an Issue
              </Button>
            </Link>
            <Link to="/map-view">
              <Button size="lg" variant="outline" className="border-urban-cyan text-urban-cyan hover:bg-urban-cyan/10 font-medium text-lg px-8 py-6 rounded-xl glow-hover">
                View City Map
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-urban-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
