export interface SEOConfig {
  title: string;
  description: string;
  canonicalPath: string;
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: 'website' | 'article' | 'profile';
  keywords: string[];
  jsonLd?: Record<string, unknown>;
}

export const SITE_URL = 'https://zanarra.com';
export const SITE_NAME = 'Zanarra';
export const DEFAULT_OG_IMAGE = '/og/og-home.jpg';
export const TWITTER_HANDLE = '@ZanarraStudio';

export const PAGE_SEO: Record<string, SEOConfig> = {
  home: {
    title: 'Zanarra — One Universe. Infinite Stories. | Original Children’s IP & Entertainment Studio',
    description: 'Zanarra is an original children’s entertainment and intellectual property studio building globally scalable franchises from India for the world. Meet Momo, Tobo, Dodi and Chiku across animation, publishing, music, and toys.',
    canonicalPath: '/',
    image: '/og/og-home.jpg',
    imageAlt: 'Momo, Tobo, Dodi, and Chiku looking towards floating sky islands in the magical universe of Zanarra',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    keywords: [
      'Zanarra',
      'children entertainment studio',
      'original children IP',
      'kids animation studio India',
      'Momo Tobo Dodi',
      'Chiku adventure puppy',
      'children picture books',
      'transmedia storytelling',
      'global kids franchise',
      'family entertainment',
      'educational storytelling',
      'STEM for children'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://zanarra.com/#organization',
          'name': 'Zanarra Studios',
          'url': 'https://zanarra.com',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://zanarra.com/zanarra-icon.png',
            'caption': 'Zanarra Studio Logo'
          },
          'sameAs': [
            'https://twitter.com/ZanarraStudio',
            'https://www.linkedin.com/company/zanarra',
            'https://www.instagram.com/zanarrastudio'
          ],
          'description': 'Original children’s entertainment and intellectual property studio building globally scalable franchises.'
        },
        {
          '@type': 'WebSite',
          '@id': 'https://zanarra.com/#website',
          'url': 'https://zanarra.com',
          'name': 'Zanarra',
          'description': 'One Universe. Infinite Stories.',
          'publisher': {
            '@id': 'https://zanarra.com/#organization'
          },
          'potentialAction': {
            '@type': 'SearchAction',
            'target': 'https://zanarra.com/characters?search={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      ]
    }
  },

  universe: {
    title: 'The Five Magical Realms | Explore the Zanarra Universe & Multiverse Lore',
    description: 'Journey through the five interconnected story realms of Zanarra: Terra Viva, Mechanika, Cosmara, Mythara, and Sonika. A living universe designed to nurture boundless curiosity and scientific wonder.',
    canonicalPath: '/universe',
    image: '/og/og-universe.jpg',
    imageAlt: 'The enchanted panoramic landscape of Zanarra featuring floating celestial islands, the Five Realms sanctuary, and glowing storybook',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    keywords: [
      'Zanarra Universe',
      'Five Magical Realms',
      'Terra Viva ecology',
      'Mechanika STEM inventions',
      'Cosmara astronomy',
      'Mythara ancient lore',
      'Sonika music realm',
      'kids worldbuilding',
      'fantasy universe for kids',
      'educational fiction'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'The Five Magical Realms of Zanarra',
      'url': 'https://zanarra.com/universe',
      'description': 'Explore the interconnected realms of ecology, mechanics, astronomy, myth, and sonic harmony.',
      'isPartOf': {
        '@id': 'https://zanarra.com/#website'
      },
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://zanarra.com/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Universe', 'item': 'https://zanarra.com/universe' }
        ]
      }
    }
  },

  characters: {
    title: 'Meet the Characters — Momo, Tobo, Dodi & Chiku | The Zanarra Ensemble',
    description: 'Discover the original character trio and their trusty canine companion: fearless explorer Momo (age 7), clumsy inventor Tobo (age 6), deeply observant seeker Dodi (age 4), and Chiku the golden puppy.',
    canonicalPath: '/characters',
    image: '/og/og-characters.jpg',
    imageAlt: 'Official character lineup of Momo, Tobo, Dodi, and adventure puppy Chiku',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    keywords: [
      'Momo the Adventurer',
      'Tobo the Inventor',
      'Dodi curious thinker',
      'Chiku the puppy',
      'Zanarra character bible',
      'original children characters',
      'preschool and early grade heroes',
      'STEM character role models',
      'animated series cast'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'The Zanarra Character Roster',
      'url': 'https://zanarra.com/characters',
      'description': 'Original ensemble cast of characters created by Zanarra Studios.',
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': [
          {
            '@type': 'Person',
            'position': 1,
            'name': 'Momo',
            'jobTitle': 'The Fearless Leader & Explorer',
            'description': 'Age 7. Courageous, optimistic, leads the trio into high-stakes world explorations.'
          },
          {
            '@type': 'Person',
            'position': 2,
            'name': 'Tobo',
            'jobTitle': 'The Inventor & Engineer',
            'description': 'Age 6. Brilliant tinkerer with round glasses turning accidental mishaps into mechanical miracles.'
          },
          {
            '@type': 'Person',
            'position': 3,
            'name': 'Dodi',
            'jobTitle': 'The Curious Mind & Empath',
            'description': 'Age 4. The emotional heartbeat who asks "par kyun?" and notices subtle clues others overlook.'
          }
        ]
      }
    }
  },

  stories: {
    title: 'Original Stories, Books & Episodic Lore | The Zanarra Storybook Library',
    description: 'Immerse in bedtime tales, picture books, and episodic digital stories from Zanarra. Discover adventures like The Cloud Catcher, The Raindance Geysers, and The River of Whispering Leaves.',
    canonicalPath: '/stories',
    image: '/og/og-stories.jpg',
    imageAlt: 'Enchanted glowing storybook castle library filled with illuminated adventure pages',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    keywords: [
      'Zanarra stories',
      'children picture books',
      'episodic kids entertainment',
      'illustrated children stories',
      'bedtime tales',
      'The Cloud Catcher story',
      'read aloud children books',
      'STEM bedtime stories'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Zanarra Stories & Publishing Library',
      'url': 'https://zanarra.com/stories',
      'description': 'Original illustrated stories, books, and screen narratives created by Zanarra Studios.'
    }
  },

  business: {
    title: 'We Create the IP. We Build the Audience. We Scale the Universe. | Zanarra Business',
    description: 'Zanarra is an original children’s entertainment and intellectual property studio building globally scalable franchises. From original character lore to episodic animation, publishing, music, merchandise, and territorial licensing.',
    canonicalPath: '/business',
    image: '/og/og-business.jpg',
    imageAlt: 'Zanarra franchise business model showing character universe, open book, and global entertainment horizons',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    keywords: [
      'Zanarra business model',
      'children IP studio',
      'transmedia franchise company',
      'animation licensing India',
      'character IP valuation',
      'kids consumer products flywheel',
      'global animation syndication',
      'entertainment licensing rights'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Zanarra Commercial Model & Intellectual Property Flywheel',
      'url': 'https://zanarra.com/business',
      'description': 'How Zanarra creates proprietary character IP and compounds audience scale across multiple global revenue horizons.'
    }
  },

  investors: {
    title: 'Institutional Investor Overview & IP Economics | Building Global IP from India',
    description: 'Institutional overview of Zanarra: 100% proprietary IP, 5-year commercial roadmap to ₹100–120 Cr ARR, compounding flywheel economics, and multi-generational franchise horizons.',
    canonicalPath: '/investors',
    image: '/og/og-investors.jpg',
    imageAlt: 'Zanarra institutional presentation key art showing the world on glowing book with celestial castle',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    keywords: [
      'Zanarra investors',
      'children IP investment',
      'media franchise venture capital',
      'animation studio fundraising',
      'intellectual property economics',
      'Indian entertainment startup',
      'franchise equity valuation'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Zanarra Investor Presentation & Thesis',
      'url': 'https://zanarra.com/investors',
      'description': 'Investment thesis, financial projections, and multi-generational market strategy for Zanarra.'
    }
  },

  partnerships: {
    title: 'Global Co-Production, Syndication & Licensing Partnerships | Zanarra',
    description: 'Collaborate with Zanarra across international broadcast syndication, retail merchandise manufacturing, picture book publishing co-editions, and location-based entertainment experiences.',
    canonicalPath: '/partnerships',
    image: '/og/og-partnerships.jpg',
    imageAlt: 'Enchanted library gateway representing global creative co-productions and brand licensing',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    keywords: [
      'Zanarra partnerships',
      'brand licensing agreements',
      'broadcast co-production India',
      'toy manufacturing licensing',
      'children publishing rights',
      'location-based entertainment LBE'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Partnership & Global Licensing Portal',
      'url': 'https://zanarra.com/partnerships',
      'description': 'Commercial rights, brand licensing, and co-production opportunities with Zanarra Studios.'
    }
  },

  about: {
    title: 'Our Origin, Mission & Philosophical Foundations | About Zanarra Studios',
    description: 'Learn why Zanarra exists: to build a new generation of children’s stories rooted in Indian imagination and universal heart. Explore our four pillars: Curiosity, Creativity, Connection, and Discovery.',
    canonicalPath: '/about',
    image: '/og/og-about.jpg',
    imageAlt: 'Zanarra Studio vision and creative worldbuilding headquarters',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    keywords: [
      'About Zanarra',
      'studio mission',
      'Indian animation founders',
      'Curiosity Creativity Connection Discovery',
      'children entertainment ethics',
      'AI assisted animation craft'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About Zanarra Studios',
      'url': 'https://zanarra.com/about',
      'description': 'Origin, philosophical pillars, and executive vision behind the Zanarra story universe.'
    }
  },

  contact: {
    title: 'Connect With Our Creative Studio & Executive Team | Contact Zanarra',
    description: 'Reach out to Zanarra for co-production proposals, commercial licensing, press inquiries, investor relations, or early universe access.',
    canonicalPath: '/contact',
    image: '/og/og-contact.jpg',
    imageAlt: 'Enchanted golden treasure chest of stories inviting conversation with Zanarra creators',
    imageWidth: 1200,
    imageHeight: 630,
    type: 'website',
    keywords: [
      'Contact Zanarra',
      'animation licensing enquiry',
      'investor relations Zanarra',
      'press media contact',
      'studio collaboration India'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact Zanarra Studios',
      'url': 'https://zanarra.com/contact',
      'description': 'Official contact channel for rights inquiries, co-production deals, and studio conversations.'
    }
  }
};
