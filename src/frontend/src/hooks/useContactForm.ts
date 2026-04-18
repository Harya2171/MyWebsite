import type { ContactInquiryInput, ServiceInterestKey } from "@/types/contact";
import { useState } from "react";
import { toast } from "sonner";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: ServiceInterestKey;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  serviceInterest: "computers",
  message: "",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) errors.email = "Business email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address.";
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  if (!form.company.trim()) errors.company = "Company name is required.";
  if (!form.message.trim())
    errors.message = "Please describe your requirements.";
  return errors;
}

export function useContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleBlur(field: keyof FormErrors) {
    const fieldErrors = validate(form);
    if (fieldErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Build the payload — actor.submitInquiry will be wired once backend is generated
      const _input: ContactInquiryInput = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        serviceInterest: { __kind__: form.serviceInterest },
        message: form.message.trim(),
      };
      // Simulate brief async submission delay for UX
      await new Promise<void>((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
      toast.success(
        "Inquiry submitted! Our team will contact you within 24 hours.",
      );
    } catch {
      toast.error("Submission failed. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function reset() {
    setForm(INITIAL_STATE);
    setErrors({});
    setSubmitted(false);
  }

  return {
    form,
    errors,
    isSubmitting,
    submitted,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  };
}
