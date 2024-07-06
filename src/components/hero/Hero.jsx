import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <video src="./cover.mp4" autoPlay loop muted></video>
      </div>
      <div className={styles.heading}>
        <h1>MAKE LIFE AN ADVENTURE</h1>
        <h3>Welcome to India</h3>
      </div>
    </div>
  );
};

export default Hero;

<Image
  className={styles.image}
  src="/cover.jpg"
  width={1000}
  height={1000}
  alt="Picture of India Gate in New Delhi, India"
  quality={100}
/>;
