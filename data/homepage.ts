export type IconName =
  | "arrow-right"
  | "briefcase"
  | "calendar"
  | "check"
  | "compass"
  | "file"
  | "globe"
  | "grid"
  | "heart"
  | "home"
  | "map-pin"
  | "phone"
  | "pulse"
  | "shield"
  | "spark"
  | "users"
  | "wallet";

export type DestinationKey = "bali" | "sriLanka";

export const siteLinks = {
  whatsapp: "https://wa.me/31683660360",
  apply: "#apply",
  matchQuiz: "/match-quiz.html",
  stories: "/stories",
  community: "/community-lifestyle.html",
  companies: "/companies.html",
  hostCompanies: "/host-companies.html",
  outcomes: "/career-outcomes.html",
  bali: "/bali.html",
  baliPlacements: "/bali-placements.html",
  sriLankaPlacements: "/sri-lanka-placements.html",
  sriLanka: "/sri-lanka.html",
  privacy: "/privacy.html",
  terms: "/terms.html",
  helloEmail: "mailto:hello@islandinternship.com",
  partnersEmail: "mailto:partners@islandinternship.com",
  infoSession: "mailto:hello@islandinternship.com?subject=Info%20session",
};

export type NavItem =
  | { href: string; label: string; slot?: "center" | "right"; dropdown?: never }
  | { label: string; slot?: "center" | "right"; href?: never; dropdown: Array<{ href: string; label: string }> };

export const navigation: NavItem[] = [
  { href: "#how-it-works", label: "How it Works", slot: "center" },
  {
    label: "Destinations",
    slot: "center",
    dropdown: [
      { href: "/bali.html", label: "Bali" },
      { href: "/sri-lanka.html", label: "Sri Lanka" },
    ],
  },
  { href: "#tracks", label: "Tracks", slot: "center" },
  { href: "/career-outcomes.html", label: "Outcomes", slot: "center" },
  { href: "/stories", label: "Student Stories", slot: "center" },
  { href: "/pricing", label: "Pricing", slot: "center" },
  { href: "/community-lifestyle.html", label: "Community", slot: "center" },
  { href: "#faq", label: "FAQ", slot: "center" },
  { href: "/companies.html", label: "For Businesses", slot: "right" },
];

export const hero = {
  eyebrow: "Real internships abroad · Credit-eligible · Built for Dutch students",
  title: "Your required internship semester, built into a better life chapter.",
  subtitle:
    "Most Dutch students do their required semester at home. A growing number go to Bali or Sri Lanka — working inside real startups and international businesses, with every logistical detail sorted before they fly.",
  rotatingPhrases: ["Do it in Bali.", "Do it in Sri Lanka.", "Make it count."],
  bullets: [
    "Matched to startups, agencies, hospitality brands, and AI-forward teams — credit-eligible from day one.",
    "Visa guidance, private housing, airport pickup, and orientation week — fully arranged before you fly.",
    "Monthly costs from €440 in Bali. Typically less than a semester in Amsterdam or Rotterdam.",
  ],
  primaryCta: "Start your application",
  secondaryCta: "Take the AI fit quiz",
  support: "Free application · No commitment · Reply within 2 business days",
  note: "Students from Maastricht, UvA, Erasmus, Tilburg, VU, Breda, and more.",
  gallery: [
    {
      image: "/images/hero-placement.jpg",
      alt: "Students at an internship placement in Bali",
      label: "Credit-ready placement",
      text: "Placements aligned with your university requirements, field, and internship schedule.",
    },
    {
      image: "/images/hero-group.jpg",
      alt: "Intern cohort group together in Bali",
      label: "Lower cost of living",
      text: "Typical monthly budget in Bali: €440–€630. Often less than the Netherlands.",
    },
    {
      image: "/images/community-orientation.jpg",
      alt: "Students during orientation week in Bali",
      label: "Full support included",
      text: "Visa guidance, housing support, airport pickup, and orientation week — sorted before arrival.",
    },
  ],
};

export const trustMetrics = [
  { value: "30+", label: "Students placed" },
  { value: "20+", label: "Host companies" },
  { value: "6", label: "Dutch universities" },
];

export const trustUniversities: Array<{ name: string; logo: string | null }> = [
  { name: "Maastricht University",      logo: "/logos/universities/maastricht-university.svg" },
  { name: "Universiteit van Amsterdam", logo: "/logos/universities/universiteit-van-amsterdam.svg" },
  { name: "Erasmus University",         logo: "/logos/universities/erasmus-university-rotterdam.svg" },
  { name: "Tilburg University",         logo: "/logos/universities/tilburg-university.svg" },
  { name: "Vrije Universiteit",         logo: "/logos/universities/vu-amsterdam.png" },
  { name: "Hogeschool Rotterdam",       logo: null },
];

