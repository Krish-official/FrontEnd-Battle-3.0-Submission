import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    // Dynamic meta tag injection
    const metaTags = [
      { name: 'description', content: 'Advanced AI-driven data automation platform. Deploy bespoke AI agents that solve complex operational hurdles and drive measurable growth.' },
      { name: 'keywords', content: 'AI automation, data automation, machine learning, AI agents, workflow automation' },
      { name: 'author', content: 'Armory AI' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      
      // Open Graph
      { property: 'og:title', content: 'Armory - Next-Gen AI Automation Platform' },
      { property: 'og:description', content: 'We architect neural ecosystems that solve complex operational hurdles.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/og-image.jpg' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Armory - AI Automation Platform' },
      { name: 'twitter:description', content: 'Deploy bespoke AI agents with rigorous testing and rapid deployment.' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    });
  }, []);

  return null;
}