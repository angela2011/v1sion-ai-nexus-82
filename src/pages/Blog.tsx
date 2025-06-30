import React from 'react';
import Navigation from '../components/Navigation';
import { BookOpen, Clock, Bell, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        {/* Coming Soon Section */}
        <section className="min-h-screen flex items-center justify-center bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 frosted-glass px-6 py-3 mb-8 hover-lift">
                <BookOpen className="w-5 h-5 text-emerald-700 animated-icon" />
                <span className="text-sm font-semibold text-gray-800 uppercase tracking-wider">AI Insights & Expertise</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-tomorrow font-medium text-gray-900 mb-6 fade-in-up leading-tight">
                <span className="block">Coming</span>
                <span className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 bg-clip-text text-transparent mt-2">
                  Soon
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-2xl md:text-3xl font-agile text-gray-600 mb-8 max-w-3xl mx-auto fade-in-up leading-relaxed" style={{animationDelay: '0.2s'}}>
                Expert insights on AI transformation, strategy, and the future of intelligent organizations
              </p>

              {/* Description */}
              <p className="text-body-large text-gray-600 mb-12 max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.4s'}}>
                We're crafting thoughtful content to help you navigate your AI transformation journey. 
                Stay tuned for in-depth articles, case studies, and strategic insights.
              </p>

              {/* Coming Soon Features */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {[
                  {
                    icon: BookOpen,
                    title: "Strategic Insights",
                    description: "Deep-dive articles on AI transformation strategies and best practices"
                  },
                  {
                    icon: Clock,
                    title: "Case Studies",
                    description: "Real-world examples of successful AI implementations and lessons learned"
                  },
                  {
                    icon: Bell,
                    title: "Industry Trends",
                    description: "Latest developments in AI technology and their business implications"
                  }
                ].map((feature, index) => (
                  <div key={index} className="group fade-in-up" style={{animationDelay: `${0.6 + 0.1 * index}s`}}>
                    <div className="frosted-glass p-6 hover-lift h-full">
                      <div className="w-12 h-12 rounded-full bg-gray-100 p-0.5 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-emerald-700" />
                        </div>
                      </div>
                      <h3 className="text-subsection-title text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-small text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notify Me Button */}
              <div className="fade-in-up" style={{animationDelay: '1s'}}>
                <button className="professional-button flex items-center justify-center gap-3 group mx-auto text-lg px-8 py-4">
                  <Bell className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Notify Me When Available
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-12 fade-in-up" style={{animationDelay: '1.2s'}}>
                <p className="text-body text-gray-600 mb-4">
                  Have questions about AI transformation in the meantime?
                </p>
                <div className="frosted-glass inline-block px-6 py-3 hover-lift">
                  <span className="text-emerald-700 font-semibold">contact@versiontwo.world</span>
                </div>
              </div>

              {/* Animated Background Elements */}
              <div className="absolute inset-0 digital-mesh opacity-5 pointer-events-none" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;