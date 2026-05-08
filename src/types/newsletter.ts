export interface NewsletterResponse {
  error: boolean;
  message: string;
}

export interface NewsletterWidgetProps {
  apiUrl?: string;
  source?: string;
  theme?: "light" | "dark";
}