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
  community: "/community-lifestyle.html",
  companies: "/companies.html",
  outcomes: "/career-outcomes.html",
  baliPlacements: "/bali-placements.html",
  sriLankaPlacements: "/sri-lanka-placements.html",
  sriLanka: "/sri-lanka.html",
  privacy: "/privacy.html",
  terms: "/terms.html",
  helloEmail: "mailto:hello@islandinternship.com",
  partnersEmail: "mailto:partners@islandinternship.com",
  infoSession: "mailto:hello@islandinternship.com?subject=Info%20session",
};

export const navigation = [
  { href: "#included", label: "How it Works" },
  { href: "#destinations", label: "Destinations" },
  { href: "#moments", label: "Tracks" },
  { href: "#placements", label: "Outcomes" },
  { href: "#testimonials", label: "Stories" },
  { href: "#faq", label: "FAQ" },
] as const;

export const hero = {
  eyebrow: "For students with a required internship semester",
  title: "Your required internship semester, built into a better life chapter.",
  subtitle:
    "Most students complete their required internship in the Netherlands. Some choose Bali or Sri Lanka instead — lower living costs, stronger exposure, and every logistical detail sorted before they fly.",
  rotatingPhrases: ["Do it in Bali.", "Do it in Sri Lanka.", "Make it count."],
  bullets: [
    "Credit-ready placements aligned with university internship requirements — across startups, agencies, hospitality brands, and growth teams.",
    "Placement, visa guidance, housing support, airport pickup, and orientation week handled before departure.",
    "Monthly living costs from €440 in Bali — typically lower than a semester in Amsterdam or Rotterdam.",
  ],
  primaryCta: "Start your application",
  secondaryCta: "Take the AI fit quiz",
  support: "Free application · No commitment · Reply within 2 business days",
  note: "Placed students from Maastricht University, UvA, Erasmus, Tilburg, and more.",
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
  { value: "30+", label: "Interns placed" },
  { value: "20+", label: "Partner companies" },
  { value: "5+", label: "Dutch universities" },
  { value: "100%", label: "Credit-eligible placements" },
];

export const trustUniversities = [
  "Maastricht University",
  "Universiteit van Amsterdam",
  "Erasmus University",
  "Tilburg University",
  "Vrije Universiteit",
  "Hogeschool Rotterdam",
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
        "The program fee covers placement matching, visa guidance, airport pickup, orientation week, and on-the-ground support throughout your stay.",
      points: [
        "Placement matching and company introductions",
        "Onboarding, arrival planning, and local support",
        "University and admin coordination where needed",
      ],
    },
    {
      icon: "shield" as const,
      kicker: "Included",
      title: "What the program includes",
      description:
        "From application to arrival, the logistics are handled so you arrive ready for the internship — not still planning it.",
      points: [
        "Placement support and host company matching",
        "Pre-departure coordination and visa guidance",
        "Airport pickup, orientation week, and local support",
      ],
    },
    {
      icon: "wallet" as const,
      kicker: "Budget separately",
      title: "Costs to plan outside the fee",
      description:
        "These are the same costs you'd have anywhere — accommodation, food, travel. In Bali, they tend to run lower than in a Dutch city.",
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
    ["Petrol", "€10 – €20"],
    ["Meals at local restaurants", "€70 – €120"],
    ["Coffee / cafes", "€20 – €40"],
    ["Gym", "€15 – €30"],
    ["Surf lessons / activities", "€40 – €70"],
    ["Weekend trips", "€40 – €80"],
    ["Local transport", "€15 – €30"],
  ],
  totalLabel: "Estimated monthly total",
  totalValue: "€440 – €630",
  note:
    "Monthly living cost depends on room standard, transport choice, and how often you eat out. Use this as a Bali planning range, not a fixed bill.",
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
    ctaLabel: "See Bali host companies",
    ctaHref: siteLinks.baliPlacements,
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
      { label: "Living costs", value: "Competitive island living with a softer day-to-day spend" },
      { label: "Strong for", value: "Hospitality, operations, sustainability, guest experience" },
    ],
    tags: ["Coastal living", "Hospitality", "Sustainability", "Operations"],
    ctaLabel: "See Sri Lanka host companies",
    ctaHref: siteLinks.sriLankaPlacements,
    accentClass: "is-sri-lanka",
  },
};

