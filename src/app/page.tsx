import { ArrowUpRight, Heart, Search, ShoppingBag, Sparkles } from "lucide-react";

const products = [
  { name: "Everyday Relaxed Tee", category: "Essentials", price: "₦18,500", tag: "Bestseller", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85" },
  { name: "Classic Denim", category: "Bottoms", price: "₦42,000", tag: "New", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85" },
  { name: "Everyday Sneakers", category: "Footwear", price: "₦56,000", tag: "", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85" },
  { name: "Minimal Crossbody", category: "Accessories", price: "₦29,500", tag: "", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-black px-4 py-2 text-center text-xs tracking-wide text-white">New season, new staples — enjoy free delivery on orders over ₦100,000</div>
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="#" className="text-2xl font-black tracking-[-0.08em]">wearme<span className="text-orange-600">.</span></a>
          <nav className="hidden gap-8 text-sm md:flex"><a href="#shop">New arrivals</a><a href="#shop">Clothing</a><a href="#shop">Accessories</a><a href="#story">Our story</a></nav>
          <div className="flex items-center gap-4"><button aria-label="Search"><Search size={19}/></button><button aria-label="Wishlist"><Heart size={19}/></button><button aria-label="Shopping bag" className="flex items-center gap-2"><ShoppingBag size={19}/><span className="hidden text-sm sm:inline">Bag (0)</span></button></div>
        </div>
      </header>
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:py-16">
        <div className="py-8 md:py-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-2 text-xs"><Sparkles size={14} className="text-orange-600"/> THE EVERYDAY EDIT</div>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-7xl">Your style.<br/>Your everyday<br/><span className="text-orange-600">essential.</span></h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[var(--muted)]">Pieces that feel like you. Discover considered everyday fashion, made for wherever life takes you.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#shop" className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-medium text-white">Shop the collection <ArrowUpRight size={17}/></a><a href="#story" className="rounded-full border border-[var(--line)] px-6 py-4 text-sm">Discover Wearme</a></div>
          <div className="mt-12 flex items-center gap-4 text-xs text-[var(--muted)]"><div className="flex -space-x-2">{["A","T","M"].map(x=><span key={x} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--paper)] bg-orange-100 font-semibold text-orange-900">{x}</span>)}</div><span><b className="text-black">Made for real life.</b><br/>Loved by the everyday you.</span></div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#e9e2d9] sm:min-h-[560px]">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=90" alt="Friends exploring everyday fashion" className="absolute h-full w-full object-cover"/>
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur"><p className="text-xs text-neutral-500">THE NEW COLLECTION</p><p className="mt-1 font-semibold">Everyday, elevated.</p></div>
        </div>
      </section>
      <section id="shop" className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">Curated for you</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">The latest pieces</h2></div><a href="#shop" className="hidden items-center gap-2 text-sm sm:flex">View all <ArrowUpRight size={16}/></a></div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">{products.map((p,i)=><article key={p.name} className="group"><div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#eee9e3]"><img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/>{p.tag&&<span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider">{p.tag}</span>}<button aria-label={"Add "+p.name+" to wishlist"} className="absolute right-3 top-3 rounded-full bg-white p-2.5"><Heart size={16}/></button><button className="absolute bottom-3 left-3 right-3 rounded-full bg-white/95 py-3 text-xs font-semibold opacity-100 transition sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">Quick add +</button></div><div className="pt-4"><p className="text-xs text-neutral-500">{p.category}</p><h3 className="mt-1 text-sm font-medium">{p.name}</h3><p className="mt-2 text-sm font-semibold">{p.price}</p></div></article>)}</div>
      </section>
      <section id="story" className="mx-auto max-w-7xl px-5 py-12"><div className="rounded-[2rem] bg-[#eee9e3] px-6 py-12 text-center sm:px-12 sm:py-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">Less, but better</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">A wardrobe that works<br className="hidden sm:block"/> as hard as you do.</h2><p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-neutral-600">Wearme is about finding your own rhythm — with versatile pieces, thoughtful details, and style that never tries too hard.</p><a href="#shop" className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-4 text-sm text-white">Find your fit <ArrowUpRight size={16}/></a></div></section>
      <footer className="mt-10 border-t border-[var(--line)]"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between"><span className="text-lg font-black tracking-[-0.08em] text-black">wearme<span className="text-orange-600">.</span></span><span>Everyday style, considered.</span><span>© {new Date().getFullYear()} Wearme. All rights reserved.</span></div></footer>
    </main>
  );
}
