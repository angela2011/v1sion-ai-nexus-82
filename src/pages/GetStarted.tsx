import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import CalendlyWidget from '../components/CalendlyWidget';
import CalendlyModal from '../components/CalendlyModal';
import { ArrowRight, Mail, Phone, Rocket, Calendar, CheckCircle, Star, Users, Target, Zap } from 'lucide-react';

const GetStartedPage = () => {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const [selectedCalendlyUrl, setSelectedCalendlyUrl] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  // Replace these with your actual Calendly URLs
  const calendlyUrls = {
    assessment: 'https://calendly.com/your-username/ai-readiness-assessment',
    consultation: 'https://calendly.com/your-username/strategic-consultation',
    demo: 'https://calendly.com/your-username/product-demo'
  };

  const openCalendlyModal = (type: 'assessment' | 'consultation' | 'demo') => {
    setSelectedCalendlyUrl(calendlyUrls[type]);
    setModalTitle(
      type === 'assessment' ? 'Schedule AI Readiness Assessment' :
      type === 'consultation' ? 'Book Strategic Consultation' :
      'Schedule Product Demo'
    );
    setIsCalendlyModalOpen(true);
  };

  const steps = [
    {
      icon: Calendar,
      title: "Schedule AI Readiness Assessment",
      description: "Book a comprehensive evaluation of your organization's AI maturity and transformation potential",
      duration: "60 minutes",
      price: "Free Consultation",
      action: () => openCalendlyModal('assessment')
    },
    {
      icon: Target,
      title: "Strategic Roadmap Development",
      description: "Receive a customized AI transformation strategy tailored to your specific business objectives",
      duration: "2-3 weeks",
      price: "₹50,000 - ₹2,00,000",
      action: () => openCalendlyModal('consultation')
    },
    {
      icon: Rocket,
      title: "Implementation & Deployment",
      description: "Execute your AI transformation with our proven methodology and expert guidance",
      duration: "3-6 months",
      price: "₹1,00,000 - ₹5,00,000",
      action: () => openCalendlyModal('consultation')
    }
  ];

  const benefits = [
    "Comprehensive AI maturity assessment",
    "Custom transformation roadmap",
    "Expert implementation support",
    "Ongoing optimization and support",
    "Access to V0RA platform",
    "V3RSE talent network integration"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CTO, TechCorp India",
      company: "Fortune 500 Technology Company",
      quote: "V1S1ON transformed our approach to AI. Their ecosystem-first methodology delivered results beyond our expectations."
    },
    {
      name: "Priya Sharma",
      role: "Head of Innovation",
      company: "Leading Financial Services",
      quote: "The ROI from our AI transformation exceeded projections by 40%. V1S1ON's expertise was instrumental."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-8">
                <Rocket className="w-4 h-4 text-emerald-700" />
                <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Start Your Journey</span>
              </div>
              
              <h1 className="text-section-title text-gray-900 mb-6 fade-in-up">
                Ready to Transform Your
                <span className="block text-gradient mt-2">Organization?</span>
              </h1>
              
              <p className="text-body-large text-gray-600 mb-12 max-w-3xl mx-auto fade-in-up">
                Begin your AI transformation journey with a comprehensive readiness assessment and strategic roadmap tailored to your unique business needs.
              </p>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button 
                  onClick={() => openCalendlyModal('assessment')}
                  className="professional-button flex items-center justify-center gap-3 group text-lg px-8 py-4"
                >
                  <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Schedule Free Assessment
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                
                <button 
                  onClick={() => openCalendlyModal('consultation')}
                  className="professional-button-secondary flex items-center justify-center gap-3 text-lg px-8 py-4"
                >
                  <Rocket className="w-5 h-5 text-emerald-700" />
                  Book Strategic Consultation
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-700 mb-16">
                <div className="frosted-glass px-6 py-4 flex items-center gap-3 hover-lift group">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Mail className="w-5 h-5 text-emerald-700" />
                    </div>
                  </div>
                  <span className="font-medium text-lg">hello@v1sion.ai</span>
                </div>
                
                <div className="frosted-glass px-6 py-4 flex items-center gap-3 hover-lift group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gray-900" />
                    </div>
                  </div>
                  <span className="font-medium text-lg">+91-9876543210</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Calendly Section */}
        <section className="section-spacing bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
                Schedule Your
                <span className="block text-gradient">Free Consultation</span>
              </h2>
              <p className="text-body-large text-gray-600 fade-in-up">
                Choose a time that works best for you
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="frosted-glass p-6 hover-lift">
                <CalendlyWidget 
                  url={calendlyUrls.assessment}
                  height={700}
                  className="w-full rounded-lg overflow-hidden"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
                Your Transformation
                <span className="block text-gradient">Journey</span>
              </h2>
              <p className="text-body-large text-gray-600 fade-in-up">
                A proven three-step process to AI-native transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="group fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                  <div className="frosted-glass p-6 hover-lift h-full relative overflow-hidden">
                    
                    {/* Step Number */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 p-0.5 group-hover:scale-110 transition-all duration-300">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-emerald-700" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-subsection-title text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-small text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="flex justify-between items-center text-tiny text-gray-500 mb-4">
                      <span>Duration: {step.duration}</span>
                      <span className="font-semibold text-emerald-700">{step.price}</span>
                    </div>

                    {/* Schedule Button */}
                    <button 
                      onClick={step.action}
                      className="w-full professional-button text-center mb-4"
                    >
                      Schedule Now
                    </button>

                    {/* Progress Indicator */}
                    <div className="bg-gray-200 rounded-full h-1 overflow-hidden">
                      <div 
                        className="h-full bg-emerald-600 transition-all duration-1000 ease-out group-hover:w-full"
                        style={{ width: '70%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-spacing bg-gray-50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
                  What's Included in Your
                  <span className="block text-gradient">Transformation</span>
                </h2>
                <p className="text-body-large text-gray-600 fade-in-up">
                  Comprehensive support throughout your AI transformation journey
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="frosted-glass p-6 hover-lift">
                  <h3 className="text-subsection-title text-gray-900 mb-6">Included Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                        <span className="text-small text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="frosted-glass p-6 hover-lift">
                  <h3 className="text-subsection-title text-gray-900 mb-6">Success Metrics</h3>
                  <div className="space-y-4">
                    {[
                      { metric: "85%", label: "Faster AI Deployment" },
                      { metric: "60%", label: "Improvement in ROI" },
                      { metric: "90%", label: "Client Satisfaction" },
                      { metric: "70%", label: "Cost Reduction" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-small text-gray-700">{item.label}</span>
                        <span className="stat-counter text-lg font-bold text-emerald-700">{item.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
                Client Success
                <span className="block text-gradient">Stories</span>
              </h2>
              <p className="text-body-large text-gray-600 fade-in-up">
                Hear from organizations that have transformed with V1S1ON
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="frosted-glass p-6 hover-lift fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-body text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-small text-gray-600">{testimonial.role}</div>
                    <div className="text-tiny text-emerald-700">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-spacing bg-gray-50">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="frosted-glass p-8 hover-lift">
                <h3 className="text-subsection-title text-gray-900 mb-4">
                  Ready to Begin Your AI Transformation?
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  Schedule your free AI readiness assessment today and take the first step towards becoming an AI-native organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => openCalendlyModal('assessment')}
                    className="professional-button flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Free Assessment
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => openCalendlyModal('demo')}
                    className="professional-button-secondary"
                  >
                    Schedule Product Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="text-center">
              <div className="frosted-glass inline-block px-8 py-4 hover-lift">
                <div className="flex items-center justify-center gap-6 text-tiny font-medium text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Enterprise Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>ISO Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isCalendlyModalOpen}
        onClose={() => setIsCalendlyModalOpen(false)}
        calendlyUrl={selectedCalendlyUrl}
        title={modalTitle}
      />
    </div>
  );
};

export default GetStartedPage;