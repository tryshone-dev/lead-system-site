import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AfterHoursAiMedSpaPage from "./AfterHoursAiMedSpaPage";
import MedSpaLeadCaptureMichiganPage from "./MedSpaLeadCaptureMichiganPage";
import TargetedLandingPage from "./TargetedLandingPage";
import { landingPageConfigs } from "./landingPageConfigs";
import "./index.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const targetedConfig = landingPageConfigs[pathname];
const Page =
  targetedConfig
    ? () => <TargetedLandingPage config={targetedConfig} />
    : pathname === "/after-hours-ai-med-spa"
    ? AfterHoursAiMedSpaPage
    : pathname === "/med-spa-lead-capture-michigan"
      ? MedSpaLeadCaptureMichiganPage
      : App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
