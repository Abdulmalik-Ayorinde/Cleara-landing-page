import Image from "next/image";

type LogoVariant = "white" | "primary" | "footer";

const iconConfig: Record<LogoVariant, { src: string; size: number; textSize: string }> = {
  white: { src: "/assets/icons/ai-generate.svg", size: 37, textSize: "text-[30px]" },
  primary: { src: "/assets/icons/ai-generate.svg", size: 30, textSize: "text-[24px]" },
  footer: { src: "/assets/icons/ai-generate-footer.svg", size: 35, textSize: "text-[28px]" },
};

export default function ClearaLogo({
  variant = "white",
  className,
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  const config = iconConfig[variant];
  const textColor = variant === "primary" ? "text-primary" : "text-white";

  return (
    <div className={`flex items-center gap-[5px] ${className ?? ""}`}>
      <Image
        alt="Cleara"
        src={config.src}
        width={config.size}
        height={config.size}
      />
      <span className={`font-sans ${config.textSize} font-semibold ${textColor}`}>
        Cleara
      </span>
    </div>
  );
}
