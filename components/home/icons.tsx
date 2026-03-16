import { IconName } from "@/data/homepage";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const shared = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow-right":
      return (
        <svg {...shared}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...shared}>
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M3 11h18" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...shared}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M8 2v4M16 2v4M3 10h18" />
        </svg>
      );
    case "check":
      return (
        <svg {...shared}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "compass":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="m16 8-3.3 8.1L8 15.2 16 8Z" />
        </svg>
      );
    case "file":
      return (
        <svg {...shared}>
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
          <path d="M14 2v5h5M9 13h6M9 17h6M9 9h2" />
        </svg>
      );
    case "globe":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case "grid":
      return (
        <svg {...shared}>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      );
    case "heart":
      return (
        <svg {...shared}>
          <path d="M12 20s-6.5-4-9-8.1C1 8.7 2.7 5 6.4 5c2.2 0 3.5 1.2 4.6 2.8C12.1 6.2 13.4 5 15.6 5 19.3 5 21 8.7 19 11.9 18.5 12.7 16.2 15.7 12 20Z" />
        </svg>
      );
    case "home":
      return (
        <svg {...shared}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10.5V20h14v-9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...shared}>
          <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared}>
          <path d="M22 16.5v2a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-2.9A19.4 19.4 0 0 1 3.4 9.5 19 19 0 0 1 .5 1.2 2 2 0 0 1 2.5-1h2a2 2 0 0 1 2 1.7c.2 1 .5 2 .9 2.9a2 2 0 0 1-.5 2.1L5.8 7.2a16 16 0 0 0 6.9 6.9l1.5-1.1a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.9a2 2 0 0 1 1.8 2Z" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...shared}>
          <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />
        </svg>
      );
    case "shield":
      return (
        <svg {...shared}>
          <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" />
        </svg>
      );
    case "spark":
      return (
        <svg {...shared}>
          <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
        </svg>
      );
    case "users":
      return (
        <svg {...shared}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="8" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
          <path d="M16 4.1a4 4 0 0 1 0 7.8" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...shared}>
          <path d="M4 7h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
          <path d="M16 12h6" />
          <circle cx="16" cy="12" r="1" />
          <path d="M5 7V6a2 2 0 0 1 2-2h11" />
        </svg>
      );
    default:
      return null;
  }
}
