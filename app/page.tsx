"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  "Features",
  "How it works",
  "Testimonials",
  "Pricing",
  "FAQs",
];

const whyClearaItems = [
  "One Tool Instead of Many",
  "Work Faster, Not Harder",
  "Keep Clients and Projects on Track",
  "Deliver With Confidence",
];

const featureCards = [
  {
    icon: "/assets/icons/document.svg",
    title: "Document Generator",
    description:
      "Turn simple ideas into polished, client-ready documents with AI. Generate proposals, scopes of work, PRDs, and more in seconds.",
  },
  {
    icon: "/assets/icons/track-changes.svg",
    title: "Track Your Project",
    description:
      "Turn approved work into structured projects with clear deliverables and timelines. Track progress in real time.",
  },
  {
    icon: "/assets/icons/collaborate.svg",
    title: "Client Collaboration",
    description:
      "Reduce back and forth communication by giving clients direct access to project updates, milestones, and deliverables whenever they need.",
  },
];

const featureImages = [
  {
    bg: "/assets/screenshots/feature-preview.png",
    inset: "/assets/screenshots/dashboard-interview.png",
  },
  {
    bg: "/assets/screenshots/feature-preview.png",
    inset: "/assets/screenshots/track-project-inset.png",
  },
  {
    bg: "/assets/screenshots/feature-preview.png",
    inset: "/assets/screenshots/collaboration-export.png",
  },
];

const comparisonFeatures = [
  "AI Document Generator",
  "Convert Documents into Projects",
  "AI Contract Analysis",
  "Document Summarization",
  "AI Pricing Generator",
  "Built-in Project Tracking",
  "Secure Document Sharing",
  "Client Collaboration",
  "All-in-One Workflow",
];

const comparisonCleara = [true, true, true, true, true, true, true, true, true];
const comparisonOthers = [
  true,
  false,
  false,
  "Limited",
  false,
  false,
  "Limited",
  "Separate Tool",
  false,
];

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Freelance Product Designer",
    avatar: "/assets/avatars/sarah-thompson.png",
    quote:
      "Cleara has completely changed how I manage client projects. What used to take hours of writing and organizing now takes minutes.",
  },
  {
    name: "Rajesh Patel",
    role: "Freelance Developer",
    avatar: "/assets/avatars/rajesh-patel.png",
    quote:
      "Cleara helps me stay organized throughout the entire client lifecycle. From proposals to project completion, everything is connected and easy to manage.",
  },
  {
    name: "Emily Walker",
    role: "UX Designer",
    avatar: "/assets/avatars/emily-walker.png",
    quote:
      "The experience is incredibly simple. I can generate a scope of work, share it with a client, and move directly into project delivery without changing platforms.",
  },
];

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Perfect for getting started with AI interviews",
    features: [
      { text: "5 AI document generations per month", included: true },
      { text: "Limited document summaries", included: true },
      { text: "2 active projects", included: true },
      { text: "Basic project tracking", included: true },
      { text: "Contract Analysis", included: false },
      { text: "Unlimited projects", included: false },
    ],
    featured: false,
  },
  {
    name: "Student",
    price: { monthly: 5, yearly: 3 },
    description: "Affordable interview prep for verified university students",
    features: [
      { text: "15 AI document generations per month", included: true },
      { text: "Unlimited document summaries", included: true },
      { text: "15 active projects", included: true },
      { text: "Unlimited pricing generation", included: true },
      { text: "10 contract analyses every month", included: true },
      { text: "Full project tracking", included: true },
    ],
    featured: true,
  },
  {
    name: "Plus",
    price: { monthly: 10, yearly: 6 },
    description: "Everything you need to ace your next interview",
    features: [
      { text: "Unlimited AI document generation", included: true },
      { text: "Unlimited active projects", included: true },
      { text: "Advanced project tracking", included: true },
      { text: "Unlimited contract analysis", included: true },
      { text: "Unlimited document summaries", included: true },
      { text: "Advanced pricing generator", included: true },
    ],
    featured: false,
  },
];

