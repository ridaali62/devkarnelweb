import Link from "next/link";

export const metadata = {
  title: "404 – Page Not Found | Devskarnel",
};

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen w-full flex items-center justify-center bg-[#010504] overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,232,176,0.07) 0%, transparent 70%)" }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* 404 number */}
        <p
          className="font-extrabold leading-none select-none"
          style={{
            fontSize: "clamp(7rem,20vw,14rem)",
            background: "linear-gradient(180deg, rgba(45,232,176,0.9) 0%, rgba(45,232,176,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
          Page not found
        </h1>

        <p className="text-white/40 text-sm sm:text-base max-w-md mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Head back home or explore our services.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="px-8 py-3.5 rounded-lg text-sm font-bold text-black transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ backgroundColor: "#2de8b0", boxShadow: "0 8px 30px rgba(45,232,176,0.25)" }}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-lg text-sm font-semibold text-white/80 hover:text-white transition-all duration-200 active:scale-95 border border-white/10 bg-white/5 hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
