export type Lang = "en" | "tr" | "ru";

export interface MenuItemDetails {
  flavorNotes?: string;
  allergens?: string[];
  dietary?: string[];
}

export interface MenuItem {
  id: string;
  image: string;
  price: number;
  labels?: ("chef" | "popular" | "spicy")[];
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  details?: Record<Lang, MenuItemDetails>;
}

export interface MenuCategory {
  id: string;
  title: Record<Lang, string>;
  items: MenuItem[];
}

export const translations = {
  tagline: {
    en: "A Mediterranean Journey on Every Plate",
    tr: "Her Tabakta Bir Akdeniz Yolculuğu",
    ru: "Средиземноморское путешествие в каждой тарелке",
  },
  scrollDown: {
    en: "Explore Menu",
    tr: "Menüyü Keşfet",
    ru: "Открыть Меню",
  },
};

export const menuData: MenuCategory[] = [
  {
    id: "starters",
    title: { en: "Starters", tr: "Başlangıçlar", ru: "Закуски" },
    items: [
      {
        id: "s1",
        image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop",
        price: 14,
        labels: ["chef"],
        name: { en: "Burrata & Heirloom Tomatoes", tr: "Burrata & Yerel Domates", ru: "Буррата с томатами" },
        description: {
          en: "Creamy burrata, vine-ripened tomatoes, basil oil, aged balsamic",
          tr: "Kremsi burrata, asma domatesi, fesleğen yağı, yıllanmış balsamik",
          ru: "Кремовая буррата, томаты, масло базилика, выдержанный бальзамик",
        },
        details: {
          en: { flavorNotes: "Rich, creamy, tangy with a sweet balsamic finish", allergens: ["Dairy"], dietary: ["Vegetarian", "Gluten-free"] },
          tr: { flavorNotes: "Zengin, kremsi, tatlı balsamik finişli ekşi", allergens: ["Süt ürünü"], dietary: ["Vejetaryen", "Glutensiz"] },
          ru: { flavorNotes: "Насыщенный, сливочный, с кислинкой и сладким бальзамиком", allergens: ["Молочные"], dietary: ["Вегетарианское", "Без глютена"] },
        },
      },
      {
        id: "s2",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        price: 16,
        labels: ["popular"],
        name: { en: "Grilled Octopus", tr: "Izgara Ahtapot", ru: "Осьминог на гриле" },
        description: {
          en: "Tender charred octopus, fingerling potatoes, chimichurri",
          tr: "Yumuşacık közlenmiş ahtapot, parmak patates, chimichurri",
          ru: "Нежный осьминог на углях, картофель, чимичурри",
        },
        details: {
          en: { flavorNotes: "Smoky, herbaceous with a bright chimichurri kick", allergens: ["Mollusks"], dietary: ["Gluten-free"] },
          tr: { flavorNotes: "Dumanlı, bitkisel, canlı chimichurri tadıyla", allergens: ["Yumuşakçalar"], dietary: ["Glutensiz"] },
          ru: { flavorNotes: "Копчёный, травяной с ярким чимичурри", allergens: ["Моллюски"], dietary: ["Без глютена"] },
        },
      },
      {
        id: "s3",
        image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=400&h=300&fit=crop",
        price: 12,
        labels: [],
        name: { en: "Mezze Platter", tr: "Meze Tabağı", ru: "Мезе ассорти" },
        description: {
          en: "Hummus, baba ganoush, tzatziki, warm pita bread",
          tr: "Humus, babaganuş, cacık, sıcak pide",
          ru: "Хумус, бабагануш, дзадзики, тёплая пита",
        },
        details: {
          en: { flavorNotes: "Earthy, garlicky, cool and refreshing", allergens: ["Dairy", "Gluten", "Sesame"], dietary: ["Vegetarian"] },
          tr: { flavorNotes: "Toprak, sarımsaklı, serin ve ferahlatıcı", allergens: ["Süt ürünü", "Gluten", "Susam"], dietary: ["Vejetaryen"] },
          ru: { flavorNotes: "Ореховый, чесночный, свежий и прохладный", allergens: ["Молочные", "Глютен", "Кунжут"], dietary: ["Вегетарианское"] },
        },
      },
    ],
  },
  {
    id: "mains",
    title: { en: "Main Courses", tr: "Ana Yemekler", ru: "Основные блюда" },
    items: [
      {
        id: "m1",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        price: 32,
        labels: ["chef", "popular"],
        name: { en: "Lamb Rack", tr: "Kuzu Pirzola", ru: "Каре ягнёнка" },
        description: {
          en: "Herb-crusted lamb rack, roasted vegetables, rosemary jus",
          tr: "Otlu kuzu pirzola, fırın sebze, biberiye jüsü",
          ru: "Каре ягнёнка в травяной корочке, овощи, соус с розмарином",
        },
        details: {
          en: { flavorNotes: "Succulent, aromatic with rosemary and thyme crust", allergens: ["Celery"], dietary: ["Gluten-free"] },
          tr: { flavorNotes: "Sulu, biberiye ve kekik kabuğuyla aromatik", allergens: ["Kereviz"], dietary: ["Glutensiz"] },
          ru: { flavorNotes: "Сочное, ароматное с корочкой из розмарина и тимьяна", allergens: ["Сельдерей"], dietary: ["Без глютена"] },
        },
      },
      {
        id: "m2",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop",
        price: 36,
        labels: [],
        name: { en: "Mediterranean Sea Bass", tr: "Akdeniz Levreği", ru: "Сибас по-средиземноморски" },
        description: {
          en: "Pan-seared sea bass, saffron risotto, lemon butter sauce",
          tr: "Tavada levrek, safran risotto, limonlu tereyağı sos",
          ru: "Сибас на сковороде, ризотто с шафраном, лимонный соус",
        },
        details: {
          en: { flavorNotes: "Delicate, buttery with saffron warmth and citrus brightness", allergens: ["Fish", "Dairy", "Gluten"] },
          tr: { flavorNotes: "Narin, tereyağlı, safran sıcaklığı ve narenciye tazeliği", allergens: ["Balık", "Süt ürünü", "Gluten"] },
          ru: { flavorNotes: "Деликатный, маслянистый с теплотой шафрана и цитрусовой свежестью", allergens: ["Рыба", "Молочные", "Глютен"] },
        },
      },
      {
        id: "m3",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop",
        price: 24,
        labels: ["spicy"],
        name: { en: "Penne Arrabbiata", tr: "Penne Arrabbiata", ru: "Пенне Арабьята" },
        description: {
          en: "Al dente penne, spicy tomato sauce, fresh chili, pecorino",
          tr: "Al dente penne, acılı domates sos, taze biber, pecorino",
          ru: "Пенне аль денте, острый томатный соус, чили, пекорино",
        },
        details: {
          en: { flavorNotes: "Bold, fiery tomato with a sharp pecorino finish", allergens: ["Gluten", "Dairy"], dietary: ["Vegetarian"] },
          tr: { flavorNotes: "Cesur, ateşli domates, keskin pecorino finişi", allergens: ["Gluten", "Süt ürünü"], dietary: ["Vejetaryen"] },
          ru: { flavorNotes: "Яркий, огненный томат с острым пекорино", allergens: ["Глютен", "Молочные"], dietary: ["Вегетарианское"] },
        },
      },
    ],
  },
  {
    id: "desserts",
    title: { en: "Desserts", tr: "Tatlılar", ru: "Десерты" },
    items: [
      {
        id: "d1",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
        price: 14,
        labels: ["popular"],
        name: { en: "Tiramisu", tr: "Tiramisu", ru: "Тирамису" },
        description: {
          en: "Classic Italian tiramisu, mascarpone, espresso, cocoa",
          tr: "Klasik İtalyan tiramisu, mascarpone, espresso, kakao",
          ru: "Классический тирамису, маскарпоне, эспрессо, какао",
        },
        details: {
          en: { flavorNotes: "Coffee-soaked, velvety mascarpone, bittersweet cocoa", allergens: ["Dairy", "Gluten", "Eggs"], dietary: ["Vegetarian"] },
          tr: { flavorNotes: "Kahveye batmış, kadifemsi mascarpone, acı-tatlı kakao", allergens: ["Süt ürünü", "Gluten", "Yumurta"], dietary: ["Vejetaryen"] },
          ru: { flavorNotes: "Кофейный, бархатный маскарпоне, горько-сладкое какао", allergens: ["Молочные", "Глютен", "Яйца"], dietary: ["Вегетарианское"] },
        },
      },
      {
        id: "d2",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
        price: 12,
        labels: ["chef"],
        name: { en: "Crème Brûlée", tr: "Krem Brüle", ru: "Крем-брюле" },
        description: {
          en: "Vanilla bean custard, caramelized sugar, fresh berries",
          tr: "Vanilya puding, karamelize şeker, taze meyveler",
          ru: "Ванильный крем, карамелизированный сахар, ягоды",
        },
        details: {
          en: { flavorNotes: "Silky vanilla custard with a crackling caramel top", allergens: ["Dairy", "Eggs"], dietary: ["Vegetarian", "Gluten-free"] },
          tr: { flavorNotes: "İpeksi vanilya puding, çıtır karamel üst", allergens: ["Süt ürünü", "Yumurta"], dietary: ["Vejetaryen", "Glutensiz"] },
          ru: { flavorNotes: "Шёлковый ванильный крем с хрустящей карамельной корочкой", allergens: ["Молочные", "Яйца"], dietary: ["Вегетарианское", "Без глютена"] },
        },
      },
    ],
  },
  {
    id: "drinks",
    title: { en: "Drinks", tr: "İçecekler", ru: "Напитки" },
    items: [
      {
        id: "dr1",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
        price: 16,
        labels: ["popular"],
        name: { en: "Signature Negroni", tr: "Özel Negroni", ru: "Фирменный Негрони" },
        description: {
          en: "Gin, Campari, sweet vermouth, orange peel",
          tr: "Cin, Campari, tatlı vermut, portakal kabuğu",
          ru: "Джин, Кампари, сладкий вермут, цедра апельсина",
        },
        details: {
          en: { flavorNotes: "Bitter, herbaceous, with a citrus aroma", allergens: [] },
          tr: { flavorNotes: "Acı, bitkisel, narenciye aromalı", allergens: [] },
          ru: { flavorNotes: "Горький, травяной, с цитрусовым ароматом", allergens: [] },
        },
      },
      {
        id: "dr2",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop",
        price: 8,
        labels: [],
        name: { en: "Fresh Lemonade", tr: "Taze Limonata", ru: "Свежий лимонад" },
        description: {
          en: "House-made lemonade, mint, sparkling water",
          tr: "Ev yapımı limonata, nane, soda",
          ru: "Домашний лимонад, мята, газированная вода",
        },
        details: {
          en: { flavorNotes: "Zesty, refreshing, with cooling mint", allergens: [], dietary: ["Vegan"] },
          tr: { flavorNotes: "Ferahlatıcı, serinletici nane ile", allergens: [], dietary: ["Vegan"] },
          ru: { flavorNotes: "Освежающий, с прохладной мятой", allergens: [], dietary: ["Веганское"] },
        },
      },
      {
        id: "dr3",
        image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=400&h=300&fit=crop",
        price: 12,
        labels: [],
        name: { en: "House Red Wine", tr: "Ev Kırmızı Şarap", ru: "Домашнее красное вино" },
        description: {
          en: "Selected regional red, full-bodied, oak-aged",
          tr: "Seçilmiş bölge kırmızısı, dolgun, meşe fıçıda yıllanmış",
          ru: "Региональное красное, полнотелое, выдержанное в дубе",
        },
        details: {
          en: { flavorNotes: "Dark berries, oak, smooth tannins with a long finish", allergens: ["Sulfites"] },
          tr: { flavorNotes: "Koyu meyveler, meşe, yumuşak tanenler, uzun bitiş", allergens: ["Sülfitler"] },
          ru: { flavorNotes: "Тёмные ягоды, дуб, мягкие танины с долгим послевкусием", allergens: ["Сульфиты"] },
        },
      },
    ],
  },
];
