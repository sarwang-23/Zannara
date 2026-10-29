export interface Character {
  id: string;
  name: string;
  title: string;
  age: number;
  category: 'Adventurers' | 'Inventors' | 'Curious Minds';
  personality: string;
  description: string;
  coreAppeal: string;
  roleInGroup: string;
  examplePremise: string;
  quote: string;
  accentColor: string;
  bgLight: string;
  avatarSvgColor: string;
  realms: string[];
  silhouetteSvg: string;
}

export interface Realm {
  id: string;
  number: number;
  name: string;
  theme: string;
  accentColor: string;
  bgLight: string;
  textColor: string;
  storyPromise: string;
  landscape: string;
  coreThemes: string[];
  adventureTypes: string[];
  relatedCharacters: string[];
  storyFormats: string[];
}

export interface StoryItem {
  id: string;
  title: string;
  category: 'Short Stories' | 'Songs & Music' | 'Adventures' | 'Discover & Learn' | 'Behind the Worlds';
  description: string;
  realmId: string;
  characterIds: string[];
  contentType: string;
  durationOrLength: string;
  status: 'In Development' | 'Pilot Stage' | 'Concept Arc' | 'Coming Soon';
}

export interface RevenueStream {
  id: number;
  title: string;
  shortDesc: string;
  detail: string;
  stage: 'Stage 1' | 'Stage 2' | 'Stage 3';
  potentialPillars: string[];
}

export interface FinancialYearData {
  year: string;
  revenue: number; // in Cr INR
  label: string;
  ebitda?: string;
  comment?: string;
}

export const BRAND_INFO = {
  name: 'Zanarra',
  tagline: 'Small questions. Big adventures.',
  coreIdea: 'One universe. Infinite stories.',
  positioning: "A global children's IP company from India, using AI to create, localise and scale original characters, stories and entertainment experiences.",
  promise: 'We create characters children love, worlds they want to explore, and stories that grow with them.',
  philosophy: "Curiosity is the beginning of every great adventure. Children don't simply watch stories; they discover worlds, build relationships with characters and carry those experiences into their lives.",
  palette: {
    ivory: '#FAF7F0',
    cream: '#F2EBDD',
    navy: '#17233A',
    gold: '#C7A451',
    skyblue: '#B9D9F3',
    sage: '#B8D4B4',
    coral: '#F2A18B',
    lavender: '#C9B9EA',
  },
  values: [
    {
      title: 'Curiosity over certainty',
      description: 'Stories begin with daring questions and celebrate the joy of finding out rather than having all the answers.'
    },
    {
      title: 'Originality over imitation',
      description: 'Crafting brand-new, iconic characters and worlds conceived from scratch for modern children everywhere.'
    },
    {
      title: 'Emotional connection over disposable content',
      description: 'Building enduring affection, meaningful friendships, and stories that stay in the memory of childhood.'
    },
    {
      title: 'Creativity supported by technology',
      description: 'AI-assisted workflows accelerate world-building, localization, and scale without diminishing the human artistic heart.'
    },
    {
      title: 'Global ambition rooted in Indian imagination',
      description: 'Born in India with rich, timeless narrative heritage, engineered specifically to resonate universally across cultures.'
    }
  ]
};

