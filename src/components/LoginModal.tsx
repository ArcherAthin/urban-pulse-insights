
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock login - in a real app, this would call an API
    setTimeout(() => {
      // For demo purposes, any login works
      if (email && password) {
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please check your credentials",
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-urban-white mb-2">City Official Login</h2>
        <p className="text-urban-white/70 text-sm">
          Access the administrative dashboard to manage reported issues
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.gov"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-urban-cyan hover:underline">
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-urban-navy/50 border-urban-cyan/30 text-urban-white"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-urban-purple hover:bg-urban-purple/80 text-white"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-urban-white/70">
        <p>For demo purposes, any email and password will work</p>
      </div>
    </div>
  );
};

export default LoginModal;
