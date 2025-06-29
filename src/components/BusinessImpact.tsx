import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Users, DollarSign } from 'lucide-react';

const BusinessImpact = () => {
  const [metrics, setMetrics] = useState({
    deployment: 0,
    roi: 0,
    satisfaction: 0,
    costs: 0
  });

  useEffect(() => {
    const targets = {
      deployment: 85,
      roi: 60,
      satisfaction: 90,
      costs: 70
    };

    const duration = 3000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      
      setMetrics({
        deployment: Math.round(targets.deployment * progress),
        roi: Math.round(targets.roi * progress),
        satisfaction: Math.round(targets.satisfaction * progress),
        costs: Math.round(targets.costs * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const impacts = [
    {
      icon: TrendingUp,
      value: `${metrics.deployment}%`,
      label: "Faster AI Deployment Timelines",
      color: "text-emerald-700",
      description: "Accelerated implementation cycles"
    },
    {
      icon: DollarSign,
      value: `${metrics.roi}%`,
      label: "Improvement in AI Project ROI",
      color: "text-gray-900",
      description: "Enhanced return on investment"
    },
    {
      icon: Users,
      value: `${metrics.satisfaction}%`,
      label: "Client Satisfaction Scores",
      color: "text-emerald-700",
      description: "Exceptional client experience"
    },
    {
      icon: Target,
      value: `${metrics.costs}%`,
      label: "Reduction in Implementation Costs",
      color: "text-gray-900",
      description: "Optimized resource utilization"
    }
  ];

  const [clientStats, setClientStats] = useState({
    toolkits: 0,
    products: 0,
    clients: 0,
    industries: 0
  });

  useEffect(() => {
    const clientTargets = {
      toolkits: 6,
      products: 5,
      clients: 3,
      industries: 8
    };

    const duration = 2500;
    const steps = 50;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      
      setClientStats({
        toolkits: Math.round(clientTargets.toolkits * progress),
        products: Math.round(clientTargets.products * progress),
        clients: Math.round(clientTargets.clients * progress),
        industries: Math.round(clientTargets.industries * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="impact" className="section-spacing bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-emerald-700" />
            <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Performance Metrics</span>
          </div>
          
          <h2 className="text-section-title text-gray-900 mb-4 fade-in-up">
            Measurable
            <span className="block text-gradient">Business Impact</span>
          </h2>
          <p className="text-body-large text-gray-600 fade-in-up">
            Proven results that drive real transformation
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {impacts.map((impact, index) => (
            <div key={index} className="group fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
              <div className="frosted-glass p-4 text-center hover-lift h-full relative overflow-hidden">
                
                {/* Icon */}
                <div className="relative mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 p-0.5 mx-auto group-hover:scale-110 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <impact.icon className={`w-6 h-6 ${impact.color}`} />
                    </div>
                  </div>
                </div>

                {/* Metric Value */}
                <div className={`stat-counter text-xl md:text-2xl font-bold mb-2 ${impact.color}`}>
                  {impact.value}
                </div>

                {/* Label */}
                <div className="text-tiny text-gray-900 font-semibold mb-2 leading-tight">
                  {impact.label}
                </div>

                {/* Description */}
                <div className="text-tiny text-gray-600 mb-3">
                  {impact.description}
                </div>

                {/* Animated Progress Bar */}
                <div className="bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-600 transition-all duration-2000 ease-out"
                    style={{ width: `${impact.value.replace('%', '')}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="frosted-glass p-6 text-center">
            <h3 className="text-subsection-title text-gray-900 mb-4">
              Transforming Organizations Across Industries
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Toolkits", value: `${clientStats.toolkits}+`, color: "text-emerald-700" },
                { label: "Products", value: `${clientStats.products}+`, color: "text-gray-900" },
                { label: "Clients", value: `${clientStats.clients}+`, color: "text-emerald-700" },
                { label: "Industries", value: clientStats.industries, color: "text-gray-900" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`stat-counter text-xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-tiny text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-body text-gray-700 mb-4">
              From enterprise transformation to startup acceleration, our proven methodology delivers consistent, 
              <span className="text-emerald-700 font-semibold"> measurable results across diverse organizational contexts</span>.
            </p>

            {/* Call to Action */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-body-large font-semibold text-emerald-700">
                You can be our next success story!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;