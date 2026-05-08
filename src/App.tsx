import { NewsletterWidget } from "./components/NewsletterWidget";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <NewsletterWidget
        source="vite-dev"
        theme="light"
      />
    </div>
  );
}

export default App;