const faqs = [
  {
    q: "01. Can I create different types of professional documents?",
    a: "Yes. You can generate proposals, scopes of work, PRDs, pricing sheets, quotations, and other client-ready documents in minutes using AI.",
  },
  {
    q: "02. How does Cleara simplify my entire client workflow?",
    a: "Cleara brings document creation, project management, AI assistance, and contract analysis into one workspace, so you can manage every stage of client work without switching tools.",
  },
  {
    q: "03. What happens after a proposal is approved by my client?",
    a: "Once approved, you can instantly convert the document into an active project where you can track deliverables, milestones, and progress from one workspace.",
  },
  {
    q: "04. Can Cleara help me avoid mistakes before signing a contract?",
    a: "Cleara reviews your contracts, highlights potential risks, unclear clauses, and missing details, giving you AI-powered guidance before you make a commitment.",
  },
  {
    q: "05. Is my data and client information secure on Cleara?",
    a: "Yes. Your documents are securely stored, and shared through protected, non-copyable links for added security. This gives you greater control over who can access your files.",
  },
  {
    q: "06. Can I start using Cleara for free before upgrading?",
    a: "Yes. You can begin with the Free plan to explore the platform and upgrade whenever you need more documents, projects, and AI features.",
  },
];

function FadeIn({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-x-hidden">
      {/* ──────── HERO ──────── */}
      <section className="relative bg-surface xl:h-297.5 overflow-hidden px-4 xl:px-10">
        <img
          src="/assets/icons/hero-vector.svg"
          alt=""
          className="absolute h-full w-full max-w-none"
        />
        <div className="relative z-10 flex flex-col items-center pt-10">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center bg-white rounded-[45px] md:rounded-[39px] w-full max-w-[500px] md:max-w-214.5 h-[58px] md:h-auto py-0 md:py-3.5 px-[14px] md:px-4.25"
          >
            <div className="flex items-center gap-[5px]">
              <div className="md:size-12 md:bg-primary md:rounded-[30px] flex items-center justify-center">
                <img
                  src="/assets/icons/logo-icon-mobile.svg"
                  alt=""
                  className="size-[25px] md:hidden"
                />
                <img
                  src="/assets/icons/ai-generate.svg"
                  alt=""
                  className="hidden md:block size-7.75"
                />
              </div>
              <span className="text-[20px] md:hidden font-medium text-primary leading-normal">
                Cleara
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden size-[30px] flex items-center justify-center"
            >
              <img
                src="/assets/icons/menu-hamburger.svg"
                alt="Menu"
                className="size-full"
              />
            </button>
            <div className="hidden md:flex items-center gap-[35px] text-[17px] leading-[20px] text-dark">
              <a href="#features" className="font-medium">
                Features
              </a>
              <a href="#how-it-works" className="font-normal">
                How it works
              </a>
              <a href="#testimonials" className="font-normal">
                Testimonials
              </a>
              <a href="#pricing" className="font-normal">
                Pricing
              </a>
              <a href="#faqs" className="font-normal">
                FAQs
              </a>
            </div>
            <button className="hidden md:block bg-primary text-white text-[16px] font-normal px-[22px] py-[13px] rounded-[30px] leading-[22px]">
              Sign In
            </button>
          </motion.nav>

          {/* Mobile full-screen menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 md:hidden"
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col"
                >
                  <div className="flex items-center justify-between px-5 pt-5 pb-3">
                    <div className="flex items-center gap-[5px]">
                      <img
                        src="/assets/icons/logo-icon-mobile.svg"
                        alt=""
                        className="size-[25px]"
                      />
                      <span className="text-[20px] font-medium text-primary leading-normal">
                        Cleara
                      </span>
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="size-[30px] flex items-center justify-center"
                    >
                      <img
                        src="/assets/icons/cancel.svg"
                        alt="Close"
                        className="size-full"
                      />
                    </button>
                  </div>
                  <nav className="flex flex-col gap-[30px] px-5 pt-8 pb-10">
                    {navLinks.map((link) => (
                      <a
                        key={link}
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[16px] font-medium text-dark hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                    <button className="w-full bg-primary text-white text-[16px] font-normal py-[15px] rounded-[30px] leading-[22px] mt-4">
                      Sign In
                    </button>
                  </nav>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-[48px] xl:mt-23.5 border border-[rgba(31,31,31,0.45)] rounded-[56px] w-full max-w-[347px] xl:max-w-101.75 py-3 xl:py-[13px] px-[19px] flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden"
            >
              <motion.div
                animate={{ x: [0, -367] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex items-center h-full gap-[6px] whitespace-nowrap"
              >
                {[
                  "Create Documents",
                  "Manage Projects",
                  "Review Contracts",
                ].map((text, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-[6px] text-[14px] text-black font-normal"
                  >
                    <span>{text}</span>
                    {i < 2 && (
                      <span className="size-[4px] rounded-full bg-[#1f1f1f] inline-block" />
                    )}
                  </span>
                ))}
                <span className="size-[4px] rounded-full bg-[#1f1f1f] inline-block" />
                {[
                  "Create Documents",
                  "Manage Projects",
                  "Review Contracts",
                ].map((text, i) => (
                  <span
                    key={`dup-${i}`}
                    className="flex items-center gap-[6px] text-[14px] text-black font-normal"
                  >
                    <span>{text}</span>
                    {i < 2 && (
                      <span className="size-[4px] rounded-full bg-[#1f1f1f] inline-block" />
                    )}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Text */}
          <div className="mt-7 xl:mt-[30px] flex flex-col items-center gap-9 xl:gap-[40px] w-full max-w-[364px] xl:max-w-[1479px]">
            <div className="text-center text-dark">
              <h1 className="font-semibold text-[30px] xl:text-[60px] leading-[normal] xl:leading-[75px]">
                The AI Workplace for
                <br />
                Freelancers & Agencies
              </h1>
              <p className="mt-3 xl:mt-[15px] text-[16px] xl:text-[18px] font-normal leading-[normal] xl:leading-[30px] w-full xl:w-[597px] mx-auto">
                Turn ideas into polished documents, manage projects with
                clients, and review contracts before signing — without juggling
                multiple tools.
              </p>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-[12px]">
              <button
                onClick={() => setShowWaitlist(true)}
                className="bg-primary text-white text-[16px] font-normal px-[22px] py-[13px] rounded-[30px] leading-[22px] h-[48px]"
              >
                Join Waitlist
              </button>
              <button className="border border-dark flex items-center gap-[10px] px-[22px] py-[13px] rounded-[30px] text-[16px] text-dark font-normal h-[48px]">
                <img
                  src="/assets/icons/video-fill.svg"
                  alt=""
                  className="size-[24px]"
                />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard screenshot in hero bg */}
        <div className="relative -bottom-8 mt-[45px] xl:mt-[94px] mx-auto w-full xl:w-[1173px] px-4 xl:px-10">
          <img
            src="/assets/screenshots/dashboard-document-activity.png"
            alt="Dashboard preview"
            className="w-full rounded-[5px] xl:rounded-[20px]"
            style={{
              boxShadow:
                "-49px -131px 39px 0px rgba(161,161,161,0), -31px -84px 36px 0px rgba(161,161,161,0.01), -18px -47px 30px 0px rgba(161,161,161,0.05), -8px -21px 22px 0px rgba(161,161,161,0.09), -2px -5px 12px 0px rgba(161,161,161,0.1)",
            }}
          />
        </div>
      </section>

      <section className="px-4 xl:px-10 ">
        <div className="w-full max-w-[1479px] mx-auto">
          {/* ──────── INTRO TEXT ──────── */}
          <FadeIn className="flex pt-10 pb-[60px] xl:pt-[60px] xl:pb-16">
            <div className="w-full xl:w-[85%] flex flex-col gap-5 xl:gap-[30px]">
              <p className="text-[20px] leading-[35px] xl:text-[30px] font-medium text-dark xl:leading-[50px]">
                Cleara is an AI powered platform designed for freelancers,
                agencies, and independent consultants who want a{" "}
                <span className="text-[rgba(26,26,26,0.7)]">
                  simpler way to handle client work. Instead of switching
                  between separate tools for documentation and project
                  management, Cleara brings everything together in one
                  workspace.
                </span>
              </p>
            </div>
          </FadeIn>

          {/* ──────── WHY CLEARA ──────── */}
          <FadeIn id="features" className="flex pb-[60px] xl:pb-20">
            <div className="flex flex-col gap-5 xl:gap-[30px] w-full">
              <p className="text-[18px] xl:text-[20px] font-medium text-darker">
                Why Cleara works better
              </p>
              <div className="flex flex-row gap-[25px] xl:gap-8 flex-wrap w-full">
                {whyClearaItems.map((item, i) => (
                  <div key={item} className="flex items-center gap-[12px]">
                    <div className="bg-surface-hover px-[14px] py-[8px] rounded-[6px]">
                      <span className="text-[18px] font-medium text-darker">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-[18px] font-normal text-darker xl:whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ──────── FEATURES ──────── */}
          <FadeIn id="how-it-works" className="pb-10 xl:pb-20">
            {/* Mobile: 3 stacked cards with embedded images */}
            <div className="flex flex-col gap-[30px] md:hidden">
              {/* How Cleara Works header */}
              <div className="flex flex-col gap-[20px] w-full text-[#1a1a1a]">
                <p className="text-[18px] font-normal leading-[20px]">
                  How Cleara Works
                </p>
                <div className="flex flex-col gap-[12px] leading-[25px]">
                  <p className="text-[24px] font-medium">
                    One Workplace . One Workflow
                  </p>
                  <p className="text-[18px] font-normal">
                    Generate, manage, and deliver client work without switching
                    between tools.
                  </p>
                </div>
              </div>
              {featureCards.map((card, i) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-[25px] w-full"
                >
                  <div className="border border-[rgba(50,138,147,0.2)] h-[347px] overflow-clip relative rounded-[10px] w-full">
                    <Image
                      src="/assets/screenshots/feature-preview.png"
                      alt=""
                      width={500}
                      height={500}
                      className="absolute -translate-x-1/2 h-[381px] left-1/2 rounded-[10px] top-[-18px] w-full overflow-hidden pointer-events-none object-cover"
                    />

                    <div className="absolute left-[9px] rounded-[5px] top-[9px] w-[792px] h-[507px] overflow-hidden pointer-events-none">
                      <Image
                        src={featureImages[i].inset}
                        alt=""
                        width={1000}
                        height={10x00}
                        className="h-[100.05%] w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] w-full">
                    <div className="flex items-center gap-[12px]">
                      <div className="bg-primary h-[28px] w-[32px] rounded-[5px] flex items-center justify-center">
                        <img src={card.icon} alt="" className="size-[18px]" />
                      </div>
                      <span className="text-[18px] font-medium leading-[22px] text-[#1a1a1a]">
                        {card.title}
                      </span>
                    </div>
                    <p className="text-[16px] font-normal leading-[normal] text-[#1a1a1a]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: accordion + shared preview */}
            <div className="hidden md:flex flex-col xl:flex-row xl:items-start justify-between gap-x-[73px] gap-y-12">
              <div className="flex flex-col gap-[73px] w-full xl:max-w-[648px] xl:shrink-0">
                <div className="flex flex-col gap-[20px] w-full xl:max-w-[429px]">
                  <p className="text-[18px] font-normal leading-[20px] text-darker">
                    How Cleara Works
                  </p>
                  <div className="flex flex-col gap-[14px] text-darker">
                    <p className="text-[24px] xl:text-[30px] font-semibold leading-[normal] xl:leading-[27px]">
                      One Workplace. One Workflow
                    </p>
                    <p className="text-[18px] font-normal leading-[25px]">
                      Generate, manage, and deliver client work without
                      switching between tools.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                  {featureCards.map((card, i) => (
                    <motion.div
                      key={card.title}
                      layout
                      onClick={() => setActiveFeature(i)}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="bg-white border border-primary-100 rounded-[10px] p-[19px] flex flex-col gap-[17px] overflow-hidden cursor-pointer"
                    >
                      <motion.div
                        layout
                        className="flex items-center gap-[12px]"
                      >
                        <div className="bg-primary rounded-[5px] flex items-center justify-center size-[32px]">
                          <img src={card.icon} alt="" className="size-[18px]" />
                        </div>
                        <span className="text-[18px] font-medium leading-[22px] text-dark">
                          {card.title}
                        </span>
                      </motion.div>
                      {activeFeature === i && (
                        <motion.p
                          key="desc"
                          initial={{ opacity: 0, y: 60 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="text-[16px] font-normal leading-[22px] text-dark ml-[44px]"
                        >
                          {card.description}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[15px] overflow-hidden w-full md:aspect-[16/9] xl:max-w-[762px] xl:aspect-[762/515] shrink-0">
                <div className="absolute inset-0 overflow-hidden rounded-[15px]">
                  <img
                    src="/assets/screenshots/feature-preview.png"
                    alt=""
                    className="absolute w-[152.54%] h-[302.29%] left-[-46.64%] top-[-49.08%] max-w-none"
                  />
                </div>
                <div className="absolute inset-0 bg-black/7 rounded-[15px]" />
                <div className="absolute inset-[36px] rounded-[10px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeFeature}
                      src={featureImages[activeFeature].inset}
                      alt="Feature preview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="size-full object-cover rounded-[10px]"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ──────── TESTIMONIALS ──────── */}
      <section
        id="testimonials"
        className="bg-primary py-[60px] xl:py-0 xl:h-[696px] flex items-center justify-center overflow-hidden"
      >
        <div className="flex flex-col items-center w-full gap-[75px] px-4 xl:px-10">
          <div className="text-center text-white max-w-[529px]">
            <p className="text-[24px] xl:text-[30px] font-semibold leading-[normal] xl:leading-[29px]">
              Real Result From Real Users.
            </p>
            <p className="mt-3 xl:mt-[15px] text-[18px] font-normal leading-[26px] xl:leading-[25px]">
              Discover how Cleara helps freelancers and agencies simplify
              documentation, project management, and client collaboration.
            </p>
          </div>

          {/* Mobile: carousel without outer wrapper */}
          <div className="flex flex-col gap-[24px] w-full xl:hidden">
            <div className="bg-white min-h-[224px] rounded-[10px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIdx}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-6 py-[25px] px-[25px]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-[48px] rounded-full overflow-hidden shrink-0 bg-primary">
                        <img
                          src={testimonials[testimonialIdx].avatar}
                          alt={testimonials[testimonialIdx].name}
                          className="size-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[16px] font-medium text-[#262626] leading-6">
                          {testimonials[testimonialIdx].name}
                        </p>
                        <p className="text-[13px] font-normal text-[#262626] leading-[1.5]">
                          {testimonials[testimonialIdx].role}
                        </p>
                      </div>
                    </div>
                    <img
                      src="/assets/icons/quote.svg"
                      alt=""
                      className="size-[40px] shrink-0"
                    />
                  </div>
                  <p className="text-[16px] font-normal leading-6 text-[#4c4c4d]">
                    {testimonials[testimonialIdx].quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-[10px]">
              <button
                onClick={() =>
                  setTestimonialIdx((p) =>
                    p === 0 ? testimonials.length - 1 : p - 1,
                  )
                }
                className="bg-white h-[35px] w-[40px] rounded-[5px] flex items-center justify-center"
              >
                <img
                  src="/assets/icons/arrow-left.svg"
                  alt="Prev"
                  className="size-5"
                />
              </button>
              <div className="flex items-center gap-[6px]">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`size-[10px] rounded-full transition-colors ${
                      i === testimonialIdx ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setTestimonialIdx((p) =>
                    p === testimonials.length - 1 ? 0 : p + 1,
                  )
                }
                className="border border-white h-[35px] w-[40px] rounded-[5px] flex items-center justify-center"
              >
                <img
                  src="/assets/icons/arrow-right.svg"
                  alt="Next"
                  className="size-5"
                />
              </button>
            </div>
          </div>

          {/* Desktop: 3 cards in a row */}
          <div className="hidden xl:block relative w-full max-w-[1479px]">
            <div className="bg-white rounded-[10px] border border-[#f7f7f8] p-[23px]">
              <div className="flex gap-[20px]">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#f1f1f3] rounded-[16px] p-[40px] flex-1 flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-[10px] min-w-0">
                        <div className="size-[50px] rounded-full overflow-hidden shrink-0 bg-primary">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[16px] font-medium text-[#262626] truncate">
                            {t.name}
                          </p>
                          <p className="text-[13px] font-normal text-[#262626] truncate">
                            {t.role}
                          </p>
                        </div>
                      </div>
                      <img
                        src="/assets/icons/quote.svg"
                        alt=""
                        className="size-[40px] shrink-0"
                      />
                    </div>
                    <p className="mt-[30px] text-[16px] font-normal leading-[1.5] text-[#4c4c4d]">
                      {t.quote}
                    </p>
                  </div>
                ))}
              </div>

              {/* Desktop controls */}
              <div className="flex items-center justify-center gap-[20px] mt-[30px]">
                <button
                  onClick={() =>
                    setTestimonialIdx((p) =>
                      p === 0 ? testimonials.length - 1 : p - 1,
                    )
                  }
                  className="bg-[#f1f1f1] border border-[rgba(238,248,211,0.1)] p-[7px] rounded-[6px]"
                >
                  <img
                    src="/assets/icons/arrow-left.svg"
                    alt="Prev"
                    className="size-[28px]"
                  />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      className={`w-[7px] h-[7px] rounded-full transition-colors ${
                        i === testimonialIdx ? "bg-primary" : "bg-[#f1f1f1]"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setTestimonialIdx((p) =>
                      p === testimonials.length - 1 ? 0 : p + 1,
                    )
                  }
                  className="bg-primary border border-[rgba(238,248,211,0.1)] p-[7px] rounded-[6px]"
                >
                  <img
                    src="/assets/icons/arrow-right.svg"
                    alt="Next"
                    className="size-[28px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── PRICING ──────── */}
      <FadeIn
        id="pricing"
        className="flex flex-col items-center py-[60px] px-4 xl:px-10"
      >
        <div className="flex flex-col gap-[25px] items-center w-full max-w-[1287px]">
          <div className="flex flex-col gap-[25px] items-center w-full max-w-[492px]">
            <div className="text-center text-darker">
              <p className="text-[24px] xl:text-[30px] font-semibold leading-[normal] xl:leading-[29px]">
                Transparent Pricing, No Surprises.
              </p>
              <p className="mt-3 xl:mt-[15px] text-[18px] font-normal leading-[26px] xl:leading-[25px] max-w-[450px] mx-auto">
                Start small, upgrade when needed, and access the tools you need
                to manage client work efficiently.
              </p>
            </div>

            {/* Billing toggle */}
            <div className="border border-primary-100 rounded-[10px] h-[50px] overflow-hidden flex w-full max-w-[356px] md:w-[351px] shrink-0">
              <button
                onClick={() => setBilling("monthly")}
                className={`w-[133px] text-center text-[16px] font-medium leading-[18px] transition-colors ${
                  billing === "monthly"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                MONTHLY
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`flex-1 flex items-center justify-center gap-[10px] transition-colors ${
                  billing === "yearly"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                <span className="text-[16px] font-medium leading-[18px]">
                  YEARLY
                </span>
                <span className="text-[10px] sm:text-[12px] font-normal">
                  SAVE UP TO 40%
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] md:flex-row md:gap-[30px] md:flex-wrap md:justify-center w-full">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[10px] w-full md:w-[409px] overflow-hidden ${
                  plan.featured
                    ? "bg-primary border border-[rgba(255,255,255,0.31)]"
                    : "bg-white border border-[rgba(26,26,26,0.3)]"
                }`}
              >
                <div className="p-[24px] md:p-[27px] flex flex-col gap-[22px] md:gap-[40px]">
                  <div
                    className={`flex flex-col gap-[14px] md:gap-[20px] ${plan.featured ? "text-white" : "text-dark"}`}
                  >
                    <div>
                      <p className="text-[20px] font-medium leading-[28px]">
                        {plan.name}
                      </p>
                      <p className="mt-[12px] leading-[40px]">
                        <span className="text-[36px] md:text-[40px] font-semibold">
                          $
                          {billing === "monthly"
                            ? plan.price.monthly
                            : plan.price.yearly}
                          /
                        </span>
                        <span className="text-[20px] font-medium">month</span>
                      </p>
                    </div>
                    <p className="text-[16px] font-normal leading-[24px]">
                      {plan.description}
                    </p>
                  </div>

                  <button
                    className={`w-full py-[13px] rounded-[30px] text-[16px] font-normal ${
                      plan.featured
                        ? "bg-white text-dark"
                        : "border border-black text-dark"
                    }`}
                  >
                    Get Started
                  </button>

                  <div className={plan.featured ? "text-white" : "text-black"}>
                    <p className="text-[18px] font-medium">What is included:</p>
                    <div className="mt-[15px] flex flex-col gap-[15px]">
                      {plan.features.map((feat) => (
                        <div
                          key={feat.text}
                          className="flex items-start gap-[6px]"
                        >
                          <img
                            src={
                              feat.included
                                ? plan.featured
                                  ? "/assets/icons/check-white.svg"
                                  : "/assets/icons/check.svg"
                                : "/assets/icons/cancel.svg"
                            }
                            alt={feat.included ? "✓" : "✗"}
                            className="size-[24px] shrink-0 mt-px"
                          />
                          <span className="text-[16px] font-normal leading-[20px]">
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ──────── COMPARISON TABLE ──────── */}
      <FadeIn className="flex justify-center py-[60px] px-4 xl:px-10">
        <div className="w-full max-w-[1479px] flex flex-col gap-[50px] items-center">
          <div className="text-center text-dark">
            <p className="text-[24px] xl:text-[30px] font-semibold leading-[normal] xl:leading-[39px]">
              Why Cleara Stands Out.
            </p>
            <p className="mt-3 xl:mt-[14px] text-[18px] font-normal leading-[25px]">
              Spend less time switching tools and more time delivering great
              work.
            </p>
          </div>

          <div className="overflow-x-auto w-full">
            <div className="grid grid-cols-3 w-full rounded-[10px] overflow-hidden text-[13px] md:text-[20px]">
              {/* Header row */}
              <div className="text-center py-[23px] bg-surface border border-[rgba(26,26,26,0.1)]">
                <span className="font-medium text-black">Features</span>
              </div>
              <div className="text-center py-[23px] bg-primary border-y border-white/20">
                <span className="font-medium text-white">Cleara</span>
              </div>
              <div className="text-center py-[23px] bg-primary-700 border-y border-white/20">
                <span className="font-medium text-white">Others</span>
              </div>

              {/* Data rows */}
              {comparisonFeatures.map((feat, idx) => (
                <Fragment key={idx}>
                  <div className="py-[19px] px-6 text-center text-[13px] md:text-[18px] font-normal text-black bg-surface flex items-center justify-center border-x border-[rgba(26,26,26,0.1)]">
                    {feat}
                  </div>
                  <div className="px-6 py-[19px] flex items-center justify-center text-center bg-primary">
                    <img
                      src={
                        comparisonCleara[idx]
                          ? "/assets/icons/check-component.svg"
                          : "/assets/icons/cross-component.svg"
                      }
                      alt={comparisonCleara[idx] ? "✓" : "✗"}
                      className="size-[24px]"
                    />
                  </div>
                  <div className="px-6 py-[19px] flex items-center justify-center text-[13px] text-center md:text-[18px] font-normal text-white bg-primary-700">
                    {typeof comparisonOthers[idx] === "boolean" ? (
                      <img
                        src={
                          comparisonOthers[idx]
                            ? "/assets/icons/check-component.svg"
                            : "/assets/icons/cross-component.svg"
                        }
                        alt={comparisonOthers[idx] ? "✓" : "✗"}
                        className="size-[24px]"
                      />
                    ) : (
                      <span>{comparisonOthers[idx]}</span>
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ──────── FAQ ──────── */}
      <section
        id="faqs"
        className="bg-surface-hover py-[60px] flex justify-center"
      >
        <FadeIn className="w-[1290px] max-w-[1479px] px-4 xl:px-10">
          <div className="text-center text-dark mb-[30px] xl:mb-[50px]">
            <p className="text-[24px] xl:text-[30px] font-semibold leading-[normal] xl:leading-[29px]">
              Frequently Asked Questions
            </p>
            <p className="mt-3 xl:mt-[15px] text-[18px] font-normal leading-[25px]">
              Everything you need to know about Cleara
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-[30px] relative">
            {/* Vertical divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10 hidden xl:block" />

            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`py-[30px] not-last:border-b border-black/10 ${
                  i % 2 === 0 ? "xl:pr-8" : "xl:pl-8"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <p className="text-[18px] font-medium text-dark max-w-[80%]">
                    {faq.q}
                  </p>
                  <motion.img
                    src="/assets/icons/chevron-down.svg"
                    alt="Toggle"
                    className="size-[24px] shrink-0 ml-4"
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[16px] font-normal text-[rgba(26,26,26,0.8)] leading-[25px] pt-[25px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ──────── FOOTER ──────── */}
      <footer className="bg-primary-900 min-h-[511px] flex justify-center py-[50px] xl:pt-[90px]">
        <div className="w-full max-w-[1479px] px-5 xl:px-10 flex flex-col">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-[481px] justify-between">
            <div className="flex flex-col gap-[15px] w-full xl:w-[442px]">
              <div className="flex items-center gap-[5px]">
                <img
                  src="/assets/icons/ai-generate-footer.svg"
                  alt=""
                  className="size-[35px]"
                />
                <span className="text-[28px] font-semibold text-white">
                  Cleara
                </span>
              </div>
              <p className="text-[16px] font-medium text-white leading-normal">
                Cleara is an AI-powered workspace that helps freelancers,
                agencies, and consultants create professional documents, manage
                projects, and review contracts—all from one unified platform.
              </p>
            </div>

            <div className="flex flex-wrap justify-between gap-8 xl:gap-[120px] text-white">
              <div className="flex flex-col gap-[12px]">
                <p className="text-[16px] font-medium">Platform</p>
                <div className="flex flex-col gap-[8px] text-[14px] font-normal">
                  <a href="#">Why Cleara?</a>
                  <a href="#">Pricing</a>
                  <a href="#">FAQ</a>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <p className="text-[16px] font-medium">Legal & Support</p>
                <div className="flex flex-col gap-[8px] text-[14px] font-normal">
                  <a href="#">Contact Us</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <p className="text-[16px] font-medium">Links</p>
                <div className="flex flex-col gap-[8px] text-[14px] font-normal">
                  <a href="#">Features</a>
                  <a href="#">About Us</a>
                  <a href="#">How it Works</a>
                  <a href="#">Testimonials</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px] flex flex-col xl:flex-row items-start xl:items-end justify-between xl:gap-0">
            <div className="flex flex-col gap-[14px] w-full xl:w-[388px]">
              <p className="text-[16px] font-normal text-white">
                Be a part of our community
              </p>
              <div className="relative border border-white/20 rounded-[51px] h-[49px] flex items-center justify-between p-[4px] pr-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-[51px] px-4 pr-26 h-full bg-transparent text-[14px] font-normal text-white placeholder:text-white/60 outline-none flex-1 min-w-0"
                />
                <button className="absolute right-[4px] bg-white text-black text-[14px] font-medium px-[28px] py-[9px] rounded-[41px] shrink-0">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-white/20 my-[35px] xl:my-[50px]" />

            <div className="flex flex-col-reverse xl:flex-row items-center gap-5 xl:gap-[328px] w-full xl:w-auto">
              <div className="flex items-center justify-center gap-[10px]">
                <a href="#">
                  <img
                    src="/assets/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="size-[24px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="/assets/icons/x-twitter.svg"
                    alt="X"
                    className="w-[21px] h-[24px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="/assets/icons/tiktok.svg"
                    alt="TikTok"
                    className="size-[24px]"
                  />
                </a>
              </div>
              <p className="text-[14px] font-light text-white">
                © 2025 Docwrite. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ──────── WAITLIST MODAL ──────── */}
      <AnimatePresence>
        {showWaitlist && (
          <motion.div
            key="waitlist-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowWaitlist(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(26,26,26,0.12)] backdrop-blur-[7.5px] px-4"
          >
            <motion.div
              key="waitlist-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-[10px] w-full max-w-[607px] shrink-0 min-h-[452px]"
            >
              {/* Decorative vector */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                <img
                  src="/assets/icons/hero-vector.svg"
                  alt=""
                  className="absolute w-[300%] h-[300%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
                />
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowWaitlist(false)}
                className="absolute top-5 right-5 z-10 size-[32px] flex items-center justify-center rounded-full hover:bg-surface-hover transition-colors"
              >
                <img
                  src="/assets/icons/cancel.svg"
                  alt="Close"
                  className="size-[16px]"
                />
              </button>

              {/* Header */}
              <div className="relative z-[1] flex flex-col items-center text-center pt-[30px] xl:pt-[50px] px-5">
                <p className="text-[20px] xl:text-[24px] font-semibold text-black leading-[24px]">
                  Get Early Access to Cleara
                </p>
                <p className="mt-[12px] text-[14px] font-normal text-black leading-[18px] max-w-[357px]">
                  Sign up for early access and discover how one unified
                  workspace can transform the way you work with clients.
                </p>
              </div>

              {/* Inner card */}
              <div className="relative z-[1] mx-5 xl:mx-[63px] mt-[20px] xl:mt-[30px] bg-white/60 rounded-[10px] overflow-hidden">
                <div className="bg-gradient-to-b from-[rgba(215,233,235,0.5)] to-[rgba(122,132,133,0)] mx-[7px] my-[7px] rounded-[10px] flex flex-col items-center pt-[25px] pb-[27px] px-4">
                  <p className="text-[16px] font-semibold text-black leading-[16px]">
                    Join the waitlist
                  </p>
                  <p className="mt-[10px] text-[14px] font-normal text-black leading-[14px]">
                    Sign up now for early notification upon launch.
                  </p>

                  {/* Email input */}
                  <div className="flex items-center bg-[rgba(255,255,255,0.83)] border border-[rgba(53,145,155,0.15)] rounded-[50px] h-[50px] w-full max-w-[340px] mt-[36px]">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-transparent text-[14px] text-black placeholder:text-black/50 outline-none pl-[25px] pr-2 min-w-0"
                    />
                    <button
                      onClick={() => setShowWaitlist(false)}
                      className="bg-primary text-white text-[14px] font-medium leading-[14px] px-[20px] py-[11px] rounded-[50px] mr-[4px] shrink-0 hover:bg-primary-700 transition-colors"
                    >
                      Join Waitlist
                    </button>
                  </div>

                  {/* Social icons */}
                  <div className="flex items-center gap-[8px] mt-[25px]">
                    <a href="#">
                      <img
                        src="/assets/icons/linkedin-primary.svg"
                        alt="LinkedIn"
                        className="size-[24px]"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="/assets/icons/x-twitter-primary.svg"
                        alt="X"
                        className="w-[21px] h-[24px]"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="/assets/icons/tiktok-primary.svg"
                        alt="TikTok"
                        className="size-[24px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
