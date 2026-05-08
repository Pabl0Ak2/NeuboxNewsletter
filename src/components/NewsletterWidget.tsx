import { useState } from "react";

import { subscribeToNewsletter } from "../services/newsletter";

import { Alert } from "./Alert";
import { NewsletterForm } from "./NewsletterForm";
import { SuccessModal } from "./SuccessModal";

import type { NewsletterWidgetProps } from "../types/newsletter";

export const NewsletterWidget = ({
  apiUrl,
  source,
  theme = "light",
}: NewsletterWidgetProps) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const data = await subscribeToNewsletter(
        email,
        apiUrl,
        source
      );
      
      if (data.error) {
        setMessage(data.message);
      } else {
        setSuccessOpen(true);
        setEmail("");
      }
    } catch (error) {
      setMessage("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-theme={theme}>
      <NewsletterForm
        email={email}
        loading={loading}
        onEmailChange={setEmail}
        onSubmit={handleSubmit}
      />

      {message && <Alert message={message} />}

      <SuccessModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </div>
  );
};