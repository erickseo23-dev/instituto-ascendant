/**
 * SEO Configuration
 * Instituto Ascendant - Search Engine Optimization
 * 
 * Centralized metadata, structured data, and SEO utilities
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'event';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

// Base SEO configuration
export const BASE_SEO = {
  siteName: 'Instituto Ascendant',
  siteDescription: 'Crecimiento de la Consciencia Creadora - Programas de transformación personal y espiritual',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://institutoascendant.com',
  defaultImage: import.meta.env.VITE_DEFAULT_OG_IMAGE || '/og-image.png',
  locale: 'es_MX',
  twitterHandle: '@institutoascendant',
  facebookPage: 'institutoascendant',
};

// Page-specific SEO metadata
export const PAGE_SEO: Record<string, SEOMetadata> = {
  home: {
    title: 'Instituto Ascendant | Crecimiento de la Consciencia Creadora',
    description: 'Programas de transformación personal, meditación ascendente, y desarrollo de consciencia. Aprende con YOHEV y Claribel Puga.',
    keywords: ['consciencia', 'meditación', 'transformación personal', 'espiritualidad', 'desarrollo personal'],
    type: 'website',
  },
  
  sobre: {
    title: 'Sobre Instituto Ascendant | Nuestra Misión y Visión',
    description: 'Conoce la historia, misión y visión del Instituto Ascendant. Fundado por YOHEV y Claribel Puga para el crecimiento de la consciencia.',
    keywords: ['instituto ascendant', 'YOHEV', 'Claribel Puga', 'consciencia creadora'],
    type: 'website',
  },
  
  fundadores: {
    title: 'Fundadores | YOHEV y Claribel Puga',
    description: 'Conoce a los fundadores del Instituto Ascendant: YOHEV (Erick Gurrola) y Claribel Puga. Sus historias de transformación y enseñanzas.',
    keywords: ['YOHEV', 'Claribel Puga', 'Erick Gurrola', 'maestros', 'facilitadores'],
    type: 'website',
  },
  
  meditacionAscendente: {
    title: 'Meditación Ascendente® | Expansión de Consciencia',
    description: 'Descubre la Meditación Ascendente: técnica de expansión acelerada de consciencia. Energía Isiaca, tres fases de ascensión y transformación.',
    keywords: ['meditación ascendente', 'energía isiaca', 'expansión consciencia', 'meditación guiada', 'claribel puga'],
    type: 'product',
  },
  
  ksHealing: {
    title: 'KS Healing Systems® | Sanación Energética Crística',
    description: 'KS Healing Systems: sistema de sanación energética basado en la consciencia crística. Aprende con YOHEV.',
    keywords: ['ks healing', 'sanación energética', 'consciencia crística', 'YOHEV'],
    type: 'product',
  },
  
  dart: {
    title: 'DART — Renovación Arquetípica | Terapia Profunda',
    description: 'DART (Deep Archetypal Renewal Therapy): método de transformación profunda de patrones y arquetipos.',
    keywords: ['DART', 'terapia profunda', 'arquetipos', 'transformación'],
    type: 'product',
  },
  
  geneticaSagrada: {
    title: 'Genética Sagrada | Programación Energética',
    description: 'Genética Sagrada: programa de reprogramación energética y transformación de patrones heredados.',
    keywords: ['genética sagrada', 'reprogramación', 'patrones heredados'],
    type: 'product',
  },
  
  blog: {
    title: 'Blog | Instituto Ascendant',
    description: 'Artículos sobre consciencia, meditación, transformación personal y desarrollo espiritual.',
    keywords: ['blog', 'consciencia', 'meditación', 'espiritualidad', 'desarrollo personal'],
    type: 'website',
  },
  
  eventos: {
    title: 'Próximos Eventos | Instituto Ascendant',
    description: 'Calendario de talleres, retiros y eventos del Instituto Ascendant. Retiros sagrados, talleres gratuitos y certificaciones.',
    keywords: ['eventos', 'talleres', 'retiros', 'calendario'],
    type: 'website',
  },
  
  contacto: {
    title: 'Contacto | Instituto Ascendant',
    description: 'Ponte en contacto con Instituto Ascendant. Preguntas, inscripciones y más información sobre nuestros programas.',
    keywords: ['contacto', 'información', 'inscripción'],
    type: 'website',
  },
};

/**
 * Set page metadata in document head
 */
export function setSEOMetadata(metadata: SEOMetadata) {
  // Set title
  document.title = metadata.title;
  
  // Update or create meta tags
  updateMetaTag('description', metadata.description);
  updateMetaTag('keywords', metadata.keywords?.join(', ') || '');
  updateMetaTag('og:title', metadata.title, 'property');
  updateMetaTag('og:description', metadata.description, 'property');
  updateMetaTag('og:image', metadata.image || BASE_SEO.defaultImage, 'property');
  updateMetaTag('og:url', metadata.url || BASE_SEO.siteUrl, 'property');
  updateMetaTag('og:type', metadata.type === 'website' ? 'website' : 'article', 'property');
  updateMetaTag('twitter:title', metadata.title, 'name');
  updateMetaTag('twitter:description', metadata.description, 'name');
  updateMetaTag('twitter:image', metadata.image || BASE_SEO.defaultImage, 'name');
  
  // Set canonical URL
  updateCanonicalURL(metadata.url || BASE_SEO.siteUrl);
}

/**
 * Update or create a meta tag
 */
function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  
  tag.content = content;
}

/**
 * Update canonical URL
 */
function updateCanonicalURL(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  
  link.href = url;
}

/**
 * Generate structured data (JSON-LD)
 */
export function generateStructuredData(type: 'Organization' | 'Event' | 'Course' | 'Article', data: any) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  
  let structuredData: any = {
    '@context': 'https://schema.org',
    '@type': type,
  };
  
  switch (type) {
    case 'Organization':
      structuredData = {
        ...structuredData,
        name: BASE_SEO.siteName,
        description: BASE_SEO.siteDescription,
        url: BASE_SEO.siteUrl,
        logo: BASE_SEO.defaultImage,
        sameAs: [
          `https://facebook.com/${BASE_SEO.facebookPage}`,
          `https://twitter.com/${BASE_SEO.twitterHandle}`,
        ],
        ...data,
      };
      break;
      
    case 'Event':
      structuredData = {
        ...structuredData,
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        location: {
          '@type': 'Place',
          name: data.location || 'Online',
        },
        organizer: {
          '@type': 'Organization',
          name: BASE_SEO.siteName,
        },
        ...data,
      };
      break;
      
    case 'Course':
      structuredData = {
        ...structuredData,
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: BASE_SEO.siteName,
        },
        ...data,
      };
      break;
      
    case 'Article':
      structuredData = {
        ...structuredData,
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Person',
          name: data.author || BASE_SEO.siteName,
        },
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate,
        ...data,
      };
      break;
  }
  
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}

/**
 * Get SEO metadata for a page
 */
export function getSEOMetadata(page: string): SEOMetadata {
  return PAGE_SEO[page] || PAGE_SEO.home;
}

export default {
  BASE_SEO,
  PAGE_SEO,
  setSEOMetadata,
  generateStructuredData,
  getSEOMetadata,
};
