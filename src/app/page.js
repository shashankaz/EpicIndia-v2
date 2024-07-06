"use client";

import Hero from "@/components/hero/hero";
import Activities from "@/components/activities/Activities";
import Trip from "@/components/trip/Trip";
import UsefulLinks from "@/components/usefulLinks/UsefulLinks";
import Travel from "@/components/travel/Travel";
import Map from "@/components/map/Map";
import Blog from "@/components/blog/Blog";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Fade cascade damping={0.01} triggerOnce>
        <Travel />
        <UsefulLinks />
        <Map />
        <Activities />
        <Trip />
        <Blog />
        <FAQ />
        <Contact />
      </Fade>
    </>
  );
}
