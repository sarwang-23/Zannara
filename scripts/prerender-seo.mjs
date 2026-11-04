import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const pages = [
  {
    path: '/universe',
    title: 'The Five Magical Realms | Explore the Zanarra Universe & Multiverse Lore',
    description: 'Journey through the five interconnected story realms of Zanarra: Terra Viva, Mechanika, Cosmara, Mythara, and Sonika. A living universe designed to nurture boundless curiosity and scientific wonder.',
    image: 'https://zanarra.com/og/og-universe.jpg',
    imageAlt: 'The enchanted panoramic landscape of Zanarra featuring floating celestial islands, the Five Realms sanctuary, and glowing storybook',
    keywords: 'Zanarra Universe, Five Magical Realms, Terra Viva, Mechanika, Cosmara, Mythara, Sonika'
  },
  {
    path: '/characters',
    title: 'Meet the Characters — Momo, Tobo, Dodi & Chiku | The Zanarra Ensemble',
    description: 'Discover the original character trio and their trusty canine companion: fearless explorer Momo (age 7), clumsy inventor Tobo (age 6), deeply observant seeker Dodi (age 4), and Chiku the golden puppy.',
    image: 'https://zanarra.com/og/og-characters.jpg',
    imageAlt: 'Official character lineup of Momo, Tobo, Dodi, and adventure puppy Chiku',
    keywords: 'Momo the Adventurer, Tobo the Inventor, Dodi curious thinker, Chiku the puppy, Zanarra character bible'
  },
  {
    path: '/stories',
    title: 'Original Stories, Books & Episodic Lore | The Zanarra Storybook Library',
    description: 'Immerse in bedtime tales, picture books, and episodic digital stories from Zanarra. Discover adventures like The Cloud Catcher, The Raindance Geysers, and The River of Whispering Leaves.',
    image: 'https://zanarra.com/og/og-stories.jpg',
    imageAlt: 'Enchanted glowing storybook castle library filled with illuminated adventure pages',
    keywords: 'Zanarra stories, children picture books, episodic kids entertainment, bedtime tales'
  },
  {
    path: '/business',
    title: 'We Create the IP. We Build the Audience. We Scale the Universe. | Zanarra Business',
    description: 'Zanarra is an original children’s entertainment and intellectual property studio building globally scalable franchises. From original character lore to episodic animation, publishing, music, merchandise, and territorial licensing.',
    image: 'https://zanarra.com/og/og-business.jpg',
    imageAlt: 'Zanarra franchise business model showing character universe, open book, and global entertainment horizons',
    keywords: 'Zanarra business model, children IP studio, transmedia franchise company, animation licensing India'
  },
  {
    path: '/investors',
    title: 'Institutional Investor Overview & IP Economics | Building Global IP from India',
    description: 'Institutional overview of Zanarra: 100% proprietary IP, 5-year commercial roadmap to ₹100–120 Cr ARR, compounding flywheel economics, and multi-generational franchise horizons.',
    image: 'https://zanarra.com/og/og-investors.jpg',
    imageAlt: 'Zanarra institutional presentation key art showing the world on glowing book with celestial castle',
    keywords: 'Zanarra investors, children IP investment, media franchise venture capital, animation studio fundraising'
  },
  {
    path: '/partnerships',
    title: 'Global Co-Production, Syndication & Licensing Partnerships | Zanarra',
    description: 'Collaborate with Zanarra across international broadcast syndication, retail merchandise manufacturing, picture book publishing co-editions, and location-based entertainment experiences.',
    image: 'https://zanarra.com/og/og-partnerships.jpg',
    imageAlt: 'Enchanted library gateway representing global creative co-productions and brand licensing',
    keywords: 'Zanarra partnerships, brand licensing agreements, broadcast co-production India, toy manufacturing licensing'
  },
  {
    path: '/about',
    title: 'Our Origin, Mission & Philosophical Foundations | About Zanarra Studios',
    description: 'Learn why Zanarra exists: to build a new generation of children’s stories rooted in Indian imagination and universal heart. Explore our four pillars: Curiosity, Creativity, Connection, and Discovery.',
    image: 'https://zanarra.com/og/og-about.jpg',
    imageAlt: 'Zanarra Studio vision and creative worldbuilding headquarters',
    keywords: 'About Zanarra, studio mission, Indian animation founders, children entertainment ethics'
  },
  {
    path: '/contact',
    title: 'Connect With Our Creative Studio & Executive Team | Contact Zanarra',
    description: 'Reach out to Zanarra for co-production proposals, commercial licensing, press inquiries, investor relations, or early universe access.',
    image: 'https://zanarra.com/og/og-contact.jpg',
    imageAlt: 'Enchanted golden treasure chest of stories inviting conversation with Zanarra creators',
    keywords: 'Contact Zanarra, animation licensing enquiry, investor relations Zanarra, press media contact'
  }
];

function escapeHtml(str) {
  return str.replace(/"/g, '&quot;');
}

for (const page of pages) {
  let html = templateHtml;
  const canonicalUrl = `https://zanarra.com${page.path}`;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${escapeHtml(page.title)}" />`);

  // Replace Description & Keywords & Canonical
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`);
  html = html.replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${escapeHtml(page.keywords)}" />`);
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace OpenGraph
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${page.image}" />`);
  html = html.replace(/<meta property="og:image:alt" content=".*?" \/>/, `<meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}" />`);

  // Replace Twitter
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${page.image}" />`);
  html = html.replace(/<meta name="twitter:image:alt" content=".*?" \/>/, `<meta name="twitter:image:alt" content="${escapeHtml(page.imageAlt)}" />`);

  const pageDir = path.join(distDir, page.path.slice(1));
  fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');
  console.log(`Pre-rendered SEO for ${page.path} -> dist/${page.path.slice(1)}/index.html`);
}

console.log('All static route SEO HTML files generated successfully.');
