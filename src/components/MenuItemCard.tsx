import type { MenuItem, Lang } from "@/data/menuData";
import { Flame, Star, ChefHat } from "lucide-react";

const labelConfig = {
  chef: { icon: ChefHat, text: { en: "Chef's choice", tr: "Şef seçimi", ru: "Выбор шефа" }, className: "badge-chef" },
  popular: { icon: Star, text: { en: "Popular", tr: "Popüler", ru: "Популярное" }, className: "badge-popular" },
  spicy: { icon: Flame, text: { en: "Spicy", tr: "Acılı", ru: "Острое" }, className: "badge-spicy" },
};

interface Props {
  item: MenuItem;
  lang: Lang;
  index: number;
  onSelect: (item: MenuItem) => void;
}

export default function MenuItemCard({ item, lang, index, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(item)}
      className="group flex w-full gap-4 rounded-xl bg-card/50 p-3 text-left transition-all duration-300 hover:bg-card/80 active:scale-[0.98] opacity-0 animate-fade-up cursor-pointer"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.name[lang]}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-base font-semibold leading-tight text-foreground">
              {item.name[lang]}
            </h3>
            <span className="flex-shrink-0 font-display text-base font-semibold text-gold">
              €{item.price}
            </span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {item.description[lang]}
          </p>
        </div>

        {item.labels && item.labels.length > 0 && (
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {item.labels.map((label) => {
              const config = labelConfig[label];
              const Icon = config.icon;
              return (
                <span key={label} className={config.className}>
                  <Icon className="mr-1 inline-block h-3 w-3" />
                  {config.text[lang]}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </button>
  );
}
