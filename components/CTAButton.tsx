import { WHATSAPP_URL } from "@/lib/config";

type Props = {
  label?: string;
  href?: string;
  variant?: "solid" | "outline";
  size?: "sm" | "default";
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#BD7475]/70 hover:-translate-y-0.5 active:translate-y-0.5";

const variants = {
  solid:
    "bg-[#BD7475] text-[#FFF8EE] shadow-sm shadow-black/10 hover:bg-[#a96162] hover:shadow-[0_0_24px_rgba(189,116,117,0.5)]",
  outline:
    "border-2 border-[#E3AFB0] text-[#E3AFB0] hover:bg-[#E3AFB0] hover:text-[#174B4B]",
};

const sizes = {
  default: "px-5 py-2.5 text-sm md:px-7 md:py-3",
  sm: "px-4 py-2 text-xs",
};

export default function CTAButton({
  label = "Agende sua consulta",
  href = WHATSAPP_URL,
  variant = "solid",
  size = "default",
  external = true,
}: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {label}
      <svg
        className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </a>
  );
}
