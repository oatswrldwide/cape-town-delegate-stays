import { createRoot } from "react-dom/client";
import { LandingPage } from "./routes/index";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

createRoot(rootElement).render(<LandingPage />);
