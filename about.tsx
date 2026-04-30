import { createFileRoute } from "@tanstack/react-router";
import storefront from "@/assets/storefront.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Nana's Recyclables" },
      { name: "description", content: "How a cozy secondhand shop in the Moody Building became a Claremont, NH favorite." },
      { property: "og:title", content: "Our Story — Nana's Recyclables" },
      { property: "og:description", content: "Meet the little secondhand shop with a big heart." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-10">
        <p className="font-hand text-3xl text-terracotta -rotate-1">our story</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
          A small shop with a soft spot for second chances.
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center pb-16">
        <div className="relative">
          <span className="tape left-1/2 -translate-x-1/2 -top-3" aria-hidden />
          <img
            src={storefront}
            alt="Brick storefront of Nana's Recyclables in Claremont, NH"
            loading="lazy"
            width={1400}
            height={1000}
            className="rounded-2xl shadow-warm w-full h-auto object-cover aspect-[5/4] rotate-l-1"
          />
        </div>
        <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
          <p>
            Tucked inside the historic <strong>Moody Building</strong> on Crescent Street, Nana's
            Recyclables is exactly what you'd hope a downtown thrift shop would be — small, friendly,
            and a little bit of everything.
          </p>
          <p>
            Regulars describe it as "kinda like an indoor flea market." You'll find dishes, jewelry,
            lamps, furniture, movies, books, vinyl, the odd collectable. If something catches your eye,
            ask. If something doesn't, ask anyway — chances are there's more in the back.
          </p>
          <p>
            We do our best to give good things a second life, keep prices fair, and be the kind of
            shop you actually want to spend an afternoon in.
          </p>
        </div>
      </section>

      <section className="bg-cream paper-texture border-y border-border/60 py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="font-hand text-3xl text-terracotta -rotate-1">in their words</p>
          <blockquote className="mt-4 font-display text-3xl md:text-4xl leading-snug">
            "A little bit of everything with a warm and friendly lady at the helm."
          </blockquote>
          <p className="mt-5 text-muted-foreground">— Fran Parker, Google review</p>
        </div>
      </section>
    </>
  );
}

