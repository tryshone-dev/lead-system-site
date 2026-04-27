import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AfterHoursAiMedSpaPage from "./AfterHoursAiMedSpaPage";
import "./index.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const Page = pathname === "/after-hours-ai-med-spa" ? AfterHoursAiMedSpaPage : App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