export const costs = {
  eyebrow: "A smarter use of your required semester",
  title: "You need to do this internship anyway. In Bali, most students do it for less.",
  intro:
    "The average Dutch student spends €900–€1,400 per month in Amsterdam, Rotterdam, or Utrecht. In Bali, total monthly living runs €440–€630 — covering private accommodation, transport, food, and daily life.",
  cards: [
    {
      icon: "spark" as const,
      kicker: "Application fee",
      title: "Free to apply",
      description:
        "There is no cost to submit a profile, speak with us, or receive an initial fit review for the program.",
      points: [
        "Step-one application and profile review",
        "Intro call and initial fit conversation",
        "No payment required until you decide to move forward",
      ],
    },
    {
      icon: "briefcase" as const,
      kicker: "Program fee",
      title: "Placement and relocation support",
      description:
        "The program fee covers placement matching, visa guidance, airport pickup, orientation week, and on-the-ground support throughout your stay. The exact fee is discussed on your intro call — it varies by destination and timing.",
      points: [
        "Placement matching and company introductions",
        "Onboarding, arrival planning, and local support",
        "University and admin coordination where needed",
      ],
    },
    {
      icon: "wallet" as const,
      kicker: "Budget separately",
      title: "Costs outside the program fee",
      description:
        "These are the same costs you'd have anywhere — accommodation, food, travel. In Bali, they tend to run lower than a Dutch city.",
      points: [
        "Flights, insurance, and visa-related costs",
        "Accommodation and everyday personal spending",
        "Optional travel, activities, and lifestyle extras",
      ],
    },
  ],
  table: [
    ["Private accommodation", "Starts from €180"],
    ["Scooter rental", "€50 – €70"],
    ["Petrol", "€8 – €15"],
    ["Meals at local restaurants", "€50 – €120"],
    ["Coffee / cafes", "€20 – €40"],
    ["Gym", "€30 – €75"],
    ["Surf lessons / activities", "€40 – €70"],
    ["Weekend trips", "€40 – €80"],
    ["Local transport", "€15 – €30"],
  ],
  totalLabel: "Estimated monthly total",
  totalValue: "€440 – €630",
  note:
    "Monthly living cost depends on room standard, bike type, and how often you eat out. Use this as a Bali planning range, not a fixed bill.",
  comparison: {
    bali: "€440 – €630",
    dutchCities: "€900 – €1,400",
    body:
      "You need to complete the internship semester regardless. In Bali, the same period often costs significantly less — while the experience, exposure, and career proof tend to be stronger.",
  },
};

export const includedHighlights = {
  eyebrow: "What comes with the placement",
  title: "Everything arranged so you arrive ready to start — not still planning.",
  intro:
    "The program fee covers placement matching, visa guidance, airport pickup, orientation week, and ongoing support throughout your stay. Monthly rent is paid directly.",
  items: [
    {
      icon: "briefcase" as const,
      title: "Internship placement",
      body: "Matched to a curated host company that fits your field, study goals, and required internship format.",
    },
    {
      icon: "map-pin" as const,
      title: "Visa guidance",
      body: "Clear support on documents, route, and timing so your departure process feels organized rather than last-minute.",
    },
    {
      icon: "home" as const,
      title: "Housing support",
      body: "Accommodation options arranged around your intake, with monthly rent paid directly in-destination.",
    },
    {
      icon: "globe" as const,
      title: "Airport pickup",
      body: "Arrival-day transfer so your first hours in country feel calm and coordinated.",
    },
    {
      icon: "users" as const,
      title: "Local support",
      body: "A team you can reach during the placement for practical issues, questions, and transitions.",
    },
    {
      icon: "calendar" as const,
      title: "Orientation week",
      body: "Neighbourhood, transport, culture, and a first shared rhythm before the internship starts.",
    },
  ],
};

export const processSteps = {
  eyebrow: "How it works",
  title: "From first application to your first week on the ground.",
  intro:
    "The process is structured, transparent, and designed to move you from interest to placement without months of uncertainty.",
  steps: [
    {
      number: "01",
      title: "Apply",
      body: "Tell us your field, timing, and what kind of internship you want. The application is free and takes about 10 minutes.",
    },
    {
      number: "02",
      title: "Intro call and matching",
      body: "We speak with you, refine the brief, and match you to host companies that fit your background and preferred environment.",
    },
    {
      number: "03",
      title: "Placement and preparation",
      body: "Once the match is right, we support the paperwork, pre-departure planning, and arrival coordination.",
    },
    {
      number: "04",
      title: "Arrive and start well",
      body: "You land with structure around you: housing guidance, onboarding, community touchpoints, and a host company ready for your first week.",
    },
  ],
  noteTitle: "Free application. No commitment until you want to move forward.",
  noteBody:
    "The first step is simply sharing your profile. Matching conversations and placement details only begin once the direction feels right for you.",
};

