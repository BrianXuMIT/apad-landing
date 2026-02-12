"use client";

import { useState } from "react";
import Button from "../ui/Button";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <Button type="submit" variant="primary">
        Get Started
      </Button>
      {isSubmitted && (
        <p className="text-green-600 text-sm mt-2 sm:absolute sm:top-full sm:left-0">
          Thanks! We'll be in touch.
        </p>
      )}
    </form>
  );
}
