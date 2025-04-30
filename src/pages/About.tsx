
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-urban-white mb-6">
              About Urban<span className="text-urban-cyan">UX</span>
            </h1>
            <p className="text-xl text-urban-white/80 max-w-3xl mx-auto">
              We're reimagining how citizens and officials collaborate to build smarter, more responsive cities.
            </p>
          </header>
          
          {/* Mission Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-urban-white mb-4">Our Mission</h2>
              <p className="text-urban-white/80 mb-6">
                Urban UX was founded with a simple yet powerful mission: to bridge the gap between citizens and their local governments through technology. We believe that by creating efficient channels for feedback and data-driven decision making, we can help build cities that truly serve their residents.
              </p>
              <p className="text-urban-white/80">
                Our platform transforms the traditional, fragmented process of reporting urban issues into a streamlined, transparent system that benefits everyone involved. Citizens gain a voice in urban planning, officials gain actionable insights, and communities thrive through improved infrastructure.
              </p>
            </div>
          </section>
          
          {/* Vision Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-urban-white mb-4">Our Vision</h2>
              <p className="text-urban-white/80">
                We envision cities where infrastructure problems are resolved proactively, where citizen feedback directly informs urban planning, and where technology creates transparency between governments and the people they serve.
              </p>
              <ul className="mt-6 space-y-2 text-urban-white/80">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-urban-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transparent issue resolution processes
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-urban-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Data-informed resource allocation
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-urban-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Citizen participation in urban planning
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-urban-cyan mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduced response times for critical issues
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-urban-white mb-4">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-urban-cyan font-bold">Transparency</h3>
                  <p className="text-urban-white/80">We believe in open processes and clear communication between all stakeholders.</p>
                </div>
                <div>
                  <h3 className="text-urban-cyan font-bold">Collaboration</h3>
                  <p className="text-urban-white/80">The best solutions emerge when citizens and officials work together.</p>
                </div>
                <div>
                  <h3 className="text-urban-cyan font-bold">Innovation</h3>
                  <p className="text-urban-white/80">We continuously evolve our platform to incorporate new technologies and methodologies.</p>
                </div>
                <div>
                  <h3 className="text-urban-cyan font-bold">Accessibility</h3>
                  <p className="text-urban-white/80">Our solutions are designed to be usable by all citizens, regardless of technical ability.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-urban-white mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-urban-purple/30 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-urban-white">Alex Rivera</h3>
                <p className="text-urban-cyan mb-2">Founder & CEO</p>
                <p className="text-urban-white/80 text-sm">
                  Former urban planner with a passion for civic technology and smart city initiatives.
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-urban-purple/30 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-urban-white">Sam Jordan</h3>
                <p className="text-urban-cyan mb-2">CTO</p>
                <p className="text-urban-white/80 text-sm">
                  Software architect specializing in geospatial applications and data visualization.
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-urban-purple/30 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-urban-white">Morgan Chen</h3>
                <p className="text-urban-cyan mb-2">Head of Partnerships</p>
                <p className="text-urban-white/80 text-sm">
                  Building relationships between UrbanUX and municipalities across the country.
                </p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section>
            <div className="glass-card p-8 text-center neon-border">
              <h2 className="text-2xl md:text-3xl font-bold text-urban-white mb-4">
                Join the Urban Revolution
              </h2>
              <p className="text-urban-white/80 mb-6 max-w-2xl mx-auto">
                Whether you're a citizen looking to improve your neighborhood or a city official seeking better insights, UrbanUX is the platform for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/submit-issue" className="bg-urban-cyan hover:bg-urban-cyan/80 text-urban-navy font-medium px-8 py-3 rounded-xl glow-hover">
                  Get Started
                </a>
                <a href="/contact" className="border border-urban-cyan text-urban-cyan hover:bg-urban-cyan/10 font-medium px-8 py-3 rounded-xl glow-hover">
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
