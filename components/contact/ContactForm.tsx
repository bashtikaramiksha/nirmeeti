"use client";

import React, { useState, useEffect } from "react";
import { PROJECT_TYPE_OPTIONS, ProjectType } from "@/data/contact";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

interface ContactFormProps {
  initialProjectType?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const ContactForm: React.FC<ContactFormProps> = ({ initialProjectType = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: initialProjectType,
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Update initial project type if passed dynamically (e.g. from service click)
  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  // Handle client-side service selection event if triggered from anywhere on page
  useEffect(() => {
    const handleSelectService = (event: CustomEvent<{ projectType: string }>) => {
      if (event.detail?.projectType) {
        setFormData((prev) => ({ ...prev, projectType: event.detail.projectType }));
      }
    };

    window.addEventListener("select-service-type" as any, handleSelectService as any);
    return () => {
      window.removeEventListener("select-service-type" as any, handleSelectService as any);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear individual field error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name must be under 100 characters.";
    }

    // 2. Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // 3. Project Type validation
    if (!formData.projectType.trim()) {
      newErrors.projectType = "Please select a project type.";
    }

    // 4. Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us briefly about your project.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide a bit more detail (minimum 20 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate client side
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    trackEvent("contact_form_submit", { projectType: formData.projectType });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        trackEvent("contact_form_success", { projectType: formData.projectType });
      } else {
        setServerError(
          result.error ||
            "We couldn't send your inquiry right now. Please try again or contact us through WhatsApp."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setServerError(
        "We couldn't send your inquiry right now. Please try again or contact us through WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
      honeypot: "",
    });
    setErrors({});
    setIsSuccess(false);
    setServerError(null);
  };

  // SUCCESS STATE CARD
  if (isSuccess) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl border border-emerald-500/30 bg-[#0d1410] flex flex-col items-center text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2 max-w-md">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Inquiry Sent ✓
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Thanks for reaching out! Your project inquiry has been received. We will review your requirements and get back to you shortly.
          </p>
        </div>

        <div className="w-full pt-4 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            message={`Hi Nirmitee Studio, I just sent an inquiry for ${formData.projectType || "a project"}.`}
            label="Continue on WhatsApp"
            variant="emerald"
            size="md"
            className="w-full sm:w-auto"
          />

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Send Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      method="POST"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      noValidate
      className="space-y-6"
      aria-label="Project Inquiry Form"
    >
      {/* Honeypot field (hidden from regular users) */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Global Server Error Banner */}
      {serverError && (
        <div
          className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm flex items-start gap-3"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
          <div className="flex-1">{serverError}</div>
        </div>
      )}

      {/* Desktop 2-Column Row for Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-800 dark:text-zinc-200">
            Full Name <span className="text-indigo-600 dark:text-indigo-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full h-12 px-4 rounded-xl bg-slate-100 dark:bg-[#111111] border text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none transition-all duration-200 ${
              errors.name
                ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-500 dark:text-red-400 font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-800 dark:text-zinc-200">
            Email <span className="text-indigo-600 dark:text-indigo-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full h-12 px-4 rounded-xl bg-slate-100 dark:bg-[#111111] border text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none transition-all duration-200 ${
              errors.email
                ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-500 dark:text-red-400 font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Desktop 2-Column Row for Phone & Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone / WhatsApp (Optional) */}
        <div className="space-y-2">
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-800 dark:text-zinc-200">
            Phone / WhatsApp <span className="text-xs text-slate-500 dark:text-zinc-500 font-normal">(Optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 (WhatsApp Number)"
            className="w-full h-12 px-4 rounded-xl bg-slate-100 dark:bg-[#111111] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
          />
        </div>

        {/* Project Type */}
        <div className="space-y-2">
          <label htmlFor="contact-project-type" className="block text-sm font-semibold text-slate-800 dark:text-zinc-200">
            Project Type <span className="text-indigo-600 dark:text-indigo-400">*</span>
          </label>
          <div className="relative">
            <select
              id="contact-project-type"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.projectType}
              aria-describedby={errors.projectType ? "project-type-error" : undefined}
              className={`w-full h-12 px-4 rounded-xl bg-slate-100 dark:bg-[#111111] border text-slate-900 dark:text-white text-sm appearance-none focus:outline-none transition-all duration-200 cursor-pointer ${
                errors.projectType
                  ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              } ${!formData.projectType ? "text-slate-400 dark:text-zinc-500" : "text-slate-900 dark:text-white"}`}
            >
              <option value="" disabled>
                Select project type
              </option>
              {PROJECT_TYPE_OPTIONS.map((option) => (
                <option key={option} value={option} className="bg-white dark:bg-[#161616] text-slate-900 dark:text-white">
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-400">
              ▼
            </div>
          </div>
          {errors.projectType && (
            <p id="project-type-error" className="text-xs text-red-500 dark:text-red-400 font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.projectType}</span>
            </p>
          )}
        </div>
      </div>

      {/* Project Details Textarea */}
      <div className="space-y-2">
        <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-800 dark:text-zinc-200">
          Tell Us About Your Project <span className="text-indigo-600 dark:text-indigo-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="What are you planning to build? Tell us about the idea, users and main requirements."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full p-4 min-h-[140px] rounded-xl bg-slate-100 dark:bg-[#111111] border text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none transition-all duration-200 resize-y ${
            errors.message
              ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-500 dark:text-red-400 font-medium flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          disabled={isSubmitting}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white text-base transition-all duration-200 shadow-lg ${
            isSubmitting
              ? "bg-indigo-600/50 cursor-not-allowed opacity-75"
              : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/25 hover:shadow-indigo-500/40 active:scale-[0.98]"
          } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Inquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      {/* Privacy note */}
      <p className="text-xs text-zinc-500 pt-2">
        Your contact details will only be used to respond to your project inquiry.
      </p>
    </form>
  );
};
