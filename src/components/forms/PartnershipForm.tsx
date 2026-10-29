import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Building2, Globe, Mail, User, Tag, FileText } from 'lucide-react';

export const PartnershipForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    category: 'Consumer Products & Merchandise',
    description: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Consumer Products & Merchandise',
    'Books & Publishing',
    'Streaming & Content Distribution',
    'Music Partnerships',
    'Education & School Programmes',
    'Live Entertainment & Family Experiences',
    'Regional & International Licensing',
    'Brand & Media Collaborations'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company or organisation name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email address';
    }
    if (!formData.country.trim()) errs.country = 'Country or operating region is required';
    if (!formData.description.trim() || formData.description.length < 15) {
      errs.description = 'Please provide a brief description (minimum 15 characters)';
    }
    if (!formData.consent) {
      errs.consent = 'You must acknowledge our partnership communication policy';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF7F0] border border-emerald-300 rounded-3xl p-8 sm:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h4 className="font-serif text-2xl font-bold text-[#17233A]">
          Partnership Enquiry Received
        </h4>
        <p className="text-sm text-[#17233A]/80 max-w-md mx-auto mt-2 leading-relaxed">
          Thank you, <strong>{formData.name}</strong> ({formData.company}). Our global licensing and strategic partnerships team will review your proposal and respond at <strong>{formData.email}</strong> within 2 business days.
        </p>
        <div className="mt-6">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                company: '',
                email: '',
                country: '',
                category: categories[0],
                description: '',
                consent: false
              });
            }}
            className="px-6 py-2.5 rounded-full bg-[#17233A] text-white text-xs font-bold hover:bg-[#2A3F66] transition-colors"
          >
            Submit Another Partnership Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-10 shadow-lg space-y-6">
      <div className="border-b border-gray-100 pb-4">
        <h3 className="font-serif text-2xl font-bold text-[#17233A]">
          Strategic Partnership Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#17233A]/70 mt-1">
          Explore licensing, co-production, retail, distribution, or curriculum alliances with Zanarra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17233A] mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#C7A451]" /> Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Maya Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#FAF7F0] focus:bg-white transition-colors outline-none ${
              errors.name ? 'border-rose-500 ring-1 ring-rose-300' : 'border-gray-200 focus:border-[#C7A451]'
            }`}
          />
          {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17233A] mb-1.5 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[#C7A451]" /> Company / Entity *
          </label>
          <input
            type="text"
            placeholder="e.g. Orion Kids Media Pvt Ltd"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#FAF7F0] focus:bg-white transition-colors outline-none ${
              errors.company ? 'border-rose-500 ring-1 ring-rose-300' : 'border-gray-200 focus:border-[#C7A451]'
            }`}
          />
          {errors.company && <p className="text-xs text-rose-600 mt-1">{errors.company}</p>}
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17233A] mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#C7A451]" /> Work Email *
          </label>
          <input
            type="email"
            placeholder="maya@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#FAF7F0] focus:bg-white transition-colors outline-none ${
              errors.email ? 'border-rose-500 ring-1 ring-rose-300' : 'border-gray-200 focus:border-[#C7A451]'
            }`}
          />
          {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
        </div>

        {/* Country / Region */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17233A] mb-1.5 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#C7A451]" /> Operating Country / Region *
          </label>
          <input
            type="text"
            placeholder="e.g. India / UK / Southeast Asia"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#FAF7F0] focus:bg-white transition-colors outline-none ${
              errors.country ? 'border-rose-500 ring-1 ring-rose-300' : 'border-gray-200 focus:border-[#C7A451]'
            }`}
          />
          {errors.country && <p className="text-xs text-rose-600 mt-1">{errors.country}</p>}
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#17233A] mb-1.5 flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-[#C7A451]" /> Partnership Category *
        </label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-[#FAF7F0] focus:bg-white focus:border-[#C7A451] outline-none"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Brief Description */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#17233A] mb-1.5 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#C7A451]" /> Brief Description of Proposed Collaboration *
        </label>
        <textarea
          rows={4}
          placeholder="Describe your distribution channels, manufacturing footprint, territory scope, or alliance objectives..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#FAF7F0] focus:bg-white transition-colors outline-none ${
            errors.description ? 'border-rose-500 ring-1 ring-rose-300' : 'border-gray-200 focus:border-[#C7A451]'
          }`}
        />
        {errors.description && <p className="text-xs text-rose-600 mt-1">{errors.description}</p>}
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded text-[#17233A] focus:ring-[#C7A451]"
          />
          <span className="text-xs text-[#17233A]/80 leading-relaxed">
            I confirm that I represent a registered business entity and consent to Zanarra contacting me regarding this commercial licensing or partnership opportunity.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-rose-600 mt-1 ml-7">{errors.consent}</p>}
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#17233A] text-white font-bold text-sm hover:bg-[#2A3F66] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-60"
        >
          {isSubmitting ? (
            <span>Transmitting Enquiry...</span>
          ) : (
            <>
              <span>Submit Partnership Proposal</span>
              <Send className="w-4 h-4 text-[#C7A451]" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
