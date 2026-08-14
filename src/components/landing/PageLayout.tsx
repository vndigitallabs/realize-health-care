import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileCtaBar, WhatsAppFab } from "./FloatingCtas";

/** Shared chrome for every page: header, floating CTAs and compact footer. */
export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="top">{children}</main>
      <Footer />
      <WhatsAppFab />
      <MobileCtaBar />
    </div>
  );
}
