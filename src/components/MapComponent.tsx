
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for our map pins
const mockIssues = [
  { id: 1, title: 'Pothole', description: 'Large pothole causing traffic hazard', category: 'roads', severity: 3, status: 'pending', lat: 40.712, lng: -74.006, date: '2025-04-15' },
  { id: 2, title: 'Broken Streetlight', description: 'Streetlight not working for 3 days', category: 'electricity', severity: 2, status: 'in-progress', lat: 40.714, lng: -74.009, date: '2025-04-18' },
  { id: 3, title: 'Water Leak', description: 'Water leaking from main pipe', category: 'water', severity: 4, status: 'pending', lat: 40.718, lng: -74.002, date: '2025-04-12' },
  { id: 4, title: 'Garbage Pile', description: 'Uncollected trash for a week', category: 'sanitation', severity: 3, status: 'resolved', lat: 40.715, lng: -74.012, date: '2025-04-10' },
  { id: 5, title: 'Bus Stop Damage', description: 'Bus stop shelter damaged by vandalism', category: 'transport', severity: 2, status: 'in-progress', lat: 40.709, lng: -74.005, date: '2025-04-20' },
];

// Define a type for the Leaflet library
declare global {
  interface Window {
    L: any;
  }
}

const MapComponent = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  
  // Initialize OpenStreetMap
  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize map if not already initialized
      const L = window.L;
      if (!L) return;
      
      // Create map instance
      const map = L.map(mapRef.current).setView([40.712, -74.006], 13);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      mapInstanceRef.current = map;
      
      // Add initial markers
      addMarkers();
    }
  }, []);

  // Add markers based on filtered data
  const addMarkers = () => {
    const L = window.L;
    if (!L || !mapInstanceRef.current) return;
    
    // Clear existing markers
    if (markersRef.current.length) {
      markersRef.current.forEach(marker => mapInstanceRef.current.removeLayer(marker));
      markersRef.current = [];
    }
    
    // Filter issues based on selected filters
    const filteredIssues = mockIssues.filter(issue => 
      (categoryFilter === 'all' || issue.category === categoryFilter) &&
      (severityFilter === 'all' || issue.severity.toString() === severityFilter) &&
      (statusFilter === 'all' || issue.status === statusFilter)
    );
    
    // Add markers for filtered issues
    filteredIssues.forEach(issue => {
      const marker = L.marker([issue.lat, issue.lng]).addTo(mapInstanceRef.current);
      
      // Get status color
      const statusColor = 
        issue.status === 'pending' ? 'text-yellow-300' : 
        issue.status === 'in-progress' ? 'text-blue-300' : 
        'text-green-300';
      
      // Create popup content
      const popupContent = `
        <div class="p-3 min-w-[200px]">
          <h3 class="font-bold">${issue.title}</h3>
          <p class="text-sm mt-1">${issue.description}</p>
          <div class="flex justify-between text-sm mt-2">
            <span>Category: ${issue.category.charAt(0).toUpperCase() + issue.category.slice(1)}</span>
            <span>Severity: ${issue.severity}/5</span>
          </div>
          <div class="text-sm mt-1">
            <span class="${statusColor}">
              ${issue.status.charAt(0).toUpperCase() + issue.status.slice(1).replace('-', ' ')}
            </span>
          </div>
          <div class="text-xs mt-2 text-gray-500">
            Reported: ${issue.date}
          </div>
        </div>
      `;
      
      marker.bindPopup(popupContent);
      markersRef.current.push(marker);
    });
  };

  // Update markers when filters change
  useEffect(() => {
    if (mapInstanceRef.current) {
      addMarkers();
    }
  }, [categoryFilter, severityFilter, statusFilter]);
  
  return (
    <div className="glass-card p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-urban-white flex items-center">
          <MapPin className="mr-2" /> Issue Map
        </h2>
        
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
      
      <div className="map-container relative bg-urban-navy/30 border border-urban-cyan/30 rounded-2xl overflow-hidden">
        {/* OpenStreetMap will be rendered here */}
        <div ref={mapRef} className="h-[500px] w-full"></div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-urban-white mb-4 flex items-center">
          <Filter className="mr-2" /> Recent Reports
        </h3>
        
        <div className="space-y-4">
          {mockIssues.filter(issue => 
            (categoryFilter === 'all' || issue.category === categoryFilter) &&
            (severityFilter === 'all' || issue.severity.toString() === severityFilter) &&
            (statusFilter === 'all' || issue.status === statusFilter)
          ).map(issue => (
            <div key={issue.id} className="glass-card p-4 hover:border-urban-cyan/50 transition-colors cursor-pointer animate-fade-in">
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