export const CHARACTERS: Character[] = [
  {
    id: 'momo',
    name: 'Momo',
    title: 'The Leader',
    age: 7,
    category: 'Adventurers',
    personality: 'Warm, brave, enthusiastic and gloriously overconfident.',
    description: 'Momo is always the first to jump into an adventure and usually the first to discover that the plan was not quite as brilliant as it sounded. He never gives up, never stops trying and brings his friends along for every unexpected turn.',
    coreAppeal: 'Confidence, friendship, courage and resilience.',
    roleInGroup: 'The fearless catalyst who initiates action and keeps moral spirits elevated even in the deepest forest.',
    examplePremise: 'When the river of Terra Viva begins flowing backwards, Momo leaps into a cedar raft convinced he can steer the current right.',
    quote: '"If there\'s no path yet, that just means we get to name the trees!"',
    accentColor: '#F2A18B',
    bgLight: '#FFF5F2',
    avatarSvgColor: '#E26D5C',
    realms: ['terra-viva', 'cosmara'],
    silhouetteSvg: 'Momo'
  },
  {
    id: 'tobo',
    name: 'Tobo',
    title: 'The Clumsy Genius',
    age: 6,
    category: 'Inventors',
    personality: 'Brilliant, fast-talking, inventive and magnificently clumsy.',
    description: 'With round glasses sliding down his nose and an oversized backpack full of inventions, Tobo believes he can explain almost anything. His inventions don\'t always cooperate, but his curiosity rarely lets him down.',
    coreAppeal: 'Creativity, experimentation, problem-solving and humour.',
    roleInGroup: 'The engineer of wondrous contraptions who turns mistakes into unforeseen mechanical miracles.',
    examplePremise: 'Designing a pneumatic cloud-net to catch a wandering starlight ember, only to accidentally invent a self-pedaling cloud kite.',
    quote: '"Technically, it didn\'t explode—it simply distributed energy enthusiastically!"',
    accentColor: '#C7A451',
    bgLight: '#FBF7EE',
    avatarSvgColor: '#C7A451',
    realms: ['mechanika', 'cosmara'],
    silhouetteSvg: 'Tobo'
  },
  {
    id: 'dodi',
    name: 'Dodi',
    title: 'The Tiny Spark',
    age: 4,
    category: 'Curious Minds',
    personality: 'Curious, fearless and always asking "par kyun?" (but why?).',
    description: 'Dodi sees what everyone else misses and asks the questions nobody thought to ask. Not the biggest or the bravest, Dodi often discovers the answer that changes everything.',
    coreAppeal: 'Curiosity, observation, empathy and the power of asking why.',
    roleInGroup: 'The heart and philosophical lens of the trio who notices the quietest clue and unlocks ancient secrets.',
    examplePremise: 'While Momo and Tobo puzzle over a locked temple gate, Dodi notices the singing moss patterns reacting to gentle whispers.',
    quote: '"Bhaiya, suno... par kyun?"',
    accentColor: '#B9D9F3',
    bgLight: '#F3F9FD',
    avatarSvgColor: '#5D9CEC',
    realms: ['mythara', 'sonika'],
    silhouetteSvg: 'Dodi'
  }
];

