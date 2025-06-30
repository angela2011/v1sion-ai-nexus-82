import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InfiniteReviewCarousel = () => {
  const navigate = useNavigate();

  const reviews = [
    {
      id: 1,
      name: "Amit Rauthan",
      role: "Head of Oncology Department",
      company: "Leading Healthcare Institution",
      rating: 5,
      review: "V1SION's ecosystem approach transformed our entire organization. The ROI exceeded our projections by 40%, and their V0RA platform integration gave us persistent memory capabilities we never thought possible. Absolutely game-changing."
    },
    {
      id: 2,
      name: "Sanjeev Srinivas",
      role: "FP&A Manager",
      company: "Fortune 500 Financial Services",
      rating: 5,
      review: "The strategic roadmap V1SION developed for us was incredibly detailed and practical. Their change management approach ensured 95% adoption across our teams. The results speak for themselves - 60% faster deployment cycles."
    },
    {
      id: 3,
      name: "Venkatesh Agarwal",
      role: "CMO",
      company: "Technology Solutions Enterprise",
      rating: 5,
      review: "Working with V1SION was a revelation. Their vendor-agnostic approach saved us from costly lock-ins, and the V3RSE talent network provided exactly the expertise we needed. Highly recommend for any serious AI transformation."
    },
    {
      id: 4,
      name: "Priya Desai",
      role: "Chief Data Scientist",
      company: "Innovation Leaders Corp",
      rating: 5,
      review: "V1SION's implementation methodology is unmatched. They didn't just deliver technology - they transformed our culture. The persistent memory integration has made our AI systems truly intelligent and adaptive."
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-amber-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="review-card group">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10">
        <Quote className="w-8 h-8 text-emerald-700" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {renderStars(review.rating)}
        <span className="text-tiny text-gray-600 ml-2">({review.rating}/5)</span>
      </div>

      {/* Review Text */}
      <blockquote className="text-body text-gray-700 mb-6 leading-relaxed italic relative z-10 flex-1">
        "{review.review}"
      </blockquote>

      {/* Client Info - No Profile Picture */}
      <div className="mt-auto">
        <div className="font-semibold text-gray-900 text-small mb-1">
          {review.name}
        </div>
        <div className="text-tiny text-gray-600 mb-1">
          {review.role}
        </div>
        <div className="text-tiny text-emerald-700 font-medium">
          {review.company}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </div>
  );

  // Duplicate reviews multiple times for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="section-spacing bg-gray-50 overflow-hidden">
      <div className="section-container">
        {/* Our Solutions Button - Now positioned at the top */}
        <div className="text-center mb-12 fade-in-up">
          <button 
            onClick={() => navigate('/services')}
            className="professional-button flex items-center justify-center gap-3 group mx-auto"
          >
            Our Solutions
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-emerald-700" />
            <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Client Success Stories</span>
          </div>
          
          <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
            What Our Clients Say About
            <span className="block text-gradient">Their Transformation</span>
          </h2>
          <p className="text-body text-gray-600 fade-in-up">
            Real experiences from organizations that have transformed with V1S1ON
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="carousel-container">
          <div className="carousel-track">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteReviewCarousel;