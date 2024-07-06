import React from "react";
import Link from "next/link";
import styles from "./usefulLinks.module.css";

import places from "@/data/places_to_go.json";
import things from "@/data/things_to_do.json";

const UsefulLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.verticalBox}>
          <ul>
            <li style={{ fontSize: 24, fontWeight: 700 }}>Places to go</li>
            {places.data.map((place) => (
              <li key={place.id}>
                <Link href={`/places-to-go/${place.slug}`}>
                  {place.destination}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.verticalBox}>
          <ul>
            <li style={{ fontSize: 24, fontWeight: 700 }}>Things to do</li>
            {things.data.map((thing) => (
              <li key={thing.id}>
                <Link href={`/things-to-do/${thing.slug}`}>
                  {thing.activity}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
