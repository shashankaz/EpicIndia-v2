"use client";

import React, { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import Logout from "@/components/logout/Logout";
import styles from "./style.module.css";
import Link from "next/link";

const Main = () => {
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
    <div className={styles.wrapper}>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName || user.email}</h2>
          <Logout />
        </div>
      ) : (
        <div>
          <h2>To access your profile</h2>
          <p>
            Please <Link href={"/login"}>login</Link> or{" "}
            <Link href={"/register"}>register</Link> to continue.
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;
