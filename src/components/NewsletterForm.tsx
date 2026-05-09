import { Alert } from "./Alert";
import type { NewsletterFormProps } from "../types/newsletter";

export const NewsletterForm = ({
  email,
  loading,
  error,
  onErrorClose,
  onEmailChange,
  onSubmit,
  onBlur,
}: NewsletterFormProps) => {
  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="relative flex items-center bg-white dark:bg-slate-800 p-1.5 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 w-full overflow-hidden"
    >
      {error && <Alert message={error} onClose={onErrorClose} />}

      <div className="relative flex-grow flex items-center">
        <div className="pl-4 pointer-events-none">
          <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>

        <input
          className="block w-full px-4 py-3 text-sm text-gray-700 bg-transparent border-none focus:ring-0 outline-none dark:text-white placeholder-gray-400"
          type="email"
          value={email}
          placeholder="Ingresa tu dirección de correo electrónico"
          onChange={(e) => onEmailChange(e.target.value)}
          onBlur={onBlur}
          disabled={loading}
        />
      </div>

      <button
        className="flex-shrink-0 px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:bg-gray-400"
        type="submit"
        disabled={loading || !email.trim()}
      >
        {loading ? "..." : "Suscribirme"}
      </button>
    </form>
  );
};