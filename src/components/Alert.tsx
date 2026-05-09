import { useEffect, useState } from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

export const Alert = ({ message, onClose }: AlertProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 2000);
    const removeTimer = setTimeout(() => onClose(), 2300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onClose]);

  return (
      <div
        role="alert"
        className={`
          absolute inset-0 z-30 flex items-center gap-3 px-4
          bg-[#de4747] text-white rounded-xl
          transition-all duration-300 ease-in-out
          ${isExiting ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}
        `}
      >
        <svg className="w-6 h-6 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="text-sm font-bold tracking-tight">
          {message}
        </span>
      </div>
  );
};