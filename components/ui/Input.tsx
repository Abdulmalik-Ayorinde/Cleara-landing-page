"use client";

type InputVariant = "default" | "subscribe" | "ghost";

const baseClasses = "w-full text-[14px] font-normal outline-none";

const variantClasses: Record<InputVariant, string> = {
  default:
    "rounded-[30px] h-[48px] bg-[#edf0ef] border border-[rgba(38,42,27,0.05)] px-[20px] placeholder-[rgba(31,31,31,0.5)]",
  subscribe:
    "rounded-[51px] h-[49px] border border-white/20 bg-transparent px-4 placeholder-white/60",
  ghost: "bg-transparent border-none px-0 placeholder-[rgba(31,31,31,0.5)]",
};

export default function Input({
  variant = "default",
  className,
  ...props
}: {
  variant?: InputVariant;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}
