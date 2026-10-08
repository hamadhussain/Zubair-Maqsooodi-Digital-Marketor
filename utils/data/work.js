const pad = (value) => String(value).padStart(2, "0");

function imageSection(page, id, title, description, count, options = {}) {
  return {
    id,
    label: options.label || "Category",
    title,
    description,
    columns: options.columns || 2,
    aspect: options.aspect || "4/5",
    items: Array.from({ length: count }, (_, i) => ({
      type: "image",
      src: `/work/${page}/${id}/${i + 1}.jpg`,
      alt: `${title} design ${pad(i + 1)}`,
    })),
  };
}

function videoSection(page, id, title, description, count, options = {}) {
  const name = options.itemName || title;

  return {
    id,
    label: options.label || "Category",
    title,
    description,
    columns: options.columns || 3,
    aspect: options.aspect || "16/9",
    items: Array.from({ length: count }, (_, i) => ({
      type: "video",
      title: `${name} ${pad(i + 1)}`,
      src: `/work/${page}/${id}/${i + 1}.mp4`,
      poster: `/work/${page}/${id}/${i + 1}.jpg`,
    })),
  };
}

export const workCta = {
  eyebrow: "Let's work together",
  title: "Ready to grow your",
  highlight: "digital presence?",
  text: "Create a meeting and we'll map the fastest path to growth for your business. No pressure, no jargon.",
  image: "/person.png",
};

