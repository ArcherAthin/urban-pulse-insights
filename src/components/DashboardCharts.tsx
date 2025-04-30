
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data for our charts
const categoryData = [
  { name: 'Roads', value: 42 },
  { name: 'Water', value: 28 },
  { name: 'Electricity', value: 35 },
  { name: 'Transport', value: 20 },
  { name: 'Sanitation', value: 37 },
];

const statusData = [
  { name: 'Pending', value: 65 },
  { name: 'In Progress', value: 45 },
  { name: 'Resolved', value: 52 },
];

const timelineData = [
  { name: 'Jan', issues: 30 },
  { name: 'Feb', issues: 25 },
  { name: 'Mar', issues: 35 },
  { name: 'Apr', issues: 40 },
  { name: 'May', issues: 28 },
  { name: 'Jun', issues: 45 },
];

const COLORS = ['#00FFFF', '#A020F0', '#BFFF00', '#FF6B6B', '#FFD166'];

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Category Breakdown */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-urban-white mb-4">Issues by Category</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={categoryData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#F1F1F1" />
              <YAxis stroke="#F1F1F1" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#0A0F2C',
                  borderColor: '#00FFFF',
                  color: '#F1F1F1',
                }}
              />
              <Bar dataKey="value" fill="#00FFFF" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Status Breakdown */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-urban-white mb-4">Issues by Status</h3>
        <div className="h-64 flex justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#00FFFF"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#0A0F2C',
                  borderColor: '#00FFFF',
                  color: '#F1F1F1',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="glass-card p-6 md:col-span-2">
        <h3 className="text-xl font-bold text-urban-white mb-4">Issues Timeline</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={timelineData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#F1F1F1" />
              <YAxis stroke="#F1F1F1" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#0A0F2C',
                  borderColor: '#00FFFF',
                  color: '#F1F1F1',
                }}
              />
              <Bar dataKey="issues" fill="#A020F0" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
