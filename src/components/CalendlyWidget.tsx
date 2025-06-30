import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  height?: number;
  className?: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  url, 
  height = 630, 
  className = "" 
}) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className={`calendly-inline-widget ${className}`} 
         data-url={url} 
         style={{ minWidth: '320px', height: `${height}px` }}>
    </div>
  );
};

export default CalendlyWidget;