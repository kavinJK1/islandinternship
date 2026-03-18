"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function CountItem({
  num,
  suffix,
  label,
  triggered,
}: {
  num: number;
  suffix: string;
  label: string;
  triggered: boolean;
}) {
  const count = useCountUp(num, 1400, triggered);
  return (
    <div className="trust-item">
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export function StatsCounter({
  metrics,
}: {
  metrics: Array<{ value: string; label: string }>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="trust-grid" ref={ref}>
      {metrics.map((item) => {
        const num = parseInt(item.value, 10);
        const suffix = item.value.replace(String(num), "");
        return (
          <CountItem
            key={item.label}
            num={num}
            suffix={suffix}
            label={item.label}
            triggered={triggered}
          />
        );
      })}
    </div>
  );
}
