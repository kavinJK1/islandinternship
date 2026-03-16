"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { applicationForm, siteLinks } from "@/data/homepage";

type PrefillState = {
  destination?: string;
  field?: string;
  source?: string;
};

type ModalContextValue = {
  openModal: (prefill?: PrefillState) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("OpenApplicationButton must be used within ApplicationModalProvider.");
  }

  return context;
}

export function ApplicationModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prefill, setPrefill] = useState<PrefillState>({});
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    studyYear: "",
    destination: "",
    internshipField: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const openModal = (nextPrefill?: PrefillState) => {
    setPrefill(nextPrefill ?? {});
    setFormState((current) => ({
      ...current,
      destination: nextPrefill?.destination ?? current.destination,
      internshipField: nextPrefill?.field ?? current.internshipField,
    }));
    setErrors({});
    setStep(1);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsSubmitting(false);
    setErrors({});
    setStep(1);
  };

  const value = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [],
  );

  const validateStepOne = () => {
    const nextErrors: Record<string, string> = {};

    if (!formState.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!formState.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!formState.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStepTwo = () => {
    const nextErrors: Record<string, string> = {};

    if (!formState.university) nextErrors.university = "Select your university.";
    if (!formState.studyYear) nextErrors.studyYear = "Select your study year.";
    if (!formState.destination) nextErrors.destination = "Choose a destination.";
    if (!formState.internshipField) nextErrors.internshipField = "Choose an internship field.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const updateField = (field: keyof typeof formState, value: string) => {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (step === 1) {
      if (!validateStepOne()) return;
      setStep(2);
      return;
    }

    if (!validateStepTwo()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setStep(3);
  };

  const resetAfterSuccess = () => {
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      university: "",
      studyYear: "",
      destination: prefill.destination ?? "",
      internshipField: prefill.field ?? "",
      message: "",
    });
    closeModal();
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen ? (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="application-modal-title">
          <div className="application-modal">
            <button type="button" className="modal-close" onClick={closeModal} aria-label="Close application form">
              ×
            </button>
            <div className="modal-shell">
              <div className="modal-sidebar">
                <span className="modal-pill">Free application — no commitment</span>
                <h2 id="application-modal-title" className="modal-title">
                  Apply for Island Internship
                </h2>
                <p className="modal-copy">
                  Tell us about yourself and we&apos;ll come back to you within 2 business days.
                </p>
                <div className="modal-facts">
                  <div>
                    <span>Application time</span>
                    <strong>About 10 minutes</strong>
                  </div>
                  <div>
                    <span>Cost</span>
                    <strong>Free to apply</strong>
                  </div>
                  <div>
                    <span>Response</span>
                    <strong>Within 2 business days</strong>
                  </div>
                </div>
              </div>
              <div className="modal-main">
                <div className="modal-steps" aria-label="Application progress">
                  <div className={`modal-step-pill ${step === 1 ? "is-active" : ""}`}>1. Your details</div>
                  <div className={`modal-step-pill ${step === 2 ? "is-active" : ""}`}>2. Study and placement</div>
                  <div className={`modal-step-pill ${step === 3 ? "is-active" : ""}`}>3. Received</div>
                </div>

                {step === 3 ? (
                  <div className="modal-success">
                    <h3>Application received.</h3>
                    <p>
                      Thank you — we&apos;ll review your profile and get back to you within 2 business days with your
                      matched placement options.
                    </p>
                    <button type="button" className="button button-primary" onClick={resetAfterSuccess}>
                      Back to homepage
                    </button>
                  </div>
                ) : (
                  <form className="modal-form" onSubmit={handleSubmit} noValidate>
                    {step === 1 ? (
                      <>
                        <div className="field-row">
                          <label className="field">
                            <span>First name</span>
                            <input
                              value={formState.firstName}
                              onChange={(event) => updateField("firstName", event.target.value)}
                              placeholder="Emma"
                            />
                            {errors.firstName ? <small>{errors.firstName}</small> : null}
                          </label>
                          <label className="field">
                            <span>Last name</span>
                            <input
                              value={formState.lastName}
                              onChange={(event) => updateField("lastName", event.target.value)}
                              placeholder="de Vries"
                            />
                            {errors.lastName ? <small>{errors.lastName}</small> : null}
                          </label>
                        </div>
                        <label className="field">
                          <span>Email address</span>
                          <input
                            type="email"
                            value={formState.email}
                            onChange={(event) => updateField("email", event.target.value)}
                            placeholder="emma@student.uva.nl"
                          />
                          {errors.email ? <small>{errors.email}</small> : null}
                        </label>
                        <div className="modal-actions">
                          <button type="submit" className="button button-primary">
                            Continue
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="field-row">
                          <label className="field">
                            <span>University</span>
                            <select
                              value={formState.university}
                              onChange={(event) => updateField("university", event.target.value)}
                            >
                              <option value="">Select your university</option>
                              {applicationForm.universities.map((item) => (
                                <option key={item} value={item}>
                                  {item}
                                </option>
                              ))}
                            </select>
                            {errors.university ? <small>{errors.university}</small> : null}
                          </label>
                          <label className="field">
                            <span>Study year</span>
                            <select value={formState.studyYear} onChange={(event) => updateField("studyYear", event.target.value)}>
                              <option value="">Select study year</option>
                              {applicationForm.studyYears.map((item) => (
                                <option key={item} value={item}>
                                  {item}
                                </option>
                              ))}
                            </select>
                            {errors.studyYear ? <small>{errors.studyYear}</small> : null}
                          </label>
                        </div>
                        <div className="field-row">
                          <label className="field">
                            <span>Destination</span>
                            <select
                              value={formState.destination}
                              onChange={(event) => updateField("destination", event.target.value)}
                            >
                              <option value="">Choose destination</option>
                              {applicationForm.destinations.map((item) => (
                                <option key={item} value={item}>
                                  {item}
                                </option>
                              ))}
                            </select>
                            {errors.destination ? <small>{errors.destination}</small> : null}
                          </label>
                          <label className="field">
                            <span>Internship field</span>
                            <select
                              value={formState.internshipField}
                              onChange={(event) => updateField("internshipField", event.target.value)}
                            >
                              <option value="">Choose field</option>
                              {applicationForm.fields.map((item) => (
                                <option key={item} value={item}>
                                  {item}
                                </option>
                              ))}
                            </select>
                            {errors.internshipField ? <small>{errors.internshipField}</small> : null}
                          </label>
                        </div>
                        <label className="field">
                          <span>Anything you&apos;d like us to know (optional)</span>
                          <textarea
                            rows={4}
                            value={formState.message}
                            onChange={(event) => updateField("message", event.target.value)}
                            placeholder="Your study background, preferred start date, or any questions..."
                          />
                        </label>
                        <div className="modal-actions">
                          <button type="button" className="button button-secondary" onClick={() => setStep(1)}>
                            Back
                          </button>
                          <button type="submit" className="button button-primary" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send application"}
                          </button>
                        </div>
                        <p className="modal-note">No payment required. We&apos;ll reply within 2 business days.</p>
                      </>
                    )}
                  </form>
                )}

                <div className="modal-footer">
                  <a href={siteLinks.whatsapp} target="_blank" rel="noreferrer">
                    Prefer WhatsApp?
                  </a>
                  {prefill.source ? <span>Opened from: {prefill.source}</span> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </ModalContext.Provider>
  );
}

type OpenButtonProps = {
  children: React.ReactNode;
  className?: string;
  destination?: string;
  field?: string;
  source?: string;
};

export function OpenApplicationButton({
  children,
  className,
  destination,
  field,
  source,
}: OpenButtonProps) {
  const { openModal } = useModalContext();

  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        openModal({
          destination,
          field,
          source,
        })
      }
    >
      {children}
    </button>
  );
}
