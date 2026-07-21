export function ZekanoLogo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-brand-dark" : "text-white";
  const subColor = variant === "dark" ? "text-muted-foreground" : "text-white/70";
  return (
    <div className="zekano-logo flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M6 6h28L14 34h20" stroke="oklch(0.62 0.18 142)" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-black tracking-tight ${textColor}`}>ZEKANO</span>
        <span className={`text-[9px] font-semibold tracking-[0.15em] ${subColor} mt-0.5`}>STRUCTURED MOBILITY.</span>
      </div>
    </div>
  );
}
