import type { Lang } from "@/data/menuData";

const langLabels: Record<Lang, string> = {
  en: "EN",
  tr: "TR",
  ru: "RU",
};

interface Props {
  current: Lang;
  onChange: (lang: Lang) => void;
}

export default function LanguageSwitcher({ current, onChange }: Props) {
  return (
    <div className="flex gap-1 rounded-full border border-border bg-secondary/60 p-1 backdrop-blur-md">
      {(Object.keys(langLabels) as Lang[]).map((lang) => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`rounded-full px-3 py-1 text-xs font-sans font-medium transition-all duration-200 ${
            current === lang
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {langLabels[lang]}
        </button>
      ))}
    </div>
  );
}