export const tracks = {
  eyebrow: "Internship tracks",
  title: "Choose the type of work you want to build around.",
  intro:
    "The program is built around clear internship tracks across Bali and Sri Lanka, so students understand the kind of companies, work, and exposure they are applying for.",
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
      kicker: "Startup",
      title: "Startup Internships",
      body: "Get close to founders, cross-functional work, and practical execution inside young companies where you can learn quickly.",
      field: "Startup Operations",
    },
  ],
  popular: [
    "Marketing internships",
    "Business internships",
    "Hospitality internships",
    "Startup internships",
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
  eyebrow: "Support and safeguards",
  title: "Clear structure for students, parents, and universities.",
  intro:
    "The program feels more credible when the support model is visible. These are the practical layers around the placement that reduce uncertainty and make the move easier to trust.",
  cards: [
    {
      icon: "shield" as const,
      title: "Verified host companies",
      body: "Selected host companies provide official internship agreements, a named supervisor, and the documentation universities require.",
    },
    {
      icon: "home" as const,
      title: "Housing and arrival guidance",
      body: "Students receive clear housing guidance, arrival instructions, and practical context before they travel.",
    },
    {
      icon: "map-pin" as const,
      title: "Visa and paperwork guidance",
      body: "Step-by-step support for the visa route, required documentation, and what needs to be arranged before departure.",
    },
    {
      icon: "phone" as const,
      title: "Local support and emergency contact",
      body: "The team stays reachable through WhatsApp and provides local contact guidance for the practical issues that matter when living abroad.",
    },
    {
      icon: "file" as const,
      title: "University documentation handled",
      body: "Internship agreements, learning objective forms, and supervisor evaluation sheets can be aligned with multiple Dutch universities.",
    },
    {
      icon: "calendar" as const,
      title: "Preparation before departure",
      body: "Students receive preparation notes around arrival, local practicalities, insurance, and what to expect in the first days of the program.",
    },
  ],
};

export const faqs = {
  eyebrow: "Common questions",
  title: "Straight answers before you apply.",
  intro:
    "The basics students and parents usually want to understand before moving ahead.",
  items: [
    {
      question: "Is this specifically for students who need to complete a required internship for their degree?",
      answer:
        "Yes — that is the primary use case. Most students who join Island Internship have a mandatory internship semester built into their degree, and the placement structure is designed around that requirement.",
    },
    {
      question: "Is doing my internship abroad more expensive than staying in the Netherlands?",
      answer:
        "For most students, it is cheaper. Monthly living costs in Bali run €440–€630, which is typically lower than renting a room and covering expenses in Amsterdam, Rotterdam, or Utrecht.",
    },
    {
      question: "Can this internship count for my university credits?",
      answer:
        "Yes. Host companies provide an official internship agreement, a supervisor, and are willing to complete university assessment paperwork. We still recommend confirming with your study coordinator early.",
    },
    {
      question: "Are the internships paid?",
      answer:
        "No — internships are normally unpaid. The value is in the placement itself: practical work experience, university credit compatibility, and stronger career proof for what comes next.",
    },
    {
      question: "Do I get help finding my internship placement?",
      answer:
        "Yes. Finding a placement is our job, not yours. You tell us your background and field of interest, and we match you with a suitable company from the network.",
    },
    {
      question: "Is housing included in the program?",
      answer:
        "Housing is arranged as part of the program guidance. You get a private room in shared housing in a central, safe area, while the housing cost is paid separately in-destination.",
    },
    {
      question: "Is Bali a safe place to live as an intern?",
      answer:
        "Bali is a well-established destination for students, remote teams, and international communities. The most common risks are practical rather than dramatic, and students are prepared properly before departure.",
    },
    {
      question: "What level of English is required?",
      answer:
        "All internships are conducted in English. You need to be able to communicate professionally in English, but you do not need Bahasa Indonesia.",
    },
    {
      question: "How long are the internships?",
      answer:
        "Most internships run for 3 to 6 months, which aligns with standard university internship requirements. The minimum is usually 10 weeks.",
    },
    {
      question: "Do I need a visa?",
      answer:
        "Yes. The exact route depends on your passport and how long you plan to stay. We guide students through the right option and timeline before departure.",
    },
    {
      question: "What if something goes wrong during my stay?",
      answer:
        "Local support contacts are available and students receive clear emergency guidance before arrival. If there is a problem with placement, housing, health, or safety, we help with the next step.",
    },
  ],
};

export const finalCta = {
  eyebrow: "You need to do an internship anyway",
  title: "Do it in Bali or Sri Lanka. Tell us your field and timing — we will handle the rest.",
  body:
    "The application is free, takes about 10 minutes, and gives us what we need to review your profile for a Bali or Sri Lanka placement. We reply within 2 business days.",
  note: "Free application. No commitment required. We reply within 2 business days.",
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
