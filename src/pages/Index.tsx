
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-urban-white mb-4">
                How Urban<span className="text-urban-cyan">UX</span> Works
              </h2>
              <p className="text-lg text-urban-white/80 max-w-3xl mx-auto">
                Our platform bridges the gap between citizens and city officials, creating a collaborative approach to urban improvement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Report Issues"
                description="Quickly submit reports about infrastructure issues in your neighborhood with our easy-to-use form."
              />
              
              {/* Feature 2 */}
              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                }
                title="Map Visualization"
                description="View all reported issues on an interactive map to see what's happening in your area."
              />
              
              {/* Feature 3 */}
              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                title="Data-Driven Insights"
                description="City officials gain valuable analytics to prioritize resources and improve infrastructure efficiently."
              />
              
              {/* Feature 4 */}
              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Track Progress"
                description="Follow the status of your reports as city services address them from submission to resolution."
              />
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-urban-navy to-urban-navy/90">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 glass-card animate-fade-in">
                <span className="text-4xl font-bold text-urban-cyan block mb-2">5,000+</span>
                <p className="text-urban-white text-lg">Issues Resolved</p>
              </div>
              <div className="text-center p-6 glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-4xl font-bold text-urban-purple block mb-2">15</span>
                <p className="text-urban-white text-lg">City Partners</p>
              </div>
              <div className="text-center p-6 glass-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <span className="text-4xl font-bold text-urban-lime block mb-2">94%</span>
                <p className="text-urban-white text-lg">User Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 text-center neon-border">
              <h2 className="text-3xl md:text-4xl font-bold text-urban-white mb-6">
                Ready to improve your city?
              </h2>
              <p className="text-lg text-urban-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of citizens making a difference in their communities through data-driven urban improvement.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/submit-issue" className="bg-urban-cyan hover:bg-urban-cyan/80 text-urban-navy font-medium px-8 py-3 rounded-xl glow-hover">
                  Report an Issue
                </a>
                <a href="/about" className="border border-urban-cyan text-urban-cyan hover:bg-urban-cyan/10 font-medium px-8 py-3 rounded-xl glow-hover">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
