import { useEffect } from "react";

function ensureMeta(selector, createTag) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }

  return element;
}

export function usePageSeo({
  title,
  description,
  canonicalPath,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  schema,
}) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = ensureMeta('meta[name="description"]', () => {
      const meta = document.createElement("meta");
      meta.name = "description";
      return meta;
    });
    const ogTitleMeta = ensureMeta('meta[property="og:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      return meta;
    });
    const ogDescriptionMeta = ensureMeta('meta[property="og:description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      return meta;
    });
    const ogUrlMeta = ensureMeta('meta[property="og:url"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      return meta;
    });
    const twitterTitleMeta = ensureMeta('meta[name="twitter:title"]', () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:title";
      return meta;
    });
    const twitterDescriptionMeta = ensureMeta('meta[name="twitter:description"]', () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:description";
      return meta;
    });
    const canonicalLink = ensureMeta('link[rel="canonical"]', () => {
      const link = document.createElement("link");
      link.rel = "canonical";
      return link;
    });
    const schemaScript = ensureMeta('script[data-rad-page-schema="true"]', () => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.radPageSchema = "true";
      return script;
    });

    const previousDescription = descriptionMeta.getAttribute("content") || "";
    const previousOgTitle = ogTitleMeta.getAttribute("content") || "";
    const previousOgDescription = ogDescriptionMeta.getAttribute("content") || "";
    const previousOgUrl = ogUrlMeta.getAttribute("content") || "";
    const previousTwitterTitle = twitterTitleMeta.getAttribute("content") || "";
    const previousTwitterDescription = twitterDescriptionMeta.getAttribute("content") || "";
    const previousCanonical = canonicalLink.getAttribute("href") || "";
    const previousSchema = schemaScript.textContent || "";

    const canonicalUrl = `https://www.revenueafterdarkai.com${canonicalPath}`;

    document.title = title;
    descriptionMeta.setAttribute("content", description);
    ogTitleMeta.setAttribute("content", ogTitle || title);
    ogDescriptionMeta.setAttribute("content", ogDescription || description);
    ogUrlMeta.setAttribute("content", canonicalUrl);
    twitterTitleMeta.setAttribute("content", twitterTitle || title);
    twitterDescriptionMeta.setAttribute("content", twitterDescription || description);
    canonicalLink.setAttribute("href", canonicalUrl);
    schemaScript.textContent = JSON.stringify(schema);

    return () => {
      document.title = previousTitle;
      descriptionMeta.setAttribute("content", previousDescription);
      ogTitleMeta.setAttribute("content", previousOgTitle);
      ogDescriptionMeta.setAttribute("content", previousOgDescription);
      ogUrlMeta.setAttribute("content", previousOgUrl);
      twitterTitleMeta.setAttribute("content", previousTwitterTitle);
      twitterDescriptionMeta.setAttribute("content", previousTwitterDescription);
      canonicalLink.setAttribute("href", previousCanonical);
      schemaScript.textContent = previousSchema;
    };
  }, [
    canonicalPath,
    description,
    ogDescription,
    ogTitle,
    schema,
    title,
    twitterDescription,
    twitterTitle,
  ]);
}
