import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
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
      <div className={styles.navMobile}>
        <CiMenuFries size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
