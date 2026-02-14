import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { MenuItem, Lang } from "@/data/menuData";
import { Flame, Star, ChefHat, Leaf, X } from "lucide-react";

const labelConfig = {
  chef: { icon: ChefHat, text: { en: "Chef's choice", tr: "Şef seçimi", ru: "Выбор шефа" }, className: "badge-chef" },
  popular: { icon: Star, text: { en: "Popular", tr: "Popüler", ru: "Популярное" }, className: "badge-popular" },
  spicy: { icon: Flame, text: { en: "Spicy", tr: "Acılı", ru: "Острое" }, className: "badge-spicy" },
};

const allergenLabels: Record<Lang, string> = {
  en: "Allergens",
  tr: "Alerjenler",
  ru: "Аллергены",
};

const flavorLabels: Record<Lang, string> = {
  en: "Flavor Notes",
  tr: "Lezzet Notları",
  ru: "Вкусовые ноты",
};

interface Props {
  item: MenuItem | null;
  lang: Lang;
  open: boolean;
  onClose: () => void;
}

export default function DishModal({ item, lang, open, onClose }: Props) {
  if (!item) return null;

  const details = item.details?.[lang];

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md gap-0 overflow-hidden rounded-2xl border-border bg-card p-0 sm:rounded-2xl max-h-[90vh] overflow-y-auto">
        <VisuallyHidden>
          <DialogTitle>{item.name[lang]}</DialogTitle>
        </VisuallyHidden>

        {/* Close button over image */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-background/70 backdrop-blur-sm text-foreground transition-colors hover:bg-background"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Large image */}
        <div className="relative h-56 w-full overflow-hidden sm:h-64">
          <img
            src={item.image.replace("w=400&h=300", "w=800&h=600")}
            alt={item.name[lang]}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Content */}
        <div className="px-5 pb-6 pt-2">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-display text-xl font-bold text-foreground leading-tight">
              {item.name[lang]}
            </h2>
            <span className="flex-shrink-0 font-display text-xl font-bold text-gold">
              €{item.price}
            </span>
          </div>

          {/* Labels */}
          {item.labels && item.labels.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
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

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-secondary-foreground">
            {item.description[lang]}
          </p>

          {/* Extended details */}
          {details && (
            <div className="mt-4 space-y-3">
              {details.flavorNotes && (
                <div>
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-gold mb-1">
                    {flavorLabels[lang]}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">{details.flavorNotes}</p>
                </div>
              )}

              {details.allergens && (
                <div>
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-gold mb-1">
                    {allergenLabels[lang]}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {details.allergens.map((a) => (
                      <span key={a} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {details.dietary && details.dietary.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {details.dietary.map((d) => (
                    <span key={d} className="badge-dietary">
                      <Leaf className="h-3 w-3" />
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
