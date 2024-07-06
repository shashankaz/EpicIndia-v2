import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({ slug, image, title, description }) => {
  return (
    <div className={styles.container}>
      <Link href={slug} passHref>
        <div className={styles.wrapper}>
          <Image
            className={styles.image}
            src={image}
            width={1000}
            height={1000}
            alt={title}
            quality={100}
          />
        </div>
        <h1 className={styles.title}>{title}</h1>
      </Link>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
