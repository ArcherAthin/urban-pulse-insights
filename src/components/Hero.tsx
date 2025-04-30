
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  // Reference for the animation canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Animation for the background grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    // Grid properties
    const gridSize = 30;
    const lineColor = 'rgba(0, 255, 255, 0.15)';
    const movingPointsCount = 8;
    const movingPoints = Array(movingPointsCount).fill(null).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 100 + 100
    }));
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Move the points
      movingPoints.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
      });
      
      // Draw grid
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      
      // Draw vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        
        // Make lines responsive to moving points
        let opacity = 0.15;
        movingPoints.forEach(point => {
          const distance = Math.abs(point.x - x);
          if (distance < point.radius) {
            opacity = Math.max(opacity, 0.15 + (1 - distance / point.radius) * 0.3);
          }
        });
        
        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        
        let opacity = 0.15;
        movingPoints.forEach(point => {
          const distance = Math.abs(point.y - y);
          if (distance < point.radius) {
            opacity = Math.max(opacity, 0.15 + (1 - distance / point.radius) * 0.3);
          }
        });
        
        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
        ctx.stroke();
      }
      
      // Draw glowing points at intersections near moving points
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          movingPoints.forEach(point => {
            const dx = x - point.x;
            const dy = y - point.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < point.radius * 0.5) {
              const strength = 1 - distance / (point.radius * 0.5);
              const glowRadius = strength * 3;
              
              ctx.beginPath();
              ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 255, 255, ${strength * 0.7})`;
              ctx.fill();
            }
          });
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Add initial animation to ensure elements are visible immediately on load
  useEffect(() => {
    // Apply animation to hero content with a slight delay for smooth appearance
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add('animate-fade-in');
      }, 100);
    }
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-urban-navy via-urban-navy/95 to-black/90"></div>
      
      {/* Animated canvas background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0" 
        style={{ width: '100%', height: '100%' }}
      ></canvas>
      
      {/* Glowing orbs in background */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-urban-purple/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-urban-cyan/20 blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center flex flex-col items-center justify-center min-h-screen">
        <div className="hero-content animate-on-scroll">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-to-r from-urban-cyan via-urban-white to-urban-white">
            Smart Cities Begin with <br />
            <span className="text-urban-cyan">Smarter Feedback</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-urban-white/90 mb-8 max-w-3xl mx-auto">
            Connecting citizens and officials to build better urban environments through data-driven insights and collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/submit-issue">
              <Button size="lg" className="bg-urban-cyan hover:bg-urban-cyan/80 text-urban-navy font-medium text-lg px-8 py-6 rounded-xl glow-hover">
                Report an Issue
              </Button>
            </Link>
            <Link to="/map-view">
              <Button size="lg" variant="outline" className="border-urban-cyan text-urban-cyan hover:bg-urban-cyan/10 font-medium text-lg px-8 py-6 rounded-xl glow-hover">
                View City Map
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
