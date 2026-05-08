interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export const SuccessModal = ({
  open,
  onClose,
}: SuccessModalProps) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "32px",
          borderRadius: "12px",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2>Suscripción exitosa</h2>

        <p>
          Tu correo fue agregado correctamente al newsletter.
        </p>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};