import React, { useState } from 'react';
import { Mail, MessageSquare, Briefcase, TrendingUp, Sparkles, Send, CheckCircle, AlertCircle, Shield } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [selectedPathway, setSelectedPathway] = useState<string>('General enquiries');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const pathways = [
    {
      id: 'General enquiries',
      title: 'General Enquiries',
      desc: 'Questions regarding universe lore, story previews, or general audience communications.',
      email: 'hello@zanarra.com'
    },
    {
      id: 'Investors',
      title: 'Investor Relations',
      desc: 'Institutional funds, family offices, and accredited investors exploring funding rounds.',
      email: 'investors@zanarra.com'
    },
    {
      id: 'Licensing and distribution',
      title: 'Licensing & Distribution',
      desc: 'Merchandise licensees, toy manufacturers, SVOD broadcasters, and global publishing houses.',
      email: 'licensing@zanarra.com'
    },
    {
      id: 'Media and press',
      title: 'Media & Press',
      desc: 'Journalists, industry publications, podcasts, and speaking invitations.',
      email: 'press@zanarra.com'
    },
    {
      id: 'Careers and creative collaborations',
      title: 'Careers & Creative Collaboration',
      desc: 'Writers, visual designers, animators, and AI engineers passionate about children\'s entertainment.',
      email: 'careers@zanarra.com'
    }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject line';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message (minimum 10 characters)';
    }
    if (!formData.consent) {
      errs.consent = 'Please confirm consent for enquiry communication';
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

  const currentPathwayObj = pathways.find(p => p.id === selectedPathway) || pathways[0];

  return (
    <div className="pt-32 pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" /> Communications Hub
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17233A] leading-tight">
          Get in touch with the Zanarra team.
        </h1>

        <p className="text-base sm:text-lg text-[#17233A]/80 max-w-2xl mx-auto leading-relaxed">
          Select the designated pathway below to route your message directly to the appropriate team.
        </p>
      </section>

      {/* Five Pathways Selection Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pathways.map((pathway) => {
          const isSelected = selectedPathway === pathway.id;
          return (
            <button
              key={pathway.id}
              onClick={() => {
                setSelectedPathway(pathway.id);
                setSubmitted(false);
              }}
              className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#17233A] text-white border-[#C7A451] shadow-md scale-102 ring-2 ring-[#C7A451]/20'
                  : 'bg-white hover:bg-[#F2EBDD] text-[#17233A] border-gray-200'
              }`}
            >
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${isSelected ? 'text-[#C7A451]' : 'text-gray-400'}`}>
                  Direct Route
                </span>
                <h3 className="font-bold text-sm sm:text-base leading-snug">
                  {pathway.title}
                </h3>
                <p className={`text-xs mt-2 leading-relaxed ${isSelected ? 'text-gray-300' : 'text-gray-600'}`}>
                  {pathway.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200/40 text-[11px] font-semibold flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#C7A451]" />
                <span className="truncate">{pathway.email}</span>
              </div>
            </button>
          );
        })}
      </section>

      {/* Functional Contact Form with Validation */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#C7A451]/25 p-8 sm:p-12 shadow-md">
          <div className="border-b border-gray-100 pb-5 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C7A451]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451]">
                Active Routing: {currentPathwayObj.title}
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#17233A] mt-1">
              Send a Message to {currentPathwayObj.email}
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Please provide verified contact details so we can respond promptly.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 bg-[#FAF7F0] rounded-2xl border border-emerald-300 p-8">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#17233A]">
                Message Routed Successfully
              </h4>
              <p className="text-xs sm:text-sm text-[#17233A]/80 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your enquiry has been received by our <strong>{currentPathwayObj.title}</strong> desk. A confirmation has been registered for <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '', consent: false });
                }}
                className="mt-6 px-6 py-2 rounded-full bg-[#17233A] text-white text-xs font-bold hover:bg-[#2A3F66]"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#17233A] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rohini Roy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#FAF7F0] focus:bg-white outline-none ${
                      errors.name ? 'border-rose-500' : 'border-gray-200 focus:border-[#C7A451]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17233A] mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    placeholder="rohini@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#FAF7F0] focus:bg-white outline-none ${
                      errors.email ? 'border-rose-500' : 'border-gray-200 focus:border-[#C7A451]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">Subject Line *</label>
                <input
                  type="text"
                  placeholder={`Enquiry regarding ${selectedPathway.toLowerCase()}...`}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#FAF7F0] focus:bg-white outline-none ${
                    errors.subject ? 'border-rose-500' : 'border-gray-200 focus:border-[#C7A451]'
                  }`}
                />
                {errors.subject && <p className="text-xs text-rose-600 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">Message *</label>
                <textarea
                  rows={4}
                  placeholder="Share details regarding your request, collaboration timeline, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-[#FAF7F0] focus:bg-white outline-none ${
                    errors.message ? 'border-rose-500' : 'border-gray-200 focus:border-[#C7A451]'
                  }`}
                />
                {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-[#17233A]"
                  />
                  <span className="text-xs text-[#17233A]/75 leading-tight">
                    I acknowledge that I am at least 18 years old and agree to receive email communications from Zanarra in response to this enquiry.
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-rose-600 mt-1 ml-6">{errors.consent}</p>}
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#17233A] text-white font-bold text-xs hover:bg-[#2A3F66] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Message'}
                  <Send className="w-3.5 h-3.5 text-[#C7A451]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
