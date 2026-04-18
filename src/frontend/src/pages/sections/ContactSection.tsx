import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";
import {
  SERVICE_INTEREST_LABELS,
  type ServiceInterestKey,
} from "@/types/contact";
import { CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "enterprise@techsphere-it.com" },
  { icon: Phone, label: "Phone", value: "+1 (800) TECH-SPH" },
  { icon: Clock, label: "Response", value: "Within 24 business hours" },
];

export function ContactSection() {
  const {
    form,
    errors,
    isSubmitting,
    submitted,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  } = useContactForm();

  return (
    <section
      id="contact"
      className="py-20 bg-muted/30"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge
            variant="outline"
            className="mb-4 text-accent border-accent/40 bg-accent/5 px-3 py-1 text-xs uppercase tracking-widest"
          >
            Contact
          </Badge>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
            Start Your IT Transformation
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Ready to modernise your IT infrastructure? Our enterprise solutions
            team will contact you within 24 business hours to discuss your
            requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                        {label}
                      </p>
                      <p className="text-sm text-foreground mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-display font-semibold text-sm text-foreground mb-2">
                Enterprise SLA
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All enterprise accounts receive a dedicated account manager,
                quarterly business reviews, and guaranteed 4-hour on-site
                response times.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-xl border border-border p-7 shadow-subtle">
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs mb-6">
                    Thank you, {form.name.split(" ")[0]}. Our enterprise team
                    will review your inquiry and contact you within 24 business
                    hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={reset}
                    data-ocid="contact.reset_button"
                    className="border-accent/40 text-accent hover:bg-accent/5"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  data-ocid="contact.form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        placeholder="Jane Smith"
                        data-ocid="contact.name_input"
                        className={
                          errors.name
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-xs text-destructive"
                          data-ocid="contact.name_field_error"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Business Email{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        placeholder="jane@acmecorp.com"
                        data-ocid="contact.email_input"
                        className={
                          errors.email
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-xs text-destructive"
                          data-ocid="contact.email_field_error"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        placeholder="+1 (555) 000-0000"
                        data-ocid="contact.phone_input"
                        className={
                          errors.phone
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="text-xs text-destructive"
                          data-ocid="contact.phone_field_error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="company"
                        value={form.company}
                        onChange={(e) =>
                          handleChange("company", e.target.value)
                        }
                        onBlur={() => handleBlur("company")}
                        placeholder="Acme Corporation"
                        data-ocid="contact.company_input"
                        className={
                          errors.company
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                        aria-describedby={
                          errors.company ? "company-error" : undefined
                        }
                      />
                      {errors.company && (
                        <p
                          id="company-error"
                          className="text-xs text-destructive"
                          data-ocid="contact.company_field_error"
                        >
                          {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Service interest — full width */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <Label
                        htmlFor="serviceInterest"
                        className="text-sm font-medium"
                      >
                        Service Interest
                      </Label>
                      <Select
                        value={form.serviceInterest}
                        onValueChange={(v) =>
                          handleChange("serviceInterest", v)
                        }
                      >
                        <SelectTrigger
                          id="serviceInterest"
                          data-ocid="contact.service_select"
                          className="w-full"
                        >
                          <SelectValue placeholder="Select a service area" />
                        </SelectTrigger>
                        <SelectContent>
                          {(
                            Object.entries(SERVICE_INTEREST_LABELS) as [
                              ServiceInterestKey,
                              string,
                            ][]
                          ).map(([key, label]) => (
                            <SelectItem key={key} value={key}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message — full width */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Requirements <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        onBlur={() => handleBlur("message")}
                        placeholder="Describe your IT requirements, current challenges, or questions..."
                        rows={4}
                        data-ocid="contact.message_textarea"
                        className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="text-xs text-destructive"
                          data-ocid="contact.message_field_error"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      data-ocid="contact.submit_button"
                      className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 h-12"
                    >
                      {isSubmitting ? (
                        <span
                          className="flex items-center gap-2"
                          data-ocid="contact.loading_state"
                        >
                          <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                          Submitting…
                        </span>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">
                      By submitting, you agree to our privacy policy. We never
                      share your data with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
