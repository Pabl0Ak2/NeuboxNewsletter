const DEFAULT_NEWSLETTER_ENDPOINT =
  "/api/newsletter";

const NEWSLETTER_HEADERS = {
  "Content-Type": "application/x-www-form-urlencoded",
  Accept: "application/json",
  "X-Newsletter-Api-Key":
    "6f897086c76602ede819e109eeeb0ff43f4b42212a80b4d48d3bf1fe6d6d8b40",
};

export interface NewsletterResponse {
  error: boolean;
  message: string;
}

export const subscribeToNewsletter = async (
  email: string,
  apiUrl: string = DEFAULT_NEWSLETTER_ENDPOINT,
  source?: string
): Promise<NewsletterResponse> => {
  const body = new URLSearchParams({
    newsletter_user_email: email,
    checkbox_accept: "on",
    checkbox_accept_mb: "on",
  });

  if (source) {
    body.append("source", source);
  }

  const response = await fetch(
    apiUrl || DEFAULT_NEWSLETTER_ENDPOINT,
    {
      method: "POST",
      headers: NEWSLETTER_HEADERS,
      body: body.toString(),
    }
  );

  const data: NewsletterResponse =
    await response.json();

  return data;
};