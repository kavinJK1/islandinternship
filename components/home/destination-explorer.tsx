"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { geoDistance, geoGraticule10, geoInterpolate, geoOrthographic, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldAtlas from "world-atlas/countries-110m.json";
import { destinations, DestinationKey } from "@/data/homepage";
import { Icon } from "@/components/home/icons";
import { OpenApplicationButton } from "@/components/home/application-modal";

const WIDTH = 560;
const HEIGHT = 560;
const projectionScale = 248;
const atlas = worldAtlas as {
  objects: {
    countries: unknown;
  };
};
const landCollection = feature(atlas as never, atlas.objects.countries as never) as unknown as GeoJSON.FeatureCollection;
const graticule = geoGraticule10();
const amsterdam: [number, number] = [4.9041, 52.3676];

const initialRotation: Record<DestinationKey, [number, number, number]> = {
  bali: [-115.1889, 8.4095, 0],
  sriLanka: [-80.7718, -7.8731, 0],
};

function destinationCenter(rotation: [number, number, number]): [number, number] {
  return [-rotation[0], -rotation[1]];
}

export function DestinationExplorer() {
  const [selected, setSelected] = useState<DestinationKey>("bali");
  const [rotation, setRotation] = useState<[number, number, number]>(initialRotation.bali);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number; rotation: [number, number, number] } | null>(null);
  const activeDestination = destinations[selected];

  const [titleVisible, setTitleVisible] = useState(true);

  useEffect(() => {
    setTitleVisible(false);
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, [selected]);

  useEffect(() => {
    const target = initialRotation[selected];
    let frame = 0;

    const animate = () => {
      setRotation((current) => {
        const next: [number, number, number] = [
          current[0] + (target[0] - current[0]) * 0.12,
          current[1] + (target[1] - current[1]) * 0.12,
          0,
        ];

        if (Math.abs(next[0] - target[0]) < 0.05 && Math.abs(next[1] - target[1]) < 0.05) {
          return target;
        }

        frame = requestAnimationFrame(animate);
        return next;
      });
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [selected]);

  const projection = geoOrthographic()
    .translate([WIDTH / 2, HEIGHT / 2])
    .scale(projectionScale)
    .rotate(rotation)
    .clipAngle(90);

  const path = geoPath(projection);
  const routeLine = geoInterpolate(amsterdam, activeDestination.coordinates);
  const routeCoordinates = Array.from({ length: 24 }, (_, index) => routeLine(index / 23));
  const routePath = path({
    type: "LineString",
    coordinates: routeCoordinates,
  } as GeoJSON.LineString);

  const isVisible = (coords: [number, number]) =>
    geoDistance(destinationCenter(rotation), coords) < Math.PI / 2 - 0.08;

  const getMarkerPoint = (coords: [number, number]) => projection(coords);

  const handlePointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      rotation,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!dragStart.current || !isDragging) return;

    const dx = event.clientX - dragStart.current.x;
    const dy = event.clientY - dragStart.current.y;

    setRotation([
      dragStart.current.rotation[0] + dx * 0.35,
      Math.max(-50, Math.min(50, dragStart.current.rotation[1] - dy * 0.28)),
      0,
    ]);
  };

  const handlePointerUp = () => {
    dragStart.current = null;
    setIsDragging(false);
  };

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
              style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(8px)" }}
            >
              {activeDestination.name}
            </em>
            {" "}— pick your setting.
          </h2>
          <p className="section-copy">
            Two island bases. Same structured support, same placement quality. The difference is pace, scene, and the
            environment around your internship. Compare them below.
          </p>
        </div>

        <div className="destination-layout">
          <div className="globe-panel premium-card">
            <div className="globe-panel-copy">
              <span className="globe-kicker">Interactive globe</span>
              <p>
                Drag to rotate. Click a destination marker or one of the island switches to recenter the globe and
                update the placement story.
              </p>
            </div>
            <svg
              className={`globe ${isDragging ? "is-dragging" : ""}`}
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <defs>
                <radialGradient id="globeGlow" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
              </defs>
              <circle className="globe-sphere" cx={WIDTH / 2} cy={HEIGHT / 2} r={projectionScale + 6} />
              <circle className="globe-halo" cx={WIDTH / 2} cy={HEIGHT / 2} r={projectionScale + 36} />
              <path className="globe-graticule" d={path(graticule) ?? ""} />
              {landCollection.features.map((shape, index) => (
                <path key={index} className="globe-land" d={path(shape) ?? ""} />
              ))}
              {routePath ? <path className="globe-route" d={routePath} /> : null}
              {isVisible(amsterdam) && getMarkerPoint(amsterdam) ? (
                <g className="globe-city globe-city-origin" transform={`translate(${getMarkerPoint(amsterdam)?.[0]}, ${getMarkerPoint(amsterdam)?.[1]})`}>
                  <circle r="6" />
                  <text y="-14">Amsterdam</text>
                </g>
              ) : null}
              {(Object.entries(destinations) as Array<[DestinationKey, (typeof destinations)[DestinationKey]]>).map(([key, item]) => {
                const point = getMarkerPoint(item.coordinates);

                if (!point || !isVisible(item.coordinates)) return null;

                return (
                  <g
                    key={key}
                    className={`globe-marker ${selected === key ? "is-active" : ""}`}
                    transform={`translate(${point[0]}, ${point[1]})`}
                    onClick={() => startTransition(() => setSelected(key))}
                  >
                    <circle r="8" />
                    <circle className="globe-marker-ring" r="15" />
                    <text y="-18">{item.name}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="destination-copy premium-card">
            <div className="destination-switches" role="tablist" aria-label="Choose destination">
              {(Object.entries(destinations) as Array<[DestinationKey, (typeof destinations)[DestinationKey]]>).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  className={`destination-switch ${selected === key ? "is-active" : ""}`}
                  onClick={() => startTransition(() => setSelected(key))}
                >
                  <span>{item.name}</span>
                  <small>{item.country}</small>
                </button>
              ))}
            </div>

            <div className={`destination-hero ${activeDestination.accentClass}`}>
              <div className="destination-image-wrap">
                <Image
                  src={activeDestination.image}
                  alt={activeDestination.alt}
                  fill
                  className="destination-image"
                  sizes="(max-width: 900px) 100vw, 35vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="destination-content">
                <p className="destination-region">{activeDestination.region}</p>
                <h3>{activeDestination.panelTitle}</h3>
                <p>{activeDestination.panelBody}</p>
                <div className="destination-facts">
                  {activeDestination.facts.map((fact) => (
                    <div key={fact.label}>
                      <span>{fact.label}</span>
                      <strong>{fact.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="destination-story-grid">
              <div>
                <span className="destination-story-label">What this changes</span>
                <h4>{activeDestination.storyTitle}</h4>
                <p>{activeDestination.storyBody}</p>
              </div>
              <div>
                <span className="destination-story-label">Environment markers</span>
                <div className="chip-row">
                  {activeDestination.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="destination-actions">
                  <a href={activeDestination.ctaHref} className="button button-secondary">
                    {activeDestination.ctaLabel}
                  </a>
                  <OpenApplicationButton
                    className="button button-primary"
                    destination={activeDestination.name}
                    source={`Destination explorer: ${activeDestination.name}`}
                  >
                    Ask about {activeDestination.name}
                  </OpenApplicationButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