export const REALMS: Realm[] = [
  {
    id: 'terra-viva',
    number: 1,
    name: 'Terra Viva',
    theme: 'The Living Earth',
    accentColor: '#4A7C59',
    bgLight: '#F1F7F1',
    textColor: '#1E3E26',
    storyPromise: 'Every living thing has a story.',
    landscape: 'Ancient canopy biomes, luminous moss valleys, talking rivers, and secret animal arboretums.',
    coreThemes: ['Nature & ecosystems', 'Biodiversity & interconnectedness', 'Empathy for living creatures', 'Symbiosis'],
    adventureTypes: ['Tracking migrating seed-creatures', 'Balancing river ecosystems', 'Deciphering bird choir languages'],
    relatedCharacters: ['momo'],
    storyFormats: ['Picture Books', 'Interactive Explorers', 'Audio Soundscapes', 'Animated Shorts']
  },
  {
    id: 'mechanika',
    number: 2,
    name: 'Mechanika',
    theme: 'The World of Making',
    accentColor: '#B45309',
    bgLight: '#FDF8F0',
    textColor: '#572704',
    storyPromise: 'Every problem is an invitation to invent.',
    landscape: 'Giant copper clockwork spires, kinetic wind bridges, magnetic repair shops, and tinkering ateliers.',
    coreThemes: ['Creative engineering', 'Trial and playful error', 'STEM curiosity', 'Inventive recycling'],
    adventureTypes: ['Building runaway gear contraptions', 'Designing kinetic gliders', 'Solving energy puzzles'],
    relatedCharacters: ['tobo'],
    storyFormats: ['Makerspace Guides', 'Episodic Engineering Quests', 'Hands-on Activity Kits']
  },
  {
    id: 'mythara',
    number: 3,
    name: 'Mythara',
    theme: 'Stories & Civilisations',
    accentColor: '#7C3AED',
    bgLight: '#F7F3FF',
    textColor: '#3C1378',
    storyPromise: 'Every civilisation leaves behind a mystery.',
    landscape: 'Floating scroll sanctuaries, illuminated labyrinth caves, ancient sundial courtyards, and starlit oral pavilions.',
    coreThemes: ['Fables and cultural heritage', 'Ancient riddle architecture', 'Language & mythology', 'Wisdom traditions'],
    adventureTypes: ['Unlocking hieroglyphic stone gates', 'Tracing ancient constellation routes', 'Reconnecting oral tapestries'],
    relatedCharacters: ['dodi'],
    storyFormats: ['Illustrated Storybooks', 'Immersive Audio Dramas', 'Cultural Folklore Anthologies']
  },
  {
    id: 'sonika',
    number: 4,
    name: 'Sonika',
    theme: 'Sound & Feeling',
    accentColor: '#E11D48',
    bgLight: '#FFF1F2',
    textColor: '#6B0D23',
    storyPromise: 'Every feeling has a sound.',
    landscape: 'Resonant crystal amphitheaters, heartbeat geysers, singing reeds, and choral echo arches.',
    coreThemes: ['Musical emotion', 'Rhythm and bodily coordination', 'Listening and emotional intelligence', 'Creative performance'],
    adventureTypes: ['Tuning discordant storm winds', 'Discovering a lullaby cave', 'Composing celebratory realm anthems'],
    relatedCharacters: ['dodi', 'momo'],
    storyFormats: ['Original Songs & Albums', 'Sing-along Animation', 'Interactive Musical Apps']
  },
  {
    id: 'cosmara',
    number: 5,
    name: 'Cosmara',
    theme: 'Space, Time & the Unknown',
    accentColor: '#0284C7',
    bgLight: '#F0F9FF',
    textColor: '#083344',
    storyPromise: 'The biggest questions lead to the greatest adventures.',
    landscape: 'Nebula observatories, gravity sails, shimmering asteroid rings, and orbital timekeeper islands.',
    coreThemes: ['Astrophysics for wonderers', 'The geometry of time', 'Limitless curiosity', 'Perspective on Earth'],
    adventureTypes: ['Sailing solar wind crests', 'Translating pulsar pulses', 'Retrieving fallen stardust capsules'],
    relatedCharacters: ['tobo', 'momo'],
    storyFormats: ['Sci-fi Animated Series', 'Planetarium Visuals', 'Augmented Reality Stargazing']
  }
];

