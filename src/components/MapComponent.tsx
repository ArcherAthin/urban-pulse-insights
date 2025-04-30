
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for our map pins
const mockIssues = [
  { id: 1, title: 'Pothole', category: 'roads', severity: 3, status: 'pending', lat: 40.712, lng: -74.006 },
  { id: 2, title: 'Broken Streetlight', category: 'electricity', severity: 2, status: 'in-progress', lat: 40.714, lng: -74.009 },
  { id: 3, title: 'Water Leak', category: 'water', severity: 4, status: 'pending', lat: 40.718, lng: -74.002 },
  { id: 4, title: 'Garbage Pile', category: 'sanitation', severity: 3, status: 'resolved', lat: 40.715, lng: -74.012 },
  { id: 5, title: 'Bus Stop Damage', category: 'transport', severity: 2, status: 'in-progress', lat: 40.709, lng: -74.005 },
];

const MapComponent = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // In a real app, we would use a proper map library like react-map-gl or Google Maps
  // For now, we'll use a placeholder with our UI elements
  
  return (
    <div className="glass-card p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-urban-white">Issue Map</h2>
        
        <div className="flex flex-wrap gap-3">
          <Select onValueChange={setCategoryFilter} value={categoryFilter}>
            <SelectTrigger className="w-[140px] bg-urban-navy/50 border-urban-cyan/30 text-urban-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="roads">Roads</SelectItem>
              <SelectItem value="water">Water</SelectItem>
              <SelectItem value="electricity">Electricity</SelectItem>
              <SelectItem value="transport">Transport</SelectItem>
              <SelectItem value="sanitation">Sanitation</SelectItem>
            </SelectContent>
          </Select>
          
          <Select onValueChange={setSeverityFilter} value={severityFilter}>
            <SelectTrigger className="w-[140px] bg-urban-navy/50 border-urban-cyan/30 text-urban-white">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="1">1 (Minor)</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3 (Moderate)</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5 (Critical)</SelectItem>
            </SelectContent>
          </Select>
          
          <Select onValueChange={setStatusFilter} value={statusFilter}>
            <SelectTrigger className="w-[140px] bg-urban-navy/50 border-urban-cyan/30 text-urban-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="map-container relative bg-urban-navy/30 border border-urban-cyan/30">
        {/* Mock map - in a real app, this would be a map component */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-urban-cyan/50 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="10" r="3"/>
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
            </svg>
          </div>
          <p className="text-urban-white/80 text-center max-w-md">
            Interactive map with issue pins would be displayed here.
            <br/>
            In a real app, this would use Mapbox, Google Maps, or a similar service.
          </p>
          <Button 
            className="mt-4 bg-urban-cyan hover:bg-urban-cyan/80 text-urban-navy"
            onClick={() => alert('In a real app, this would navigate to your location on the map')}
          >
            Show my location
          </Button>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-urban-white mb-4">Recent Reports</h3>
        
        <div className="space-y-4">
          {mockIssues.filter(issue => 
            (categoryFilter === 'all' || issue.category === categoryFilter) &&
            (severityFilter === 'all' || issue.severity.toString() === severityFilter) &&
            (statusFilter === 'all' || issue.status === statusFilter)
          ).map(issue => (
            <div key={issue.id} className="glass-card p-4 hover:border-urban-cyan/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-urban-white">{issue.title}</h4>
                  <p className="text-sm text-urban-white/70">Category: {issue.category.charAt(0).toUpperCase() + issue.category.slice(1)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-urban-white/70">Severity: {issue.severity}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    issue.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                    issue.status === 'in-progress' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {issue.status.charAt(0).toUpperCase() + issue.status.slice(1).replace('-', ' ')}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-xs text-urban-white/60">
                Location: {issue.lat.toFixed(6)}, {issue.lng.toFixed(6)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
