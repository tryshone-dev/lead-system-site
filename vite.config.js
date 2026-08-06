import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        afterHoursAiMedSpa: resolve(__dirname, "after-hours-ai-med-spa.html"),
        afterHoursChatbotMedSpas: resolve(__dirname, "after-hours-chatbot-med-spas.html"),
        medSpaLeadCaptureMichigan: resolve(__dirname, "med-spa-lead-capture-michigan.html"),
        medSpaAiLeadCapture: resolve(__dirname, "med-spa-ai-lead-capture.html"),
        medSpaAiBooking: resolve(__dirname, "med-spa-ai-booking.html"),
        medSpaAiPricing: resolve(__dirname, "med-spa-ai-pricing.html"),
        medSpaAiFollowUp: resolve(__dirname, "med-spa-ai-follow-up.html"),
      },
    },
  },
});
