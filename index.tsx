import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-shop.jpg";
import treasuresImg from "@/assets/treasures.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nana's Recyclables — Secondhand Treasures in Claremont, NH" },
      { name: "description", content: "A cozy little secondhand shop in the Moody Building, downtown Claremont. Books, movies, vinyl, dishes, lamps, jewelry & more. 4.3★ on Google." },
      { property: "og:title", content: "Nana's Recyclables — Secondhand Treasures in Claremont, NH" },
      { property: "og:description", content: "A cozy little secondhand shop in the Moody Building. Come find your next treasure." },
    ],
  }),
  component: Home,
});

const reviews = [
  {
    text: "They do a lot of good for the community. You can find a variety of things in this store.",
    name: "Michele Reynolds",
    badge: "Local Guide · 93 reviews",
    rotate: "rotate-l-1",
  },
  {
    text: "Friendly staff. A little of everything. Kinda like an indoor flea market. Great prices — don't see what you're looking for? Ask! Dishes, jewelry, lamps, furniture, movies, collectables.",
    name: "Bob F.",
    badge: "Local Guide · 17 reviews",
    rotate: "rotate-r-1",
  },
  {
    text: "A little bit of everything with a warm and friendly lady at the helm.",
    name: "Fran Parker",
    badge: "6 reviews",
    rotate: "rotate-l-2",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-cream paper-texture" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-16 md:pt-20 md:pb-28 grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
          <div>
            <p className="font-hand text-3xl md:text-4xl text-terracotta -rotate-2 inline-block">
              hi friend —
            </p>
            <h1 className="mt-2 font-display text-[2.6rem] sm:text-5xl md:text-[4.4rem] leading-[1.02] tracking-tight">
              come dig through{" "}
              <span className="underline-squiggle">somebody's</span>{" "}
              old favorites.
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-md">
              We're a little secondhand shop in the Moody Building on Crescent Street. Dishes, lamps,
              jewelry, books, movies, furniture, the occasional collectable — kinda like an indoor flea
              market, with a friendly lady at the helm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/visit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-soft hover:opacity-90 transition">
                <MapPin className="h-4 w-4" /> Find the shop
              </Link>
              <a href="tel:6035424391" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3 font-semibold hover:border-terracotta hover:text-terracotta transition">
                <Phone className="h-4 w-4" /> (603) 542-4391
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-mustard text-mustard" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">4.3</span> on Google · 47 reviews
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] gradient-warm blur-3xl opacity-25" aria-hidden />
            <div className="relative">
              <span className="tape left-1/2 -translate-x-1/2 -top-3 rounded-sm" aria-hidden />
              <img
                src={heroImg}
                alt="Inside Nana's Recyclables — shelves of books, vinyl, glassware and trinkets"
                width={1600}
                height={1200}
                className="rounded-2xl shadow-warm w-full h-auto object-cover aspect-[4/3] rotate-r-1"
              />
            </div>
            <p className="font-hand text-2xl text-foreground/70 mt-6 text-center -rotate-1">
              "always something new on the shelves"
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE — handwritten list, not a feature grid */}
      <section className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <span className="tape left-6 -top-3 rotate-l-2" aria-hidden />
          <span className="tape right-6 -top-3 rotate-r-2" aria-hidden />
          <img
            src={treasuresImg}
            alt="Stack of vintage books, VHS tapes and vinyl records"
            loading="lazy"
            width={1200}
            height={1200}
            className="rounded-xl shadow-warm w-full h-auto object-cover aspect-square rotate-l-1"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="font-hand text-3xl text-terracotta -rotate-1">what's on the shelves</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-display leading-tight">
            A little of everything, honestly.
          </h2>
          <p className="mt-5 text-lg text-foreground/75 max-w-lg">
            Stock changes every week. Here's what regulars usually walk out with —
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-foreground/85">
            {[
              "Books & paperbacks",
              "Movies — VHS & DVD",
              "Vinyl records",
              "Dishes & glassware",
              "Lamps",
              "Jewelry",
              "Furniture",
              "Collectables",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 font-hand text-2xl leading-none">
                <span className="text-terracotta">✦</span> {t}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-sm text-muted-foreground italic max-w-md">
            "Don't see what you're looking for? Ask!" — Bob put it best.
          </p>
          <Link to="/treasures" className="inline-block mt-6 font-semibold text-terracotta hover:underline underline-offset-4">
            More about the shop →
          </Link>
        </div>
      </section>

      {/* REVIEWS — taped notes, real names */}
      <section className="bg-cream paper-texture border-y border-border/60">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="max-w-2xl mb-14">
            <p className="font-hand text-3xl text-terracotta -rotate-1">what folks are saying</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-display leading-tight">
              Straight from the Google reviews.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {reviews.map((r, i) => (
              <figure
                key={r.name}
                className={`relative bg-card border border-border/40 p-7 pt-9 shadow-warm ${r.rotate} hover:rotate-0 transition-transform`}
                style={{ marginTop: i === 1 ? "1.5rem" : 0 }}
              >
                <span className="tape left-1/2 -translate-x-1/2 -top-3" aria-hidden />
                <div className="flex mb-3">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-mustard text-mustard" />
                  ))}
                </div>
                <blockquote className="font-display text-[1.05rem] leading-snug text-foreground/90">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-hand text-2xl leading-none">{r.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.badge}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — note pinned to the wall */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="relative max-w-2xl mx-auto bg-card border border-border/60 px-8 py-12 md:px-14 md:py-16 shadow-warm rotate-l-1">
          <span className="tape left-1/2 -translate-x-1/2 -top-3" aria-hidden />
          <p className="font-hand text-3xl text-terracotta">p.s.</p>
          <h2 className="mt-1 font-display text-4xl md:text-5xl leading-tight">
            Open today 'til 5. Come on by.
          </h2>
          <p className="mt-4 text-foreground/75 text-lg">
            Moody Building · 30 Crescent St, Claremont, NH. Browse a while, chat with us, take home
            something with a story.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/visit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90">
              <MapPin className="h-4 w-4" /> Directions
            </Link>
            <a href="tel:6035424391" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-6 py-3 font-semibold hover:border-terracotta hover:text-terracotta">
              <Phone className="h-4 w-4" /> Call (603) 542-4391
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
