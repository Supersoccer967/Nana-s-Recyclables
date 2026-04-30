import { createFileRoute, Link } from "@tanstack/react-router";
import { Book, Disc, Film, Lamp, Coffee, Gem } from "lucide-react";

export const Route = createFileRoute("/treasures")({
  head: () => ({
    meta: [
      { title: "Treasures — Nana's Recyclables" },
      { name: "description", content: "A peek at the kinds of secondhand finds waiting at Nana's Recyclables in Claremont, NH." },
      { property: "og:title", content: "Treasures — Nana's Recyclables" },
      { property: "og:description", content: "Books, vinyl, movies, decor, glassware and more — always rotating." },
    ],
  }),
  component: Treasures,
});

const categories = [
  { icon: Book, title: "Books", body: "Paperbacks, hardcovers, cookbooks, kid's books — pick a stack." },
  { icon: Film, title: "Movies", body: "VHS classics and DVDs, from the campy to the iconic." },
  { icon: Disc, title: "Vinyl Records", body: "Pop, rock, country, jazz — drop the needle." },
  { icon: Lamp, title: "Vintage Decor", body: "Lamps, frames, prints, and that one weird thing you love." },
  { icon: Coffee, title: "Glass & Kitchenware", body: "Mugs, dishes, depression glass, and quirky finds." },
  { icon: Gem, title: "Curiosities", body: "Trinkets, costume jewelry, oddities — never the same twice." },
];

function Treasures() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-10">
        <p className="text-sm uppercase tracking-widest text-terracotta font-semibold">What's inside</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
          A little of everything — and a lot of charm.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Our shelves are always shifting. Here's a taste of what you might find on any given afternoon.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-border/60 bg-card p-7 shadow-soft hover:shadow-warm hover:-translate-y-1 transition">
            <div className="h-14 w-14 rounded-xl bg-mustard/30 text-terracotta flex items-center justify-center mb-5 group-hover:gradient-warm group-hover:text-primary-foreground transition">
              <c.icon className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl mb-1.5">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="rounded-3xl bg-cream paper-texture border border-border/60 p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl">The best way to shop is in person.</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Inventory turns over fast — what you see today may be gone tomorrow (and there'll be something
            new in its place).
          </p>
          <Link to="/visit" className="inline-flex mt-7 items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-soft hover:opacity-90">
            Plan your visit
          </Link>
        </div>
      </section>
    </>
  );
}