export const destinations: Record<
  DestinationKey,
  {
    name: string;
    country: string;
    region: string;
    markerLabel: string;
    coordinates: [number, number];
    image: string;
    alt: string;
    panelTitle: string;
    panelBody: string;
    storyTitle: string;
    storyBody: string;
    facts: Array<{ label: string; value: string }>;
    tags: string[];
    ctaLabel: string;
    ctaHref: string;
    accentClass: string;
  }
> = {
  bali: {
    name: "Bali",
    country: "Indonesia",
    region: "Indonesia · Bali",
    markerLabel: "Bali / Indonesia",
    coordinates: [115.1889, -8.4095],
    image: "/images/destination-bali.jpg",
    alt: "Bali destination for Island Internship",
    panelTitle: "The energetic island base.",
    panelBody:
      "A denser ecosystem of startups, agencies, coworking spaces, hospitality brands, and international teams. Bali is stronger when you want commercial pace, creative energy, and a broader student scene around the placement.",
    storyTitle: "Built for students who want momentum around the internship.",
    storyBody:
      "Expect stronger startup density, more founder-led teams, and a day-to-day rhythm that feels international from the moment you arrive. It is often the clearest fit for marketing, growth, operations, startup, and hospitality-focused students.",
    facts: [
      { label: "Setting", value: "International · Entrepreneurial · High-energy" },
      { label: "Living costs", value: "From €440/month — typically lower than Amsterdam" },
      { label: "Strong for", value: "Marketing, growth, startups, hospitality" },
    ],
    tags: ["Startups", "Agencies", "Hospitality", "Coworking culture"],
    ctaLabel: "Explore Bali",
    ctaHref: "#destinations",
    accentClass: "is-bali",
  },
  sriLanka: {
    name: "Sri Lanka",
    country: "Sri Lanka",
    region: "South Asia · Sri Lanka",
    markerLabel: "Sri Lanka",
    coordinates: [80.7718, 7.8731],
    image: "/images/destination-srilanka.jpg",
    alt: "Sri Lanka destination for Island Internship",
    panelTitle: "The calmer coastal rhythm.",
    panelBody:
      "A close-knit island setting with stronger hospitality, sustainability, and operations exposure. Sri Lanka suits students who want a softer tempo, tighter community feel, and a more intimate environment around the placement.",
    storyTitle: "Best when the internship needs calm, depth, and a slower surrounding pace.",
    storyBody:
      "Sri Lanka works well for students who care about guest experience, sustainability, boutique hospitality, and operational visibility. The environment feels more grounded and less saturated — still international, just less frantic.",
    facts: [
      { label: "Setting", value: "Coastal · Close-knit · Slower-paced" },
      { label: "Living costs", value: "Comparable to Bali — typically lower than a Dutch city" },
      { label: "Strong for", value: "Hospitality, operations, sustainability, guest experience" },
    ],
    tags: ["Coastal living", "Hospitality", "Sustainability", "Operations"],
    ctaLabel: "Explore Sri Lanka",
    ctaHref: siteLinks.sriLanka,
    accentClass: "is-sri-lanka",
  },
};

export const tracks = {
  eyebrow: "Internship tracks",
  title: "Six tracks. Real companies. Real work.",
  intro:
    "Each track maps to a specific type of company, role, and work environment. Pick what fits your degree requirements and career direction — we handle the matching.",
  items: [
    {
      number: "01",
      kicker: "Marketing",
      title: "Digital Marketing",
      body: "Support campaign planning, content creation, social growth, and brand execution inside fast-moving island-based teams.",
      field: "Marketing & Digital",
    },
    {
      number: "02",
      kicker: "Growth",
      title: "Business Development",
      body: "Work on outreach, partnerships, market research, lead generation, and commercial projects with ambitious businesses.",
      field: "Business Development",
    },
    {
      number: "03",
      kicker: "Hospitality",
      title: "Hospitality and Guest Experience",
      body: "Learn inside boutique hotels, villa brands, restaurants, and experience-led businesses focused on service and operations.",
      field: "Hospitality Management",
    },
    {
      number: "04",
      kicker: "Operations",
      title: "Operations and Project Management",
      body: "Step into roles that sharpen structure, coordination, systems thinking, and day-to-day execution.",
      field: "Startup Operations",
    },
    {
      number: "05",
      kicker: "Impact",
      title: "NGO and Sustainability",
      body: "Contribute to impact-led projects across sustainability, community programs, ESG reporting, and purpose-driven operations.",
      field: "Sustainability & ESG",
    },
    {
      number: "06",
      kicker: "Tech & AI",
      title: "Startup, AI & Technology",
      body: "Join AI-forward startups, digital ventures, and tech operations teams where you work across functions, touch real systems, and build skills that travel beyond the internship.",
      field: "Data & Tech",
    },
  ],
  popular: [
    "Marketing internships",
    "Business internships",
    "Hospitality internships",
    "Tech & AI internships",
    "Sustainability internships",
  ],
};

