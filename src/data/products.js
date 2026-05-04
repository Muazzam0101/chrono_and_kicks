const WATCH_IMAGES = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542496658-919a4ff1d71c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522312346312-d495714f898c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1508685096489-7aac352d052d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511499767340-a159932a872c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1619134716292-3a339b1e46a1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&q=80&w=800",
];

const SHOE_IMAGES = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1606107557035-d6044a19c627?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600185365483-26d7a4c58270?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1560760596-935e750088b4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1491510899322-b420f283f444?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1595950613002-58804473539e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1543508282-6319a3e46bc1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
];

export const WATCHES = Array.from({ length: 30 }, (_, i) => ({
  id: `w-${i + 1}`,
  name: `CHRONO ${["X", "DELTA", "OMEGA", "NEO", "TITAN", "ONYX", "STEEL", "GOLD", "VOID", "ORBIT"][i % 10]} ${i + 1}`,
  price: Math.floor(Math.random() * 50000) + 10000,
  category: "CHRONO",
  tag: i % 5 === 0 ? "HOT" : i % 7 === 0 ? "LTD" : i % 3 === 0 ? "NEW" : null,
  image: WATCH_IMAGES[i % WATCH_IMAGES.length],
  description: "Precision engineered timepiece with raw aesthetic impact."
}));

export const SHOES = Array.from({ length: 30 }, (_, i) => ({
  id: `s-${i + 1}`,
  name: `${["NEO", "URBAN", "CARBON", "VANGUARD", "BLAZE", "KINETIC", "STEALTH", "GHOST", "PULSE", "ZENITH"][i % 10]} ${["SNKR", "BOOT", "RUNNER", "KICK", "STRIDE"][i % 5]} ${i + 1}`,
  price: Math.floor(Math.random() * 20000) + 5000,
  category: "KICKS",
  tag: i % 4 === 0 ? "SALE" : i % 6 === 0 ? "HOT" : i % 9 === 0 ? "NEW" : null,
  image: SHOE_IMAGES[i % SHOE_IMAGES.length],
  description: "Tactical footwear designed for durability and concrete performance."
}));

export const ALL_PRODUCTS = [...WATCHES, ...SHOES].sort(() => Math.random() - 0.5);

export const getProductsBySection = (section) => {
  switch(section) {
    case 'featured': return ALL_PRODUCTS.slice(0, 3);
    case 'hot': return ALL_PRODUCTS.filter(p => p.tag === 'HOT').slice(0, 10);
    case 'trending': return ALL_PRODUCTS.slice(10, 18);
    case 'picks': return ALL_PRODUCTS.slice(20, 28);
    case 'recommended': return ALL_PRODUCTS.slice(30, 38);
    default: return ALL_PRODUCTS;
  }
};
