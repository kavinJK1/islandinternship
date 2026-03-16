import Image from "next/image";

const photos = [
  { src: "/images/hero-placement.jpg", caption: "Placement day, Bali", w: 315, h: 210 },
  { src: "/images/hero-group.jpg", caption: "Cohort gathering", w: 315, h: 210 },
  { src: "/images/community-orientation.jpg", caption: "Orientation week", w: 315, h: 210 },
  { src: "/images/community-villa-group.jpg", caption: "Villa weekend", w: 315, h: 210 },
  { src: "/images/community-cafe.jpg", caption: "Community café", w: 315, h: 210 },
  { src: "/images/moments-beach.jpg", caption: "Weekend, south coast", w: 315, h: 210 },
  { src: "/images/outcomes-office.jpg", caption: "At the office", w: 315, h: 210 },
  { src: "/images/community-networking.jpg", caption: "Networking event", w: 315, h: 210 },
  { src: "/images/moments-hills.jpg", caption: "Weekend in the hills", w: 315, h: 210 },
  { src: "/images/community-working-2.jpg", caption: "Working session", w: 315, h: 210 },
];

export function PhotoStrip() {
  const doubled = [...photos, ...photos];

  return (
    <div className="photo-strip" aria-hidden="true">
      <div className="photo-strip-track">
        {doubled.map((photo, i) => (
          <div key={i} className="photo-strip-item">
            <Image
              src={photo.src}
              alt={photo.caption}
              width={photo.w}
              height={photo.h}
              loading="lazy"
            />
            <span className="photo-strip-caption">{photo.caption}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
