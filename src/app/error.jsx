"use client";

import React from "react";
import styles from "./pages.module.css";

const error = () => {
  return (
    <main className={styles.error}>
      <h1>Sorry, some error occurred.</h1>
    </main>
  );
};

export default error;
