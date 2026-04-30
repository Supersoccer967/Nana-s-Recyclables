import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream paper-texture">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl mb-2">Nana's Recyclables</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            A cozy little secondhand shop tucked inside the historic Moody Building in Claremont, NH.
            Come hunt for your next treasure.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-terracotta mt-0.5" />
            <span>Moody Building<br />30 Crescent St, Claremont, NH 03743</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-terracotta" />
            <a href="tel:6035424391" className="hover:text-terracotta">(603) 542-4391</a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-terracotta" />
            <span>Open today · Closes 5 PM</span>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-display text-lg mb-2">Wander</h4>
          <Link to="/" className="block hover:text-terracotta">Home</Link>
          <Link to="/about" className="block hover:text-terracotta">Our Story</Link>
          <Link to="/treasures" className="block hover:text-terracotta">Treasures</Link>
          <Link to="/visit" className="block hover:text-terracotta">Visit Us</Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nana's Recyclables · Made with love in Claremont, NH
      </div>
    </footer>
  );
}
