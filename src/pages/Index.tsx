import React from 'react';
import Hero from '../components/Hero';
import WhyAIFails from '../components/WhyAIFails';
import Navigation from '../components/Navigation';
import InfiniteReviewCarousel from '../components/InfiniteReviewCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyAIFails />
      <InfiniteReviewCarousel />
    </div>
  );
};

export default Index;