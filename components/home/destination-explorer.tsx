"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import { geoEquirectangular, geoPath, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";
import worldAtlas from "world-atlas/countries-110m.json";
import { destinations, DestinationKey, siteLinks } from "@/data/homepage";
import { OpenApplicationButton } from "@/components/home/application-modal";

const MAP_W = 1100;
const MAP_H = 520;

const atlas = worldAtlas as { objects: { countries: unknown } };
const landCollection = feature(
  atlas as never,
  atlas.objects.countries as never
) as unknown as GeoJSON.FeatureCollection;
const graticule = geoGraticule10();

// Flat equirectangular projection centred on SE Asia / Indian Ocean
const projection = geoEquirectangular()
  .scale(450)
  .center([100, 5])
  .translate([MAP_W / 2, MAP_H / 2]);

const pathGen = geoPath(projection);

// Pre-compute at module load (never changes)
const landPaths = landCollection.features.map((f) => pathGen(f) ?? "");
const graticulePath = pathGen(graticule) ?? "";

const pinPos: Record<DestinationKey, [number, number]> = {
  bali: (projection(destinations.bali.coordinates) as [number, number]) ?? [0, 0],
  sriLanka: (projection(destinations.sriLanka.coordinates) as [number, number]) ?? [0, 0],
};

export function DestinationExplorer() {
  const [selected, setSelected] = useState<DestinationKey>("bali");
  const [fadeIn, setFadeIn] = useState(true);

  const active = destinations[selected];
  const inactiveKey: DestinationKey = selected === "bali" ? "sriLanka" : "bali";
  const inactive = destinations[inactiveKey];

  // Fade transition on switch
  useEffect(() => {
    setFadeIn(false);
    const t = setTimeout(() => setFadeIn(true), 180);
    return () => clearTimeout(t);
  }, [selected]);

  function switchTo(key: DestinationKey) {
    startTransition(() => setSelected(key));
  }

  return (
    <section id="destinations" className="section destination-section">
      <div className="container">
        <div className="section-intro section-intro-centered">
          <span className="eyebrow">Choose your island setting</span>
          <h2 className="section-title">
            Your internship in{" "}
            <em
              className="dest-swap-word"
              aria-live="polite"
              style={{
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? "translateY(0)" : "translateY(6px)",
              }}
            >
              {active.name}
            </em>{" "}
            — pick your setting.
          </h2>
          <p className="section-copy">
            Two island bases. Two options to shape your internship. Compare them and pick the one that suits your goals and lifestyle.
          </p>
        </div>

        {/* Map container */}
        <div className="flatmap-wrap premium-card">

          {/* Pill selectors */}
          <div className="flatmap-pills">
            {(Object.keys(destinations) as DestinationKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className={`flatmap-pill ${selected === key ? "is-active" : ""}`}
                onClick={() => switchTo(key)}
              >
                {destinations[key].name}
                <span className="flatmap-pill-icon">
                  {selected === key ? "✓" : "›"}
                </span>
              </button>
            ))}
          </div>

          {/* SVG world map */}
          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="flatmap-svg"
            aria-hidden="true"
          >
            <rect width={MAP_W} height={MAP_H} className="flatmap-sea" />
            <path d={graticulePath} className="flatmap-graticule" />
            {landPaths.map((d, i) => (
              <path key={i} d={d} className="flatmap-land" />
            ))}

            {/* Route line: Amsterdam → selected destination */}
            {/* Pin markers */}
            {(Object.keys(destinations) as DestinationKey[]).map((key) => {
              const [px, py] = pinPos[key];
              const isActive = key === selected;
              return (
                <g
                  key={key}
                  className={`flatmap-pin ${isActive ? "is-active" : ""}`}
                  transform={`translate(${px},${py})`}
                  onClick={() => switchTo(key)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Select ${destinations[key].name}`}
                  onKeyDown={(e) => e.key === "Enter" && switchTo(key)}
                >
                  {/* Pulse ring (active only) */}
                  <circle r="20" className="flatmap-pin-pulse" />
                  {/* Teardrop pin */}
                  <path
                    className="flatmap-pin-body"
                    d="M0,-22 C9,-22 16,-15 16,-7 C16,4 0,22 0,22 C0,22 -16,4 -16,-7 C-16,-15 -9,-22 0,-22 Z"
                  />
                  <circle r="5" cy="-7" className="flatmap-pin-inner" />
                </g>
              );
            })}
          </svg>

          {/* Active destination card (left) */}
          <div
            className="flatmap-card flatmap-card-active"
            style={{ opacity: fadeIn ? 1 : 0, transition: "opacity 0.18s ease" }}
          >
            <div className="flatmap-card-img-wrap">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                className="flatmap-card-img"
                style={{ objectFit: "cover" }}
                sizes="360px"
              />
            </div>
            <div className="flatmap-card-body">
              <p className="flatmap-card-location">
                <em>{active.name}</em>
                <span className="flatmap-card-country">, {active.country}</span>
              </p>
              <h3 className="flatmap-card-heading">{active.panelTitle}</h3>
              <p className="flatmap-card-copy">{active.panelBody}</p>
              <div className="flatmap-card-facts">
                {active.facts.map((fact) => (
                  <div key={fact.label} className="flatmap-fact-row">
                    <span className="flatmap-fact-label">{fact.label}</span>
                    <span className="flatmap-fact-value">{fact.value}</span>
                  </div>
                ))}
              </div>
              <OpenApplicationButton
                className="button button-primary flatmap-cta"
                destination={active.name}
                source={`Destination map: ${active.name}`}
              >
                Apply for {active.name} →
              </OpenApplicationButton>
            </div>
          </div>

          {/* Preview card (right) — click to switch */}
          <div
            className="flatmap-card flatmap-card-preview"
            onClick={() => switchTo(inactiveKey)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && switchTo(inactiveKey)}
            aria-label={`Switch to ${inactive.name}`}
            style={{ opacity: fadeIn ? 1 : 0, transition: "opacity 0.18s ease" }}
          >
            <div className="flatmap-preview-img-wrap">
              <Image
                src={inactive.image}
                alt={inactive.alt}
                fill
                className="flatmap-card-img"
                style={{ objectFit: "cover" }}
                sizes="280px"
              />
            </div>
            <div className="flatmap-preview-body">
              <p className="flatmap-card-location">
                <em>{inactive.name}</em>
              </p>
              <h4 className="flatmap-preview-heading">{inactive.panelTitle}</h4>
              <p className="flatmap-preview-hint">Tap the map to explore →</p>
              <div className="flatmap-preview-actions">
                <a href="#costs" className="button button-secondary flatmap-preview-btn">
                  Compare costs
                </a>
                <OpenApplicationButton
                  className="button button-primary flatmap-preview-btn"
                  destination={inactive.name}
                  source={`Destination preview: ${inactive.name}`}
                >
                  Apply for {inactive.name} →
                </OpenApplicationButton>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