export const outcomes = {
  eyebrow: "What you build during the internship",
  title: "What students should leave the program with.",
  intro:
    "The strongest programs do more than place you abroad. They leave you with better proof of work, stronger stories for interviews, and a network that stays useful after the internship ends.",
  items: [
    {
      icon: "grid" as const,
      image: "/images/outcomes-office.jpg",
      alt: "Student working at internship in Bali",
      objectPosition: "center bottom",
      title: "Career Portfolio",
      body: "Real deliverables you can speak about in every interview after you leave.",
      points: [
        "Campaign work, reports, and project ownership on your CV",
        "Portfolio proof built through actual internship output",
      ],
    },
    {
      icon: "pulse" as const,
      image: "/images/outcomes-workspace.jpg",
      alt: "Interns collaborating on a project in a tropical workspace",
      objectPosition: "center",
      title: "Business Exposure",
      body: "Work close to founders and operators inside real international businesses.",
      points: [
        "Commercial awareness built through daily team exposure",
        "Understand how startups, agencies, and hospitality brands run",
      ],
    },
    {
      icon: "users" as const,
      image: "/images/community-networking.jpg",
      alt: "Interns networking and building international connections",
      objectPosition: "center",
      title: "International Network",
      body: "Connections across universities, industries, and countries that stay useful after you return.",
      points: [
        "Peer network beyond your own university circle",
        "Professional contacts from partner companies and co-interns",
      ],
    },
    {
      icon: "compass" as const,
      image: "/images/community-cafe.jpg",
      alt: "Intern reflecting on career direction in a Bali cafe",
      objectPosition: "center",
      title: "Career Direction",
      body: "Return knowing what kind of work and environment you actually want next.",
      points: [
        "Clarity on roles, industries, and working styles before you graduate",
        "Confidence to pursue the next step with better reasoning",
      ],
    },
  ],
  chips: [
    "Marketing internship Bali",
    "Business internship Bali",
    "Hospitality internship Bali",
    "Startup internship Bali",
    "Operations internship Bali",
    "Sustainability internship Bali",
  ],
};

export const testimonials = {
  eyebrow: "Student stories",
  title: "What the experience feels like once students are in it.",
  intro:
    "These stories show the rhythm of a placement from the inside: workdays, team culture, and the kind of environment students step into once they arrive.",
  videos: [
    {
      title: "A typical day at Ex Venture",
      body: "See how an internship can look inside one of our partner company environments in Bali.",
      video: "/videos/testimonial-story-1.mp4",
    },
    {
      title: "Inside the Ex Venture workday",
      body: "A student perspective on the daily rhythm, team setting, and internship experience.",
      video: "/videos/testimonial-story-2.mp4",
    },
    {
      title: "Life inside the Island Internship program",
      body: "A closer look at what the internship experience looks and feels like from the inside.",
      video: "/videos/testimonial-story-3.mp4",
    },
    {
      title: "Student experience — Breda University of Applied Sciences",
      body: "A BUas student shares her experience doing an internship in Bali through Island Internship.",
      video: "/videos/testimonial-story-4.mp4",
    },
  ],
  stories: [
    {
      initials: "TO",
      name: "Tom",
      detail: "Maastricht University",
      role: "Ex Venture · Bali · Marketing internship · 5 months",
      quote:
        "The placement at Ex Venture was structured, international, and easy to align with my university requirements. The support before departure made the move feel clear from the start.",
    },
    {
      initials: "YI",
      name: "Yirgalem",
      detail: "Maastricht University",
      role: "Bali · Operations internship · 4 months",
      quote:
        "I appreciated how clearly the internship was scoped before I arrived. I knew the team, the schedule, and the kind of projects I would support from the start.",
    },
    {
      initials: "ME",
      name: "Meto",
      detail: "Maastricht University",
      role: "Bali · Business internship · 6 months",
      quote:
        "The 11:00 to 17:00 schedule worked well for me. It felt focused during the day, while still leaving time to enjoy Bali and settle into life abroad.",
    },
    {
      initials: "GA",
      name: "Gabriel",
      detail: "Erasmus Rotterdam",
      role: "Bali · Partnerships internship · 5 months",
      quote:
        "Communication was calm and professional throughout. From placement details to university paperwork, everything felt organized and easy to follow.",
    },
    {
      initials: "ST",
      name: "Stephen",
      detail: "Erasmus Rotterdam",
      role: "Ex Venture · Bali · Business development · 4 months",
      quote:
        "The internship had real responsibility from week one. Working with an international team in Bali gave me a kind of professional exposure I could not have found at home.",
    },
    {
      initials: "LI",
      name: "Lisette",
      detail: "Breda University of Applied Sciences",
      role: "Bali · Marketing internship · 5 months",
      quote:
        "My supervisor at Breda approved the placement quickly once she saw how it was structured. The learning agreement, goals, and documentation were all ready before I even needed to ask.",
    },
    {
      initials: "LN",
      name: "Lina",
      detail: "Breda University of Applied Sciences",
      role: "Bali · Hospitality internship · 6 months",
      quote:
        "I did not know anyone going in. By the end of the first dinner I already had plans for the weekend. The community made it feel completely different from finding a placement on your own.",
    },
  ],
  postCta: {
    title: "Real students. Real universities. Real placements.",
    body: "If this sounds like the right fit, the next step is a free 10-minute application.",
  },
};

