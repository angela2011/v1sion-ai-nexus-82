import React from 'react';
import { X } from 'lucide-react';
import CalendlyWidget from './CalendlyWidget';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl: string;
  title?: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ 
  isOpen, 
  onClose, 
  calendlyUrl, 
  title = "Schedule Your Consultation" 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Calendly Widget */}
        <div className="p-6">
          <CalendlyWidget 
            url={calendlyUrl} 
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;