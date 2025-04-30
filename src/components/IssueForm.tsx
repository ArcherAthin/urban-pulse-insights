
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const IssueForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [severity, setSeverity] = useState(3);
  const [location, setLocation] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
          toast({
            title: "Location detected",
            description: "Your current location has been added to the report.",
          });
        },
        () => {
          toast({
            variant: "destructive",
            title: "Location error",
            description: "Unable to access your location. Please enable location services.",
          });
        }
      );
    } else {
      toast({
        variant: "destructive",
        title: "Geolocation not supported",
        description: "Your browser does not support geolocation.",
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock form submission - in a real app, this would send to an API
    setTimeout(() => {
      toast({
        title: "Issue reported successfully",
        description: "Thank you for helping improve your city!",
      });
      setLoading(false);
      // Reset form
      setTitle('');
      setDescription('');
      setCategory('');
      setSeverity(3);
      setLocation('');
      setImage(null);
      setImagePreview(null);
    }, 1500);
  };
  
  return (
    <div className="glass-card p-6">
      <h2 className="text-2xl font-bold text-urban-white mb-6">Report an Issue</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Issue Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Brief description of the issue"
            className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Detailed Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Please provide details about the issue..."
            className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white min-h-[120px]"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={setCategory} value={category} required>
              <SelectTrigger className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="roads">Roads & Infrastructure</SelectItem>
                <SelectItem value="water">Water Supply</SelectItem>
                <SelectItem value="electricity">Electricity</SelectItem>
                <SelectItem value="transport">Public Transport</SelectItem>
                <SelectItem value="sanitation">Sanitation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="severity">Severity (1-5)</Label>
              <span className="text-urban-white font-bold">{severity}</span>
            </div>
            <Slider
              id="severity"
              min={1}
              max={5}
              step={1}
              value={[severity]}
              onValueChange={(values) => setSeverity(values[0])}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-urban-white/70">
              <span>Minor</span>
              <span>Moderate</span>
              <span>Critical</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <div className="flex space-x-2">
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Address or coordinates"
              className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white"
              required
            />
            <Button 
              type="button" 
              variant="outline"
              className="border-urban-cyan text-urban-cyan hover:bg-urban-cyan/10"
              onClick={handleGetLocation}
            >
              Get Current
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="image">Upload Photo/Video</Label>
          <Input
            id="image"
            type="file"
            onChange={handleImageChange}
            accept="image/*,video/*"
            className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white"
          />
          
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-60 rounded-lg mx-auto"
              />
            </div>
          )}
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-urban-cyan hover:bg-urban-cyan/80 text-urban-navy font-bold"
          disabled={loading}
        >
          {loading ? "Submitting Report..." : "Submit Report"}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
