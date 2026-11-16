import type { ReactElement } from "react";
import { SiteNav } from "@/components/layout/SiteNav/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection/WorkSection";
import { BarberSection } from "@/components/sections/BarberSection/BarberSection";
import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";
import { InsideSection } from "@/components/sections/InsideSection/InsideSection";
import { BookingSection } from "@/components/sections/BookingSection/BookingSection";

const Home = (): ReactElement => {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <WorkSection />
        <BarberSection />
        <ServicesSection />
        <InsideSection />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