export const STORIES_CATALOG: StoryItem[] = [
  {
    id: 'story-1',
    title: 'The Day the River Ran Backwards',
    category: 'Short Stories',
    description: 'When Terra Viva\'s emerald river starts flowing uphill towards the clouds, Momo and Dodi follow the trail of glowing ripples.',
    realmId: 'terra-viva',
    characterIds: ['momo', 'dodi'],
    contentType: 'Digital Storybook & Audio',
    durationOrLength: '7 min read',
    status: 'In Development'
  },
  {
    id: 'story-2',
    title: 'The Cloud Catcher that Caught a Star',
    category: 'Adventures',
    description: 'Tobo invents a kite to collect monsoon vapor for Mechanika\'s turbines, but brings down something that hums like a comet.',
    realmId: 'mechanika',
    characterIds: ['tobo'],
    contentType: 'Animated Story Episode',
    durationOrLength: '12 min pilot',
    status: 'In Development'
  },
  {
    id: 'story-3',
    title: 'Echoes of the Whisper Temple',
    category: 'Short Stories',
    description: 'Dodi wonders why the statues in Mythara only smile when no one is talking. A journey into the power of quiet listening.',
    realmId: 'mythara',
    characterIds: ['dodi'],
    contentType: 'Illustrated Folktale',
    durationOrLength: '8 min read',
    status: 'Concept Arc'
  },
  {
    id: 'story-4',
    title: 'Rhythm of the Rain-Dance Geysers',
    category: 'Songs & Music',
    description: 'An infectious, foot-tapping original song celebrating monsoon rhythms and emotional release in Sonika.',
    realmId: 'sonika',
    characterIds: ['momo', 'dodi'],
    contentType: 'Original Track & Lyric Video',
    durationOrLength: '2 min 40 sec',
    status: 'In Development'
  },
  {
    id: 'story-5',
    title: 'The Great Starlight Compass',
    category: 'Adventures',
    description: 'When Cosmara\'s north star flickers violet, the trio must synchronize navigation, engineering and questions to restore alignment.',
    realmId: 'cosmara',
    characterIds: ['momo', 'tobo', 'dodi'],
    contentType: 'Episodic Story Arc',
    durationOrLength: '22 min Special',
    status: 'Pilot Stage'
  },
  {
    id: 'story-6',
    title: 'Why Do We Wonder? (The Science of Asking)',
    category: 'Discover & Learn',
    description: 'A beautifully illustrated interactive micro-lesson exploring how human curiosity unlocks inventions across history.',
    realmId: 'terra-viva',
    characterIds: ['dodi', 'tobo'],
    contentType: 'Interactive Exploration Module',
    durationOrLength: 'Hands-on feature',
    status: 'In Development'
  },
  {
    id: 'story-7',
    title: 'Designing Tobo\'s Workshop',
    category: 'Behind the Worlds',
    description: 'An exclusive look into the visual design, sketches, and cultural inspirations behind the world of Mechanika.',
    realmId: 'mechanika',
    characterIds: ['tobo'],
    contentType: 'Creator Studio Notes',
    durationOrLength: 'Editorial Feature',
    status: 'Coming Soon'
  },
  {
    id: 'story-8',
    title: 'Lullaby for a Little Moon',
    category: 'Songs & Music',
    description: 'A soothing acoustic melody featuring traditional Indian flutes and delicate choral harmonies for bedtime listening.',
    realmId: 'sonika',
    characterIds: ['dodi'],
    contentType: 'Bedtime Audio Experience',
    durationOrLength: '3 min 15 sec',
    status: 'Coming Soon'
  }
];

export const REVENUE_STREAMS: RevenueStream[] = [
  {
    id: 1,
    title: 'Digital Content Distribution',
    shortDesc: 'Platform streaming, digital episodes and sponsored brand integrations.',
    detail: 'Revenue opportunities from eligible platform distribution, streaming partnerships, and commissioned ethical brand integrations that match Zanarra\'s high standards.',
    stage: 'Stage 1',
    potentialPillars: ['Global streaming licensing', 'Digital video platforms', 'Short-form social storytelling']
  },
  {
    id: 2,
    title: 'Music & Audio Sponsorship',
    shortDesc: 'Original character songs, streaming music and audio story formats.',
    detail: 'Original character soundtracks, multi-language nursery & adventure songs, podcast bedtime stories, and family brand sponsorships.',
    stage: 'Stage 1',
    potentialPillars: ['Streaming royalties (Spotify, Apple Music)', 'Audiobook syndication', 'Live music events']
  },
  {
    id: 3,
    title: 'Licensing & Merchandise',
    shortDesc: 'Publishing, toys, apparel, stationery and character collectables.',
    detail: 'Transforming emotional character affinity into tangible consumer goods including storybooks, plush toys, STEM building kits, and sustainable apparel.',
    stage: 'Stage 3',
    potentialPillars: ['Toy manufacturing partnerships', 'Publishing & graphic novels', 'Apparel & school gear']
  },
  {
    id: 4,
    title: 'Subscriptions & Interactive Apps',
    shortDesc: 'Companion educational mobile apps, games and interactive universe clubs.',
    detail: 'Subscription-based digital realms where children solve story challenges, build Tobo-style inventions, and unlock safe community features.',
    stage: 'Stage 2',
    potentialPillars: ['Zanarra Universe Companion App', 'Gamified STEM challenges', 'Family subscription tier']
  },
  {
    id: 5,
    title: 'Education & Story-Led Learning',
    shortDesc: 'Curriculum-aligned supplementary modules and school partnerships.',
    detail: 'Story-led classroom materials, inquiry-based pedagogical kits for early childhood educators, and experiential school workshops.',
    stage: 'Stage 3',
    potentialPillars: ['Early-years inquiry kits', 'Institutional licensing', 'Educator story training']
  },
  {
    id: 6,
    title: 'Live Experiences & Family Events',
    shortDesc: 'Interactive theater, touring exhibitions and realm installations.',
    detail: 'Theatrical productions, touring museum interactive pop-ups, and ticketed experiential universe events across top metropolitan centers.',
    stage: 'Stage 3',
    potentialPillars: ['Theatrical stage tours', 'Interactive sensory pop-ups', 'Mall installations']
  },
  {
    id: 7,
    title: 'International Territorial Licensing',
    shortDesc: 'Localization, regional syndication and international broadcast rights.',
    detail: 'Territorial broadcast rights, dubbing in European, Asian, and Latin American languages, and country-specific master licensing deals.',
    stage: 'Stage 3',
    potentialPillars: ['Foreign language broadcast rights', 'Regional publishing distribution', 'Global coproduction']
  }
];