export const community = {
  eyebrow: "Community around the placement",
  title: "The internship matters more when the community around it is strong.",
  intro:
    "Island Internship is not built as a solo drop-off placement. You arrive into an ambitious student community with shared routines, introductions, dinners, weekend plans, and people who make the move feel more connected from week one.",
  bullets: [
    "You meet people before arrival through group chats and pre-departure introductions.",
    "Shared housing, coworking meetups, and casual dinners make everyday life easy to settle into.",
    "Welcome nights, shared dinners, and weekend plans add warmth without pulling focus away from the internship itself.",
    "You build friendships across different universities, countries, and internship tracks.",
    "The result is a network that feels social while you are there and still useful once you are back home.",
  ],
  images: [
    {
      image: "/images/community-villa-group.jpg",
      alt: "Intern cohort together at the villa",
    },
    {
      image: "/images/community-casatua.jpg",
      alt: "Island Internship cohort at Casa Tua Bali",
    },
    {
      image: "/images/community-indoor-social.jpg",
      alt: "Interns networking at an informal evening",
    },
  ],
};

export const resources = {
  eyebrow: "Before you apply",
  title: "Read the guide, take the quiz, or join a live session — then decide.",
  intro:
    "Not ready to apply yet? These resources give you a clear view of the program, your fit, and what to expect — before you commit to anything.",
  cards: [
    {
      kicker: "Guide",
      title: "The Bali Internship Guide",
      body: "A practical overview of tracks, pricing, housing, visa basics, and what the application process looks like from first form to arrival.",
      meta: "Best for students still comparing Bali with other internship options.",
      type: "guide" as const,
      cta: "Send me the guide",
    },
    {
      kicker: "AI fit quiz",
      title: "Get a private match preview before you apply.",
      body: "Answer a few guided questions and get an AI-assisted fit direction for the kind of destination and work environment likely to suit you best.",
      meta: "It narrows the direction without revealing every live internship publicly, so you still get a tailored match through us.",
      type: "link" as const,
      href: siteLinks.matchQuiz,
      cta: "Start the AI fit quiz",
    },
    {
      kicker: "Live session",
      title: "Join the next info session",
      body: "Hear how placements, housing, community, and the application process work before you decide whether to move ahead.",
      meta: "Ideal for students and parents who want answers live before applying.",
      type: "link" as const,
      href: siteLinks.infoSession,
      cta: "Ask about the next session",
    },
  ],
};

export const companies = {
  eyebrow: "For host companies in Bali and Sri Lanka",
  title: "Host international interns with more structure and less admin.",
  intro:
    "For teams in Bali and Sri Lanka, Island Internship helps define the role, surface suitable student profiles, and support a smoother placement process from intro to onboarding.",
  image: "/images/sri-lanka-workspace.jpg",
  imageAlt: "Interns working together at a host company workspace in Bali or Sri Lanka",
  teasers: [
    {
      icon: "users" as const,
      title: "Motivated international candidates",
      body: "Students who chose to intern abroad and are prepared to contribute in an English-speaking team.",
    },
    {
      icon: "briefcase" as const,
      title: "We handle sourcing and matching",
      body: "We shortlist suitable profiles so your team only spends time on the right candidates — not a long recruitment process.",
    },
    {
      icon: "calendar" as const,
      title: "Flexible 3–6 month placements",
      body: "Structured around your team's pace, project cycle, or seasonal needs — with support for documentation throughout.",
    },
  ],
};

