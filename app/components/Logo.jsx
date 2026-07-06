import Link from "next/link";
import Image from "next/image";

export default function Logo({ size = "md", onClick }) {
  const iconH = size === "sm" ? 28 : size === "lg" ? 40 : 34;
  const textCls = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2.5 select-none">
      {/*
        Filter breakdown:
        1. invert(1)         — white bg → black, dark gray → white, cyan → orange-red
        2. brightness(2.5)   — pushes gray fully to white, boosts the accent color
        3. hue-rotate(155deg) — shifts orange-red accent → emerald green
        4. saturate(2)       — makes the emerald vivid
        mix-blend-mode:screen — black areas (inverted bg) fade into the dark site bg
      */}
      <Image
        src="/images/dkl.png"
        alt="DK"
        width={iconH}
        height={iconH}
        style={{
          width: iconH,
          height: iconH,
          filter: "invert(1) brightness(2.5) hue-rotate(155deg) saturate(2)",
          mixBlendMode: "screen",
        }}
        priority
      />
      <span className={`font-bold ${textCls} tracking-tight leading-none`}>
        <span className="text-white">DEVS</span>
        <span className="text-[#2de8b0]">KARNEL</span>
      </span>
    </Link>
  );
}
