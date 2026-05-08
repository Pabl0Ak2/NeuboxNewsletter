import "../styles/widget.css";

interface NewsletterFormProps {
  email: string;
  loading: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const NewsletterForm = ({
  email,
  loading,
  onEmailChange,
  onSubmit,
}: NewsletterFormProps) => {
  return (
    <form 
      className="newsletter-form"
      onSubmit={onSubmit}>
      <input
        className="newsletter-input"
        type="email"
        value={email}
        placeholder="correo@mail.com"
        onChange={(e) => onEmailChange(e.target.value)}
      />

      <button 
        className="newsletter-button"
        type="submit">
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};