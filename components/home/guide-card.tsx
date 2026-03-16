"use client";

import { useState } from "react";

export function GuideSignupCard({ cta }: { cta: string }) {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }

    setIsSent(true);
  };

  if (isSent) {
    return <p className="resource-success">Guide on its way — check your inbox.</p>;
  }

  return (
    <form className="guide-form" onSubmit={handleSubmit} noValidate>
      <input
        aria-label="Your email address"
        type="email"
        placeholder="your@student.nl"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">{cta}</button>
    </form>
  );
}