export const safeguards = {
  eyebrow: "For students, parents, and university coordinators",
  title: "University-compatible. Structurally sound. Supported throughout.",
  intro:
    "Every practical layer a coordinator, parent, or student needs to see before approving a move abroad — documentation, housing, visa guidance, and a local support contact from day one.",
  cards: [
    {
      icon: "file" as const,
      title: "University documentation handled",
      body: "Internship agreements, learning objective forms, and supervisor evaluation sheets aligned with Dutch university requirements — ready before you ask your coordinator.",
    },
    {
      icon: "shield" as const,
      title: "Verified host companies",
      body: "Every host company provides an official internship agreement, a named supervisor, and the documentation your university needs to approve the placement.",
    },
    {
      icon: "map-pin" as const,
      title: "Visa and paperwork guidance",
      body: "Step-by-step support for the visa route, required documentation, and what needs to be arranged before departure — no last-minute scrambling.",
    },
    {
      icon: "phone" as const,
      title: "Local support and emergency contact",
      body: "The team stays reachable through WhatsApp and provides local contact guidance for the practical issues that come up when living abroad.",
    },
    {
      icon: "home" as const,
      title: "Housing and arrival guidance",
      body: "Clear housing options, arrival instructions, and practical context before you travel — so your first days feel organised, not chaotic.",
    },
    {
      icon: "calendar" as const,
      title: "Pre-departure preparation",
      body: "A preparation brief covering arrival, local practicalities, insurance, and what to expect in the first week — sent before you fly.",
    },
  ],
};

export const faqs = {
  eyebrow: "Common questions",
  title: "Straight answers before you apply.",
  intro:
    "The questions students and parents ask most before moving ahead.",
  items: [
    {
      question: "Is this specifically for students who need to complete a required internship?",
      answer:
        "Yes — that is the primary use case. Most students who join Island Internship have a mandatory internship semester built into their degree, and the placement structure is designed around that requirement.",
    },
    {
      question: "Can this internship count for my university credits?",
      answer:
        "Yes. Host companies provide an official internship agreement, a named supervisor, and the documentation universities require to approve the placement. We recommend confirming with your study coordinator early, and we can help you prepare the paperwork.",
    },
    {
      question: "Is doing my internship abroad more expensive than staying in the Netherlands?",
      answer:
        "For most students, it is cheaper. Monthly living costs in Bali run €440–€630, which is typically lower than renting a room and covering expenses in Amsterdam, Rotterdam, or Utrecht.",
    },
    {
      question: "What does the program fee cover — and how much is it?",
      answer:
        "The program fee covers placement matching, visa guidance, airport pickup, orientation week, and on-the-ground support throughout your stay. The exact fee depends on your destination and timing, and is discussed on your intro call after applying. There is no cost to apply.",
    },
    {
      question: "Do I get help finding my internship placement?",
      answer:
        "Yes. Finding a placement is our job, not yours. You tell us your background and field of interest, and we match you with a suitable company from the network — no cold emailing required.",
    },
    {
      question: "Is housing included in the program?",
      answer:
        "Housing is arranged as part of the program guidance. You get a private room in shared housing in a central, safe area. The housing cost is paid separately in-destination and is factored into the monthly living estimate.",
    },
    {
      question: "Are the internships paid?",
      answer:
        "No — internships are normally unpaid. The value is in the placement itself: practical work experience, university credit, and real deliverables for your CV.",
    },
    {
      question: "Is Bali safe to live in as a student?",
      answer:
        "Bali is a well-established destination for students, remote workers, and international communities. The most common challenges are practical rather than dramatic — and students are prepared properly before departure.",
    },
    {
      question: "How long are the internships?",
      answer:
        "Most internships run for 3 to 6 months, which aligns with standard university internship requirements. The minimum is usually 10 weeks.",
    },
    {
      question: "Do I need a visa?",
      answer:
        "Yes. The exact route depends on your passport and length of stay. We guide students through the right visa option and timeline before departure.",
    },
    {
      question: "What if something goes wrong during my stay?",
      answer:
        "You have a local support contact and clear emergency guidance before you arrive. If there is a problem with the placement, housing, or anything else, we help you work through the next step — you are not dealing with it alone.",
    },
  ],
};

