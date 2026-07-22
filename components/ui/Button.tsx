"use client";

type ButtonVariant = "primary" | "outline" | "muted" | "disabled";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-700 border border-transparent",
  outline: "border border-dark text-dark hover:bg-surface-hover",
  muted:
    "bg-[#f6f6f6] text-[rgba(26,26,26,0.8)] border border-[rgba(38,42,27,0.05)]",
  disabled: "bg-[#c2dee1] text-white pointer-events-none",
};

const sizeClasses = {
  sm: "py-[13px] text-[16px] rounded-[30px] h-[48px]",
  md: "py-[16px] text-[16px] rounded-[58px] h-[54px]",
};

export default function Button({
  variant = "primary",
  size = "sm",
  className,
  children,
  ...props
}: {
  variant?: ButtonVariant;
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`flex items-center justify-center font-normal leading-[22px] transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
