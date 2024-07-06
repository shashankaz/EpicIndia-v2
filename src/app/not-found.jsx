import React from "react";
import Link from "next/link";
import styles from "./pages.module.css";

const notFound = () => {
  return (
    <main className={styles.notFound}>
      <h1>404 - Page not found</h1>
      <h4>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </h4>
      <Link href={"/"}>
        <button>Go to homepage</button>
      </Link>
    </main>
  );
};

export default notFound;
