import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./activities.module.css";

const Activities = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Activities</h1>
        <p>Discover the best things to do throughout the year.</p>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Link href={"/activities"}>
              <Image
                className={styles.image1}
                src="/activity-1.jpg"
                width={400}
                height={500}
                alt="Picture of activity 1"
                quality={100}
              />
            </Link>
          </div>
          <div className={styles.image}>
            <Link href={"/activities"}>
              <Image
                className={styles.image2}
                src="/activity-2.jpg"
                width={400}
                height={500}
                alt="Picture of activity 1"
                quality={100}
              />
            </Link>
          </div>
          <div className={styles.image}>
            <Link href={"/activities"}>
              <Image
                className={styles.image3}
                src="/activity-3.jpg"
                width={400}
                height={500}
                alt="Picture of activity 1"
                quality={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
