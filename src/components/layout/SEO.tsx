import React, { useEffect } from 'react';
import { SEOConfig, SITE_URL, SITE_NAME, TWITTER_HANDLE, DEFAULT_OG_IMAGE } from '../../data/seoData';

interface SEOProps extends Partial<SEOConfig> {
  pageConfig?: SEOConfig;
}

/**
 * Helper to update or create a <meta> tag by name or property
 */
function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Helper to update or create a <link> tag by rel
 */
function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export const SEO: React.FC<SEOProps> = ({ pageConfig, ...customProps }) => {
  const merged: SEOConfig = {
    title: customProps.title ?? pageConfig?.title ?? 'Zanarra — One Universe. Infinite Stories.',
    description:
      customProps.description ??
      pageConfig?.description ??
      'Zanarra is an original children’s entertainment and intellectual property studio building globally scalable franchises.',
    canonicalPath: customProps.canonicalPath ?? pageConfig?.canonicalPath ?? '/',
    image: customProps.image ?? pageConfig?.image ?? DEFAULT_OG_IMAGE,
    imageAlt: customProps.imageAlt ?? pageConfig?.imageAlt ?? 'Zanarra Universe',
    imageWidth: customProps.imageWidth ?? pageConfig?.imageWidth ?? 1920,
    imageHeight: customProps.imageHeight ?? pageConfig?.imageHeight ?? 1080,
    type: customProps.type ?? pageConfig?.type ?? 'website',
    keywords: customProps.keywords ?? pageConfig?.keywords ?? ['Zanarra', 'Children IP', 'Animation Studio'],
    jsonLd: customProps.jsonLd ?? pageConfig?.jsonLd,
  };

  useEffect(() => {
    // 1. Title
    document.title = merged.title;

    // 2. Canonical URL & Base Meta
    const fullCanonicalUrl = `${SITE_URL}${merged.canonicalPath}`;
    const fullImageUrl = merged.image.startsWith('http') ? merged.image : `${SITE_URL}${merged.image}`;

    setLinkTag('canonical', fullCanonicalUrl);
    setMetaTag('name', 'description', merged.description);
    setMetaTag('name', 'keywords', merged.keywords.join(', '));
    setMetaTag('name', 'author', 'Zanarra Studios');
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', merged.title);
    setMetaTag('property', 'og:description', merged.description);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:type', merged.type ?? 'website');
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'en_US');
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:image:alt', merged.imageAlt);
    if (merged.imageWidth) {
      setMetaTag('property', 'og:image:width', merged.imageWidth.toString());
    }
    if (merged.imageHeight) {
      setMetaTag('property', 'og:image:height', merged.imageHeight.toString());
    }

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', TWITTER_HANDLE);
    setMetaTag('name', 'twitter:creator', TWITTER_HANDLE);
    setMetaTag('name', 'twitter:title', merged.title);
    setMetaTag('name', 'twitter:description', merged.description);
    setMetaTag('name', 'twitter:image', fullImageUrl);
    setMetaTag('name', 'twitter:image:alt', merged.imageAlt);

    // 5. JSON-LD Structured Data
    const scriptId = 'zanarra-dynamic-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (merged.jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(merged.jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [
    merged.title,
    merged.description,
    merged.canonicalPath,
    merged.image,
    merged.imageAlt,
    merged.imageWidth,
    merged.imageHeight,
    merged.type,
    merged.keywords,
    merged.jsonLd,
  ]);

  return null;
};
