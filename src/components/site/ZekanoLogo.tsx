import logoAsset from "@/assets/zekano-logo.png.asset.json";

export function ZekanoLogo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  // The uploaded logo is a dark/navy image. For light variant we can invert it.
  const filterClass = variant === "light" ? "invert brightness-0" : "";
  return (
    <div className="zekano-logo flex items-center">
      <img
        src={logoAsset.url}
        alt="ZEKANO — Building the future, today."
        className={`h-auto w-[140px] sm:w-[160px] object-contain ${filterClass}`}
        width={300}
        height={89}
      />
    </div>
  );
}
