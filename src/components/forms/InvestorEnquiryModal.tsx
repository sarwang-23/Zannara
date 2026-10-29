import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck, TrendingUp, Building } from 'lucide-react';

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvestorEnquiryModal: React.FC<InvestorModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    email: '',
    investorType: 'Venture Capital / Fund',
    thesisMessage: '',
    accreditedCheck: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.firm.trim()) errs.firm = 'Fund / Family office name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid institutional or investor email is required';
    }
    if (!formData.accreditedCheck) {
      errs.accreditedCheck = 'Please confirm institutional or accredited investor representation';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17233A]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F0] border border-[#C7A451]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-200/60 text-[#17233A] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#17233A]">
              Investor Information Request Logged
            </h4>
            <p className="text-xs sm:text-sm text-[#17233A]/80 mt-2 leading-relaxed">
              Thank you, <strong>{formData.name}</strong> ({formData.firm}). Our founding team will review your mandate and dispatch our confidential overview deck to <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#17233A] text-white text-xs font-bold hover:bg-[#2A3F66]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C7A451]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7A451]">
                Investor Relations
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#17233A]">
              Request Confidential Investor Deck
            </h3>
            <p className="text-xs text-[#17233A]/70 mt-1 mb-6">
              Connect with Zanarra leadership to review our financial model, unit economics, and multi-franchise expansion strategy.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="Principal / Partner name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm bg-white outline-none focus:border-[#C7A451]"
                />
                {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">Fund / Institution / Family Office *</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Ventures, Single Family Office"
                  value={formData.firm}
                  onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm bg-white outline-none focus:border-[#C7A451]"
                />
                {errors.firm && <p className="text-xs text-rose-600 mt-1">{errors.firm}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">Work Email *</label>
                <input
                  type="email"
                  placeholder="partner@fund.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm bg-white outline-none focus:border-[#C7A451]"
                />
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">Investor Category</label>
                <select
                  value={formData.investorType}
                  onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm bg-white outline-none"
                >
                  <option>Venture Capital / Early Stage Fund</option>
                  <option>Strategic Media / Distribution Partner</option>
                  <option>Family Office / High Net Worth</option>
                  <option>Private Equity / Growth Stage</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">Thesis or Areas of Interest</label>
                <textarea
                  rows={2}
                  placeholder="Tell us what draws your interest to children's entertainment and AI-native IP..."
                  value={formData.thesisMessage}
                  onChange={(e) => setFormData({ ...formData, thesisMessage: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm bg-white outline-none"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.accreditedCheck}
                    onChange={(e) => setFormData({ ...formData, accreditedCheck: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-[#17233A]"
                  />
                  <span className="text-[11px] text-[#17233A]/80 leading-tight">
                    I verify that I am an accredited investor or authorized representative seeking confidential materials subject to customary diligence.
                  </span>
                </label>
                {errors.accreditedCheck && <p className="text-xs text-rose-600 mt-1">{errors.accreditedCheck}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-[#17233A] text-white font-bold text-xs hover:bg-[#2A3F66] transition-colors flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? 'Verifying...' : 'Submit Confidential Enquiry'}
                <Send className="w-3.5 h-3.5 text-[#C7A451]" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