export const FINANCIAL_TRAJECTORY: FinancialYearData[] = [
  { year: 'FY27', revenue: 0.75, label: '₹0.75 Cr', comment: 'IP Seed & Pilot Proof of Concept' },
  { year: 'FY28', revenue: 5.0, label: '₹5 Cr', comment: 'Content Syndication & First Brand Partners' },
  { year: 'FY29', revenue: 20.0, label: '₹20 Cr', ebitda: 'EBITDA Positive', comment: 'Break-even & Publishing Expansion' },
  { year: 'FY30', revenue: 55.0, label: '₹55 Cr', comment: 'Merchandising & Multi-Territory Growth' },
  { year: 'FY31', revenue: 110.0, label: '₹110 Cr', comment: 'Global Franchise Scale (PAT ₹29.5 Cr)' }
];

export const INVESTMENT_THESIS_CARDS = [
  {
    num: '01',
    title: 'Original Intellectual Property',
    summary: 'Build and own a portfolio of distinctive characters, worlds and stories.',
    detail: 'Unlike service studios or contract animation vendors, Zanarra maintains 100% IP ownership, generating perpetual long-tail compounding value across every medium.'
  },
  {
    num: '02',
    title: 'Repeatable Production Engine',
    summary: 'Use technology and AI-assisted workflows to support efficient production and localisation.',
    detail: 'Proprietary story-engine workflows enable faster concept iteration, automated localization into 10+ languages, and capital-efficient asset generation.'
  },
  {
    num: '03',
    title: 'Multiple Monetisation Pathways',
    summary: 'Extend successful IP across content, music, licensing, merchandise, education and experiences.',
    detail: 'A diversified revenue architecture insulates against single-platform dependency, multiplying customer lifetime value across 7 distinct streams.'
  },
  {
    num: '04',
    title: 'International Scalability',
    summary: 'Develop multilingual content and partner-led distribution opportunities.',
    detail: 'Characters built with universal emotional appeal from India for worldwide export, primed for effortless cultural translation in East Asia, Europe, and the Americas.'
  },
  {
    num: '05',
    title: 'Long-Term Franchise Potential',
    summary: 'Build recognition and emotional connection that can support products and experiences beyond individual episodes.',
    detail: 'Enduring franchise affinity replicates the compounding economics of legendary international children\'s powerhouses over generational horizons.'
  }
];

export const FIVE_PHASES = [
  {
    phase: 'Phase 1',
    name: 'Establish Original IP & Proof of Concept',
    focus: 'Original characters, story world architecture, initial pilot productions, and core community resonance.'
  },
  {
    phase: 'Phase 2',
    name: 'Repeatable Formats & Distribution Expansion',
    focus: 'Grow multi-channel audience, release digital episodic stories, and test initial consumer monetization.'
  },
  {
    phase: 'Phase 3',
    name: 'Licensing, Merchandise & Education',
    focus: 'Expand into physical publishing, retail toy partnerships, and curriculum-aligned early education packages.'
  },
  {
    phase: 'Phase 4',
    name: 'Global Localization & Strategic Scale',
    focus: 'Multilingual dubbing, territorial syndication agreements, and international co-marketing partnerships.'
  },
  {
    phase: 'Phase 5',
    name: 'Diversified Global IP Powerhouse',
    focus: 'Ecosystem of multiple interconnected story franchises driving ₹100–120 Cr annual revenue with high EBITDA margins.'
  }
];
