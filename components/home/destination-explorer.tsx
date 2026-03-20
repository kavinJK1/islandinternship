"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { destinations, DestinationKey } from "@/data/homepage";
import { OpenApplicationButton } from "@/components/home/application-modal";

export function DestinationExplorer() {
  const [selected, setSelected] = useState<DestinationKey>("bali");
  const router = useRouter();
  const dest = destinations[selected];

  function handleDestinationSelect(key: DestinationKey) {
    if (selected === key) {
      router.push(destinations[key].ctaHref);
      return;
    }

    setSelected(key);
  }

  return (
    <section id="destinations" className="section dest-clean-section">
      <div className="container">
        <div className="dest-clean-header">
          <span className="eyebrow">Choose your setting</span>
          <div className="dest-toggle">
            {(Object.keys(destinations) as DestinationKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className={`dest-toggle-btn ${selected === key ? "is-active" : ""}`}
                onClick={() => handleDestinationSelect(key)}
                aria-pressed={selected === key}
                title={
                  selected === key
                    ? `Open ${destinations[key].name} destination page`
                    : `Preview ${destinations[key].name}`
                }
              >
                {destinations[key].name}
              </button>
            ))}
          </div>
        </div>

        <div className="dest-clean-layout">
          <Link
            href={dest.ctaHref}
            className="dest-clean-image-wrap"
            aria-label={`Learn more about ${dest.name}`}
          >
            <Image
              key={dest.image}
              src={dest.image}
              alt={dest.alt}
              fill
              className="dest-clean-img"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </Link>

          <div className="dest-clean-info">
            <h2 className="dest-clean-title">
              <Link href={dest.ctaHref} className="dest-clean-title-link">
                {dest.panelTitle}
              </Link>
            </h2>
            <p className="dest-clean-body">{dest.panelBody}</p>

            <ul className="dest-clean-bullets">
              {dest.facts.map((f) => (
                <li key={f.label}>
                  <span className="dest-bullet-label">{f.label}</span>
                  <span className="dest-bullet-value">{f.value}</span>
                </li>
              ))}
            </ul>

            <p className="dest-best-for">
              <strong>Best for:</strong> {dest.tags.join(", ")}
            </p>

            <div className="dest-clean-actions">
              <a href={dest.ctaHref} className="button button-primary">
                Learn more about {dest.name} →
              </a>
              <OpenApplicationButton
                className="button button-secondary"
                destination={dest.name}
                source={`Destination: ${dest.name}`}
              >
                Apply now
              </OpenApplicationButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
