interface AlertProps {
  message: string;
}

export const Alert = ({ message }: AlertProps) => {
  return (
    <div
      style={{
        background: "#fee2e2",
        color: "#b91c1c",
        padding: "12px",
        borderRadius: "8px",
        marginTop: "12px",
      }}
    >
      {message}
    </div>
  );
};