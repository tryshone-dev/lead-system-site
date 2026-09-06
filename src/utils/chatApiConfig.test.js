import test from "node:test";
import assert from "node:assert/strict";
import { hostedChatbotApiBaseUrl, resolveChatbotApiBaseUrl } from "./chatApiConfig.js";

test("production uses the hosted API when no override is configured", () => {
  assert.equal(resolveChatbotApiBaseUrl({ hostname: "www.revenueafterdarkai.com" }), hostedChatbotApiBaseUrl);
});

test("production rejects loopback and insecure API overrides", () => {
  assert.equal(resolveChatbotApiBaseUrl({ configured: "http://localhost:10000", hostname: "www.revenueafterdarkai.com" }), hostedChatbotApiBaseUrl);
  assert.equal(resolveChatbotApiBaseUrl({ configured: "http://api.example.com", hostname: "www.revenueafterdarkai.com" }), hostedChatbotApiBaseUrl);
});

test("production accepts an explicit hosted HTTPS API override", () => {
  assert.equal(resolveChatbotApiBaseUrl({ configured: "https://api.example.com/", hostname: "www.revenueafterdarkai.com" }), "https://api.example.com");
});

test("local development keeps its local API path", () => {
  assert.equal(resolveChatbotApiBaseUrl({ configured: "http://127.0.0.1:10000", hostname: "127.0.0.1" }), "http://127.0.0.1:10000");
  assert.equal(resolveChatbotApiBaseUrl({ configured: "https://api.example.com", hostname: "localhost" }), "http://localhost:10000");
});
