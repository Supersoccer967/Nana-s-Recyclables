import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the aisles</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page wandered off. Let's get you back home.
        </p>
        <Link to="/" className="inline-flex mt-6 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nana's Recyclables — Cozy Secondhand Shop in Claremont, NH" },
      { name: "description", content: "Nana's Recyclables is a beloved secondhand shop in Claremont, NH. Books, movies, vinyl, vintage finds & more. Stop in and discover your next treasure." },
      { name: "author", content: "Nana's Recyclables" },
      { property: "og:title", content: "Nana's Recyclables — Cozy Secondhand Shop in Claremont, NH" },
      { property: "og:description", content: "Nana's Recyclables is a beloved secondhand shop in Claremont, NH. Books, movies, vinyl, vintage finds & more. Stop in and discover your next treasure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nana's Recyclables — Cozy Secondhand Shop in Claremont, NH" },
      { name: "twitter:description", content: "Nana's Recyclables is a beloved secondhand shop in Claremont, NH. Books, movies, vinyl, vintage finds & more. Stop in and discover your next treasure." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/7qXnyy0KGnMJMN4tz1Ccu7XyAut1/social-images/social-1777587071422-1000003782.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/7qXnyy0KGnMJMN4tz1Ccu7XyAut1/social-images/social-1777587071422-1000003782.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Nunito:wght@400;500;600;700&family=Caveat:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1"><Outlet /></main>
      <SiteFooter />
    </div>
  );
}
