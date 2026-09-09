import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-cream">
      <SiteHeader />
      <div className="flex flex-1 items-center justify-center px-6 py-24 text-center">
        <div className="max-w-md">
          <p className="script text-6xl text-gold">404</p>
          <h1 className="mt-4 text-3xl">This page wandered off.</h1>
          <p className="mt-3 text-cream/60">Let's get you back to something useful.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink"
          >
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-cream">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-cream/60">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-cream/30 px-5 py-2.5 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Patience R. — Create. Solve. Automate. Inspire." },
      {
        name: "description",
        content:
          "Patience R. helps ideas turn into impact — smart solutions, digital tools, and resources that save time, grow businesses, and inspire people.",
      },
      { property: "og:title", content: "Patience R. — Create. Solve. Automate. Inspire." },
      {
        property: "og:description",
        content:
          "Smart solutions, digital tools, and resources built to help people and businesses thrive.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Patience R." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Patience R. — Create. Solve. Automate. Inspire." },
      { name: "description", content: "Patience R. Hub is a personal brand site showcasing smart solutions, digital tools, and resources." },
      { property: "og:description", content: "Patience R. Hub is a personal brand site showcasing smart solutions, digital tools, and resources." },
      { name: "twitter:description", content: "Patience R. Hub is a personal brand site showcasing smart solutions, digital tools, and resources." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c6fffa7-0ccb-4389-bd94-9b7598dee908/id-preview-e091c1f9--03ce3a04-1cff-4850-b391-6abb3aae6618.lovable.app-1782990357449.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c6fffa7-0ccb-4389-bd94-9b7598dee908/id-preview-e091c1f9--03ce3a04-1cff-4850-b391-6abb3aae6618.lovable.app-1782990357449.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Dancing+Script:wght@500..700&family=Inter:wght@300..700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
