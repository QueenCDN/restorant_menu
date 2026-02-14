import type { MenuCategory, Lang, MenuItem } from "@/data/menuData";
import MenuItemCard from "./MenuItemCard";

interface Props {
  category: MenuCategory;
  lang: Lang;
  onSelectItem: (item: MenuItem) => void;
}

export default function MenuSection({ category, lang, onSelectItem }: Props) {
  return (
    <section id={category.id} className="py-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="menu-divider flex-1" />
        <h2 className="font-display text-xl font-semibold tracking-wide text-gold whitespace-nowrap">
          {category.title[lang]}
        </h2>
        <div className="menu-divider flex-1" />
      </div>

      <div className="flex flex-col gap-3">
        {category.items.map((item, i) => (
          <MenuItemCard key={item.id} item={item} lang={lang} index={i} onSelect={onSelectItem} />
        ))}
      </div>
    </section>
  );
}
