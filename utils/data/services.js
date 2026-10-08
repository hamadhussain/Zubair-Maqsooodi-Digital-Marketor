export const siteInfo = {
  name: "zubair",
  email: "zubari@gmail.com",
  whatsapp: "https://wa.me/3334343443",
  contactPath: "/",
}; 

export const industries = [
  "Retail and ecommerce",
  "Restaurants and cafes",
  "Real estate",
  "Fashion and beauty brands",
  "Education and training",
  "Healthcare providers",
  "Technology startups",
  "Professional services",
];

export function getRegions(title) {
  const name = title.toLowerCase();
  return [
    {
      name: "Pakistan",
      text: `Businesses in Karachi, Lahore and Islamabad work with me on ${name} through calls and shared files. You get a designer who understands the local market and delivers to international standards.`,
    },
    {
      name: "UAE",
      text: `For brands in Dubai and across the UAE, I deliver ${name} that feels polished, modern and suited to a competitive, premium audience.`,
    },
    {
      name: "Saudi Arabia",
      text: `Companies in Riyadh and Jeddah get ${name} planned around clear communication, fast turnaround and consistent quality across every revision.`,
    },
    {
      name: "United Kingdom",
      text: `UK businesses use my ${name} service to look credible and professional without the overhead of a large agency.`,
    },
    {
      name: "United States",
      text: `For American startups and brands, I provide ${name} directly from the designer, with no account managers and no delays between idea and delivery.`,
    },
    {
      name: "Canada",
      text: `Canadian businesses work with me remotely on ${name}, with scheduled check-ins and clear milestones from kickoff to final files.`,
    },
  ];
}

export function getFaqs(service) {
  const name = service.title.toLowerCase();
  return [
    ...service.faqs,
    {
      question: `How much does ${name} cost?`,
      answer: `Pricing depends on the scope, the number of deliverables and how fast you need them. After a short discovery call, I put together a clear proposal based on your specific project rather than a fixed package that may not fit.`,
    },
    {
      question: "How many revisions are included?",
      answer: "Every project includes revision rounds so the final result matches your goals. Feedback is collected at set stages, which keeps the work moving and avoids endless back and forth.",
    },
    {
      question: "Do you work with clients outside Pakistan?",
      answer: "Yes. I work remotely with clients in Pakistan, the UAE, Saudi Arabia, the UK, the USA and Canada, with calls scheduled to suit your time zone.",
    },
    {
      question: "What files will I receive at the end?",
      answer: "You receive final production files in the formats you need, along with source files where agreed, so your work is ready to publish or hand over to a team.",
    },
  ];
}

