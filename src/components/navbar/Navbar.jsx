"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <div className={styles.logo}>
          <h1>Visit</h1>
          <span>
            <Image
              src="/India.svg"
              width={40}
              height={40}
              alt="Flag of India"
            />
          </span>
          <h1>India</h1>
        </div>
      </Link>
      <div className={styles.navMobile} onClick={toggleMenu}>
        {menuOpen ? <RxCross1 size={25} /> : <CiMenuFries size={25} />}
      </div>
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <ul>
            <Link href="/destinations">
              <li onClick={toggleMenu}>Popular Destinations</li>
            </Link>
            <Link href="/activities">
              <li onClick={toggleMenu}>Activities</li>
            </Link>
            <Link href="/book-your-trip">
              <li onClick={toggleMenu}>Book Trip</li>
            </Link>
            <Link href="/blogs">
              <li onClick={toggleMenu}>Blogs</li>
            </Link>
            {user ? (
              <Link href="/profile">
                <li onClick={toggleMenu}>Profile</li>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <li onClick={toggleMenu}>Login</li>
                </Link>
                <Link href="/register">
                  <li onClick={toggleMenu}>Register</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
