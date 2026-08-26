import React from "react";
import ReactDOM from "react-dom/client";
import { RevenueChatClient } from "./components/RevenueChatClient";
import "./index.css";

const businessSlug = new URLSearchParams(window.location.search).get("business") || "revenue-after-dark-demo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="min-h-screen bg-slate-950 p-2">
      <RevenueChatClient businessSlug={businessSlug} compact />
    </main>
  </React.StrictMode>,
);
