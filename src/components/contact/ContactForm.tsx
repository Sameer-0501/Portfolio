import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, RotateCcw, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormState {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const MAX_MESSAGE_LENGTH = 500;

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email Address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length > MAX_MESSAGE_LENGTH) {
            newErrors.message = `Message must not exceed ${MAX_MESSAGE_LENGTH} characters`;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleClear = () => {
        setFormData({
            fullName: '',
            email: '',
            subject: '',
            message: '',
        });
        setErrors({});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate form submission endpoint / email routing
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <div className="bg-card p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 shadow-medium relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primaryAccent/5 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
                {isSubmitted ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-5"
                    >
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-textPrimary">
                            Message Sent Successfully!
                        </h3>

                        <p className="text-sm text-textSecondary max-w-md leading-relaxed">
                            Thank you for reaching out, <span className="font-semibold text-textPrimary">{formData.fullName}</span>. I have received your note and will reply to <span className="font-semibold text-highlight">{formData.email}</span> shortly.
                        </p>

                        <div className="pt-4">
                            <button
                                type="button"
                                onClick={() => {
                                    handleClear();
                                    setIsSubmitted(false);
                                }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-elevatedSurface border border-white/10 text-textPrimary hover:text-highlight hover:border-highlight/30 transition-all duration-200 shadow-soft"
                            >
                                <RotateCcw className="w-4 h-4" />
                                <span>Send Another Message</span>
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <form key="form" onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
                        <div className="flex items-center justify-between pb-2 border-b border-white/10">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-textPrimary tracking-tight">
                                    Send a Direct Message
                                </h3>
                                <p className="text-xs sm:text-sm text-textSecondary mt-0.5">
                                    Fill out the details below to initiate a conversation.
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleClear}
                                title="Clear form"
                                className="text-xs text-mutedText hover:text-textPrimary flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Clear</span>
                            </button>
                        </div>

                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-xs font-semibold text-textSecondary uppercase tracking-wider mb-2">
                                    Full Name <span className="text-highlight">*</span>
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="e.g. Alex Morgan"
                                    aria-invalid={!!errors.fullName}
                                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                    className={`w-full px-4 py-3 rounded-xl bg-elevatedSurface/80 border text-sm text-textPrimary placeholder:text-mutedText/60 focus:outline-none focus:ring-2 focus:ring-highlight transition-all duration-200 ${
                                        errors.fullName ? 'border-rose-500/80 focus:ring-rose-500' : 'border-white/10 hover:border-white/20'
                                    }`}
                                />
                                {errors.fullName && (
                                    <p id="fullName-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                        <span>{errors.fullName}</span>
                                    </p>
                                )}
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold text-textSecondary uppercase tracking-wider mb-2">
                                    Email Address <span className="text-highlight">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="e.g. alex@company.com"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    className={`w-full px-4 py-3 rounded-xl bg-elevatedSurface/80 border text-sm text-textPrimary placeholder:text-mutedText/60 focus:outline-none focus:ring-2 focus:ring-highlight transition-all duration-200 ${
                                        errors.email ? 'border-rose-500/80 focus:ring-rose-500' : 'border-white/10 hover:border-white/20'
                                    }`}
                                />
                                {errors.email && (
                                    <p id="email-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                        <span>{errors.email}</span>
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-xs font-semibold text-textSecondary uppercase tracking-wider mb-2">
                                Subject <span className="text-highlight">*</span>
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="e.g. Full-Time Opportunity / Project Discussion"
                                aria-invalid={!!errors.subject}
                                aria-describedby={errors.subject ? "subject-error" : undefined}
                                className={`w-full px-4 py-3 rounded-xl bg-elevatedSurface/80 border text-sm text-textPrimary placeholder:text-mutedText/60 focus:outline-none focus:ring-2 focus:ring-highlight transition-all duration-200 ${
                                    errors.subject ? 'border-rose-500/80 focus:ring-rose-500' : 'border-white/10 hover:border-white/20'
                                }`}
                            />
                            {errors.subject && (
                                <p id="subject-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span>{errors.subject}</span>
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label htmlFor="message" className="block text-xs font-semibold text-textSecondary uppercase tracking-wider">
                                    Message <span className="text-highlight">*</span>
                                </label>
                                <span className={`text-xs ${
                                    formData.message.length > MAX_MESSAGE_LENGTH ? 'text-rose-400 font-semibold' : 'text-mutedText'
                                }`}>
                                    {formData.message.length} / {MAX_MESSAGE_LENGTH}
                                </span>
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message or role details here..."
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : undefined}
                                className={`w-full px-4 py-3 rounded-xl bg-elevatedSurface/80 border text-sm text-textPrimary placeholder:text-mutedText/60 focus:outline-none focus:ring-2 focus:ring-highlight transition-all duration-200 resize-y min-h-[120px] ${
                                    errors.message ? 'border-rose-500/80 focus:ring-rose-500' : 'border-white/10 hover:border-white/20'
                                }`}
                            />
                            {errors.message && (
                                <p id="message-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span>{errors.message}</span>
                                </p>
                            )}
                        </div>

                        {/* Submit Action */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-highlight to-primaryAccent text-textPrimary shadow-soft hover:shadow-highlight/25 hover:opacity-95 disabled:opacity-50 transition-all duration-200 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin text-textPrimary" />
                                        <span>Sending Message...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </AnimatePresence>
        </div>
    );
};