export const outcomeTeaser = {
  eyebrow: "What you leave with",
  title: "Career proof. International network. A semester that actually changes your trajectory.",
  items: [
    { icon: "grid" as const, label: "Career Portfolio", detail: "Real deliverables for every interview" },
    { icon: "pulse" as const, label: "Business Exposure", detail: "Work inside real international companies" },
    { icon: "users" as const, label: "International Network", detail: "Connections that outlast the internship" },
    { icon: "compass" as const, label: "Career Direction", detail: "Leave knowing exactly what you want next" },
  ],
  cta: "See student outcomes",
  ctaHref: "/career-outcomes.html",
};

export const finalCta = {
  eyebrow: "Your required internship semester",
  title: "Do it in Bali. Do it in Sri Lanka. Do it somewhere worth remembering.",
  body:
    "The application takes 10 minutes and is completely free. Tell us your field, your timing, and what you are looking for — we handle the matching, the logistics, and everything in between.",
  note: "Free application · No commitment · Reply within 2 business days",
};

export const destinationTeaser = {
  eyebrow: "Two island settings",
  title: "Bali or Sri Lanka — both work. The vibe is different.",
  bali: {
    name: "Bali",
    tag: "Indonesia · High energy",
    headline: "The energetic island base.",
    points: [
      "Denser startup and agency ecosystem",
      "International coworking culture",
      "Broader student scene around you",
    ],
    bestFor: "Marketing, growth, startups, hospitality",
    image: "/images/destination-bali.jpg",
    alt: "Bali destination for Island Internship",
    cta: "Explore Bali",
    href: "/bali-placements.html",
  },
  sriLanka: {
    name: "Sri Lanka",
    tag: "South Asia · Coastal calm",
    headline: "The calmer coastal rhythm.",
    points: [
      "Close-knit hospitality and operations scene",
      "Boutique and sustainability-focused companies",
      "More intimate, slower-paced environment",
    ],
    bestFor: "Hospitality, sustainability, operations",
    image: "/images/destination-srilanka.jpg",
    alt: "Sri Lanka destination for Island Internship",
    cta: "Explore Sri Lanka",
    href: "/sri-lanka-placements.html",
  },
  ctaLabel: "Compare destinations in detail",
  ctaHref: "#",
};

export const costTeaser = {
  eyebrow: "Cost advantage",
  title: "Your internship semester, often for less than staying home.",
  bali: { label: "Bali — estimated monthly total", value: "€440 – €630" },
  nl: { label: "Amsterdam / Rotterdam — typical budget", value: "€900 – €1,400" },
  note: "Same required semester. Different location. In Bali, most students spend significantly less — while gaining more real-world exposure.",
  cta: "See full cost breakdown",
  ctaHref: "#cost-comparison",
};

export const costComparison = {
  eyebrow: "Monthly cost breakdown",
  title: "Bali vs the Netherlands — side by side.",
  rows: [
    { item: "Rent / accommodation", bali: "€180 – €600", nl: "€600 – €900" },
    { item: "Food", bali: "€50+", nl: "€250 – €350" },
    { item: "Scooter / transport", bali: "€50 – €130+", nl: "€90 – €120 (OV card)" },
    { item: "Gym", bali: "€30 – €75+", nl: "€30 – €50" },
    { item: "Phone / data", bali: "€8 – €10", nl: "€20 – €30" },
    { item: "Petrol", bali: "€8 – €15", nl: "—" },
    { item: "Travelling / going out", bali: "€50+", nl: "€100+" },
  ],
  total: { item: "Estimated monthly total", bali: "€440 – €630+", nl: "€990 – €1,450" },
  callout: "What many students spend on rent alone in the Netherlands can be more than their total monthly cost in Bali.",
};

export const featuredTracks = {
  eyebrow: "Internship tracks",
  title: "Real work across six fields.",
  items: [
    {
      kicker: "Marketing",
      title: "Digital Marketing",
      body: "Campaign planning, content creation, social growth, and brand execution inside fast-moving island-based teams.",
    },
    {
      kicker: "Business",
      title: "Business Development",
      body: "Outreach, partnerships, market research, and commercial projects with ambitious international businesses.",
    },
    {
      kicker: "Tech & AI",
      title: "Startup, AI & Technology",
      body: "AI-forward startups, digital ventures, and tech operations teams — cross-functional exposure from day one.",
    },
  ],
  cta: "View all 6 tracks",
  ctaHref: "#tracks",
};

