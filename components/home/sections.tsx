import Image from "next/image";
import Link from "next/link";
import {
  companies,
  community,
  costs,
  faqs,
  finalCta,
  hero,
  includedHighlights,
  navigation,
  outcomes,
  processSteps,
  resources,
  safeguards,
  siteLinks,
  testimonials,
  tracks,
  trustMetrics,
  trustUniversities,
} from "@/data/homepage";
import { OpenApplicationButton } from "@/components/home/application-modal";
import { GuideSignupCard } from "@/components/home/guide-card";
import { HeroPhrases } from "@/components/home/hero-phrases";
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
      <div className="container hero-layout">
        <div className="hero-copy-column">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="hero-title">
            You need to do your<br />internship anyway.
          </h1>
          <HeroPhrases phrases={hero.rotatingPhrases} />
          <p className="hero-copy">{hero.subtitle}</p>
          <ul className="hero-checks">
            {hero.bullets.map((item) => (
              <li key={item}>
                <Icon name="check" className="icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="hero-actions">
            <OpenApplicationButton className="button button-primary" source="Hero">
              Apply free — takes 10 minutes
            </OpenApplicationButton>
            <Link href={siteLinks.matchQuiz} className="button button-secondary">
              {hero.secondaryCta}
            </Link>
          </div>
          <div className="hero-meta">
            <span>{hero.support}</span>
            <span>{hero.note}</span>
          </div>
        </div>

        <div className="hero-gallery">
          {hero.gallery.map((item, index) => (
            <article key={item.label} className={`hero-frame hero-frame-${index + 1}`}>
              <Image src={item.image} alt={item.alt} width={760} height={960} priority={index === 0} sizes="(max-width: 640px) 0px, (max-width: 1100px) 50vw, 33vw" />
              <div className="hero-frame-overlay" />
              <div className="hero-frame-caption">
                <small>{item.label}</small>
                <strong>{item.text}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="trust-band">
      <div className="container">
        <div className="trust-grid">
          {trustMetrics.map((item) => (
            <div key={item.label} className="trust-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="trust-universities">
          <span>Students join from</span>
          <div>
            {trustUniversities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
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
        <div className="process-grid">
          {processSteps.steps.map((step) => (
            <article key={step.number} className="premium-card process-card">
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
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
              <Image src={item.image} alt={item.alt} width={720} height={480} className="outcome-image" sizes="(max-width: 640px) 100vw, 50vw" />
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
                  <video controls playsInline preload="metadata">
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

export function FinalCtaSection() {
  return (
    <section id="cta-banner" className="section final-cta-section">
      <div className="container final-cta-layout">
        <div>
          <span className="eyebrow">{finalCta.eyebrow}</span>
          <h2 className="section-title">{finalCta.title}</h2>
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
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <Link href={siteLinks.community}>Community</Link>
            <Link href={siteLinks.companies}>Host companies</Link>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div className="footer-links">
            <a href={siteLinks.helloEmail}>hello@islandinternship.com</a>
            <a href={siteLinks.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
            <a href={siteLinks.partnersEmail}>partners@islandinternship.com</a>
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
