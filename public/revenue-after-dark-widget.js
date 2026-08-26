(function installRevenueAfterDarkWidget() {
  var currentScript = document.currentScript;
  var baseUrl = (currentScript && currentScript.dataset && currentScript.dataset.widgetUrl)
    || "https://www.revenueafterdarkai.com";
  var business = (currentScript && currentScript.dataset && currentScript.dataset.business)
    || "revenue-after-dark-demo";
  var button = document.createElement("button");
  var frame = document.createElement("iframe");
  button.type = "button";
  button.textContent = "Ask a question";
  button.setAttribute("aria-label", "Open website assistant");
  button.style.cssText = "position:fixed;right:24px;bottom:24px;z-index:2147483646;border:0;border-radius:999px;background:#0f172a;color:#fff;padding:14px 20px;font:600 14px system-ui;box-shadow:0 18px 45px rgba(15,23,42,.28);cursor:pointer";
  frame.title = "Revenue After Dark website assistant";
  frame.src = baseUrl.replace(/\/$/, "") + "/chat-widget.html?business=" + encodeURIComponent(business);
  frame.style.cssText = "display:none;position:fixed;right:24px;bottom:84px;z-index:2147483646;width:min(390px,calc(100vw - 32px));height:min(650px,calc(100vh - 112px));border:0;border-radius:24px;box-shadow:0 28px 90px rgba(15,23,42,.32);background:#020617";
  button.addEventListener("click", function () {
    var opening = frame.style.display === "none";
    frame.style.display = opening ? "block" : "none";
    button.textContent = opening ? "Close" : "Ask a question";
  });
  document.body.appendChild(frame);
  document.body.appendChild(button);
})();
