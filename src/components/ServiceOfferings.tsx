import React from 'react';
import { CheckCircle, Zap, Star, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceOfferings = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Zap,
      title: "AI Readiness Audits",
      price: "₹25,000 - ₹75,000",
      period: "per engagement",
      color: "text-emerald-700",
      tier: "Foundation",
      features: [
        "Comprehensive AI maturity assessment",
        "Technology stack evaluation",
        "Skills gap analysis",
        "Strategic roadmap recommendations"
      ]
    },
    {
      icon: Star,
      title: "Strategic AI Roadmaps",
      price: "₹50,000 - ₹2,00,000",
      period: "per project",
      color: "text-gray-900",
      tier: "Strategy",
      features: [
        "Custom AI transformation strategy",
        "Implementation timeline",
        "Resource allocation planning",
        "ROI projections and KPIs"
      ]
    },
    {
      icon: Crown,
      title: "Implementation Services",
      price: "₹1,00,000 - ₹5,00,000",
      period: "per deployment",
      color: "text-emerald-700",
      tier: "Enterprise",
      popular: true,
      features: [
        "End-to-end AI solution deployment",
        "System integration and testing",
        "Training and knowledge transfer",
        "Performance optimization"
      ]
    },
    {
      icon: CheckCircle,
      title: "Fractional CAIO",
      price: "₹25,000 - ₹75,000",
      period: "per month",
      color: "text-gray-900",
      tier: "Executive",
      features: [
        "Part-time Chief AI Officer services",
        "Strategic AI leadership",
        "Team mentoring and guidance",
        "Ongoing optimization support"
      ]
    }
  ];

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <section id="services" className="section-spacing bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-emerald-700" />
            <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Service Portfolio</span>
          </div>
          
          <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
            Service Offerings
            <span className="block text-gradient">& Pricing</span>
          </h2>
          <p className="text-body-large text-gray-600 fade-in-up">
            Flexible engagement models tailored to your transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
              
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="frosted-glass px-3 py-1 bg-emerald-50 border border-emerald-200">
                    <span className="text-tiny font-bold text-emerald-700 uppercase tracking-wider">Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`frosted-glass p-6 hover-lift h-full relative overflow-hidden ${service.popular ? 'border-emerald-300 shadow-lg shadow-emerald-100' : ''}`}>
                
                {/* Service Tier Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                  </div>
                  <span className={`text-tiny font-bold px-3 py-1 rounded-full bg-gray-100 ${service.color}`}>
                    {service.tier}
                  </span>
                </div>

                <h3 className="text-subsection-title text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Pricing */}
                <div className="mb-4">
                  <span className={`stat-counter text-xl font-bold ${service.color}`}>
                    {service.price}
                  </span>
                  <span className="text-gray-600 text-small block">
                    {service.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-small text-gray-600 flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-700 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Now links to Get Started page */}
                <button 
                  onClick={handleGetStarted}
                  className="w-full professional-button text-center"
                >
                  Get Started
                </button>

                {/* Progress Indicator */}
                <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-600 transition-all duration-1000 ease-out group-hover:w-full"
                    style={{ width: '60%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center fade-in-up">
          <div className="frosted-glass inline-block px-8 py-4 hover-lift">
            <p className="text-body text-gray-700">
              <span className="text-emerald-700 font-bold">Custom Enterprise Packages:</span> Tailored solutions for unique requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;