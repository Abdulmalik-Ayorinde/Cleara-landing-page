"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ClearaLogo from "../shared/ClearaLogo";

export interface NavLink {
  label: string;
  href: string;
  highlighted?: boolean;
}

export default function Navbar({
  links,
  onSignIn,
}: {
  links: NavLink[];
  onSignIn?: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex h-[58px] w-full max-w-[500px] items-center justify-between rounded-[45px] bg-white px-[14px] py-0 md:h-auto md:max-w-214.5 md:rounded-[39px] md:py-3.5 md:px-4.25"
      >
        <div className="flex items-center gap-[5px]">
          <div className="flex items-center justify-center md:size-12 md:rounded-[30px] md:bg-primary">
            <Image
              src="/assets/icons/logo-icon-mobile.svg"
              alt=""
              width={25}
              height={25}
              className="md:hidden"
            />
            <Image
              src="/assets/icons/ai-generate.svg"
              alt=""
              width={31}
              height={31}
              className="hidden md:block"
            />
          </div>
          <span className="text-[20px] font-medium leading-normal text-primary md:hidden">
            Cleara
          </span>
        </div>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex size-[30px] items-center justify-center md:hidden"
        >
          <Image
            src="/assets/icons/menu-hamburger.svg"
            alt="Menu"
            width={30}
            height={30}
          />
        </button>

        <div className="hidden items-center gap-[35px] text-[17px] leading-[20px] text-dark md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.highlighted ? "font-medium" : "font-normal"}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={onSignIn}
          className="hidden rounded-[30px] bg-primary px-[22px] py-[13px] text-[16px] font-normal leading-[22px] text-white md:block"
        >
          Sign In
        </button>
      </motion.nav>

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
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-[360px] flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <div className="flex items-center gap-[5px]">
                  <Image
                    src="/assets/icons/logo-icon-mobile.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                  <span className="text-[20px] font-medium leading-normal text-primary">
                    Cleara
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex size-[30px] items-center justify-center"
                >
                  <Image
                    src="/assets/icons/cancel.svg"
                    alt="Close"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
              <nav className="flex flex-col gap-[30px] px-5 pt-8 pb-10">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] font-medium text-dark transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSignIn?.();
                  }}
                  className="mt-4 w-full rounded-[30px] bg-primary py-[15px] text-[16px] font-normal leading-[22px] text-white"
                >
                  Sign In
                </button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
