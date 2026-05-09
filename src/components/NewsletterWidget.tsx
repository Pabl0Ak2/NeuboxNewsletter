import { useState } from "react";
import { subscribeToNewsletter } from "../services/newsletter";
import { NewsletterForm } from "./NewsletterForm";
import { SuccessModal } from "./SuccessModal";
import type { NewsletterWidgetProps } from "../types/newsletter";

export const NewsletterWidget = ({ apiUrl, source, theme = "light" }: NewsletterWidgetProps) => {
  //estados
  const [email, setEmail] = useState("");
  const [liveError, setLiveError] = useState("");    //para error de campo obligatorio (debajo del input)
  const [actionError, setActionError] = useState(""); //para error de servidor o formato (dentro del form)
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const ERROR_REQUIRED = "El correo es obligatorio";
  const ERROR_INVALID = "El correo electrónico no es válido";

  const validateEmailFormat = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setLiveError(!value.trim() ? ERROR_REQUIRED : "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setLiveError(ERROR_REQUIRED);
      return;
    }

    if (!validateEmailFormat(email)) {
      setActionError(ERROR_INVALID);
      return;
    }

    setLoading(true);
    try {
      const data = await subscribeToNewsletter(email, apiUrl, source);
      
      if (data.error) {
        setActionError(data.message);
      } else {
        setSuccessOpen(true);
        setEmail("");
      }
    } catch (error) {
      setActionError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-theme={theme} className="antialiased font-sans">
      <div className="div-widget w-full max-w-3xl mx-auto p-10 rounded-3xl shadow-xl border bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 transition-all duration-300">

        <div className="mb-8 text-center">
          <p className="text-xl font-bold text-gray-700 dark:text-slate-200">
            Suscríbete a nuestro Newsletter
          </p>
          <div className="h-1.5 w-16 bg-blue-500 mx-auto mt-3 rounded-full opacity-50"></div>
        </div>
        <div className="relative">
          <NewsletterForm
            email={email}
            loading={loading}
            error={actionError}
            onErrorClose={() => setActionError("")}
            onEmailChange={handleEmailChange}
            onSubmit={handleSubmit}
            onBlur={() => !email.trim() && setLiveError(ERROR_REQUIRED)}
          />
        </div>

        {liveError && (
          <div className="flex justify-start">
            <p className="mt-1 py-1 px-3 ml-2 text-xs text-red-500 border border-red-200 rounded-lg bg-red-50/90 dark:bg-red-900/20 dark:border-red-800/50 font-medium animate-in fade-in slide-in-from-top-1 w-fit">
              {liveError}
            </p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-center gap-2 opacity-40">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
           <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-slate-400 font-bold">
             Juan Pablo Cervantes
           </span>
        </div>
      </div>

      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </div>
  );
};