import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroHeadline } from "@/components/home/hero-headline";
import { DoItTypewriter } from "@/components/home/do-it-typewriter";
import {
  blogPosts,
  companies,
  community,
  costComparison,
  costs,
  costTeaser,
  destinationTeaser,
  expansionTeaser,
  faqs,
  faqTeaser,
  featuredTracks,
  finalCta,
  includedHighlights,
  outcomeTeaser,
  outcomes,
  parentTeaserBand,
  pricing,
  pricingReassurance,
  pricingTeaser,
  processSteps,
  resources,
  safeguards,
  siteLinks,
  teamSection,
  testimonials,
  tracks,
  trustMetrics,
  trustUniversities,
} from "@/data/homepage";
import { OpenApplicationButton } from "@/components/home/application-modal";
import { StatsCounter } from "@/components/home/stats-counter";
import { GuideSignupCard } from "@/components/home/guide-card";
import { Icon } from "@/components/home/icons";

function SectionIntro({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-intro ${centered ? "section-intro-centered" : ""}`}>
      <span className="eyebrow reveal">{eyebrow}</span>
      <h2 className="section-title reveal reveal-delay-1">{title}</h2>
      <p className="section-copy reveal reveal-delay-2">{copy}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-wrap">
        <Image
          src="/images/hero-placement.jpg"
          alt="Island internship lifestyle"
          fill
          priority
          className="hero-bg-img"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <div className="hero-text-wrap">
          <p className="hero-pre">Bali & Sri Lanka · Real internships abroad · Credit-eligible</p>
          <HeroHeadline />
          <div className="hero-actions">
            <OpenApplicationButton className="button button-hero-primary" source="Hero">
              Apply now
            </OpenApplicationButton>
            <a href="#destinations" className="button button-hero-secondary">
              Explore destinations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="trust-band">
      <div className="container">
        <StatsCounter metrics={trustMetrics} />
        <div className="trust-logos-strip">
          <span className="trust-logos-label">Students join from</span>
        </div>
      </div>
      {/* full-bleed ticker outside container */}
      <div className="trust-ticker-wrap" aria-label="Universities represented">
        <div className="trust-ticker-track">
          {[...trustUniversities, ...trustUniversities].map((uni, i) =>
            uni.logo ? (
              <Image
                key={`${uni.name}-${i}`}
                src={uni.logo}
                alt={uni.name}
                width={0}
                height={28}
                style={{ width: "auto", height: "28px" }}
                className="trust-logo-img"
              />
            ) : (
              <span key={`${uni.name}-${i}`} className="trust-logo-text">{uni.name}</span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export function CostsSection() {
  return (
    <section id="costs" className="section costs-section">
      <div className="container">
        <SectionIntro eyebrow={costs.eyebrow} title={costs.title} copy={costs.intro} />
        <div className="cost-grid">
          {costs.cards.map((card) => (
            <article key={card.title} className="premium-card cost-card">
              <div className="card-icon">
                <Icon name={card.icon} className="icon" />
              </div>
              <span className="card-kicker">{card.kicker}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul className="card-list">
                {card.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" className="icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="cost-comparison premium-card">
          <div className="cost-table-wrap">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Monthly expense</th>
                  <th>Typical Bali range</th>
                </tr>
              </thead>
              <tbody>
                {costs.table.map(([label, value]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>{costs.totalLabel}</td>
                  <td>{costs.totalValue}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="comparison-panel">
            <div>
              <span className="comparison-kicker">Bali — estimated monthly total</span>
              <strong>{costs.comparison.bali}</strong>
            </div>
            <div>
              <span className="comparison-kicker">Amsterdam / Rotterdam — typical budget</span>
              <strong>{costs.comparison.dutchCities}</strong>
            </div>
            <p>{costs.comparison.body}</p>
          </div>
        </div>

        <div className="section-footnote">
          <p>{costs.note}</p>
          <OpenApplicationButton className="button button-primary" source="Costs section">
            Check if you qualify — free application
          </OpenApplicationButton>
        </div>
      </div>
    </section>
  );
}

export function IncludedHighlightsSection() {
  return (
    <section id="what-is-included" className="section highlight-section">
      <div className="container">
        <SectionIntro eyebrow={includedHighlights.eyebrow} title={includedHighlights.title} copy={includedHighlights.intro} />
        <div className="feature-grid">
          {includedHighlights.items.map((item) => (
            <article key={item.title} className="premium-card feature-card">
              <div className="card-icon">
                <Icon name={item.icon} className="icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="how-it-works" className="section process-section">
      <div className="container">
        <SectionIntro eyebrow={processSteps.eyebrow} title={processSteps.title} copy={processSteps.intro} />
        <ol className="process-stepper" aria-label="How the program works">
          {processSteps.steps.map((step) => (
            <li key={step.number} className="process-step reveal">
              <div className="process-step-num" aria-hidden="true">{step.number}</div>
              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="process-note premium-card">
          <strong>{processSteps.noteTitle}</strong>
          <p>{processSteps.noteBody}</p>
        </div>
      </div>
    </section>
  );
}

export function MidPageCta() {
  return (
    <div className="mid-cta-strip">
      <div className="container mid-cta-inner">
        <div className="mid-cta-text">
          <strong>Not sure which direction yet?</strong>
          <span>The application is free. We review your profile and match you — no commitment required.</span>
        </div>
        <div className="mid-cta-actions">
          <OpenApplicationButton className="button button-primary" source="Mid-page CTA">
            Apply free — takes 10 minutes
          </OpenApplicationButton>
          <Link href={siteLinks.matchQuiz} className="button button-secondary">
            Take the AI fit quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TracksSection() {
  return (
    <section id="tracks" className="section tracks-section">
      <div className="container">
        <SectionIntro eyebrow={tracks.eyebrow} title={tracks.title} copy={tracks.intro} />
        <div className="track-grid">
          {tracks.items.map((track, i) => (
            <article key={track.title} className={`premium-card track-card reveal reveal-delay-${Math.min(i % 3, 4) + 1}`}>
              <div className="track-number">{track.number}</div>
              <span className="track-kicker">{track.kicker}</span>
              <h3>{track.title}</h3>
              <p>{track.body}</p>
              <OpenApplicationButton className="inline-cta" field={track.field} source={`Track: ${track.title}`}>
                Apply for this track
                <Icon name="arrow-right" className="icon" />
              </OpenApplicationButton>
            </article>
          ))}
        </div>
        <div className="chip-row tracks-chip-row">
          <span className="chip-label">Popular tracks</span>
          {tracks.popular.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section id="outcomes" className="section outcomes-section">
      <div className="container">
        <SectionIntro eyebrow={outcomes.eyebrow} title={outcomes.title} copy={outcomes.intro} />
        <div className="outcome-grid">
          {outcomes.items.map((item) => (
            <article key={item.title} className="premium-card outcome-card">
              <Image src={item.image} alt={item.alt} width={720} height={480} className="outcome-image" sizes="(max-width: 640px) 50vw, (max-width: 1320px) 50vw, 25vw" style={{ objectPosition: item.objectPosition }} />
              <div className="outcome-body">
                <div className="card-icon">
                  <Icon name={item.icon} className="icon" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="card-list compact">
                  {item.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" className="icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="chip-row">
          <span className="chip-label">Popular searches</span>
          {outcomes.chips.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
          <Link href={siteLinks.outcomes} className="inline-link">
            See all outcomes →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <>
      <section id="testimonials" className="section testimonials-section">
        <div className="container">
          <SectionIntro eyebrow={testimonials.eyebrow} title={testimonials.title} copy={testimonials.intro} />

          <div className="video-grid">
            {testimonials.videos.map((item) => (
              <article key={item.title} className="dark-card video-card">
                <div className="video-frame">
                  <video controls playsInline preload="auto">
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
                <div className="video-copy">
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="story-grid">
            {testimonials.stories.map((item, i) => (
              <article key={item.name} className={`dark-card story-card reveal reveal-delay-${(i % 2) + 1}`}>
                <span className="story-stars">★★★★★</span>
                <blockquote>{item.quote}</blockquote>
                <div className="story-person">
                  <span className="story-avatar">{item.initials}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                    <small>{item.role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="post-proof-section">
        <div className="container post-proof-layout">
          <div>
            <p className="post-proof-headline">{testimonials.postCta.title}</p>
            <p>{testimonials.postCta.body}</p>
          </div>
          <div className="post-proof-actions">
            <OpenApplicationButton className="button button-primary" source="Post-proof CTA">
              Start your free application
            </OpenApplicationButton>
            <Link href={siteLinks.matchQuiz} className="button button-ghost-light">
              Not sure yet? Take the match quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function CommunitySection() {
  return (
    <section id="community" className="section community-section">
      <div className="container community-layout">
        <div>
          <SectionIntro eyebrow={community.eyebrow} title={community.title} copy={community.intro} />
          <ul className="community-list">
            {community.bullets.map((item) => (
              <li key={item}>
                <Icon name="check" className="icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link href={siteLinks.community} className="inline-link">
            See life inside the program →
          </Link>
        </div>

        <div className="community-mosaic">
          {community.images.map((image, index) => (
            <div key={image.image} className={`community-shot community-shot-${index + 1}`}>
              <Image src={image.image} alt={image.alt} fill loading="lazy" sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResourcesSection() {
  return (
    <section id="resources" className="section resources-section">
      <div className="container">
        <SectionIntro eyebrow={resources.eyebrow} title={resources.title} copy={resources.intro} />
        <div className="resource-grid">
          {resources.cards.map((card) => (
            <article key={card.title} className="premium-card resource-card">
              <span className="card-kicker">{card.kicker}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <small>{card.meta}</small>
              {card.type === "guide" ? (
                <GuideSignupCard cta={card.cta} />
              ) : (
                <Link href={card.href} className="inline-link">
                  {card.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompaniesSection() {
  return (
    <section id="companies" className="section companies-section">
      <div className="container">
        <div className="split-panel premium-card">
          <div className="split-copy">
            <SectionIntro eyebrow={companies.eyebrow} title={companies.title} copy={companies.intro} />
            <Link href={siteLinks.companies} className="inline-link">
              Learn more about hosting interns
            </Link>
          </div>
          <div className="split-image">
            <Image src={companies.image} alt={companies.imageAlt} fill loading="lazy" sizes="(max-width: 1320px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="company-grid">
          {companies.teasers.map((item) => (
            <article key={item.title} className="premium-card company-card">
              <div className="card-icon">
                <Icon name={item.icon} className="icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="company-cta premium-card">
          <div>
            <h3>Become a host company</h3>
            <p>Tell us about your business, the kind of role you want to fill, and your preferred timing.</p>
          </div>
          <div className="company-cta-links">
            <a href={siteLinks.partnersEmail} className="button button-secondary">
              partners@islandinternship.com
            </a>
            <a href={siteLinks.whatsapp} className="inline-link" target="_blank" rel="noreferrer">
              Or chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SafeguardsSection() {
  return (
    <section id="trust-safety" className="section safeguards-section">
      <div className="container">
        <SectionIntro eyebrow={safeguards.eyebrow} title={safeguards.title} copy={safeguards.intro} />
        <div className="feature-grid">
          {safeguards.cards.map((item) => (
            <article key={item.title} className="premium-card feature-card">
              <div className="card-icon">
                <Icon name={item.icon} className="icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="support-note premium-card">
          <Icon name="spark" className="icon" />
          <p>
            Questions about fit, safety, or paperwork? Email us at{" "}
            <a href={siteLinks.helloEmail}>hello@islandinternship.com</a> and we will reply personally.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <SectionIntro eyebrow={faqs.eyebrow} title={faqs.title} copy={faqs.intro} />
        <div className="faq-grid">
          {faqs.items.map((item, index) => (
            <details key={item.question} className="faq-card premium-card" open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <Icon name="arrow-right" className="icon" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OutcomesTeaser() {
  return (
    <section className="outcomes-teaser-section">
      <div className="container">
        <div className="outcomes-teaser-layout">
          <div className="outcomes-teaser-intro">
            <span className="eyebrow">{outcomeTeaser.eyebrow}</span>
            <h2 className="outcomes-teaser-title">{outcomeTeaser.title}</h2>
            <Link href={outcomeTeaser.ctaHref} className="button button-secondary outcomes-teaser-cta">
              {outcomeTeaser.cta}
              <Icon name="arrow-right" className="icon" />
            </Link>
          </div>
          <div className="outcomes-teaser-grid">
            {outcomeTeaser.items.map((item) => (
              <div key={item.label} className="outcomes-teaser-item">
                <div className="card-icon">
                  <Icon name={item.icon} className="icon" />
                </div>
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="cta-banner" className="section final-cta-section">
      <div className="container final-cta-layout">
        <div>
          <span className="eyebrow">{finalCta.eyebrow}</span>
          <h2 className="section-title final-cta-typewriter-title" aria-label={finalCta.title}>
            <span aria-hidden="true">
              <DoItTypewriter
                className="final-cta-typewriter-line"
                cursorClassName="hero-type-cursor"
                phrases={finalCta.phrases}
                prefix=""
                textClassName="hero-type-text"
              />
            </span>
          </h2>
          <p className="section-copy">{finalCta.body}</p>
        </div>
        <div className="final-cta-actions">
          <OpenApplicationButton className="button button-primary" source="Final CTA">
            Start your application
          </OpenApplicationButton>
          <a href={siteLinks.whatsapp} className="button button-ghost-light" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
          <p>{finalCta.note}</p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#hero" className="brand footer-brand">
            Island<span>.</span>Internship
          </a>
          <p>
            Island Internship helps students build experience, network, and career proof through curated placements in
            Bali and Sri Lanka, with clear support around the move and the program.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            <a href="#how-it-works">How it Works</a>
            <a href="#destinations">Destinations</a>
            <Link href={siteLinks.tracksPage}>Tracks</Link>
            <Link href={siteLinks.outcomes}>Career Outcomes</Link>
            <Link href={siteLinks.community}>Community</Link>
            <Link href={siteLinks.companies}>Host Companies</Link>
            <a href="#testimonials">Stories</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div>
          <h3>Internship Tracks</h3>
          <div className="footer-links">
            <a href="/marketing-internship-bali.html">Marketing — Bali</a>
            <a href="/business-internship-bali.html">Business — Bali</a>
            <a href="/hospitality-internship-bali.html">Hospitality — Bali</a>
            <a href="/sustainability-internship-bali.html">Sustainability — Bali</a>
            <a href="/startup-internship-bali.html">Startup — Bali</a>
            <a href="/data-tech-internship-bali.html">Data &amp; Tech — Bali</a>
          </div>
        </div>
        <div>
          <h3>Guides &amp; Resources</h3>
          <div className="footer-links">
            <a href="/blog-bali-internship-cost.html">Bali Internship Cost 2026</a>
            <a href="/blog-bali-visa-guide.html">Bali Visa Guide</a>
            <Link href="/for-parents">For Parents</Link>
          </div>
        </div>
        <div>
          <h3>Partners</h3>
          <div className="footer-links">
            <Link href="/companies">For Host Companies</Link>
            <Link href="/universities">University Partners</Link>
            <a href={siteLinks.partnersEmail}>partners@islandinternship.com</a>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div className="footer-links">
            <a href={siteLinks.helloEmail}>hello@islandinternship.com</a>
            <a href={siteLinks.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
            <Link href={siteLinks.terms}>Terms &amp; Conditions</Link>
            <Link href={siteLinks.privacy}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Island Internship · Amsterdam, NL</span>
      </div>
    </footer>
  );
}

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <OpenApplicationButton className="button button-primary" source="Mobile sticky CTA">
        Apply now
      </OpenApplicationButton>
      <a href={siteLinks.whatsapp} className="button button-secondary" target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}

export function DestinationTeaser() {
  const sides = [destinationTeaser.bali, destinationTeaser.sriLanka];
  return (
    <section id="destinations" className="section destination-teaser-section">
      <div className="container">
        <SectionIntro eyebrow={destinationTeaser.eyebrow} title={destinationTeaser.title} copy="" />
        <div className="dest-teaser-grid">
          {sides.map((d) => (
            <article key={d.name} className="premium-card dest-teaser-card">
              <div className="dest-teaser-image-wrap">
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="dest-teaser-overlay" />
                <span className="dest-teaser-tag">{d.tag}</span>
              </div>
              <div className="dest-teaser-body">
                <h3>{d.headline}</h3>
                <ul className="dest-teaser-points">
                  {d.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" className="icon" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="dest-teaser-meta">
                  <span className="dest-teaser-label">Best for</span>
                  <strong>{d.bestFor}</strong>
                </div>
                <a href={d.href} className="inline-link dest-teaser-cta">
                  {d.cta} <Icon name="arrow-right" className="icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TracksTeaser() {
  return (
    <section id="tracks" className="section tracks-teaser-section">
      <div className="container">
        <div className="tracks-teaser-layout">
          <SectionIntro eyebrow={featuredTracks.eyebrow} title={featuredTracks.title} copy="" centered />
          <div className="tracks-teaser-grid">
            {featuredTracks.items.map((track) => (
              <article key={track.title} className="premium-card tracks-teaser-card">
                <span className="track-kicker">{track.kicker}</span>
                <h3>{track.title}</h3>
                <p>{track.body}</p>
                <a href={track.href} className="inline-cta">
                  Learn more
                  <Icon name="arrow-right" className="icon" />
                </a>
              </article>
            ))}
          </div>
          <div className="tracks-teaser-footer">
            <Link href={featuredTracks.ctaHref} className="button button-secondary">
              {featuredTracks.cta}
              <Icon name="arrow-right" className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsTeaser() {
  const featured = testimonials.stories[4]; // Stephen — "real responsibility from week one"
  return (
    <section id="testimonials" className="section stories-section">
      <div className="container">
        <div className="stories-header fade-up">
          <div>
            <span className="eyebrow">Student stories</span>
            <h2 className="section-title">Real students. Real outcomes.</h2>
          </div>
          <Link href={siteLinks.stories} className="stories-see-all">
            See all stories →
          </Link>
        </div>

        {/* Momentum testimonial — featured pull quote */}
        <blockquote className="momentum-testimonial fade-up delay-1">
          <span className="momentum-quote-mark" aria-hidden="true">&ldquo;</span>
          <p className="momentum-quote-text">{featured.quote}</p>
          <footer className="momentum-quote-footer">
            <span className="momentum-author">{featured.name}</span>
            <span className="momentum-role">{featured.role}</span>
          </footer>
        </blockquote>

        {/* 3 story cards */}
        <div className="stories-slider-wrap">
          <div className="stories-slider">
            {testimonials.stories.slice(0, 3).map((s, i) => (
              <div
                key={i}
                className={`story-card-slide fade-up delay-${i + 1}`}
              >
                <div className="story-card-img-wrap">
                  <Image
                    src="/images/hero-group.jpg"
                    alt={s.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="260px"
                  />
                </div>
                <div className="story-card-slide-body">
                  <p className="story-card-quote">&ldquo;{s.quote}&rdquo;</p>
                  <p className="story-card-author">{s.name} · {s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to full stories page */}
        <div className="stories-teaser-cta fade-up delay-3">
          <Link href={siteLinks.stories} className="button button-secondary">
            Watch all videos &amp; read more stories
            <Icon name="arrow-right" className="icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CostTeaser() {
  return (
    <section className="cost-teaser-section">
      <div className="container">
        <div className="cost-teaser-layout">
          <div className="cost-teaser-intro">
            <span className="eyebrow">{costTeaser.eyebrow}</span>
            <h2 className="cost-teaser-title">{costTeaser.title}</h2>
            <p className="cost-teaser-note">{costTeaser.note}</p>
            <a href={costTeaser.ctaHref} className="inline-link">
              {costTeaser.cta} <Icon name="arrow-right" className="icon" />
            </a>
          </div>
          <div className="cost-teaser-compare">
            <div className="cost-teaser-pill cost-teaser-pill--bali">
              <span>{costTeaser.bali.label}</span>
              <strong>{costTeaser.bali.value}</strong>
            </div>
            <div className="cost-teaser-pill cost-teaser-pill--nl">
              <span>{costTeaser.nl.label}</span>
              <strong>{costTeaser.nl.value}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CostComparisonSection() {
  return (
    <section id="cost-comparison" className="section cost-comparison-section fade-up">
      <div className="container">
        <div className="cost-comparison-header">
          <span className="eyebrow">{costComparison.eyebrow}</span>
          <h2 className="section-title">{costComparison.title}</h2>
        </div>
        <div className="cost-comparison-table-wrap">
          <table className="cost-comparison-table">
            <thead>
              <tr>
                <th className="col-item">Monthly expense</th>
                <th className="col-bali">Bali</th>
                <th className="col-nl">Netherlands</th>
              </tr>
            </thead>
            <tbody>
              {costComparison.rows.map((row, i) => (
                <tr key={row.item} className={i % 2 === 0 ? "row-even" : "row-odd"}>
                  <td className="col-item">{row.item}</td>
                  <td className="col-bali">{row.bali}</td>
                  <td className="col-nl">{row.nl}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="total-row">
                <td className="col-item">{costComparison.total.item}</td>
                <td className="col-bali">{costComparison.total.bali}</td>
                <td className="col-nl">{costComparison.total.nl}</td>
              </tr>
            </tfoot>
          </table>
          <p className="cost-comparison-callout">{costComparison.callout}</p>
        </div>
      </div>
    </section>
  );
}

function CtaCheckIcon() {
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true">
      <path d="M1.5 5L5 8.5L11.5 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CtaDashIcon() {
  return (
    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" aria-hidden="true">
      <path d="M1 1H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PricingSection() {
  const essentials = pricing.tiers[0];
  const fullSupport = pricing.tiers[1];
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="section-intro section-intro-centered fade-up">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="section-title">{pricing.title}</h2>
          <p className="section-copy">{pricing.copy}</p>
        </div>

        <p className="ct-mobile-hint" aria-hidden="true">← Swipe to compare options →</p>
        <div className="ct-wrap fade-up delay-1">
          <div className="ct-grid">

            {/* ── Header row ── */}
            <div className="ct-cell ct-label-cell ct-header-label">
              <span className="ct-features-heading">What&rsquo;s included</span>
            </div>
            <div className="ct-cell ct-plan-header ct-plan-neutral">
              <h3 className="ct-plan-name">{essentials.name}</h3>
              <div className="ct-plan-price">{essentials.price}</div>
              <p className="ct-plan-bestfor">
                <span className="ct-bestfor-label">Best for</span> {essentials.bestFor}
              </p>
              {essentials.description && (
                <p className="ct-plan-description ct-plan-description-neutral">{essentials.description}</p>
              )}
              <OpenApplicationButton className="button pricing-btn-outline" source="Pricing table — Essentials">
                Apply free
              </OpenApplicationButton>
            </div>
            <div className="ct-cell ct-plan-header ct-plan-featured">
              {fullSupport.badge && (
                <span className="ct-plan-badge">{fullSupport.badge}</span>
              )}
              <h3 className="ct-plan-name">{fullSupport.name}</h3>
              <div className="ct-plan-price">{fullSupport.price}</div>
              <p className="ct-plan-bestfor">
                <span className="ct-bestfor-label">Best for</span> {fullSupport.bestFor}
              </p>
              {fullSupport.description && (
                <p className="ct-plan-description">{fullSupport.description}</p>
              )}
              <OpenApplicationButton className="button pricing-btn-white" source="Pricing table — Full Support">
                Apply free
              </OpenApplicationButton>
            </div>

            {/* ── Feature rows with group separators ── */}
            {pricing.features.map((label, j) => (
              <Fragment key={label}>
                {/* Group label separator rows — 3 cells so each column keeps its own bg */}
                {j === 0 && (
                  <>
                    <div className="ct-cell ct-label-cell ct-category-row">
                      <span className="ct-category-label">{pricing.featureGroupLabels[0]}</span>
                    </div>
                    <div className="ct-cell ct-value-neutral ct-category-row" />
                    <div className="ct-cell ct-value-featured ct-category-row" />
                  </>
                )}
                {j === 5 && (
                  <>
                    <div className="ct-cell ct-label-cell ct-category-row">
                      <span className="ct-category-label">{pricing.featureGroupLabels[1]}</span>
                    </div>
                    <div className="ct-cell ct-value-neutral ct-category-row" />
                    <div className="ct-cell ct-value-featured ct-category-row" />
                  </>
                )}

                <div className="ct-cell ct-label-cell ct-feature-label">{label}</div>
                <div className="ct-cell ct-value-cell ct-value-neutral">
                  {essentials.included[j] ? (
                    <span className="ct-check ct-check-neutral" aria-label="Included">
                      <CtaCheckIcon />
                    </span>
                  ) : (
                    <span className="ct-dash" aria-label="Not included">
                      <CtaDashIcon />
                    </span>
                  )}
                </div>
                <div className="ct-cell ct-value-cell ct-value-featured">
                  {fullSupport.included[j] ? (
                    <span className="ct-check ct-check-featured" aria-label="Included">
                      <CtaCheckIcon />
                    </span>
                  ) : (
                    <span className="ct-dash ct-dash-featured" aria-label="Not included">
                      <CtaDashIcon />
                    </span>
                  )}
                </div>
              </Fragment>
            ))}

            {/* ── Footer row ── */}
            <div className="ct-cell ct-label-cell ct-footer-label" />
            <div className="ct-cell ct-footer-cell ct-footer-neutral">
              <OpenApplicationButton className="button pricing-btn-outline" source="Pricing table bottom — Essentials">
                Apply free
              </OpenApplicationButton>
            </div>
            <div className="ct-cell ct-footer-cell ct-footer-featured">
              <OpenApplicationButton className="button pricing-btn-white" source="Pricing table bottom — Full Support">
                Apply free
              </OpenApplicationButton>
            </div>

          </div>
        </div>

        {/* Clarity strip */}
        <div className="pricing-clarity-strip fade-up delay-2">
          {pricing.clarityStrip.map((item, i) => (
            <div key={item.label} className="pricing-clarity-item">
              <span className={`pricing-clarity-dot pricing-clarity-dot-${i}`} aria-hidden="true" />
              <div>
                <span className="pricing-clarity-label">{item.label}</span>
                <span className="pricing-clarity-value">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Full Support */}
        <div className="pricing-why-full fade-up delay-3">
          <div className="pricing-why-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h3 className="pricing-why-title">{pricing.whyFull.title}</h3>
            <p className="pricing-why-body">{pricing.whyFull.body}</p>
          </div>
        </div>

        <p className="pricing-disclaimer">{pricing.disclaimer}</p>
      </div>
    </section>
  );
}

export function PricingFaqsSection() {
  return (
    <section className="section pricing-faqs-section">
      <div className="container">
        <div className="pricing-faqs-header">
          <span className="eyebrow">Before you commit</span>
          <h2 className="pricing-faqs-title">Quick answers</h2>
        </div>
        <div className="pricing-faqs-wrap">
          {pricing.faqs.map((faq, i) => (
            <div key={faq.question} className="pricing-faq-card">
              <span className="pricing-faq-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="pricing-faq-q">{faq.question}</h3>
              <p className="pricing-faq-a">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FullStoriesSection() {
  return (
    <>
      {/* Page hero */}
      <section className="section stories-page-hero">
        <div className="container">
          <span className="eyebrow reveal">{testimonials.eyebrow}</span>
          <h1 className="stories-page-title reveal reveal-delay-1">{testimonials.title}</h1>
          <p className="section-copy reveal reveal-delay-2">{testimonials.intro}</p>
        </div>
      </section>

      {/* Videos — all four */}
      <section className="section stories-videos-section">
        <div className="container">
          <h2 className="stories-sub-heading reveal">Video stories</h2>
          <div className="video-grid">
            {testimonials.videos.map((item) => (
              <article key={item.title} className="dark-card video-card fade-up">
                <div className="video-frame">
                  <video controls playsInline preload="auto">
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
                <div className="video-copy">
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured pull quote */}
      <section className="stories-featured-section">
        <div className="container">
          <blockquote className="momentum-testimonial fade-up">
            <span className="momentum-quote-mark" aria-hidden="true">&ldquo;</span>
            <p className="momentum-quote-text">{testimonials.stories[4].quote}</p>
            <footer className="momentum-quote-footer">
              <span className="momentum-author">{testimonials.stories[4].name}</span>
              <span className="momentum-role">{testimonials.stories[4].role}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* All testimonial cards — 3-column grid */}
      <section className="section stories-quotes-section">
        <div className="container">
          <h2 className="stories-sub-heading reveal">What students say</h2>
          <div className="stories-quotes-grid">
            {testimonials.stories.map((item, i) => (
              <article key={item.name} className={`dark-card story-card fade-up delay-${Math.min(i % 3, 4) + 1}`}>
                <span className="story-stars">★★★★★</span>
                <blockquote>{item.quote}</blockquote>
                <div className="story-person">
                  <span className="story-avatar">{item.initials}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                    <small>{item.role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="post-proof-section">
        <div className="container post-proof-layout">
          <div>
            <p className="post-proof-headline">{testimonials.postCta.title}</p>
            <p>{testimonials.postCta.body}</p>
          </div>
          <div className="post-proof-actions">
            <OpenApplicationButton className="button button-primary" source="Stories page CTA">
              Start your free application
            </OpenApplicationButton>
            <Link href={siteLinks.matchQuiz} className="button button-ghost-light">
              Not sure yet? Take the match quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function PricingTeaserSection() {
  return (
    <section id="pricing" className="pricing-teaser-section">
      <div className="container">

        {/* Section header */}
        <div className="ptc-intro fade-up">
          <span className="eyebrow">{pricingTeaser.eyebrow}</span>
          <h2 className="pricing-teaser-title">{pricingTeaser.title}</h2>
          <p className="ptc-intro-copy">{pricingTeaser.intro}</p>
        </div>

        {/* Comparison cards */}
        <div className="ptc-grid fade-up delay-1">
          {pricingTeaser.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`ptc-card ${tier.featured ? "ptc-card-featured" : "ptc-card-neutral"}`}
            >
              {tier.badge && (
                <span className="ptc-badge">{tier.badge}</span>
              )}
              <div className="ptc-header">
                <span className="ptc-tier-name">{tier.name}</span>
                <div className="ptc-price">{tier.price}</div>
                <p className="ptc-summary">{tier.summary}</p>
              </div>
              <ul className="ptc-features">
                {tier.highlights.map((item) => (
                  <li key={item} className="ptc-feature-item">
                    <span
                      className={`ptc-check ${tier.featured ? "ptc-check-featured" : "ptc-check-neutral"}`}
                      aria-hidden="true"
                    >
                      <CtaCheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <OpenApplicationButton
                className={`button ptc-cta ${tier.featured ? "pricing-btn-white" : "pricing-btn-outline"}`}
                source={`Home pricing — ${tier.name}`}
              >
                Apply free
              </OpenApplicationButton>
            </div>
          ))}
        </div>

        {/* Footer: cost context + full breakdown link */}
        <div className="ptc-footer fade-up delay-2">
          <p className="ptc-cost-note">
            <Icon name="map-pin" className="icon ptc-cost-icon" />
            {pricingTeaser.costNote}
          </p>
          <a href={pricingTeaser.ctaHref} className="inline-link">
            {pricingTeaser.cta} →
          </a>
          <p className="pricing-teaser-notice">{pricingTeaser.freeNotice}</p>
        </div>

      </div>
    </section>
  );
}

export function FaqTeaser() {
  return (
    <section id="faq" className="section faq-teaser-section">
      <div className="container">
        <SectionIntro eyebrow={faqTeaser.eyebrow} title={faqTeaser.title} copy="" />
        <div className="faq-grid">
          {faqTeaser.items.map((item, index) => (
            <details key={item.question} className="faq-card premium-card" open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <Icon name="arrow-right" className="icon" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
        <div className="faq-teaser-footer">
          <a href="#faq" className="inline-link">
            See all questions <Icon name="arrow-right" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function BlogTeaserSection() {
  return (
    <section className="blog-teaser-section fade-up">
      <div className="container">
        <span className="eyebrow">Free guides</span>
        <h2 className="section-title">Everything you need to know before you go</h2>
        <div className="blog-teaser-grid">
          {blogPosts.map((post) => (
            <a key={post.href} href={post.href} className="blog-card">
              <span className="eyebrow">{post.eyebrow}</span>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <span className="blog-card-cta">
                {post.cta}
                <Icon name="arrow-right" className="icon" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ParentTeaserBand() {
  return (
    <section className="section parent-teaser-band">
      <div className="container">
        <div className="parent-teaser-inner">
          <div className="parent-teaser-text">
            <span className="eyebrow reveal">{parentTeaserBand.eyebrow}</span>
            <h2 className="section-title reveal reveal-delay-1">{parentTeaserBand.heading}</h2>
            <p className="section-copy reveal reveal-delay-2">{parentTeaserBand.body}</p>
            <div className="parent-teaser-links reveal reveal-delay-3">
              {parentTeaserBand.links.map((link) => (
                <a key={link.href} href={link.href} className="inline-link">
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
          <div className="parent-teaser-cta reveal reveal-delay-2">
            <div className="parent-cta-card">
              <p className="parent-cta-card-label">Have questions?</p>
              <p className="parent-cta-card-body">We're happy to answer directly — from parents, study advisors, or students. No commitment required.</p>
              <a href={parentTeaserBand.ctaHref} className="button button-primary" style={{marginTop: "1rem", display: "inline-flex"}}>
                {parentTeaserBand.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExpansionTeaserSection() {
  return (
    <section className="section expansion-teaser">
      <div className="container">
        <SectionIntro
          eyebrow={expansionTeaser.eyebrow}
          title={expansionTeaser.title}
          copy={expansionTeaser.body}
          centered
        />
        <div className="expansion-destinations reveal reveal-delay-2">
          {expansionTeaser.destinations.map((dest) => (
            <div key={dest.name} className="expansion-dest-card">
              <span className="expansion-coming-soon">Coming Soon</span>
              <h3 className="expansion-dest-name">{dest.name}</h3>
              <p className="expansion-dest-region">{dest.region}</p>
              <p className="expansion-dest-note">{dest.note}</p>
            </div>
          ))}
        </div>
        <div className="expansion-cta reveal reveal-delay-3" style={{textAlign: "center", marginTop: "2rem"}}>
          <a href={expansionTeaser.cta.href} className="button button-secondary">
            {expansionTeaser.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export function PlacementReassuranceSection() {
  return (
    <section className="section placement-reassurance-section fade-up">
      <div className="container">
        <div className="prs-layout">
          <div className="prs-intro">
            <span className="eyebrow">{pricingReassurance.eyebrow}</span>
            <h2 className="section-title">{pricingReassurance.title}</h2>
            <p className="section-copy">{pricingReassurance.body}</p>
            <ul className="prs-reassurance-list">
              {pricingReassurance.reassurancePoints.map((point) => (
                <li key={point} className="prs-reassurance-item">
                  <span className="prs-check" aria-hidden="true">
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path d="M1.5 5L5 8.5L11.5 1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="prs-note">{pricingReassurance.note}</p>
          </div>
          <div className="prs-steps">
            {pricingReassurance.steps.map((step, i) => (
              <div key={step.number} className={`prs-step fade-up delay-${i + 1}`}>
                <span className="prs-step-num">{step.number}</span>
                <div className="prs-step-content">
                  <h3 className="prs-step-title">{step.title}</h3>
                  <p className="prs-step-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="section team-section fade-up">
      <div className="container">
        <div className="team-layout">
          <div className="team-intro">
            <span className="eyebrow">{teamSection.eyebrow}</span>
            <h2 className="section-title">{teamSection.title}</h2>
            <p className="section-copy">{teamSection.body}</p>
            <div className="team-local-note">
              <span className="team-local-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" />
                </svg>
              </span>
              <p>{teamSection.localNote}</p>
            </div>
            <p className="team-support-note">{teamSection.supportNote}</p>
            <a href={teamSection.ctaHref} className="button button-secondary team-cta">
              {teamSection.cta}
            </a>
          </div>
          <div className="team-placeholder">
            <div className="team-placeholder-card">
              <div className="team-placeholder-avatar" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="team-placeholder-label">Team photos coming soon</p>
              <p className="team-placeholder-sub">We prefer to earn the real estate with results first.</p>
            </div>
            <div className="team-contact-card">
              <p className="team-contact-label">Questions about the program?</p>
              <p className="team-contact-body">Email us directly — we reply within 2 business days.</p>
              <a href="mailto:hello@islandinternship.com" className="team-contact-email">
                hello@islandinternship.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
