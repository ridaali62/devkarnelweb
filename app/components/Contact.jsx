"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = ["Website Development", "UI / UX Design", "App Development", "SEO", "Logo Design", "Other"];
const COUNTRY_CODES = ["US", "UK", "PK", "IN", "CA", "AU"];

const inputCls =
  "w-full border border-white/10 rounded-lg px-4 py-3 text-sm text-white bg-white/5 outline-none transition-all duration-200 placeholder:text-white/25 focus:border-[#2de8b0] focus:ring-2 focus:ring-[#2de8b0]/10 focus:bg-white/[0.08]";

function Checkbox({ label, checked, onToggle }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer select-none group">
      <span
        onClick={onToggle}
        role="checkbox"
        aria-checked={checked}
        className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all duration-150"
        style={{
          border: `1.5px solid ${checked ? "#2de8b0" : "rgba(255,255,255,0.15)"}`,
          background: checked ? "#2de8b0" : "transparent",
        }}
      >
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.2 5.8L8 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-150 font-medium">{label}</span>
    </label>
  );
}

function Field({ label, children, htmlFor }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-[0.7rem] font-semibold text-white/40 tracking-wide uppercase">{label}</label>
      {children}
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", countryCode: "US", message: "", services: [] });
  const [status, setStatus] = useState("");

  const handle = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const toggleService = (s) => setValues((v) => ({ ...v, services: v.services.includes(s) ? v.services.filter((x) => x !== s) : [...v.services, s] }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.services.length === 0) {
      setStatus("Please select at least one service.");
      return;
    }
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      setStatus(data.message);
      if (res.ok) setValues({ name: "", email: "", phone: "", countryCode: "US", message: "", services: [] });
    } catch {
      setStatus("Failed to send message.");
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" type="text" placeholder="Your name" value={values.name} onChange={handle} className={inputCls} required />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" placeholder="you@company.com" value={values.email} onChange={handle} className={inputCls} required />
        </Field>
      </div>

      <Field label="Phone number" htmlFor="phone">
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={values.countryCode}
            onChange={handle}
            className="border border-white/10 rounded-lg px-2 py-3 text-sm text-white bg-white/5 outline-none cursor-pointer focus:border-[#2de8b0] transition-all w-[72px]"
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c} value={c} className="bg-[#0a4a42] text-white">{c}</option>
            ))}
          </select>
          <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={values.phone} onChange={handle} className={`${inputCls} flex-1`} />
        </div>
      </Field>

      <Field label="How can we help?" htmlFor="message">
        <textarea id="message" name="message" rows={4} placeholder="Tell us about the project..." value={values.message} onChange={handle} className={`${inputCls} resize-none`} required />
      </Field>

      <fieldset>
        <legend className="text-[0.7rem] font-semibold text-white/40 tracking-wide uppercase mb-2">
          Services <span className="text-red-400">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
          {SERVICES.map((s) => (
            <Checkbox key={s} label={s} checked={values.services.includes(s)} onToggle={() => toggleService(s)} />
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-2 w-full py-3.5 rounded-xl bg-[#2de8b0] text-black font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#1bc497] hover:shadow-[0_0_30px_rgba(45,232,176,0.3)] active:scale-[0.98]"
      >
        Get started
      </button>

      {status && (
        <p className={`text-sm text-center ${status.startsWith("Please") || status.startsWith("Failed") ? "text-red-400" : "text-[#2de8b0]"}`}>
          {status}
        </p>
      )}
    </form>
  );
}

export default function Contact() {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 90%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center pt-20 sm:pt-24 lg:pt-28 sm:pb-6 sm:px-6 lg:pb-10 lg:px-10"
      style={{ background: "#010504" }}
    >
      <div
        ref={cardRef}
        className="flex flex-col md:flex-row w-full max-w-5xl min-h-screen md:min-h-0 md:rounded-2xl overflow-hidden backdrop-blur-3xl bg-white/5 border border-white/10 shadow-2xl"
        style={{ opacity: 0 }}
      >
        {/* Left visual */}
        <div className="relative w-full h-56 md:h-auto md:w-[42%] shrink-0 overflow-hidden">
          <Image src="/images/contact.png" alt="Contact" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
            <p className="text-[#2de8b0] text-xs font-medium tracking-widest uppercase mb-1">Start a project</p>
            <p className="text-white font-bold text-2xl leading-tight">We&apos;d love to hear<br />from you</p>
          </div>
        </div>

        {/* Right form */}
        <div className="flex-1 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Let&apos;s level up your <span className="text-[#2de8b0]">brand,</span> together
            </h2>
            <p className="text-white/40 text-sm lg:text-base mt-2.5">Fill out the form and our team will get back to you within 24 hours.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
