"use client";

import Hero from "@/components/hero/Hero";
import Activities from "@/components/activities/Activities";
import Trip from "@/components/trip/Trip";
import UsefulLinks from "@/components/usefulLinks/UsefulLinks";
import Travel from "@/components/travel/Travel";
import Map from "@/components/map/Map";
import Blog from "@/components/blog/Blog";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
