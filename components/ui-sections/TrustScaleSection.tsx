"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const metrics = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 100, suffix: " Cr+", label: "Reach" },
  { value: 30, suffix: "+", label: "Startups" }
];

const partners = ["Razorpay", "AWS", "Google", "Meta", "Microsoft"];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 72;
    const tick = () => {
      frame += 1;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.round(value * eased));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function TrustScaleSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur md:p-10">
        <div className="grid gap-5 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/10 bg-black/28 p-7">
              <p className="text-5xl font-semibold tracking-tight text-white">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/42">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden border-y border-white/10 py-6">
          <div className="flex w-max animate-marquee gap-10">
            {[...partners, ...partners, ...partners, ...partners].map((brand, index) => (
              <span key={`${brand}-${index}`} className="brand-logo text-2xl font-semibold text-white/60">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
