import React from "react";
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