export const services = [
  {
    slug: "app-ui-ux-design",
    title: "App UI UX Design",
    label: "App UI UX Design",
    image: "/services/ai-ads.webp",
    shortDescription: "Mobile app interfaces designed around real user behavior, from first screen to final handoff.",
    heroTitle: "App UI UX Design That Keeps Users Coming Back",
    heroText: "Most apps lose people in the first week. Clear flows, thoughtful screens and consistent visuals are what keep them.",
    introLead: "As a designer working with founders and product teams, I design mobile app interfaces that feel simple to use and are ready for developers to build, from the first user flow to the final handoff.",
    introHeading: "How Good App Design Actually Grows A Product",
    introParagraphs: [
      "An app can have strong features and still fail because people cannot find them. Good UI UX design removes that friction by making every screen answer one question clearly: what should the user do next.",
      "My approach starts with understanding who uses the app and why. From there, flows, wireframes and visual design are built together so the product feels like one connected experience, not a collection of screens.",
      "The result is an app interface with a clear structure, a consistent design system and a prototype you can test before a single line of code is written.",
    ],
    includedHeading: "What Is Included: My App UI UX Design Services List",
    included: [
      { title: "User flows and wireframes", text: "Clear maps of how people move through your app, turned into low fidelity layouts that settle structure before visuals." },
      { title: "High fidelity screen design", text: "Polished screens for iOS and Android with careful typography, spacing and color, built around your brand." },
      { title: "Interactive prototype", text: "A clickable prototype so you can test the experience and gather feedback before development begins." },
      { title: "Design system and components", text: "Reusable buttons, inputs, cards and styles that keep every screen consistent and speed up development." },
      { title: "Developer handoff", text: "Organized files, specifications and exported assets so your developers can build exactly what was designed." },
    ],
    processHeading: "The 5 Steps In My App UI UX Design Process",
    process: [
      { title: "Understand the product", text: "A short discovery call to learn your users, goals, competitors and the problem your app solves." },
      { title: "Map flows and wireframes", text: "User flows and wireframes define the structure and key journeys of the app." },
      { title: "Design the interface", text: "Visual design for every screen, using your brand and a consistent component system." },
      { title: "Prototype and refine", text: "An interactive prototype is reviewed with you and improved based on feedback." },
      { title: "Hand off for development", text: "Final files and assets are organized and delivered so your team can build with confidence." },
    ],
    benefitsHeading: "Benefits Of Professional App UI UX Design",
    benefits: [
      "A clear, intuitive experience that reduces drop off in the first sessions",
      "Consistent visuals across every screen and platform",
      "Fewer development revisions because decisions are settled in design",
      "A tested prototype that shows investors and stakeholders the vision",
      "A scalable design system that supports future features",
      "Faster development with organized, ready to build files",
    ],
    faqs: [
      { question: "Do you design for both iOS and Android?", answer: "Yes. I follow the interface conventions of each platform so the app feels natural to the people using it, whether on iPhone or Android." },
      { question: "Can you redesign an existing app?", answer: "Yes. I review your current screens, identify where users struggle and redesign the experience while keeping what already works." },
    ],
  },
  {
    slug: "book-covers",
    title: "Book Covers",
    label: "Book Covers",
    image: "/images/services/book-covers.jpg",
    shortDescription: "Genre aware book cover design that stands out in online stores and on the shelf.",
    heroTitle: "Book Cover Design That Turns Browsers Into Readers",
    heroText: "Readers decide in seconds. A cover that fits its genre and reads clearly at thumbnail size does most of the selling.",
    introLead: "As a cover designer working with independent authors and publishers, I create book covers that match the expectations of your genre while still feeling distinct and memorable.",
    introHeading: "How A Strong Cover Actually Sells A Book",
    introParagraphs: [
      "A cover is the first and often the only chance to earn a click. It has to signal genre, tone and quality in a small thumbnail, long before anyone reads the description.",
      "I begin by studying your book, your audience and the bestselling covers in your category. Typography, imagery and color are then chosen together so the cover communicates the right promise.",
      "You receive a complete cover package designed for print and digital, ready for the platforms where your book will be sold.",
    ],
    includedHeading: "What Is Included: My Book Cover Design Services List",
    included: [
      { title: "Front cover design", text: "A custom front cover built around your genre, title and audience, with typography that stays readable at small sizes." },
      { title: "Full wrap for print", text: "Back cover, spine and front cover laid out to your printer's exact specifications." },
      { title: "Ebook cover files", text: "Optimized files for Amazon Kindle and other retailers, sized correctly for each platform." },
      { title: "Series and branding consistency", text: "Matching designs for book series so every title feels like part of one recognizable collection." },
      { title: "Promotional graphics", text: "Social media and advertising versions of your cover to support your launch." },
    ],
    processHeading: "The 5 Steps In My Book Cover Design Process",
    process: [
      { title: "Understand the book", text: "A brief covering your story, genre, audience and any covers you admire." },
      { title: "Research the market", text: "Review of bestselling covers in your category to guide the design direction." },
      { title: "Create concepts", text: "Cover concepts exploring imagery, typography and color for your review." },
      { title: "Refine the design", text: "The chosen concept is polished and adjusted based on your feedback." },
      { title: "Deliver print and digital files", text: "Final files prepared for print, ebook and promotion." },
    ],
    benefitsHeading: "Benefits Of A Professionally Designed Book Cover",
    benefits: [
      "A cover that signals the right genre to the right readers",
      "Higher click through rates from online store listings",
      "Clear readability even at thumbnail size",
      "Print ready files that meet printer specifications",
      "A consistent look across a series or author brand",
      "Marketing assets ready for launch campaigns",
    ],
    faqs: [
      { question: "Do I need to provide the cover image?", answer: "Not necessarily. I can source licensed imagery or create custom artwork based on your brief, and you can also share your own images." },
      { question: "Can you design covers for print and ebook?", answer: "Yes. I provide a full print wrap with spine and back cover, along with optimized ebook cover files." },
    ],
  },
  {
    slug: "carousels",
    title: "Carousels",
    label: "Carousels",
    image: "/images/services/carousels.jpg",
    shortDescription: "Swipeable carousel posts that teach, engage and keep your audience reading to the last slide.",
    heroTitle: "Carousel Design That Gets Swiped Through And Saved",
    heroText: "Carousels hold attention longer than single posts. The right structure turns each slide into a reason to keep swiping.",
    introLead: "As a designer creating content for brands and creators, I design carousels for Instagram and LinkedIn that explain ideas clearly and are made to be saved and shared.",
    introHeading: "How Carousels Actually Grow Your Audience",
    introParagraphs: [
      "A carousel works when the first slide earns the stop and every slide after it earns the swipe. That takes both strong visual design and a clear content structure.",
      "I plan each carousel around one idea, writing the flow, hierarchy and visuals together so the message lands slide by slide and ends with a clear next step.",
      "Every design follows your brand, so your posts look consistent and recognizable in the feed.",
    ],
    includedHeading: "What Is Included: My Carousel Design Services List",
    included: [
      { title: "Slide structure and flow", text: "A planned sequence from hook to closing call to action, built to keep people swiping." },
      { title: "Custom carousel design", text: "Branded slides with clean typography, layouts and graphics for Instagram and LinkedIn." },
      { title: "Reusable templates", text: "Editable templates so your team can publish consistent carousels on their own." },
      { title: "Cover slide design", text: "A strong opening slide designed to stop the scroll and promise value." },
      { title: "Export for every platform", text: "Files sized and exported correctly for each platform you post on." },
    ],
    processHeading: "The 5 Steps In My Carousel Design Process",
    process: [
      { title: "Understand your goal", text: "A short discussion of your audience, topics and what you want the carousels to achieve." },
      { title: "Plan the content", text: "Each carousel is outlined with a hook, key points and a clear ending." },
      { title: "Design the slides", text: "Slides are designed in your brand style with consistent layouts." },
      { title: "Review and adjust", text: "You review the draft and feedback is applied quickly." },
      { title: "Deliver and schedule", text: "Final files are delivered in the right sizes, ready to post." },
    ],
    benefitsHeading: "Benefits Of Professional Carousel Design",
    benefits: [
      "Longer time spent on your content compared to single images",
      "More saves and shares from clear, valuable slides",
      "A consistent brand look across every post",
      "Complex ideas explained in simple visual steps",
      "Templates that save time on future content",
      "A steady content system you can publish with confidence",
    ],
    faqs: [
      { question: "Do you write the carousel content?", answer: "I can work from your copy or help shape the slide content with you, so the message and design support each other." },
      { question: "Which platforms do you design for?", answer: "Mainly Instagram and LinkedIn, with sizes adapted for other platforms where needed." },
    ],
  },
  {
    slug: "other-videos",
    title: "Other Videos",
    label: "Video Editing",
    image: "/images/services/other-videos.jpg",
    shortDescription: "Professional editing for explainers, promos, announcements and any video your business needs.",
    heroTitle: "Video Editing For Every Message Your Brand Needs To Share",
    heroText: "Raw footage rarely works on its own. Careful editing, pacing and sound turn it into a video people actually watch.",
    introLead: "As a video editor working with businesses and creators, I turn raw footage into clean, engaging videos for promotions, explainers, announcements and more.",
    introHeading: "How Well Edited Video Actually Supports A Business",
    introParagraphs: [
      "Video is one of the most effective ways to explain a product, build trust and keep attention. The difference between a forgettable video and a effective one is almost always the edit.",
      "I focus on pacing, structure and clarity, trimming what does not help, adding graphics and sound where they add value, and keeping the message front and center.",
      "Each video is delivered in the formats you need for your website, social media and advertising.",
    ],
    includedHeading: "What Is Included: My Video Editing Services List",
    included: [
      { title: "Footage editing and cutting", text: "Clean cuts, tight pacing and a clear structure from the footage you provide." },
      { title: "Motion graphics and text", text: "Titles, lower thirds and animated elements that support your message." },
      { title: "Color correction", text: "Consistent, balanced color so your video looks polished and professional." },
      { title: "Audio cleanup and music", text: "Clear voice, balanced levels and licensed music that suits the tone." },
      { title: "Subtitles and exports", text: "Captions and platform ready exports for every channel you publish on." },
    ],
    processHeading: "The 5 Steps In My Video Editing Process",
    process: [
      { title: "Understand the video", text: "A brief on the purpose, audience, length and style of the video." },
      { title: "Review the footage", text: "All material is organized and reviewed to plan the strongest structure." },
      { title: "Edit the first cut", text: "A first version with pacing, graphics and sound in place." },
      { title: "Revise with feedback", text: "Changes are applied based on your notes until the video is right." },
      { title: "Export and deliver", text: "Final files are exported in the formats and sizes you need." },
    ],
    benefitsHeading: "Benefits Of Professional Video Editing",
    benefits: [
      "A polished, trustworthy look across all your video content",
      "Clear messages that hold attention to the end",
      "Faster turnaround so content stays timely",
      "Subtitles that improve reach and accessibility",
      "Videos exported correctly for each platform",
      "A repeatable style that strengthens your brand",
    ],
    faqs: [
      { question: "What types of videos do you edit?", answer: "Promotional videos, explainers, announcements, testimonials, event recaps and other business videos, depending on your needs." },
      { question: "Do I need to provide the footage?", answer: "Yes, you provide the raw footage, and I can also source stock clips or graphics where the project requires them." },
    ],
  },
  {
    slug: "posting-images",
    title: "Posting Images",
    label: "Posting Images",
    image: "/images/services/posting-images.jpg",
    shortDescription: "Consistent, on brand social media post designs that make your feed look professional.",
    heroTitle: "Social Media Post Design That Makes Your Brand Look Professional",
    heroText: "Posting consistently matters, but posting something that looks like your brand matters just as much.",
    introLead: "As a designer working with businesses on social media, I create post images that look consistent, communicate clearly and fit the way your audience scrolls.",
    introHeading: "How Consistent Post Design Actually Builds A Brand",
    introParagraphs: [
      "A feed full of mismatched images makes a business look unreliable. A consistent visual style makes every post feel like part of one recognizable brand.",
      "I design a flexible system of layouts, colors and typography that adapts to announcements, offers, quotes and updates without losing its identity.",
      "The result is a feed that looks professional, saves you time and gives followers a reason to trust what they see.",
    ],
    includedHeading: "What Is Included: My Posting Image Services List",
    included: [
      { title: "Custom post designs", text: "Original designs for announcements, offers, quotes, events and everyday content." },
      { title: "Brand consistent layouts", text: "A cohesive look built from your colors, fonts and logo across every post." },
      { title: "Story and square formats", text: "Designs sized for feed posts, stories and other formats you use." },
      { title: "Editable templates", text: "Templates that let your team create new posts quickly and stay on brand." },
      { title: "Monthly design packages", text: "A reliable batch of posts delivered on a schedule that suits your content plan." },
    ],
    processHeading: "The 5 Steps In My Posting Image Process",
    process: [
      { title: "Understand your brand", text: "A short call about your business, audience and the tone you want to show." },
      { title: "Define the visual style", text: "Layouts, colors and typography are set to keep every post consistent." },
      { title: "Design the posts", text: "Posts are designed for each topic and format in your content plan." },
      { title: "Review and adjust", text: "You review the designs and changes are applied promptly." },
      { title: "Deliver ready to post", text: "Final images are exported in the right sizes for each platform." },
    ],
    benefitsHeading: "Benefits Of Professional Social Media Post Design",
    benefits: [
      "A consistent, professional feed that builds recognition",
      "Posts that communicate clearly in a few seconds",
      "More engagement from visuals made for the platform",
      "Less time spent designing each post yourself",
      "Templates your team can reuse confidently",
      "A stronger first impression for new visitors to your profile",
    ],
    faqs: [
      { question: "How many posts can I get each month?", answer: "That depends on your content plan. We agree on a number of posts that fits your schedule and budget." },
      { question: "Can you match my existing brand?", answer: "Yes. I follow your existing colors, fonts and logo, or help refine them if your brand needs a stronger look." },
    ],
  },
  {
    slug: "product-images",
    title: "Product Images",
    label: "Product Images",
    image: "/images/services/product-images.jpg",
    shortDescription: "Clean, high quality product visuals that build trust and help customers buy.",
    heroTitle: "Product Images That Make Customers Want To Buy",
    heroText: "Shoppers cannot touch your product, so your images do the convincing. Quality visuals are often the deciding factor.",
    introLead: "As a designer working with online sellers and brands, I prepare and design product images that look sharp, consistent and ready for stores, marketplaces and ads.",
    introHeading: "How Better Product Images Actually Increase Sales",
    introParagraphs: [
      "Customers judge a product by how it looks on the screen. Clean backgrounds, accurate color and clear detail build the confidence needed to click buy.",
      "I retouch and design product images so they look consistent across your whole catalog, with lifestyle and infographic styles available where they help explain the product.",
      "Every image is optimized for the platform where it will be used, from your own store to major marketplaces.",
    ],
    includedHeading: "What Is Included: My Product Image Services List",
    included: [
      { title: "Background removal and cleanup", text: "Clean, accurate cutouts with consistent backgrounds across your catalog." },
      { title: "Photo retouching", text: "Color correction, shadow work and detail enhancement for a polished result." },
      { title: "Lifestyle compositions", text: "Products placed in realistic, branded scenes that show how they are used." },
      { title: "Infographic images", text: "Visuals that highlight features, sizes and benefits clearly." },
      { title: "Marketplace ready exports", text: "Images sized and formatted to marketplace and store requirements." },
    ],
    processHeading: "The 5 Steps In My Product Image Process",
    process: [
      { title: "Review your products", text: "A look at your product photos, platforms and the style you want." },
      { title: "Plan the visual style", text: "A consistent direction for backgrounds, lighting and layout is agreed." },
      { title: "Edit and design", text: "Each image is retouched or designed to match the agreed style." },
      { title: "Review and refine", text: "You review the results and adjustments are made where needed." },
      { title: "Export and deliver", text: "Final images are delivered in the sizes each platform requires." },
    ],
    benefitsHeading: "Benefits Of Professional Product Images",
    benefits: [
      "Higher buyer confidence from clear, accurate visuals",
      "A consistent catalog that looks like one store",
      "Images that meet marketplace requirements",
      "Features explained quickly with infographic designs",
      "Better performance for ads using strong visuals",
      "Fewer returns from products that look as expected",
    ],
    faqs: [
      { question: "Do I need professional photos first?", answer: "Good source photos help, but I can improve images taken with a phone, and I will advise you on how to capture better ones." },
      { question: "Can you handle a large catalog?", answer: "Yes. I work in batches with a consistent style so a large catalog stays uniform from the first image to the last." },
    ],
  },
  {
    slug: "product-reels",
    title: "Product Reels",
    label: "Product Reels",
    image: "/images/services/product-reels.jpg",
    shortDescription: "Short, scroll stopping product videos designed for Instagram, TikTok and Facebook.",
    heroTitle: "Product Reels That Stop The Scroll And Drive Orders",
    heroText: "Short video is where products get discovered. A well edited reel shows what your product does in seconds.",
    introLead: "As a video editor working with product brands, I create short, engaging reels that show your product clearly and give people a reason to act.",
    introHeading: "How Product Reels Actually Move Products",
    introParagraphs: [
      "Reels reach people who are not looking for you yet. In a few seconds, a strong one shows the product, its benefit and the next step.",
      "I focus on a clear hook, fast pacing, readable text and sound that fits the platform, so the reel feels native instead of like an advertisement.",
      "Each reel is delivered in vertical format with captions, ready to post or run as an ad.",
    ],
    includedHeading: "What Is Included: My Product Reel Services List",
    included: [
      { title: "Concept and hook", text: "A simple idea and an opening hook designed to hold attention in the first seconds." },
      { title: "Vertical editing", text: "Fast, clean edits in a 9:16 format built for reels and short video platforms." },
      { title: "Text, captions and graphics", text: "On screen text and captions that make the message clear with or without sound." },
      { title: "Music and sound design", text: "Trending style music and sound effects that match the mood of your brand." },
      { title: "Ad ready versions", text: "Versions prepared for organic posting and for paid campaigns." },
    ],
    processHeading: "The 5 Steps In My Product Reel Process",
    process: [
      { title: "Understand the product", text: "A discussion of the product, its main benefit and your target customer." },
      { title: "Plan the reel", text: "A short structure with the hook, key shots and call to action." },
      { title: "Edit the reel", text: "Footage is edited with pacing, text and sound in place." },
      { title: "Revise with feedback", text: "Your notes are applied until the reel feels right." },
      { title: "Deliver ready to post", text: "Final reels are exported with captions in platform ready formats." },
    ],
    benefitsHeading: "Benefits Of Professional Product Reels",
    benefits: [
      "More reach from content made for short video platforms",
      "Products shown in motion so benefits are easy to understand",
      "Captions that work even when viewers watch without sound",
      "A consistent style across all your reels",
      "Videos that work as organic posts and paid ads",
      "Faster content production with a repeatable format",
    ],
    faqs: [
      { question: "Do you shoot the footage?", answer: "I edit footage you provide. I can also guide you on the shots to capture so the final reel looks as strong as possible." },
      { question: "How long are the reels?", answer: "Most product reels run between 10 and 30 seconds, depending on the product and the platform." },
    ],
  },
  {
    slug: "thumbnails",
    title: "Thumbnails",
    label: "Thumbnails",
    image: "/images/services/thumbnails.jpg",
    shortDescription: "Click worthy thumbnails for YouTube and video platforms, designed to lift your views.",
    heroTitle: "Thumbnail Design That Earns The Click",
    heroText: "A great video with a weak thumbnail goes unseen. Your thumbnail is the first thing viewers judge.",
    introLead: "As a designer working with YouTubers and video brands, I create thumbnails that are clear, bold and built to earn clicks without feeling misleading.",
    introHeading: "How A Strong Thumbnail Actually Grows Your Views",
    introParagraphs: [
      "Thumbnails and titles decide whether a video gets watched. A good thumbnail communicates the idea at a glance and creates curiosity at small sizes.",
      "I design with strong focal points, readable text and high contrast, and keep a consistent style so your channel looks recognizable.",
      "Each thumbnail is made to match the topic of the video while staying true to your channel identity.",
    ],
    includedHeading: "What Is Included: My Thumbnail Design Services List",
    included: [
      { title: "Custom thumbnail design", text: "An original thumbnail built around your video topic, with strong composition and readable text." },
      { title: "Channel style system", text: "A consistent look for fonts, colors and layouts so your channel feels like a brand." },
      { title: "Photo cutouts and retouching", text: "Clean cutouts and enhanced images that stand out against busy feeds." },
      { title: "A and B test variations", text: "Alternative versions to test and find what earns the most clicks." },
      { title: "Platform ready exports", text: "Files sized and compressed to meet upload requirements." },
    ],
    processHeading: "The 5 Steps In My Thumbnail Design Process",
    process: [
      { title: "Understand the video", text: "A brief on the video topic, title and your target viewer." },
      { title: "Plan the concept", text: "A simple idea for the main image, text and emotion of the thumbnail." },
      { title: "Design the thumbnail", text: "The thumbnail is designed with strong contrast and clear focus." },
      { title: "Review and adjust", text: "Feedback is applied quickly so you can publish on schedule." },
      { title: "Deliver the final files", text: "Final thumbnails are exported in the right size and format." },
    ],
    benefitsHeading: "Benefits Of Professional Thumbnail Design",
    benefits: [
      "Higher click through rates from stronger visuals",
      "Thumbnails that stay readable on small screens",
      "A recognizable channel identity across all videos",
      "Variations to test and learn what works",
      "Faster publishing with quick turnaround",
      "More views from the same quality of content",
    ],
    faqs: [
      { question: "How fast can you deliver a thumbnail?", answer: "Most thumbnails are delivered quickly so they fit your upload schedule, with timelines confirmed at the start of each project." },
      { question: "Can you design in my existing channel style?", answer: "Yes. I follow your existing style, or help develop a stronger and more consistent one." },
    ],
  },
  {
    slug: "trailers",
    title: "Trailers",
    label: "Trailers",
    image: "/images/services/trailers.jpg",
    shortDescription: "Cinematic trailers that build anticipation for your product, project, course or launch.",
    heroTitle: "Trailer Editing That Builds Anticipation Before You Launch",
    heroText: "A good trailer makes people care before the product even arrives. Pacing, sound and story do the work.",
    introLead: "As a video editor working with creators and brands, I craft trailers that build excitement and communicate the core promise of your launch in under two minutes.",
    introHeading: "How A Trailer Actually Drives A Successful Launch",
    introParagraphs: [
      "A trailer is a story in miniature. It shows just enough to make people curious, and ends with a clear reason to take the next step.",
      "I shape the structure, rhythm and sound so the energy builds toward a strong finish, whether it is for a course, a product, a film, an app or an event.",
      "You receive a trailer that works across your website, social media and advertising.",
    ],
    includedHeading: "What Is Included: My Trailer Editing Services List",
    included: [
      { title: "Story and structure", text: "A clear arc that builds curiosity and finishes with a strong call to action." },
      { title: "Cinematic editing", text: "Rhythmic cuts, transitions and pacing that create energy and tension." },
      { title: "Titles and motion graphics", text: "Animated titles and graphics that carry the message with style." },
      { title: "Sound design and music", text: "Music, effects and mixing that add impact to every moment." },
      { title: "Multiple format exports", text: "Versions for widescreen, vertical and short teasers for social platforms." },
    ],
    processHeading: "The 5 Steps In My Trailer Editing Process",
    process: [
      { title: "Understand the story", text: "A discussion of what you are launching, who it is for and the feeling to create." },
      { title: "Outline the trailer", text: "A structure with the hook, build up and closing moment is agreed." },
      { title: "Edit the first cut", text: "Footage, graphics and sound are assembled into the first version." },
      { title: "Refine with feedback", text: "Pacing and details are adjusted based on your review." },
      { title: "Export and deliver", text: "Final trailers are exported in every format you need." },
    ],
    benefitsHeading: "Benefits Of A Professionally Edited Trailer",
    benefits: [
      "Early excitement and interest before launch day",
      "A clear explanation of your offer in a short time",
      "A premium, cinematic impression of your brand",
      "Versions ready for every platform and ad format",
      "Stronger conversion from curious visitors to buyers",
      "A reusable asset for your website and campaigns",
    ],
    faqs: [
      { question: "What kinds of trailers do you make?", answer: "Product launches, courses, apps, events, channel intros and creative projects, tailored to the goal of each." },
      { question: "How long should a trailer be?", answer: "Most trailers work best between 30 seconds and two minutes, with shorter teasers prepared for social media." },
    ],
  },
  {
    slug: "uiux-designs",
    title: "UIUX Designs",
    label: "UIUX Designs",
    image: "/images/services/uiux-designs.jpg",
    shortDescription: "Website and dashboard interface design focused on clarity, conversion and usability.",
    heroTitle: "UIUX Design For Websites And Dashboards That Convert",
    heroText: "A website or dashboard only works if people can use it. Strong UIUX design makes the next step obvious.",
    introLead: "As a designer working with businesses and software teams, I design websites, landing pages and dashboards that are clear to navigate, visually refined and built to convert.",
    introHeading: "How Good UIUX Design Actually Improves Results",
    introParagraphs: [
      "Visitors leave quickly when a page feels confusing. Good UIUX design organizes information, guides attention and removes the small frictions that cost you customers.",
      "I design around your goals and your users, combining structure, layout and visual style into responsive designs that work on every screen size.",
      "You receive production ready designs and a component system that developers can implement accurately and quickly.",
    ],
    includedHeading: "What Is Included: My UIUX Design Services List",
    included: [
      { title: "Research and information architecture", text: "Sitemaps and page structures that organize content around how people look for it." },
      { title: "Website and landing page design", text: "Responsive pages designed for clarity, brand and conversion." },
      { title: "Dashboard and web app design", text: "Clear interfaces for data, tools and workflows used every day." },
      { title: "Design system", text: "A library of components, colors and typography for consistent, scalable design." },
      { title: "Developer ready handoff", text: "Organized files and specifications that make implementation straightforward." },
    ],
    processHeading: "The 5 Steps In My UIUX Design Process",
    process: [
      { title: "Understand the goals", text: "A discovery call about your business, users and what the design must achieve." },
      { title: "Structure the experience", text: "Sitemaps and wireframes define layout and user journeys." },
      { title: "Design the interface", text: "Visual design is created for each page and screen size." },
      { title: "Test and refine", text: "Prototypes and feedback shape the final improvements." },
      { title: "Hand off to development", text: "Final files and assets are delivered for a smooth build." },
    ],
    benefitsHeading: "Benefits Of Professional UIUX Design",
    benefits: [
      "Clearer navigation that helps visitors find what they need",
      "Higher conversion from focused page layouts",
      "A professional appearance that builds trust quickly",
      "Responsive designs that work on all devices",
      "A scalable system that supports future pages and features",
      "Smoother development with precise, organized files",
    ],
    faqs: [
      { question: "What is the difference between UI and UX?", answer: "UX is how the product works and feels to use, while UI is how it looks. I design both so they support each other." },
      { question: "Can you also build the website?", answer: "I can provide the design, and I can work with your development team or developer to bring it to life." },
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}



// export const siteConfig = {
//   name: "Umaid Sadiq",
//   whatsapp: "https://wa.me/920000000000",
//   contactHref: "/contact",
// };

// const buildRegions = (service) => [
//   {
//     name: "Pakistan",
//     text: `Businesses in Karachi, Lahore, and Islamabad often need ${service} that understands the local market, buying habits, and the way customers actually discover brands here. I work with Pakistani businesses directly, which means clear communication, realistic timelines, and results built around your local audience.`,
//   },
//   {
//     name: "UAE",
//     text: `For businesses in Dubai and across the UAE, ${service} usually needs to work for a mix of local residents and an international audience. I plan around that mix, with polished output that fits premium and fast-moving markets.`,
//   },
//   {
//     name: "Saudi Arabia",
//     text: `In Riyadh, Jeddah, and other Saudi cities, ${service} is central to how customers discover new businesses. I help brands show up consistently and professionally for Saudi audiences and shopping habits.`,
//   },
//   {
//     name: "United Kingdom",
//     text: `For businesses in London and across the UK, I focus on clear, professional ${service} built to a high standard, with dependable delivery and straightforward communication from start to finish.`,
//   },
//   {
//     name: "United States",
//     text: `Working with businesses across the USA, I build ${service} strategies suited to competitive, high-volume markets, with consistent output and direct support from one person rather than a large agency.`,
//   },
//   {
//     name: "Canada",
//     text: `For Canadian businesses, I build ${service} plans that respect a more measured buying pattern, focusing on trust, clarity, and quality over aggressive promotion.`,
//   },
// ];

// const generalFaqs = (service) => [
//   {
//     question: `How long does ${service} take to show results?`,
//     answer:
//       "It depends on the starting point and the goal. Most businesses see a clear shift within the first two to three months of consistent work, while larger goals build over a longer period.",
//   },
//   {
//     question: `Can you handle ${service} for a business outside Pakistan?`,
//     answer:
//       "Yes. I work remotely with businesses across the UAE, Saudi Arabia, the UK, the USA, and Canada, and calls are scheduled to suit your time zone.",
//   },
//   {
//     question: "Should I hire a freelancer or an agency?",
//     answer:
//       "Agencies bring a larger team but also layers of account managers and handoffs. As a freelancer, you work directly with the person doing the work, which means faster decisions, clearer communication, and a lower cost without giving up strategy, quality, or care.",
//   },
//   {
//     question: "Do you work with local businesses in Karachi, Lahore, and Islamabad?",
//     answer:
//       "Yes. I work with businesses across Pakistan's major cities as well as clients abroad, and everything from the first call to ongoing delivery can happen remotely.",
//   },
// ];

// export const services = [
//   {
//     slug: "social-media-marketing",
//     title: "Social Media Marketing",
//     shortDescription:
//       "Strategy, content, and community management that turn followers into paying customers.",
//     image: "/images/services/social-media-marketing.jpg",
//     imageAlt: "Social media apps on a smartphone screen",
//     eyebrow: "SOCIAL MEDIA MARKETING",
//     heading: "Social Media Marketing Services That Turn Followers Into Paying Customers",
//     lead: "Posting consistently is not the same thing as growing. Most business pages stay active yet quiet, because content and strategy are rarely built to work together.",
//     intro:
//       "As a social media marketing expert based in Pakistan and working with clients in the USA, UAE, and beyond, I run social media marketing as one connected system: content, community management, and Meta advertising working toward real customers, not just likes.",
//     aboutHeading: "How Social Media Marketing Actually Grows A Business",
//     about: [
//       "A search for social media marketing services usually comes from one of two places: a business that tried posting on its own and stalled, or one that never had a real plan for its channels to begin with.",
//       "Either way, the fix looks the same. Social platforms reward consistency, but consistency without a clear message and a defined audience just produces noise. My approach starts with understanding who your customers actually are, what they respond to, and where they already spend their time online.",
//       "From there, content, engagement, and paid promotion are planned together instead of separately, so one campaign sits on an organic post, a story sequence, and a Meta ad without feeling repeated or disconnected.",
//     ],
//     includedHeading: "What Is Included: My Social Media Marketing Services List",
//     included: [
//       {
//         title: "Social media marketing strategy",
//         text: "A clear plan for which platforms matter for your business, what to post, and how often, based on your industry and customers.",
//       },
//       {
//         title: "Content calendar and scheduling",
//         text: "A structured monthly calendar so your pages stay active without you needing to think about it every day.",
//       },
//       {
//         title: "Community management",
//         text: "Comments, messages, and enquiries handled promptly, so interested followers get a response instead of being ignored.",
//       },
//       {
//         title: "Social media ads",
//         text: "Paid promotion on Facebook and Instagram planned alongside organic content, connecting naturally with my dedicated Meta Ads service when a campaign needs wider reach.",
//       },
//       {
//         title: "Performance reporting",
//         text: "Regular updates on what is working, explained in plain language rather than a dashboard full of numbers with no context.",
//       },
//     ],
//     processHeading: "The 5 Steps In My Social Media Marketing Process",
//     process: [
//       {
//         title: "Understand your business",
//         text: "A short discovery call to learn about your products, customers, and what growth means for you specifically.",
//       },
//       {
//         title: "Build the strategy",
//         text: "A monthly plan covering platforms, themes, formats, and posting frequency, matched to your industry and audience.",
//       },
//       {
//         title: "Create the content",
//         text: "Posts, graphics, and videos are produced to fit the plan and your brand, ready to schedule ahead of time.",
//       },
//       {
//         title: "Publish and manage",
//         text: "Content goes live on schedule, while comments and messages are monitored and answered promptly.",
//       },
//       {
//         title: "Review and adjust",
//         text: "Performance is reviewed regularly, and the plan is refined based on what your audience actually responds to.",
//       },
//     ],
//     benefitsHeading: "Benefits Of Social Media Marketing For Your Business",
//     benefits: [
//       "A consistent, professional presence across every social channel",
//       "Content built around your audience instead of guesswork",
//       "Faster response times to enquiries, which often decide whether a customer buys",
//       "A clear connection between social activity and actual leads",
//       "More time back in your week, since posting and replying are handled for you",
//       "A foundation that paid advertising can build on rather than compete with",
//     ],
//     industries: [
//       "Retail and ecommerce",
//       "Restaurants and cafes",
//       "Clinics and healthcare providers",
//       "Real estate",
//       "Fashion and beauty brands",
//       "Education and training providers",
//       "Home services",
//       "Professional services",
//     ],
//     regionsHeading: "Social Media Marketing Services Across Multiple Regions",
//     regions: buildRegions("social media marketing"),
//     faqs: [
//       {
//         question: "How much does social media marketing cost?",
//         answer:
//           "Pricing depends on how many platforms you need managed, how much content is required each month, and whether Meta advertising is included. After a short discovery call, I put together a proposal based on your specific goals rather than a fixed package that may not fit your business.",
//       },
//       {
//         question: "Do I need to provide content or photos?",
//         answer:
//           "Not necessarily. I can work with photos and videos you already have, or plan content around graphic design and video editing produced as part of the service. If you have existing brand assets, they are built into the plan.",
//       },
//       {
//         question: "Do you also run the Meta ads for my page?",
//         answer:
//           "Yes. Meta advertising can be included as part of this service or handled separately through my dedicated Meta Ads service, depending on what your campaign needs.",
//       },
//       {
//         question: "Is social media marketing worth it for a small business?",
//         answer:
//           "Yes, and often more than for large brands. Social media lets a small business reach the exact local or niche audience it serves without a big advertising budget, build trust through consistent content, and turn followers into enquiries through messages and ads.",
//       },
//       ...generalFaqs("social media marketing"),
//     ],
//     ctaHeading: "Ready For Social Media That Actually Grows Your Business?",
//     ctaText:
//       "Create a meeting and I will walk you through exactly what a working social media plan would look like for your business, with no pressure and no generic pitch.",
//   },
//   {
//     slug: "meta-ads",
//     title: "Meta Ads",
//     shortDescription:
//       "Facebook and Instagram campaigns built to bring in leads and sales, not just clicks.",
//     image: "/images/services/meta-ads.jpg",
//     imageAlt: "Meta advertising dashboard on a laptop",
//     eyebrow: "META ADS",
//     heading: "Meta Ads Management That Turns Ad Spend Into Real Customers",
//     lead: "A boosted post is not the same thing as a properly built Meta ads campaign. Most wasted ad spend comes from targeting that is too broad, creative that does not match the offer, or a campaign that was never structured for a clear result.",
//     intro:
//       "I run Meta ads for businesses in Pakistan, the UAE, Saudi Arabia, the UK, the USA, and Canada, planning every campaign around a measurable goal such as leads, messages, store visits, or online sales.",
//     aboutHeading: "How Meta Ads Actually Grow A Business",
//     about: [
//       "Meta's advertising platform is powerful, but it rewards structure. The audience, the creative, the offer, and the landing destination all have to agree with one another, or the budget simply gets spread thin.",
//       "My approach starts with the goal and works backward: who should see the ad, what should they see, and what should happen when they respond. Campaigns are then launched in a controlled way, measured, and improved step by step.",
//       "You always see what is being spent and what it is producing, explained clearly and without inflated numbers.",
//     ],
//     includedHeading: "What Is Included: My Meta Ads Services List",
//     included: [
//       {
//         title: "Campaign strategy and setup",
//         text: "A clear campaign structure, objective, and budget plan built around your specific business goal.",
//       },
//       {
//         title: "Audience research and targeting",
//         text: "Custom, lookalike, and interest audiences chosen to reach the people most likely to buy.",
//       },
//       {
//         title: "Ad creative and copy",
//         text: "Images, videos, and copy produced to fit the offer, with variations tested against each other.",
//       },
//       {
//         title: "Pixel and conversion tracking",
//         text: "Proper tracking so every lead, message, and sale is attributed to the campaign that produced it.",
//       },
//       {
//         title: "Optimisation and scaling",
//         text: "Ongoing adjustments to budgets, audiences, and creative, scaling what works and pausing what does not.",
//       },
//       {
//         title: "Clear performance reporting",
//         text: "Regular reports in plain language showing spend, results, and next steps.",
//       },
//     ],
//     processHeading: "The 5 Steps In My Meta Ads Process",
//     process: [
//       {
//         title: "Define the goal",
//         text: "We agree on what a successful campaign looks like, whether leads, messages, or direct sales.",
//       },
//       {
//         title: "Plan the campaign",
//         text: "Audience, offer, budget, and structure are mapped out before any money is spent.",
//       },
//       {
//         title: "Build the creative",
//         text: "Ad visuals and copy are produced and prepared in several variations for testing.",
//       },
//       {
//         title: "Launch and monitor",
//         text: "Campaigns go live with tracking in place and are monitored closely during the learning phase.",
//       },
//       {
//         title: "Optimise and scale",
//         text: "Results are reviewed, weak ads are replaced, and the budget moves toward what performs best.",
//       },
//     ],
//     benefitsHeading: "Benefits Of Meta Ads For Your Business",
//     benefits: [
//       "Reach the exact audience that fits your customer, by location, interest, and behaviour",
//       "Measurable results tied to leads and sales, not guesswork",
//       "Faster visibility than organic content alone can deliver",
//       "Flexible budgets that can start small and scale as results come in",
//       "Retargeting that brings back people who already showed interest",
//       "A direct link between ad spend and customer enquiries",
//     ],
//     industries: [
//       "Ecommerce and online stores",
//       "Real estate and property",
//       "Clinics and healthcare providers",
//       "Restaurants and food brands",
//       "Fashion and beauty brands",
//       "Education and training providers",
//       "Home services",
//       "Professional services",
//     ],
//     regionsHeading: "Meta Ads Services Across Multiple Regions",
//     regions: buildRegions("Meta ads"),
//     faqs: [
//       {
//         question: "How much should I spend on Meta ads?",
//         answer:
//           "There is no single number. A workable starting budget depends on your product, margin, and goal. During the discovery call, I recommend a realistic starting amount and explain how to scale it once results are proven.",
//       },
//       {
//         question: "Do you charge a separate fee from the ad spend?",
//         answer:
//           "Yes. The ad budget is paid directly to Meta from your own ad account, so you always control the spend. My management fee is separate and agreed upfront.",
//       },
//       {
//         question: "Will I own my ad account and data?",
//         answer:
//           "Absolutely. Your ad account, pixel, and audiences remain yours at all times, and I work inside them with the access you grant.",
//       },
//       {
//         question: "Can you create the ads too, or do I need to supply them?",
//         answer:
//           "I can do both. If you have creative ready, I will use it. Otherwise, graphic design and video editing for your ads can be produced as part of the campaign.",
//       },
//       ...generalFaqs("Meta ads"),
//     ],
//     ctaHeading: "Ready For Meta Ads That Actually Bring In Customers?",
//     ctaText:
//       "Create a meeting and I will walk you through what a properly structured campaign would look like for your business, with no pressure and no generic pitch.",
//   },
//   {
//     slug: "graphic-design",
//     title: "Graphic Design",
//     shortDescription:
//       "Branding, social media creatives, carousels, book covers, and product visuals that look professional.",
//     image: "/images/services/graphic-design.jpg",
//     imageAlt: "Graphic design workspace with brand layouts",
//     eyebrow: "GRAPHIC DESIGN",
//     heading: "Graphic Design Services That Make Your Brand Look Credible",
//     lead: "Inconsistent design quietly costs businesses customers. A sharp logo and a clear visual style make people trust a brand before they read a word.",
//     intro:
//       "I design for businesses, authors, and creators across Pakistan, the UAE, Saudi Arabia, the UK, the USA, and Canada, covering branding, social media creatives, carousels, book covers, and product imagery.",
//     aboutHeading: "How Good Graphic Design Supports Business Growth",
//     about: [
//       "Design is not decoration. It is how customers judge quality, decide whether to trust you, and remember you afterwards.",
//       "My process starts with understanding your brand, your audience, and where the design will be used, then building a consistent visual system that works across social media, packaging, print, and the web.",
//       "Every piece is delivered in the formats you need, organised and ready to use, so you are not left chasing files.",
//     ],
//     includedHeading: "What Is Included: My Graphic Design Services List",
//     included: [
//       {
//         title: "Logo and brand identity",
//         text: "Logos, colour palettes, typography, and brand guidelines that keep everything consistent.",
//       },
//       {
//         title: "Social media creatives and carousels",
//         text: "Scroll-stopping posts, stories, and multi-slide carousels designed to match your content plan.",
//       },
//       {
//         title: "Book covers",
//         text: "Front, back, and spine designs prepared for print and ebook, shaped for your genre and readers.",
//       },
//       {
//         title: "Product images and packaging visuals",
//         text: "Clean product presentation, marketplace images, and packaging concepts that help products sell.",
//       },
//       {
//         title: "Marketing materials",
//         text: "Brochures, flyers, banners, and presentations built to fit your brand.",
//       },
//       {
//         title: "Thumbnails and ad creatives",
//         text: "Thumbnails and ad visuals designed to earn attention and clicks.",
//       },
//     ],
//     processHeading: "The 5 Steps In My Graphic Design Process",
//     process: [
//       {
//         title: "Brief and discovery",
//         text: "We discuss your business, audience, preferences, and where the design will be used.",
//       },
//       {
//         title: "Concept and direction",
//         text: "Initial concepts and a visual direction are shared for your feedback before details are polished.",
//       },
//       {
//         title: "Design and refine",
//         text: "The chosen concept is developed fully, with revisions made to match your vision.",
//       },
//       {
//         title: "Final delivery",
//         text: "Files are exported in every format you need, organised and ready for print or digital use.",
//       },
//       {
//         title: "Ongoing support",
//         text: "Additional designs can be added later, in the same consistent style.",
//       },
//     ],
//     benefitsHeading: "Benefits Of Professional Graphic Design For Your Business",
//     benefits: [
//       "A credible, memorable brand that customers trust faster",
//       "Consistent visuals across every platform and printed material",
//       "Social content that stands out instead of blending into the feed",
//       "Book covers and product images that improve how well products sell",
//       "Production-ready files with no technical headaches",
//       "One designer who learns your brand and keeps it consistent",
//     ],
//     industries: [
//       "Authors and publishers",
//       "Ecommerce and product brands",
//       "Restaurants and cafes",
//       "Fashion and beauty brands",
//       "Real estate",
//       "Startups and technology",
//       "Education and training providers",
//       "Professional services",
//     ],
//     regionsHeading: "Graphic Design Services Across Multiple Regions",
//     regions: buildRegions("graphic design"),
//     faqs: [
//       {
//         question: "How much does graphic design cost?",
//         answer:
//           "Pricing depends on the type and number of designs, such as a single book cover versus a full brand identity or monthly social media creatives. After a short call, I send a clear proposal for your exact needs.",
//       },
//       {
//         question: "How many revisions are included?",
//         answer:
//           "Each project includes revision rounds so the final result matches what you had in mind. The number is confirmed in the proposal before work begins.",
//       },
//       {
//         question: "Do you design book covers for self-published authors?",
//         answer:
//           "Yes. I design full covers including front, back, and spine, sized correctly for print platforms and ebook stores, with attention to your genre and readers.",
//       },
//       {
//         question: "Will I receive the source files?",
//         answer:
//           "Yes. Final files are delivered in the formats you need, and editable source files can be provided so your brand is never locked in.",
//       },
//       ...generalFaqs("graphic design"),
//     ],
//     ctaHeading: "Ready For Design That Makes Your Brand Stand Out?",
//     ctaText:
//       "Create a meeting and I will walk you through what a consistent, professional design system would look like for your business, with no pressure and no generic pitch.",
//   },
//   {
//     slug: "video-editing",
//     title: "Video Editing",
//     shortDescription:
//       "Reels, product videos, trailers, and thumbnails edited to hold attention and drive action.",
//     image: "/images/services/video-editing.jpg",
//     imageAlt: "Video editing timeline on a monitor",
//     eyebrow: "VIDEO EDITING",
//     heading: "Video Editing Services That Keep Viewers Watching",
//     lead: "Raw footage rarely performs on its own. What decides whether a video gets watched to the end is pacing, captions, and what the first few seconds look like.",
//     intro:
//       "I edit videos for brands, creators, and authors across Pakistan, the UAE, Saudi Arabia, the UK, the USA, and Canada, including social reels, product videos, book trailers, and ad creatives.",
//     aboutHeading: "How Video Editing Supports Business Growth",
//     about: [
//       "Short-form video is now one of the most effective ways for a business to be seen, but only when it is edited to match how people actually watch.",
//       "My approach starts with the goal of each video, whether to sell a product, introduce a brand, or promote a book, and the platform it will appear on. The edit is then shaped around that goal, with proper pacing, sound, captions, and visual style.",
//       "Every video is exported in the right format and dimensions for the platform, so it is ready to post.",
//     ],
//     includedHeading: "What Is Included: My Video Editing Services List",
//     included: [
//       {
//         title: "Reels and short-form videos",
//         text: "Vertical videos edited for Instagram, Facebook, TikTok, and YouTube Shorts with tight pacing and captions.",
//       },
//       {
//         title: "Product videos and reels",
//         text: "Clean, engaging product showcases that highlight features and encourage purchase.",
//       },
//       {
//         title: "Trailers and promos",
//         text: "Book trailers, brand promos, and launch videos with cinematic pacing, music, and motion.",
//       },
//       {
//         title: "Ad video creatives",
//         text: "Videos built specifically for Meta and social ads, with strong hooks and clear calls to action.",
//       },
//       {
//         title: "Captions, motion graphics, and sound",
//         text: "Subtitles, animated text, transitions, and sound design that keep the video polished.",
//       },
//       {
//         title: "Video thumbnails",
//         text: "Thumbnails designed to earn clicks and match the tone of your video.",
//       },
//     ],
//     processHeading: "The 5 Steps In My Video Editing Process",
//     process: [
//       {
//         title: "Brief and footage",
//         text: "You share the footage and goal, along with any references for the style you like.",
//       },
//       {
//         title: "Rough cut",
//         text: "The story and pacing are assembled first, so the structure is right before details are added.",
//       },
//       {
//         title: "Polish and enhance",
//         text: "Colour, sound, captions, and motion graphics are added to complete the edit.",
//       },
//       {
//         title: "Review and revise",
//         text: "You review the video and request changes until it matches your vision.",
//       },
//       {
//         title: "Export and deliver",
//         text: "The final video is exported in every format and size required for your platforms.",
//       },
//     ],
//     benefitsHeading: "Benefits Of Professional Video Editing For Your Business",
//     benefits: [
//       "Videos that hold attention instead of being scrolled past",
//       "Consistent style across all your social channels",
//       "Product and promo videos that help drive sales",
//       "Ready-to-post formats for every platform",
//       "Faster turnaround so your content calendar stays on track",
//       "One editor who learns your brand and keeps every video consistent",
//     ],
//     industries: [
//       "Ecommerce and product brands",
//       "Authors and publishers",
//       "Content creators",
//       "Restaurants and cafes",
//       "Fashion and beauty brands",
//       "Real estate",
//       "Education and training providers",
//       "Professional services",
//     ],
//     regionsHeading: "Video Editing Services Across Multiple Regions",
//     regions: buildRegions("video editing"),
//     faqs: [
//       {
//         question: "How much does video editing cost?",
//         answer:
//           "Pricing depends on the length, complexity, and number of videos per month. After a short call, I give you a clear quote for your exact needs.",
//       },
//       {
//         question: "What footage do I need to provide?",
//         answer:
//           "Share the raw footage you already have, even if recorded on a phone. I can also include stock footage, music, and graphics where needed.",
//       },
//       {
//         question: "Can you edit reels for my product?",
//         answer:
//           "Yes. I edit product reels and showcase videos built to highlight what makes your product worth buying, paced for social platforms.",
//       },
//       {
//         question: "Do you create book trailers?",
//         answer:
//           "Yes. I create book trailers with cinematic pacing, music, and motion that help authors promote a launch and reach new readers.",
//       },
//       ...generalFaqs("video editing"),
//     ],
//     ctaHeading: "Ready For Videos That Actually Get Watched?",
//     ctaText:
//       "Create a meeting and I will walk you through what a consistent video plan would look like for your business, with no pressure and no generic pitch.",
//   },
//   {
//     slug: "ui-ux-design",
//     title: "UI/UX Design",
//     shortDescription:
//       "App and website interfaces designed to be clear, usable, and ready for development.",
//     image: "/images/services/ui-ux-design.jpg",
//     imageAlt: "UI UX design wireframes and app screens",
//     eyebrow: "UI/UX DESIGN",
//     heading: "UI/UX Design Services For Apps And Websites People Enjoy Using",
//     lead: "A product can have great features and still lose users because it is confusing to use. Good UI/UX design removes that friction before development begins.",
//     intro:
//       "I design mobile apps, websites, and dashboards for startups and businesses across Pakistan, the UAE, Saudi Arabia, the UK, the USA, and Canada, with a focus on clarity, usability, and clean visual design.",
//     aboutHeading: "How UI/UX Design Supports Business Growth",
//     about: [
//       "Users decide within seconds whether an app or website feels easy or frustrating. Design that respects their time keeps them engaged and converts more of them into customers.",
//       "My process starts with understanding your users and business goals, mapping the flows, and then designing screens that are both attractive and practical.",
//       "Final designs are organised and handed over in a developer-friendly format, so your team can build exactly what was designed.",
//     ],
//     includedHeading: "What Is Included: My UI/UX Design Services List",
//     included: [
//       {
//         title: "User research and flows",
//         text: "Understanding your users and mapping the journeys they take through your product.",
//       },
//       {
//         title: "Wireframes and prototypes",
//         text: "Low-fidelity layouts and clickable prototypes to test ideas before they are built.",
//       },
//       {
//         title: "Mobile app UI design",
//         text: "Complete iOS and Android app interfaces designed to modern standards.",
//       },
//       {
//         title: "Website and landing page design",
//         text: "Responsive pages designed to explain your offer clearly and convert visitors.",
//       },
//       {
//         title: "Dashboard and SaaS design",
//         text: "Clear, scalable interfaces for data-heavy products and admin panels.",
//       },
//       {
//         title: "Design systems and handoff",
//         text: "Reusable components, styles, and organised files that make development smoother.",
//       },
//     ],
//     processHeading: "The 5 Steps In My UI/UX Design Process",
//     process: [
//       {
//         title: "Discover and research",
//         text: "We define your users, goals, and requirements, and review competitors and references.",
//       },
//       {
//         title: "Map the experience",
//         text: "User flows and wireframes establish the structure before any visual design begins.",
//       },
//       {
//         title: "Design the interface",
//         text: "High-fidelity screens are designed with a consistent style, typography, and spacing.",
//       },
//       {
//         title: "Prototype and refine",
//         text: "A clickable prototype is reviewed, tested, and improved based on feedback.",
//       },
//       {
//         title: "Hand off to development",
//         text: "Final files, components, and specifications are delivered ready for your developers.",
//       },
//     ],
//     benefitsHeading: "Benefits Of Professional UI/UX Design For Your Product",
//     benefits: [
//       "A product that is easy to understand and pleasant to use",
//       "Fewer costly changes during development",
//       "Higher conversion from visitors and users into customers",
//       "A consistent visual identity across web and mobile",
//       "Clear documentation your developers can follow",
//       "A design foundation that scales as your product grows",
//     ],
//     industries: [
//       "Startups and technology",
//       "Ecommerce and marketplaces",
//       "Healthcare and wellness",
//       "Fintech and payments",
//       "Education and learning platforms",
//       "Real estate platforms",
//       "Food delivery and hospitality",
//       "Professional services",
//     ],
//     regionsHeading: "UI/UX Design Services Across Multiple Regions",
//     regions: buildRegions("UI/UX design"),
//     faqs: [
//       {
//         question: "How much does UI/UX design cost?",
//         answer:
//           "Pricing depends on the number of screens, the complexity of the product, and whether research and prototyping are included. After a discovery call, I send a clear proposal.",
//       },
//       {
//         question: "Which tools do you design in?",
//         answer:
//           "I design primarily in Figma, which makes collaboration, feedback, and developer handoff simple.",
//       },
//       {
//         question: "Can you design both mobile apps and websites?",
//         answer:
//           "Yes. I design mobile apps for iOS and Android as well as responsive websites, landing pages, and dashboards, using a consistent design system.",
//       },
//       {
//         question: "Do you also develop the design?",
//         answer:
//           "I deliver developer-ready designs, and I can also build them through my AI development service when you need a complete solution.",
//       },
//       ...generalFaqs("UI/UX design"),
//     ],
//     ctaHeading: "Ready For A Design People Love To Use?",
//     ctaText:
//       "Create a meeting and I will walk you through what a clear, usable interface would look like for your product, with no pressure and no generic pitch.",
//   },
//   {
//     slug: "ai-ads",
//     title: "AI Ads",
//     shortDescription:
//       "AI-assisted ad creatives and videos produced faster, tested more, and built to convert.",
//     image: "/images/services/ai-ads.jpg",
//     imageAlt: "AI generated advertising creatives",
//     eyebrow: "AI ADS",
//     heading: "AI Ads That Help You Test More Creative And Launch Faster",
//     lead: "Ad performance depends heavily on creative, and most businesses cannot afford to produce enough variations to find what works. AI-assisted production changes that.",
//     intro:
//       "I create AI-assisted ad creatives, product visuals, and short videos for businesses across Pakistan, the UAE, Saudi Arabia, the UK, the USA, and Canada, combining the speed of AI with human direction and quality control.",
//     aboutHeading: "How AI Ads Support Business Growth",
//     about: [
//       "Traditional ad production can be slow and expensive, which limits how many ideas you can test. AI-assisted workflows reduce that cost and time dramatically.",
//       "Every ad is still directed and reviewed by me, so the result matches your brand, avoids generic AI-looking output, and supports a clear offer.",
//       "The outcome is a larger set of polished creatives that can be tested on Meta and other platforms, with the winners scaled.",
//     ],
//     includedHeading: "What Is Included: My AI Ads Services List",
//     included: [
//       {
//         title: "AI ad creative concepts",
//         text: "Fresh ad ideas and angles developed around your product and audience.",
//       },
//       {
//         title: "AI product visuals",
//         text: "Studio-quality product images and lifestyle scenes created without a physical shoot.",
//       },
//       {
//         title: "AI video ads",
//         text: "Short video ads and reels produced quickly for social and paid placements.",
//       },
//       {
//         title: "Ad copy and hooks",
//         text: "Headlines, hooks, and copy variations written to match each creative.",
//       },
//       {
//         title: "Creative testing plans",
//         text: "A structured plan for testing variations and identifying winning ads.",
//       },
//       {
//         title: "Brand consistency review",
//         text: "Every asset is checked so colours, tone, and quality remain true to your brand.",
//       },
//     ],
//     processHeading: "The 5 Steps In My AI Ads Process",
//     process: [
//       {
//         title: "Understand the offer",
//         text: "We define your product, audience, and the message that should come through.",
//       },
//       {
//         title: "Develop concepts",
//         text: "Several creative angles are planned before anything is produced.",
//       },
//       {
//         title: "Produce the creatives",
//         text: "Images, videos, and copy are generated, refined, and polished by hand.",
//       },
//       {
//         title: "Review and approve",
//         text: "You review the assets and request changes until they fit your brand.",
//       },
//       {
//         title: "Launch and learn",
//         text: "Creatives are tested in campaigns and the best performers guide the next round.",
//       },
//     ],
//     benefitsHeading: "Benefits Of AI Ads For Your Business",
//     benefits: [
//       "Faster production than traditional shoots and edits",
//       "More creative variations to test within the same budget",
//       "Lower production cost, especially for product visuals",
//       "Polished output directed and reviewed by a human",
//       "Quick adaptation to new offers, seasons, and campaigns",
//       "Stronger insights from testing more ideas",
//     ],
//     industries: [
//       "Ecommerce and product brands",
//       "Fashion and beauty brands",
//       "Food and beverage",
//       "Real estate",
//       "Apps and software",
//       "Education and training providers",
//       "Home services",
//       "Professional services",
//     ],
//     regionsHeading: "AI Ads Services Across Multiple Regions",
//     regions: buildRegions("AI ads"),
//     faqs: [
//       {
//         question: "Will AI ads look fake or generic?",
//         answer:
//           "Not when they are directed carefully. Every asset is guided, refined, and reviewed so it matches your brand and looks professional rather than obviously generated.",
//       },
//       {
//         question: "Can AI create my product images?",
//         answer:
//           "Yes. I can produce clean product visuals and lifestyle scenes from your existing product photos, saving the cost of a full shoot.",
//       },
//       {
//         question: "Do you run the campaigns as well?",
//         answer:
//           "Yes, if you want. AI ads pair naturally with my Meta Ads service, so creative and campaign management can sit under one plan.",
//       },
//       {
//         question: "Are AI-generated ads allowed on Meta?",
//         answer:
//           "Yes, AI-assisted creative can be used in Meta ads as long as it follows their advertising policies, which I review as part of each campaign.",
//       },
//       ...generalFaqs("AI ads"),
//     ],
//     ctaHeading: "Ready To Test More Ads And Find What Works?",
//     ctaText:
//       "Create a meeting and I will walk you through what an AI-assisted ad workflow would look like for your business, with no pressure and no generic pitch.",
//   },
//   {
//     slug: "ai-development",
//     title: "AI Development",
//     shortDescription:
//       "Custom AI tools, chatbots, and automations that save time and support your business.",
//     image: "/images/services/ai-development.jpg",
//     imageAlt: "AI development code and automation workflow",
//     eyebrow: "AI DEVELOPMENT",
//     heading: "AI Development Services That Automate Work And Support Growth",
//     lead: "Many businesses lose hours every week to repetitive tasks, slow replies, and manual processes that software can handle reliably.",
//     intro:
//       "I build practical AI solutions for businesses across Pakistan, the UAE, Saudi Arabia, the UK, the USA, and Canada, including chatbots, automations, and custom tools designed around real business needs.",
//     aboutHeading: "How AI Development Supports Business Growth",
//     about: [
//       "Useful AI is not about novelty. It is about removing friction, such as answering common customer questions, organising leads, or automating repetitive internal work.",
//       "My approach starts with identifying the tasks costing you the most time, then designing a focused solution that fits your existing tools and processes.",
//       "Solutions are built to be reliable, simple to use, and easy to extend as your business grows.",
//     ],
//     includedHeading: "What Is Included: My AI Development Services List",
//     included: [
//       {
//         title: "AI chatbots",
//         text: "Chatbots for your website or WhatsApp that answer questions and capture leads around the clock.",
//       },
//       {
//         title: "Workflow automation",
//         text: "Automations that connect your tools and remove repetitive manual tasks.",
//       },
//       {
//         title: "Custom AI tools",
//         text: "Purpose-built tools for content, analysis, support, or internal operations.",
//       },
//       {
//         title: "Web apps and integrations",
//         text: "Modern web applications and API integrations with the platforms you already use.",
//       },
//       {
//         title: "Lead and CRM automation",
//         text: "Systems that capture, qualify, and route leads automatically.",
//       },
//       {
//         title: "Support and maintenance",
//         text: "Ongoing updates and improvements so your solution keeps working as needs change.",
//       },
//     ],
//     processHeading: "The 5 Steps In My AI Development Process",
//     process: [
//       {
//         title: "Identify the opportunity",
//         text: "We find the tasks where automation or AI will save the most time and effort.",
//       },
//       {
//         title: "Plan the solution",
//         text: "A clear scope, workflow, and technical approach is agreed before development starts.",
//       },
//       {
//         title: "Build and integrate",
//         text: "The solution is developed and connected to your existing tools and data.",
//       },
//       {
//         title: "Test and refine",
//         text: "Everything is tested with real scenarios and refined until it works reliably.",
//       },
//       {
//         title: "Launch and support",
//         text: "The solution goes live with documentation and ongoing support as needed.",
//       },
//     ],
//     benefitsHeading: "Benefits Of AI Development For Your Business",
//     benefits: [
//       "Hours saved every week on repetitive tasks",
//       "Faster replies to customers, at any time of day",
//       "Fewer manual errors in routine processes",
//       "Better lead handling with nothing slipping through",
//       "A solution designed around your business, not a generic template",
//       "Room to scale without hiring for every new task",
//     ],
//     industries: [
//       "Ecommerce and online stores",
//       "Real estate",
//       "Clinics and healthcare providers",
//       "Education and training providers",
//       "Startups and technology",
//       "Agencies and consultancies",
//       "Home services",
//       "Professional services",
//     ],
//     regionsHeading: "AI Development Services Across Multiple Regions",
//     regions: buildRegions("AI development"),
//     faqs: [
//       {
//         question: "How much does AI development cost?",
//         answer:
//           "Cost depends on the scope, integrations, and complexity. After a discovery call, I provide a clear proposal and, where helpful, suggest starting with a smaller first version.",
//       },
//       {
//         question: "Can a chatbot work on WhatsApp?",
//         answer:
//           "Yes. I can build chatbots for WhatsApp as well as your website, designed to answer common questions and pass serious enquiries to you.",
//       },
//       {
//         question: "Do I need technical knowledge to use what you build?",
//         answer:
//           "No. Solutions are built to be simple to use, and I provide clear guidance so you and your team can manage them confidently.",
//       },
//       {
//         question: "Is my business data kept secure?",
//         answer:
//           "Yes. I follow sensible security practices, only use the access required, and discuss data handling openly before any project begins.",
//       },
//       ...generalFaqs("AI development"),
//     ],
//     ctaHeading: "Ready To Automate The Work Slowing You Down?",
//     ctaText:
//       "Create a meeting and I will walk you through what a practical AI solution would look like for your business, with no pressure and no generic pitch.",
//   },
// ];

// export const getServiceBySlug = (slug) =>
//   services.find((service) => service.slug === slug);

// export const getOtherServices = (slug, count = 3) =>
//   services.filter((service) => service.slug !== slug).slice(0, count);