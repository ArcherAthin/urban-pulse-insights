
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

// Mock data for the issues table
const mockIssues = [
  { id: 1, title: 'Pothole on Main St', category: 'Roads', severity: 3, status: 'Pending', date: '2025-04-15', location: 'Main St & 5th Ave' },
  { id: 2, title: 'Broken Streetlight', category: 'Electricity', severity: 2, status: 'In Progress', date: '2025-04-14', location: 'Oak Drive' },
  { id: 3, title: 'Water Leak', category: 'Water', severity: 4, status: 'Pending', date: '2025-04-13', location: 'Maple Boulevard' },
  { id: 4, title: 'Garbage Pile', category: 'Sanitation', severity: 3, status: 'Resolved', date: '2025-04-12', location: 'Pine Street' },
  { id: 5, title: 'Bus Stop Damage', category: 'Transport', severity: 2, status: 'In Progress', date: '2025-04-11', location: 'Cedar Avenue' },
  { id: 6, title: 'Sidewalk Crack', category: 'Roads', severity: 2, status: 'Pending', date: '2025-04-10', location: 'Elm Street' },
  { id: 7, title: 'Traffic Light Malfunction', category: 'Electricity', severity: 4, status: 'Pending', date: '2025-04-09', location: 'Main & Broadway' },
  { id: 8, title: 'Sewer Overflow', category: 'Sanitation', severity: 5, status: 'In Progress', date: '2025-04-08', location: 'River Road' },
];

const DashboardTable = () => {
  const [issues, setIssues] = useState(mockIssues);
  const { toast } = useToast();
  
  const handleStatusChange = (id: number, newStatus: string) => {
    setIssues(prevIssues => 
      prevIssues.map(issue => 
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
    
    toast({
      title: "Status updated",
      description: `Issue #${id} status changed to ${newStatus}`,
    });
  };
  
  const handleExport = (format: string) => {
    toast({
      title: `Exporting to ${format.toUpperCase()}`,
      description: "Your download will begin shortly...",
    });
  };
  
  return (
    <div className="glass-card p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-urban-white">All Reported Issues</h3>
        
        <div className="flex space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-urban-purple text-urban-purple hover:bg-urban-purple/10">
                Export Data
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleExport('pdf')}>
                Export as PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('excel')}>
                Export as Excel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-urban-white/10">
              <th className="text-left py-3 px-4 text-urban-white">ID</th>
              <th className="text-left py-3 px-4 text-urban-white">Title</th>
              <th className="text-left py-3 px-4 text-urban-white">Category</th>
              <th className="text-left py-3 px-4 text-urban-white">Severity</th>
              <th className="text-left py-3 px-4 text-urban-white">Status</th>
              <th className="text-left py-3 px-4 text-urban-white">Date</th>
              <th className="text-left py-3 px-4 text-urban-white">Location</th>
              <th className="text-left py-3 px-4 text-urban-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.map(issue => (
              <tr key={issue.id} className="border-b border-urban-white/10 hover:bg-urban-white/5">
                <td className="py-3 px-4 text-urban-white/80">{issue.id}</td>
                <td className="py-3 px-4 text-urban-white">{issue.title}</td>
                <td className="py-3 px-4 text-urban-white/80">{issue.category}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    issue.severity <= 2 ? 'bg-green-500/20 text-green-300' :
                    issue.severity === 3 ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {issue.severity}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    issue.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-300' :
                    issue.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {issue.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-urban-white/80">{issue.date}</td>
                <td className="py-3 px-4 text-urban-white/80">{issue.location}</td>
                <td className="py-3 px-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-urban-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onSelect={() => handleStatusChange(issue.id, 'Pending')}>
                        Set to Pending
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => handleStatusChange(issue.id, 'In Progress')}>
                        Set to In Progress
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => handleStatusChange(issue.id, 'Resolved')}>
                        Set to Resolved
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