export const workPages = [
  {
    slug: "app-ui-ux-design",
    title: "App UI UX Design",
    label: "App UI UX Design",
    heroTitle: "Apps designed to be used, not just admired.",
    heroText: "Pick a category to see the mobile app interfaces I have designed, from first user flow to final screens.",
    sections: [
      imageSection(
        "app-ui-ux-design",
        "ecommerce-apps",
        "Ecommerce Apps",
        "I design shopping app interfaces with clear product discovery, simple checkout flows and a visual style that builds buyer confidence.",
        6,
        { columns: 3, aspect: "3/4" }
      ),
      imageSection(
        "app-ui-ux-design",
        "fintech-apps",
        "Fintech Apps",
        "Banking, wallet and payment app screens designed to feel secure, readable and effortless for everyday transactions.",
        6,
        { columns: 3, aspect: "3/4" }
      ),
      imageSection(
        "app-ui-ux-design",
        "health-and-fitness-apps",
        "Health and Fitness Apps",
        "Tracking, booking and wellness apps with motivating dashboards and calm, easy to follow layouts.",
        6,
        { columns: 3, aspect: "3/4" }
      ),
    ],
  },
  {
    slug: "book-covers",
    title: "Book Covers",
    label: "Book Covers",
    heroTitle: "Covers that earn the click and the read.",
    heroText: "Pick a genre to see the book covers I have designed for authors and publishers, built for both print and digital stores.",
    sections: [
      imageSection(
        "book-covers",
        "fiction",
        "Fiction",
        "Covers for novels and story collections that signal genre instantly and stay readable at thumbnail size.",
        6,
        { columns: 3, aspect: "2/3" }
      ),
      imageSection(
        "book-covers",
        "non-fiction",
        "Non Fiction",
        "Clean, credible covers for business, self improvement and educational books that communicate authority.",
        6,
        { columns: 3, aspect: "2/3" }
      ),
      imageSection(
        "book-covers",
        "childrens-books",
        "Children's Books",
        "Colorful, friendly cover designs for picture books and young readers that appeal to both kids and parents.",
        3,
        { columns: 3, aspect: "2/3" }
      ),
    ],
  },
  {
    slug: "carousels",
    title: "Carousels",
    label: "Carousels",
    heroTitle: "Carousels people swipe through to the last slide.",
    heroText: "Pick a content type to see the carousel posts I have designed for brands, businesses and creators.",
    sections: [
      imageSection(
        "carousels",
        "educational-carousels",
        "Educational Carousels",
        "Step by step guides and tip based carousels that explain ideas clearly and are made to be saved and shared.",
        6
      ),
      imageSection(
        "carousels",
        "business-carousels",
        "Business Carousels",
        "Carousels for offers, case studies and company updates that present a business with clarity and credibility.",
        4
      ),
      imageSection(
        "carousels",
        "personal-brand-carousels",
        "Personal Brand Carousels",
        "Story driven and opinion based carousels that help founders and creators build a recognizable voice.",
        4
      ),
    ],
  },
  {
    slug: "other-videos",
    title: "Other Videos",
    label: "Video Editing",
    heroTitle: "Video cut to hold attention to the last frame.",
    heroText: "Pick a category to see the videos I have edited for businesses, from explainers to announcements.",
    sections: [
      videoSection(
        "other-videos",
        "explainer-videos",
        "Explainer Videos",
        "I edit explainer videos that break down products, services and ideas into clear, engaging steps with graphics and sound.",
        6,
        { itemName: "Explainer Video" }
      ),
      videoSection(
        "other-videos",
        "promotional-videos",
        "Promotional Videos",
        "Promotional edits with strong pacing, text and music, built to present an offer and drive action.",
        9,
        { itemName: "Promo Video" }
      ),
      videoSection(
        "other-videos",
        "announcement-videos",
        "Event and Announcement Videos",
        "Event recaps, launch announcements and company updates edited to look polished and professional.",
        4,
        { itemName: "Announcement Video" }
      ),
    ],
  },
  {
    slug: "posting-images",
    title: "Posting Images",
    label: "Posting Images",
    heroTitle: "Creative work, organised by industry.",
    heroText: "Pick an industry to see the social media posts I have designed for it, and the kind of brands behind them.",
    sections: [
      imageSection(
        "posting-images",
        "retail-and-ecommerce",
        "Retail and Ecommerce",
        "I have designed social media creatives for retail and online stores, including product highlights, offers and seasonal campaigns.",
        6,
        { label: "Industry" }
      ),
      imageSection(
        "posting-images",
        "restaurants-and-food",
        "Restaurants and Food",
        "Menu features, deals and everyday food content designed to look appetizing and keep a feed consistent.",
        6,
        { label: "Industry" }
      ),
      imageSection(
        "posting-images",
        "real-estate",
        "Real Estate",
        "Project announcements, property highlights and lead generation posts that present developments with clarity.",
        4,
        { label: "Industry" }
      ),
      imageSection(
        "posting-images",
        "health-care",
        "Health Care",
        "Clean, trustworthy posts for clinics and health brands that explain services and share useful information.",
        1,
        { label: "Industry" }
      ),
    ],
  },
  {
    slug: "product-images",
    title: "Product Images",
    label: "Product Images",
    heroTitle: "Products shown the way customers want to see them.",
    heroText: "Pick a product category to see the product visuals I have retouched and designed for stores and marketplaces.",
    sections: [
      imageSection(
        "product-images",
        "cosmetics-and-skincare",
        "Cosmetics and Skincare",
        "Clean, soft and premium product visuals that show texture, packaging and detail accurately.",
        6,
        { columns: 3, aspect: "1/1" }
      ),
      imageSection(
        "product-images",
        "fashion-and-accessories",
        "Fashion and Accessories",
        "Consistent catalog images and lifestyle compositions for clothing, bags, watches and accessories.",
        6,
        { columns: 3, aspect: "1/1" }
      ),
      imageSection(
        "product-images",
        "electronics-and-gadgets",
        "Electronics and Gadgets",
        "Sharp product images and feature infographics that explain what a device does at a glance.",
        6,
        { columns: 3, aspect: "1/1" }
      ),
    ],
  },
  {
    slug: "product-reels",
    title: "Product Reels",
    label: "Product Reels",
    heroTitle: "Reels that stop the scroll and sell the product.",
    heroText: "Pick a category to see the short product videos I have edited for Instagram, TikTok and Facebook.",
    sections: [
      videoSection(
        "product-reels",
        "beauty-and-personal-care",
        "Beauty and Personal Care",
        "Short, stylish reels for beauty brands with fast pacing, clean text and sound that suits the platform.",
        4,
        { columns: 4, aspect: "9/16", itemName: "Beauty Reel" }
      ),
      videoSection(
        "product-reels",
        "food-and-beverages",
        "Food and Beverages",
        "Appetizing product reels for food and drink brands that make people want to order right away.",
        4,
        { columns: 4, aspect: "9/16", itemName: "Food Reel" }
      ),
      videoSection(
        "product-reels",
        "fashion-and-lifestyle",
        "Fashion and Lifestyle",
        "Trend aware reels for clothing and lifestyle brands, edited with energy and a clear call to action.",
        4,
        { columns: 4, aspect: "9/16", itemName: "Fashion Reel" }
      ),
    ],
  },
  {
    slug: "thumbnails",
    title: "Thumbnails",
    label: "Thumbnails",
    heroTitle: "Thumbnails designed to earn the click.",
    heroText: "Pick a channel type to see the thumbnails I have designed for YouTube creators and video brands.",
    sections: [
      imageSection(
        "thumbnails",
        "tech-and-education",
        "Tech and Education Channels",
        "Clear, high contrast thumbnails that communicate the topic of the video in a single glance.",
        6,
        { aspect: "16/9" }
      ),
      imageSection(
        "thumbnails",
        "lifestyle-and-vlogs",
        "Lifestyle and Vlog Channels",
        "Expressive, personality driven thumbnails that match the tone of lifestyle and vlog content.",
        6,
        { aspect: "16/9" }
      ),
      imageSection(
        "thumbnails",
        "gaming-and-entertainment",
        "Gaming and Entertainment",
        "Bold, energetic thumbnails with strong focal points built for fast moving feeds.",
        6,
        { aspect: "16/9" }
      ),
    ],
  },
  {
    slug: "trailers",
    title: "Trailers",
    label: "Trailers",
    heroTitle: "Trailers that build anticipation before launch.",
    heroText: "Pick a category to see the cinematic trailers I have edited for products, programs and brands.",
    sections: [
      videoSection(
        "trailers",
        "product-launch-trailers",
        "Product Launch Trailers",
        "Cinematic trailers that introduce a new product with rhythm, impact and a strong closing moment.",
        4,
        { columns: 2, itemName: "Launch Trailer" }
      ),
      videoSection(
        "trailers",
        "course-and-program-trailers",
        "Course and Program Trailers",
        "Trailers for courses, programs and events that explain the promise and build interest before enrollment.",
        4,
        { columns: 2, itemName: "Course Trailer" }
      ),
      videoSection(
        "trailers",
        "brand-and-channel-trailers",
        "Brand and Channel Trailers",
        "Brand introductions and channel trailers that give an audience a clear reason to follow and subscribe.",
        3,
        { columns: 2, itemName: "Brand Trailer" }
      ),
    ],
  },
  {
    slug: "uiux-designs",
    title: "UIUX Designs",
    label: "UIUX Designs",
    heroTitle: "Interfaces designed for clarity and conversion.",
    heroText: "Pick a category to see the websites, landing pages and dashboards I have designed.",
    sections: [
      imageSection(
        "uiux-designs",
        "landing-pages",
        "Landing Pages",
        "Focused landing pages with strong hierarchy and clear calls to action, designed to turn visitors into customers.",
        6,
        { aspect: "16/10" }
      ),
      imageSection(
        "uiux-designs",
        "websites",
        "Websites",
        "Complete website designs for businesses, with clean navigation and a consistent, responsive visual style.",
        6,
        { aspect: "16/10" }
      ),
      imageSection(
        "uiux-designs",
        "dashboards-and-web-apps",
        "Dashboards and Web Apps",
        "Data heavy interfaces and web app screens organized so complex information stays easy to understand and use.",
        6,
        { aspect: "16/10" }
      ),
    ],
  },
];

export function getWorkBySlug(slug) {
  return workPages.find((page) => page.slug === slug);
}