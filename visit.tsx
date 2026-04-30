import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Nana's Recyclables in Claremont, NH" },
      { name: "description", content: "Find Nana's Recyclables at 30 Crescent St in the Moody Building, Claremont, NH. Hours, directions and contact info." },
      { property: "og:title", content: "Visit Nana's Recyclables — Claremont, NH" },
      { property: "og:description", content: "30 Crescent St, Claremont, NH 03743 · (603) 542-4391" },
    ],
  }),
  component: Visit,
});

const hours = [
  { day: "Monday", time: "10 AM – 5 PM" },
  { day: "Tuesday", time: "10 AM – 5 PM" },
  { day: "Wednesday", time: "10 AM – 5 PM" },
  { day: "Thursday", time: "10 AM – 5 PM" },
  { day: "Friday", time: "10 AM – 5 PM" },
  { day: "Saturday", time: "10 AM – 4 PM" },
  { day: "Sunday", time: "Closed" },
];

function Visit() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-10">
        <p className="text-sm uppercase tracking-widest text-terracotta font-semibold">Come see us</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
          Stop in. Stay a while.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          We're easy to find inside the historic Moody Building on Crescent Street in downtown Claremont.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16 grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="rounded-2xl bg-card border border-border/60 p-7 shadow-soft">
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-xl gradient-warm flex items-center justify-center text-primary-foreground shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl">Address</h3>
                <p className="mt-1 text-foreground/85">Moody Building<br />30 Crescent St<br />Claremont, NH 03743</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nana%27s+Recyclables+30+Crescent+St+Claremont+NH+03743"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-terracotta font-semibold hover:underline underline-offset-4"
                >
                  <Navigation className="h-4 w-4" /> Get directions
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-border/60 p-7 shadow-soft">
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-xl gradient-warm flex items-center justify-center text-primary-foreground shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl">Call us</h3>
                <a href="tel:6035424391" className="block mt-1 text-foreground/85 hover:text-terracotta">(603) 542-4391</a>
                <p className="text-sm text-muted-foreground mt-1">We're happy to answer questions about what's currently in stock.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-border/60 p-7 shadow-soft">
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-xl gradient-warm flex items-center justify-center text-primary-foreground shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl">Hours</h3>
                <ul className="mt-3 divide-y divide-border/60">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between py-2 text-sm">
                      <span className="font-medium">{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground italic">Hours may vary on holidays — give us a call to confirm.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border/60 shadow-warm min-h-[400px]">
          <iframe
            title="Map to Nana's Recyclables"
            src="https://www.google.com/maps?q=30+Crescent+St,+Claremont,+NH+03743&output=embed"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
