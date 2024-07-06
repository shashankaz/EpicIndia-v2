import React from "react";
import styles from "./travel.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import Card from "@/components/card/Card";

const destinations = [
  {
    title: "Taj Mahal, Agra",
    description: "Iconic symbol of love with exquisite Mughal architecture.",
    image: "/travel-1.jpg",
    slug: "/destinations/taj-mahal-agra",
  },
  {
    title: "Goa",
    description:
      "Beautiful beaches, vibrant nightlife, and Portuguese heritage.",
    image: "/travel-2.jpg",
    slug: "/destinations/goa",
  },
  {
    title: "Jaipur, Rajasthan",
    description:
      "Pink City with majestic forts, ornate palaces, and colorful markets.",
    image: "/travel-3.jpg",
    slug: "/destinations/jaipur-rajasthan",
  },
];

const Travel = () => {
  return (
    <div className={styles.container}>
      <h1>Popular Destinations</h1>
      <p>Ready to go? Check out these hot travel destinations.</p>
      <div className={styles.wrapper}>
        {destinations.map((destination, index) => (
          <div key={index} className={styles.card}>
            <Card
              title={destination.title}
              description={destination.description}
              image={destination.image}
              slug={destination.slug}
            />
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <Link href={"/destinations"}>
          <button>
            Show all Destinations
            <div className={styles.arrow}>
              <FaArrowRight />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Travel;
