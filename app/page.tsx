import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FloatingPhone } from "@/components/layout/FloatingPhone";
import { Hero } from "@/components/sections/Hero";
import { EngagementsBand } from "@/components/sections/EngagementsBand";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Realisations } from "@/components/sections/Realisations";
import { WhyUs } from "@/components/sections/WhyUs";
import { ZonesBand } from "@/components/sections/ZonesBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactBand } from "@/components/sections/ContactBand";
import { CandidatureForm } from "@/components/sections/CandidatureForm";
import { SITE } from "@/lib/constants";
import { webPageJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <EngagementsBand />
        <About />
        <Services />
        <Realisations />
        <WhyUs />
        <ZonesBand />
        <Testimonials />
        <BlogPreview />
        <ContactBand />
        <CandidatureForm />
      </main>
      <Footer />
      <FloatingPhone />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              title: `${SITE.tagline} | ${SITE.name}`,
              description: SITE.description,
              path: "/",
              speakableSelectors: ["h1", ".hero-sub", "[data-speakable]"],
            }),
          ),
        }}
      />
    </>
  );
}
