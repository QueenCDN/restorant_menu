import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import DishModal from "@/components/DishModal";
import { menuData, type Lang, type MenuItem } from "@/data/menuData";

const Index = () => {
  const [lang, setLang] = useState<Lang>("en");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed right-4 top-4 z-50">
        <LanguageSwitcher current={lang} onChange={setLang} />
      </div>

      <HeroSection lang={lang} />

      <main className="mx-auto max-w-lg px-4 pb-16">
        {menuData.map((category) => (
          <MenuSection key={category.id} category={category} lang={lang} onSelectItem={setSelectedItem} />
        ))}

        <footer className="mt-12 border-t border-border pt-6 text-center">
          <p className="font-display text-lg text-gold">Terra&Mare</p>
          <p className="mt-1 text-xs text-muted-foreground">© 2025 · All rights reserved</p>
        </footer>
      </main>

      <DishModal item={selectedItem} lang={lang} open={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default Index;
