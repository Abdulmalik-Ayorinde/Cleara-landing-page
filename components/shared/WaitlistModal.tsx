"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Input from "@/components/ui/Input";

export default function WaitlistModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.08 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(26,26,26,0.12)] backdrop-blur-[7.5px] px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-[10px] w-full max-w-[607px] shrink-0 min-h-[452px]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <Image
            src="/assets/icons/hero-vector.svg"
            alt=""
            width={600}
            height={600}
            className="absolute w-[300%] h-[300%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
          />
        </div>

        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 size-[32px] flex items-center justify-center rounded-full hover:bg-surface-hover transition-colors"
        >
          <Image
            src="/assets/icons/cancel.svg"
            alt="Close"
            width={16}
            height={16}
          />
        </button>

        <div className="relative z-[1] flex flex-col items-center text-center pt-[30px] xl:pt-[50px] px-5">
          <p className="text-[20px] xl:text-[24px] font-semibold text-black leading-[24px]">
            Get Early Access to Cleara
          </p>
          <p className="mt-[12px] text-[14px] font-normal text-black leading-[18px] max-w-[357px]">
            Sign up for early access and discover how one unified
            workspace can transform the way you work with clients.
          </p>
        </div>

        <div className="relative z-[1] mx-5 xl:mx-[63px] mt-[20px] xl:mt-[30px] bg-white/60 rounded-[10px] overflow-hidden">
          <div className="bg-gradient-to-b from-[rgba(215,233,235,0.5)] to-[rgba(122,132,133,0)] mx-[7px] my-[7px] rounded-[10px] flex flex-col items-center pt-[25px] pb-[27px] px-4">
            <p className="text-[16px] font-semibold text-black leading-[16px]">
              Join the waitlist
            </p>
            <p className="mt-[10px] text-[14px] font-normal text-black leading-[14px]">
              Sign up now for early notification upon launch.
            </p>

            <div className="relative flex items-center bg-[rgba(255,255,255,0.83)] border border-[rgba(53,145,155,0.15)] rounded-[50px] h-[50px] w-full max-w-[340px] mt-[36px] p-[3px]">
              <Input
                type="email"
                placeholder="Enter your email"
                variant="ghost"
                className="h-full rounded-[50px] flex-1 min-w-0 pl-[15px] pr-[140px] text-black placeholder-black/50"
              />
              <button
                onClick={onClose}
                className="absolute right-[3px] h-[42px] bg-primary text-white text-[14px] font-medium leading-[14px] px-[20px] rounded-[50px] shrink-0 hover:bg-primary-700 transition-colors"
              >
                Join Waitlist
              </button>
            </div>

            <div className="flex items-center gap-[8px] mt-[25px]">
              <a href="#">
                <Image
                  src="/assets/icons/linkedin-primary.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/icons/x-twitter-primary.svg"
                  alt="X"
                  width={21}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/icons/tiktok-primary.svg"
                  alt="TikTok"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
