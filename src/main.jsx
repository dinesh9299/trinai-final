import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// import "primereact/resources/themes/luna-light/theme.css"; // Correct theme import
import "primereact/resources/themes/luna-blue/theme.css"; // Luna Blue theme
import "primereact/resources/primereact.min.css"; // Core styles for PrimeReact components
import "primeicons/primeicons.css"; // For PrimeIcons (icons)

import { Worker } from "@react-pdf-viewer/core";
import "antd";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <App />
      </Worker>
    </UserProvider>
  </StrictMode>
);
