"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ClearaLogo from "@/components/shared/ClearaLogo";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-white  p-[14px]">
      {/* Left panel */}
      <div
        className="relative hidden min-h-screen w-[50%] flex-col justify-between p-[63px] lg:flex inset-0 bg-gradient-to-br from-primary-900/70 via-primary-700/50 to-primary/30 rounded-[10px]"
        style={{
          backgroundImage: "url('/assets/images/signup-bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <ClearaLogo variant="white" className="relative z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-[553px] self-start text-white"
        >
          <h1 className="text-[45px] font-bold leading-[57px]">
            From idea to delivery—documents made simple.
          </h1>
          <p className="mt-[15px] text-[18px] font-semibold">
            Cleara AI generates, secures, and tracks everything.
          </p>
        </motion.div>
      </div>

      {/* Right panel */}
      <div className="flex w-full items-center justify-center lg:w-[50%] py-30">
        <div className="flex w-full max-w-[446px] flex-col items-center gap-[20px] rounded-[10px] border border-[#ebf4f5] bg-[#fbfbfb] px-[39px] pb-[39px] pt-[39px] max-lg:mx-6 max-lg:my-10 max-lg:border-none">
          <ClearaLogo variant="primary" className="lg:hidden" />

          {/* Card icon */}
          <div className="flex size-[53px] items-center justify-center rounded-full bg-gradient-to-b from-[rgba(93,167,175,0.2)] to-[rgba(53,145,155,0.04)] p-[10px]">
            <div className="size-[33px]">
              <Image
                alt=""
                src="/assets/icons/app-icon-card.svg"
                width={33}
                height={33}
              />
            </div>
          </div>

          {/* Card header */}
          <div className="flex w-[329px] max-w-full flex-col items-center gap-[12px] text-center leading-normal text-darker">
            <h2 className="w-full text-center text-[24px] font-semibold">
              Welcome to Cleara
            </h2>
            <p className="w-full text-[14px] font-normal">
              Create, share, and track client documents instantly
            </p>
          </div>

          {/* Form */}
          <div className="flex w-full flex-col items-start gap-[25px]">
            {/* Google OAuth */}
            <div className="flex w-full flex-col items-center gap-[25px]">
              <button
                type="button"
                className="flex h-[48px] w-full items-center justify-center gap-[11px] rounded-[30px] border border-[rgba(38,42,27,0.05)] bg-[#f6f6f6] py-[16px]"
              >
                <Image
                  alt=""
                  src="/assets/icons/google.svg"
                  width={25}
                  height={25}
                  className="shrink-0"
                />
                <span className="text-[16px] font-medium leading-[15px] text-[rgba(26,26,26,0.8)]">
                  Continue with google
                </span>
              </button>
              <p className="w-full text-center text-[14px] font-normal leading-normal text-[rgba(31,31,31,0.8)]">
                or sign up with email
              </p>
            </div>

            {/* Input fields */}
            <div className="flex w-full flex-col items-start gap-[25px]">
              <div className="flex w-full flex-col items-start gap-[20px]">
                {/* Email */}
                <div className="flex w-full flex-col items-start gap-[10px]">
                  <label className="w-full text-[15px] font-normal leading-[18px] text-dark">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Johndoe123@gmail.com"
                    className="text-darker"
                  />
                </div>

                {/* Password */}
                <div className="flex w-full flex-col items-start gap-[12px]">
                  <div className="flex w-full flex-col items-start gap-[10px]">
                    <label className="w-full text-[15px] font-normal leading-[18px] text-dark">
                      Password
                    </label>
                    <div className="relative flex h-[48px] w-full items-center rounded-[30px] border border-[rgba(38,42,27,0.05)] bg-[#edf0ef]">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="xxxxxxxxxx"
                        className="!border-none !bg-transparent text-darker"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-[20px] flex size-[20px] items-center justify-center"
                      >
                        <Image
                          alt=""
                          src="/assets/icons/eye.svg"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Terms */}
                  <p className="flex w-full flex-wrap items-baseline gap-x-[3px] text-[12px] font-normal leading-normal text-[rgba(26,26,26,0.7)]">
                    <span>By signing up, you agree to our</span>
                    <button
                      type="button"
                      className="font-normal text-primary hover:underline"
                    >
                      Terms of Service
                    </button>
                    <span>and</span>
                    <button
                      type="button"
                      className="font-normal text-primary hover:underline"
                    >
                      Privacy Policy
                    </button>
                  </p>
                </div>
              </div>

              {/* CTA + Sign In */}
              <div className="flex w-full flex-col items-center gap-[12px]">
                <Button
                  type="submit"
                  variant="disabled"
                  size="md"
                  className="w-full hover:bg-primary"
                >
                  Continue to Sign Up
                </Button>
                <p className="flex items-baseline justify-center gap-x-[3px] text-center text-[14px] font-normal leading-[15px] text-[rgba(26,26,26,0.7)]">
                  <span>Already have an account?</span>
                  <button
                    type="button"
                    className="text-[16px] font-medium leading-[15px] text-primary hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
