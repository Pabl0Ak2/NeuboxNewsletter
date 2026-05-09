export interface NewsletterResponse {
  error: boolean;
  message: string;
}

export interface NewsletterWidgetProps {
  apiUrl?: string;
  source?: string;
  theme?: "light" | "dark";
}

export interface AlertProps {
  message: string;
  onClose: () => void;
}

export interface NewsletterFormProps {
  email: string;
  loading: boolean;
  error?: string | null;
  onErrorClose: () => void;
  onEmailChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onBlur: () => void;
}

export interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}