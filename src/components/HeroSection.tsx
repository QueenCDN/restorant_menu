import heroImage from "@/assets/hero-food.jpg";
import type { Lang } from "@/data/menuData";
import { translations } from "@/data/menuData";
import { ChevronDown } from "lucide-react";

interface Props {
  lang: Lang;
}

export default function HeroSection({ lang }: Props) {
  return (
    <div className="relative flex min-h-[85vh] flex-col items-center justify-end overflow-hidden">
      <img
        src={heroImage}
        alt="Mediterranean cuisine"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="gradient-overlay absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center px-6 pb-10 text-center">
        <span className="mb-3 text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold-light opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          Est. 2019
        </span>
        <h1
          className="font-display text-5xl font-bold leading-[1.1] text-foreground opacity-0 animate-fade-up sm:text-6xl"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          Terra<span className="text-gold">&</span>Mare
        </h1>
        <p
          className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-secondary-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          {translations.tagline[lang]}
        </p>

        <a
          href="#starters"
          className="mt-8 flex flex-col items-center gap-1 text-gold opacity-0 animate-fade-up transition-transform hover:translate-y-1"
          style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
        >
          <span className="text-xs font-sans font-medium uppercase tracking-widest">
            {translations.scrollDown[lang]}
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </div>
  );
}
