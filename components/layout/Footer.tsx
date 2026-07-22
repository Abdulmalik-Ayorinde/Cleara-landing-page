"use client";

import Image from "next/image";
import ClearaLogo from "../shared/ClearaLogo";
import Input from "../ui/Input";

const linkColumns = [
  {
    title: "Platform",
    links: [
      { label: "Why Cleara?", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Links",
    links: [
      { label: "Features", href: "#" },
      { label: "About Us", href: "#" },
      { label: "How it Works", href: "#" },
      { label: "Testimonials", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: "/assets/icons/linkedin.svg", href: "#", alt: "LinkedIn" },
  { icon: "/assets/icons/x-twitter.svg", href: "#", alt: "X" },
  { icon: "/assets/icons/tiktok.svg", href: "#", alt: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="flex min-h-[511px] justify-center bg-primary-900 py-[50px] lg:pt-[100px] lg:pb-10">
      <div className="flex w-full max-w-[1479px] flex-col px-5 lg:px-15">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-[48px]">
          <div className="flex w-full flex-col gap-[15px] lg:w-[442px]">
            <ClearaLogo variant="footer" />
            <p className="text-[16px] font-medium leading-normal text-white">
              Cleara is an AI-powered workspace that helps freelancers,
              agencies, and consultants create professional documents, manage
              projects, and review contracts—all from one unified platform.
            </p>
          </div>

          <div className="flex flex-wrap justify-between gap-8 lg:justify-normal lg:gap-15 xl:gap-[120px] text-white">
            {linkColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-[12px]">
                <p className="text-[16px] font-medium">{col.title}</p>
                <div className="flex flex-col gap-[8px] text-[14px] font-normal">
                  {col.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block my-[35px] h-px w-full bg-white/20 lg:my-[50px]" />

        <div className="mt-[40px] lg:mt-0 flex flex-col items-start justify-between gap-[35px] lg:flex-row lg:items-end lg:gap-0">
          <div className="flex w-full flex-col gap-[14px] lg:w-[388px]">
            <p className="text-[16px] font-normal text-white">
              Be a part of our community
            </p>
            <div className="relative flex h-[49px] items-center justify-between rounded-[51px] border border-white/20">
              <Input
                type="email"
                placeholder="Enter your email"
                variant="subscribe"
                className="flex-1 min-w-0 pr-34 text-white"
              />
              <button className="absolute right-[4px] shrink-0 rounded-[41px] bg-white px-[28px] py-[9px] text-[14px] font-medium text-black">
                Subscribe
              </button>
            </div>
          </div>

          <p className="hidden lg:flex text-[14px] font-light text-white">
            &copy; 2025 Cleara. All rights reserved.
          </p>

          <div className="hidden lg:flex items-center justify-center gap-[10px]">
            {socialLinks.map((link) => (
              <a key={link.alt} href={link.href}>
                <Image src={link.icon} alt={link.alt} width={24} height={24} />
              </a>
            ))}
          </div>

          <div className="lg:hidden h-px w-full bg-white/20" />

          <div className="lg:hidden flex flex-col w-full items-center justify-center gap-5 lg:w-auto lg:gap-[328px]">
            <p className="text-[14px] font-light text-white">
              &copy; 2025 Cleara. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-[10px]">
              {socialLinks.map((link) => (
                <a key={link.alt} href={link.href}>
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
