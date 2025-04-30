
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IssueForm from '@/components/IssueForm';

const SubmitIssue = () => {
  // Initialize animations for this page
  useEffect(() => {
    const initPageAnimations = () => {
      // Apply animations to page content
      document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, 100 + (index * 100));
      });
    };
    
    // Initialize animations after a short delay
    setTimeout(initPageAnimations, 200);
  }, []);

  return (
    <div className="min-h-screen flex flex-col page-enter page-enter-active">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <header className="mb-8 text-center animate-on-scroll">
              <h1 className="text-3xl md:text-4xl font-bold text-urban-white mb-4">
                Report an Urban Issue
              </h1>
              <p className="text-urban-white/80">
                Help improve your neighborhood by reporting infrastructure issues. Your feedback makes a difference!
              </p>
            </header>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <IssueForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitIssue;
