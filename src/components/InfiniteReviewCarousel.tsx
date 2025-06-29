import React from 'react';
import { Star, Quote } from 'lucide-react';

const InfiniteReviewCarousel = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Chief Technology Officer",
      company: "TechCorp India",
      rating: 5,
      review: "V1SION's ecosystem approach transformed our entire organization. The ROI exceeded our projections by 40%, and their V0RA platform integration gave us persistent memory capabilities we never thought possible. Absolutely game-changing.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Digital Innovation",
      company: "FinanceFirst Solutions",
      rating: 5,
      review: "The strategic roadmap V1SION developed for us was incredibly detailed and practical. Their change management approach ensured 95% adoption across our teams. The results speak for themselves - 60% faster deployment cycles.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "VP of Operations",
      company: "Global Manufacturing Ltd",
      rating: 5,
      review: "Working with V1SION was a revelation. Their vendor-agnostic approach saved us from costly lock-ins, and the V3RSE talent network provided exactly the expertise we needed. Highly recommend for any serious AI transformation.",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 4,
      name: "Anita Desai",
      role: "Chief Data Officer",
      company: "Healthcare Innovations",
      rating: 5,
      review: "V1SION's implementation methodology is unmatched. They didn't just deliver technology - they transformed our culture. The persistent memory integration has made our AI systems truly intelligent and adaptive.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 5,
      name: "David Rodriguez",
      role: "Chief Innovation Officer",
      company: "RetailTech Solutions",
      rating: 5,
      review: "The transformation we achieved with V1SION exceeded all expectations. Their systematic approach to AI integration resulted in 75% improvement in operational efficiency and completely revolutionized our customer experience.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 6,
      name: "Sarah Thompson",
      role: "Head of Strategy",
      company: "Energy Innovations Corp",
      rating: 5,
      review: "V1SION's vendor-neutral approach was exactly what we needed. They helped us avoid costly technology lock-ins while building a truly scalable AI infrastructure. The ROI has been phenomenal.",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
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

      {/* Client Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
          <img 
            src={review.avatar} 
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-small">
            {review.name}
          </div>
          <div className="text-tiny text-gray-600">
            {review.role}
          </div>
          <div className="text-tiny text-emerald-700 font-medium">
            {review.company}
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </div>
  );

  // Duplicate reviews for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="section-spacing bg-gray-50 overflow-hidden">
      <div className="section-container">
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

        {/* Summary Stats */}
        <div className="text-center mt-12 fade-in-up">
          <div className="frosted-glass inline-block px-8 py-4 hover-lift">
            <div className="flex items-center justify-center gap-6 text-tiny font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {renderStars(5)}
                </div>
                <span>4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>200+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-900" />
                <span>98% Client Retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteReviewCarousel;