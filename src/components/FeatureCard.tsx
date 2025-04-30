
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:scale-105 glow-hover">
      <div className="flex flex-col items-center text-center">
        <div className="bg-urban-purple/20 p-4 rounded-full mb-4">
          <div className="text-urban-cyan text-3xl">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-urban-white">{title}</h3>
        <p className="text-urban-white/80">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
