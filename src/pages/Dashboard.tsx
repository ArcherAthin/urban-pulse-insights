
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DashboardCharts from '@/components/DashboardCharts';
import DashboardTable from '@/components/DashboardTable';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-urban-navy">
      <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-urban-cyan flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-urban-navy"></div>
              </div>
              <span className="text-xl font-space font-bold text-urban-white">Urban<span className="text-urban-cyan">UX</span></span>
            </Link>
            <div className="hidden md:block h-6 w-px bg-urban-white/20"></div>
            <span className="hidden md:block text-urban-white/80">Administrator Dashboard</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-urban-purple"></div>
              <span className="hidden md:inline-block ml-2 text-urban-white">City Official</span>
            </div>
            <Link to="/">
              <Button variant="ghost" className="text-urban-white hover:text-urban-cyan">
                Exit Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-urban-white mb-4 md:mb-0">
            City Dashboard
          </h1>
          
          <div className="flex items-center space-x-4">
            <div className="glass-card px-4 py-2 flex items-center space-x-2">
              <span className="text-urban-white/60 text-sm">Last Updated:</span>
              <span className="text-urban-white text-sm">April 30, 2025 - 10:45 AM</span>
            </div>
            <Button className="bg-urban-lime hover:bg-urban-lime/80 text-urban-navy">
              Refresh Data
            </Button>
          </div>
        </div>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6">
            <h3 className="text-urban-white/60 text-sm mb-1">Total Issues</h3>
            <p className="text-3xl font-bold text-urban-white">162</p>
            <div className="flex items-center space-x-2 mt-2 text-green-400 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>12% from last month</span>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-urban-white/60 text-sm mb-1">Pending Issues</h3>
            <p className="text-3xl font-bold text-urban-white">65</p>
            <div className="flex items-center space-x-2 mt-2 text-yellow-400 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>5% from last month</span>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-urban-white/60 text-sm mb-1">In Progress</h3>
            <p className="text-3xl font-bold text-urban-white">45</p>
            <div className="flex items-center space-x-2 mt-2 text-blue-400 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>8% from last month</span>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-urban-white/60 text-sm mb-1">Resolved</h3>
            <p className="text-3xl font-bold text-urban-white">52</p>
            <div className="flex items-center space-x-2 mt-2 text-green-400 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>15% from last month</span>
            </div>
          </div>
        </div>
        
        {/* Charts Section */}
        <div className="mb-8">
          <DashboardCharts />
        </div>
        
        {/* Table Section */}
        <div>
          <DashboardTable />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
