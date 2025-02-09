import React from 'react';
import { Star, Quote } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  image,
  content,
  rating
}) => {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-orange-500/20" />
      <div className="flex items-center space-x-4 mb-4">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full"
          loading="lazy"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-white/60">{role} at {company}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-orange-500' : 'text-gray-600'}`}
            fill={i < rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <p className="text-white/80">{content}</p>
    </div>
  );
};

export default TestimonialCard;