import { useEffect, useRef } from "react";

interface HeroVideoBgProps {
  src: string;
  className?: string;
}

export function HeroVideoBg({ src, className }: HeroVideoBgProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Setting muted as a JS property (not just the JSX attribute) is required
    // for browsers to reliably allow autoplay, especially with SSR hydration.
    el.muted = true;
    el.play().catch(() => {
      // Autoplay can still be blocked in rare cases (e.g. reduced-motion
      // settings) — that's fine, it just stays on the first frame.
    });
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