export const faqTeaser = {
  eyebrow: "Quick answers",
  title: "The questions students ask first.",
  items: [
    {
      question: "Does this count for my university credits?",
      answer: "Yes. Host companies provide an official internship agreement, a named supervisor, and all documentation your university needs. We recommend confirming with your coordinator early — we help prepare the paperwork.",
    },
    {
      question: "Is it cheaper than doing my internship in the Netherlands?",
      answer: "For most students, yes. Monthly living costs in Bali run €440–€630. That is typically lower than renting a room and living in Amsterdam, Rotterdam, or Utrecht.",
    },
    {
      question: "Do I get help finding the placement?",
      answer: "Yes — finding your placement is our job. You tell us your field and timing, and we match you with a suitable company. No cold emailing required.",
    },
    {
      question: "Is housing included?",
      answer: "Housing is arranged as part of the program. You get a private room in a central, safe area. The cost is paid separately in-destination and is factored into the monthly living estimate.",
    },
    {
      question: "Are the internships paid?",
      answer: "No — internships are unpaid. The value is the placement itself: real work experience, university credit, and deliverables for your CV that you can speak to in every interview after.",
    },
  ],
  cta: "Read all FAQs",
  ctaHref: "#faq",
};

export const pricing = {
  eyebrow: "Program fees",
  title: "Two ways to do your internship abroad",
  copy: "Free to apply. No commitment until you're matched. Choose the level of support that fits how independently you want to arrive and settle in.",
  freeNotice: "Free to apply — no commitment until you're matched.",
  featureGroupLabels: ["Core placement", "Arrival & setup"],
  features: [
    "Placement matching",
    "Internship documents support",
    "Visa guidance",
    "24/7 support",
    "WhatsApp community",
    "Airport pickup",
    "Accommodation arranged",
    "Scooter arranged",
    "SIM card ready on arrival",
    "Orientation week",
    "Optional scooter lessons",
    "Help arranging Indonesian scooter licence",
  ],
  tiers: [
    {
      id: "essentials",
      name: "Essentials",
      price: "€449",
      badge: null as string | null,
      bestFor: "Students comfortable arranging arrival and living logistics themselves",
      description:
        "For students who want help securing the internship and handling the required documents, while arranging accommodation, transport, and arrival themselves.",
      included: [true, true, true, true, true, false, false, false, false, false, false, false],
      highlighted: false,
    },
    {
      id: "full-support",
      name: "Full Support",
      price: "€649",
      badge: "Most chosen" as string | null,
      bestFor: "Most students, especially first-time interns abroad",
      description:
        "For students who want a smoother, more guided start abroad, with support not only securing the internship, but also settling in once they arrive — from airport pickup and accommodation setup to scooter arrangement, optional lessons, and help arranging an Indonesian scooter licence.",
      included: [true, true, true, true, true, true, true, true, true, true, true, true],
      highlighted: true,
    },
  ],
  clarityStrip: [
    { label: "Included in your fee", value: "Placement and support" },
    { label: "Arranged for you (Full Support)", value: "Accommodation, scooter, SIM, arrival logistics" },
    { label: "Paid separately", value: "Rent, scooter rental, licence fees, living costs" },
  ],
  whyFull: {
    title: "Why most students choose Full Support",
    body: "Because the hardest part is usually not getting the internship. It is arriving in a new country with accommodation, transport, and local setup already sorted.",
  },
  faqs: [
    {
      question: "When do I pay?",
      answer: "You apply for free and only decide once you have a placement match.",
    },
    {
      question: "Are housing and scooter costs included?",
      answer: "No. We can help arrange them, but they are paid separately.",
    },
    {
      question: "Can I upgrade to Full Support later?",
      answer: "Usually yes, depending on timing and availability.",
    },
  ],
  disclaimer:
    "Accommodation, scooter rental, licence fees, and living costs are paid separately. Full Support covers guidance, coordination, and arrangement support.",
};

export const pricingTeaser = {
  eyebrow: "Transparent pricing",
  title: "Two packages. Free to apply.",
  tiers: [
    {
      price: "€449",
      name: "Essentials",
      summary: "Placement, documents, visa guidance, 24/7 support",
    },
    {
      price: "€649",
      name: "Full Support",
      summary:
        "Everything, plus airport pickup, accommodation, scooter, SIM card, and orientation",
    },
  ],
  cta: "See full pricing",
  ctaHref: "/pricing",
  freeNotice: "Free to apply — no commitment until you're matched.",
};

export const applicationForm = {
  universities: [
    "Maastricht University",
    "Universiteit van Amsterdam",
    "Erasmus University",
    "Tilburg University",
    "Vrije Universiteit",
    "Other Dutch university",
  ],
  studyYears: ["Year 2", "Year 3", "Year 4 (Master)", "Pre-Master", "Master"],
  destinations: ["Bali", "Sri Lanka", "Open to both"],
  fields: [
    "Marketing & Digital",
    "Business Development",
    "Sustainability & ESG",
    "Hospitality Management",
    "Startup Operations",
    "Data & Tech",
  ],
};
