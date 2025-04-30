
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginModal from './LoginModal';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-urban-cyan flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-urban-navy"></div>
              </div>
              <span className="text-xl font-space font-bold text-urban-white">Urban<span className="text-urban-cyan">UX</span></span>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-urban-white hover:text-urban-cyan transition-colors">Home</Link>
            <Link to="/submit-issue" className="text-urban-white hover:text-urban-cyan transition-colors">Report Issue</Link>
            <Link to="/map-view" className="text-urban-white hover:text-urban-cyan transition-colors">Map View</Link>
            <Link to="/about" className="text-urban-white hover:text-urban-cyan transition-colors">About</Link>
            <Link to="/contact" className="text-urban-white hover:text-urban-cyan transition-colors">Contact</Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-urban-purple hover:bg-urban-purple/80 text-urban-white glow-hover">
                  Official Login
                </Button>
              </DialogTrigger>
              <DialogContent>
                <LoginModal />
              </DialogContent>
            </Dialog>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-urban-white p-2"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card m-2 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-urban-white hover:bg-urban-cyan/20 hover:text-urban-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/submit-issue" 
              className="block px-3 py-2 rounded-md text-base font-medium text-urban-white hover:bg-urban-cyan/20 hover:text-urban-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              Report Issue
            </Link>
            <Link 
              to="/map-view" 
              className="block px-3 py-2 rounded-md text-base font-medium text-urban-white hover:bg-urban-cyan/20 hover:text-urban-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              Map View
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-urban-white hover:bg-urban-cyan/20 hover:text-urban-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-urban-white hover:bg-urban-cyan/20 hover:text-urban-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mt-2 bg-urban-purple hover:bg-urban-purple/80 text-urban-white">
                  Official Login
                </Button>
              </DialogTrigger>
              <DialogContent>
                <LoginModal />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
