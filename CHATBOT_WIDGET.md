# Revenue After Dark Chatbot V1

The website includes the Revenue After Dark demo business directly. A future client website can load the same engine with one script tag:

```html
<script
  async
  src="https://www.revenueafterdarkai.com/revenue-after-dark-widget.js"
  data-widget-url="https://www.revenueafterdarkai.com"
  data-business="client-business-slug"
></script>
```

Before installation, create the client's server-side business record with its approved knowledge, booking link, and escalation instructions. The slug in `data-business` selects that record. Provider credentials are never included in the snippet or browser bundle.

For local development, set `VITE_API_BASE_URL=http://localhost:5173` and run the dashboard API plus this website. The production API must allow the client website origin through `CORS_ALLOWED_ORIGINS`.
