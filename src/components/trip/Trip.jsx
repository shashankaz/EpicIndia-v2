import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./trip.module.css";

const Trip = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Ready, steady... go!</h1>
        <p>
          Experience the very best of India with great travel deals from our
          partners.
        </p>
        <Link href={"/book-your-trip"}>
          <div className={styles.wrapper}>
            <Image
              className={styles.taj}
              src="/taj.jpg"
              width={1000}
              height={1000}
              alt="Picture of The Taj Mahal"
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </div>
        </Link>
        <Link href={"/book-your-trip"}>
          <button>
            Book your Trip to India
            <div className={styles.arrow}>
              <FaArrowRight />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trip;
